// Import the Iran boundary as the AOI
var Ir = table;
Map.centerObject(Ir);

Map.addLayer(Ir, {
  color: 'black'
}, 'Iran');

var viz = {
  palette: ['black', 'blue', 'purple', 'cyan', 'green', 'yellow', 'red']
};

var AOI = Ir;

// Define the geometry (table) and time interval
var timeInterval = 7; // 7-day intervals

// Define the date range
var startDate = ee.Date('2019-01-01');
var endDate = ee.Date('2025-01-01');

// Define the multiplication factor
var multiplicationFactor = 1000; // Scale factor

// Function to calculate 7-day average for a given ImageCollection
function calculateIntervalAverage(collection, bandName, startDate) {
  var endDate = ee.Date(startDate).advance(7, 'day'); // Advance by 7 days
  var intervalCollection = collection.filterDate(startDate, endDate);

  // Calculate median for the time period
  var intervalAverage = intervalCollection.median()
    .select(bandName)
    .rename(bandName)
    .set('system:time_start', startDate)
    .clip(AOI);

  return intervalAverage;
}

// Function to create the combined image with multiple bands for the given start date
function createCombinedImage(dateMillis) {
  var date = ee.Date(dateMillis);

  var O3_avg = calculateIntervalAverage(O3, 'O3_column_number_density', date).multiply(multiplicationFactor);
  var NO2_avg = calculateIntervalAverage(NO2, 'tropospheric_NO2_column_number_density', date).multiply(multiplicationFactor);
  var SO2_avg = calculateIntervalAverage(SO2, 'SO2_column_number_density', date).multiply(multiplicationFactor);
  var CO_avg = calculateIntervalAverage(CO, 'CO_column_number_density', date).multiply(multiplicationFactor);
  var HCHO_avg = calculateIntervalAverage(HCHO, 'tropospheric_HCHO_column_number_density', date).multiply(multiplicationFactor);

  var combinedImage = O3_avg.addBands([NO2_avg, SO2_avg, CO_avg, HCHO_avg])
                            .set('system:time_start', date);

  return combinedImage;
}

// Define ImageCollections for each dataset
var O3 = ee.ImageCollection('COPERNICUS/S5P/OFFL/L3_O3')
            .select('O3_column_number_density')
            .filterBounds(AOI);
            
var NO2 = ee.ImageCollection('COPERNICUS/S5P/OFFL/L3_NO2')
            .select('tropospheric_NO2_column_number_density')
            .filterBounds(AOI);
            
var SO2 = ee.ImageCollection('COPERNICUS/S5P/OFFL/L3_SO2')
            .select('SO2_column_number_density')
            .filterBounds(AOI);
            
var CO = ee.ImageCollection('COPERNICUS/S5P/OFFL/L3_CO')
            .select('CO_column_number_density')
            .filterBounds(AOI);
            
var HCHO = ee.ImageCollection('COPERNICUS/S5P/OFFL/L3_HCHO')
            .select('tropospheric_HCHO_column_number_density')
            .filterBounds(AOI);

// Generate list of intervals between the start and end date
var dateList = ee.List.sequence(startDate.millis(), endDate.millis(), 1000 * 60 * 60 * 24 * 7); // Step size for 7-day intervals

// Create the new collection with combined images
var combinedCollection = ee.ImageCollection.fromImages(
  dateList.map(createCombinedImage)
);

// Print the new collection
print('Combined Collection (7-day)', combinedCollection);

// Optionally, display the first image of the new collection on the map
Map.centerObject(AOI);
Map.addLayer(combinedCollection.first(), {}, 'First 7-day Average');

// Generate a chart with the new collection
var chart = ui.Chart.image.series(
  combinedCollection,
  AOI,
  ee.Reducer.median(),
  500,
  'system:time_start'
)
.setChartType('ScatterChart')
.setOptions({
  title: 'Temporal pattern (7-day averages)',
  hAxis: {title: 'Time Series'},
  vAxis: {title: 'Intensity'},
  lineWidth: 1,
  pointSize: 2,
  series: {
    0: {color: 'ff0000'}
  }
});

print(chart);

// Convert the image collection to a single multi-band image
var multiBandImage = combinedCollection.toBands();

// Export the multi-band image to Google Drive
Export.image.toDrive({
  image: multiBandImage,
  description: 'WEEKLY',
  folder: 'GEE_Exports',
  fileNamePrefix: 'WEEKLY',
  region: AOI,
  scale: 500,
  maxPixels: 1e13
});

// Function to reduce an image to regional statistics
function reduceToRegion(image) {
  var date = ee.Date(image.get('system:time_start'));
  var stats = image.reduceRegion({
    reducer: ee.Reducer.mean(),
    geometry: AOI,
    scale: 500,
    maxPixels: 1e13
  });
  return ee.Feature(null, stats).set('date', date.format('YYYY-MM-dd'));
}

// Reduce the image collection to a FeatureCollection
var timeSeries = combinedCollection.map(reduceToRegion);

// Export the FeatureCollection as a CSV file
Export.table.toDrive({
  collection: timeSeries,
  description: 'WeeklyTimeSeriesExport',
  folder: 'GEE_Exports',
  fileNamePrefix: 'Weekly_TimeSeries_Data',
  fileFormat: 'CSV'
});

print(timeSeries);
