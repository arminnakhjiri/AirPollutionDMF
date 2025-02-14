// Import the geometry and center map
Map.centerObject(geometry);

// Define time interval
var timeInterval = 1; // Monthly intervals

// Define the date range 
var startDate = ee.Date('2019-01-01');
var endDate = ee.Date('2024-12-31');

// Define the multiplication factor
var multiplicationFactor = 1;

// Function to calculate interval average for a given ImageCollection
function calculateIntervalAverage(collection, bandName, startDate, AOI) {
  var endDate = ee.Date(startDate).advance(1, 'month'); // Advance by one month
  var intervalCollection = collection.filterDate(startDate, endDate);

  var intervalAverage = intervalCollection.mean()
                   .select(bandName)
                   .rename(bandName)
                   .set('system:time_start', startDate)
                   .clip(AOI);
  
  return intervalAverage;
}

// Function to create the combined image with multiple bands for the given start date
function createCombinedImage(dateMillis, AOI) {
  var date = ee.Date(dateMillis);

  var NO2_avg = calculateIntervalAverage(NO2, 'tropospheric_NO2_column_number_density', date, AOI).multiply(multiplicationFactor);
  var SO2_avg = calculateIntervalAverage(SO2, 'SO2_column_number_density', date, AOI).multiply(multiplicationFactor);
  var CO_avg = calculateIntervalAverage(CO, 'CO_column_number_density', date, AOI).multiply(multiplicationFactor);
  var HCHO_avg = calculateIntervalAverage(HCHO, 'tropospheric_HCHO_column_number_density', date, AOI).multiply(multiplicationFactor);

  var combinedImage = NO2_avg.addBands([SO2_avg, CO_avg, HCHO_avg])
                            .set('system:time_start', date);

  return combinedImage;
}

// Define ImageCollections for each dataset
var NO2 = ee.ImageCollection('COPERNICUS/S5P/OFFL/L3_NO2')
            .select('tropospheric_NO2_column_number_density');
            
var SO2 = ee.ImageCollection('COPERNICUS/S5P/OFFL/L3_SO2')
            .select('SO2_column_number_density');
            
var CO = ee.ImageCollection('COPERNICUS/S5P/OFFL/L3_CO')
            .select('CO_column_number_density');
            
var HCHO = ee.ImageCollection('COPERNICUS/S5P/OFFL/L3_HCHO')
            .select('tropospheric_HCHO_column_number_density');

// Generate list of intervals between the start and end date
var dateList = ee.List.sequence(startDate.millis(), endDate.millis(), 1000 * 60 * 60 * 24 * 30); // Step size for monthly intervals

// Create the new collection with combined images for the AOI
var combinedCollection = ee.ImageCollection.fromImages(
  dateList.map(function(dateMillis) {
    return createCombinedImage(dateMillis, geometry);
  })
);

print('Combined Collection', combinedCollection);

// Add a time band to combinedCollection
var combinedWithTime = combinedCollection.map(function(img) {
  var time = ee.Image.constant(
    ee.Date(img.get('system:time_start')).difference(startDate, 'month')
  ).rename('time').float();
  return img.addBands(time);
});

// Function to forecast the next month using Exponential Smoothing
function forecastNextMonth(collection, bandName, alpha) {
  var sortedCollection = collection.sort('system:time_start');
  var initialImage = sortedCollection.first().select(bandName).unmask(0);

  var esmImage = ee.Image(sortedCollection.iterate(function(img, prev) {
    img = ee.Image(img).unmask(0); // Fill masked values with 0
    prev = ee.Image(prev);
    var esm = img.select(bandName).multiply(alpha).add(prev.multiply(1 - alpha));
    return esm.rename(bandName);
  }, initialImage));

  var lastDate = ee.Date(sortedCollection.aggregate_max('system:time_start'));
  var nextDate = lastDate.advance(1, 'month');
 
  return esmImage.set('system:time_start', nextDate.millis());
}

// Forecast the next month for each pollutant 
var alpha = 0.12; // Smoothing factor

var NO2_forecast = forecastNextMonth(combinedWithTime, 'tropospheric_NO2_column_number_density', alpha).clip(geometry);
var SO2_forecast = forecastNextMonth(combinedWithTime, 'SO2_column_number_density', alpha).clip(geometry);
var CO_forecast = forecastNextMonth(combinedWithTime, 'CO_column_number_density', alpha).clip(geometry);
var HCHO_forecast = forecastNextMonth(combinedWithTime, 'tropospheric_HCHO_column_number_density', alpha).clip(geometry);

// Combine forecasts into a single image
var forecastedImage = ee.Image(NO2_forecast)
  .addBands([SO2_forecast, CO_forecast, HCHO_forecast])
  .rename(['NO2_forecast', 'SO2_forecast', 'CO_forecast', 'HCHO_forecast']);

// Visualize the forecasted image
Map.addLayer(forecastedImage, {}, 'Forecasted Pollutants');
print('Forecasted Image', forecastedImage);

Export.image.toDrive({
  image: forecastedImage,
  description: 'Forecasted_Monthly_Pollutants',
  folder: 'EarthEngineExports',
  region: geometry,
  scale: 1000,
  crs: 'EPSG:4326',
  maxPixels: 1e13
});
