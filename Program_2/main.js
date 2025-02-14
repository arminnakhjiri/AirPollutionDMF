var geometry1 = 
    /* color: #d63000 */
    /* shown: false */
    /* displayProperties: [
      {
        "type": "rectangle"
      }
    ] */
    ee.Geometry.Polygon(
        [[[51.46478102710205, 30.0956616702644],
          [51.46478102710205, 29.23171522965745],
          [52.147306661867674, 29.23171522965745],
          [52.147306661867674, 30.0956616702644]]], null, false),
    aoi = ee.FeatureCollection("projects/iranserenity/assets/mashhad"),
    table = ee.FeatureCollection("projects/iranserenity/assets/CombinedCyclePowerPlants_ir"),
    table2 = ee.FeatureCollection("projects/iranserenity/assets/Copper_refinery_main"),
    table3 = ee.FeatureCollection("projects/iranserenity/assets/DieselPowerPlants_ir"),
    table4 = ee.FeatureCollection("projects/iranserenity/assets/GasPowerPlants_ir"),
    table5 = ee.FeatureCollection("projects/iranserenity/assets/Gas_refinery"),
    table6 = ee.FeatureCollection("projects/iranserenity/assets/Oil_refinery"),
    table7 = ee.FeatureCollection("projects/iranserenity/assets/Oil_refinery_main"),
    table8 = ee.FeatureCollection("projects/iranserenity/assets/Petrochemical_Plant"),
    table9 = ee.FeatureCollection("projects/iranserenity/assets/Pumping_station"),
    table10 = ee.FeatureCollection("projects/iranserenity/assets/SteamPowerPlants_ir"),
    table11 = ee.FeatureCollection("projects/iranserenity/assets/ThermalPowerPlants_ir"),
    table12 = ee.FeatureCollection("projects/iranserenity/assets/cement_plants_main"),
    table13 = ee.FeatureCollection("projects/iranserenity/assets/oil_storage"),
    V = 
    /* color: #00d613 */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([59.82083766649353, 36.24794368217679]),
            {
              "LC": 0,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([59.78238551805603, 36.319898813878254]),
            {
              "LC": 0,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([59.72470729539978, 36.288080687941914]),
            {
              "LC": 0,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([59.72127406786072, 36.27950140677154]),
            {
              "LC": 0,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([59.700674702626344, 36.247666803618124]),
            {
              "LC": 0,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([59.687285115224, 36.247666803618124]),
            {
              "LC": 0,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([59.674925496083375, 36.246559279573695]),
            {
              "LC": 0,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([59.673208882313844, 36.24489796407807]),
            {
              "LC": 0,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([59.552359272938844, 36.35253348160724]),
            {
              "LC": 0,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([59.61518733690369, 36.37326874746665]),
            {
              "LC": 0,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([59.60969417284119, 36.246559279573695]),
            {
              "LC": 0,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([59.703421284657594, 36.205015799391276]),
            {
              "LC": 0,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([59.699644734364625, 36.208617107638716]),
            {
              "LC": 0,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([59.81843440721619, 36.247389924078476]),
            {
              "LC": 0,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([59.77723567674744, 36.28752721439106]),
            {
              "LC": 0,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([59.77277248094666, 36.28116198640666]),
            {
              "LC": 0,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([59.66153590868103, 36.33677098479869]),
            {
              "LC": 0,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([59.65157954881775, 36.291954892877776]),
            {
              "LC": 0,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([59.619993855458375, 36.37382161225578]),
            {
              "LC": 0,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([59.61518733690369, 36.37354518035239]),
            {
              "LC": 0,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([59.58600490282166, 36.40284149485308]),
            {
              "LC": 0,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([59.55991237352478, 36.40809155424955]),
            {
              "LC": 0,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([59.56403224657166, 36.40311782261264]),
            {
              "LC": 0,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([59.843496968251344, 36.23299083629877]),
            {
              "LC": 0,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([59.807791401845094, 36.26289366750357]),
            {
              "LC": 0,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([59.805546891871735, 36.26145871503126]),
            {
              "LC": 0,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([59.803830278102204, 36.262842853649175]),
            {
              "LC": 0,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([59.80048288125162, 36.26498822003211]),
            {
              "LC": 0,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([59.797307145777985, 36.26429617279905]),
            {
              "LC": 0,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([59.79327310341959, 36.253430227361704]),
            {
              "LC": 0,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([59.77996934670572, 36.25308415331033]),
            {
              "LC": 0,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([59.795590532008454, 36.231763036466624]),
            {
              "LC": 0,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([59.81249917763834, 36.23404772001838]),
            {
              "LC": 0,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([59.81249917763834, 36.236263106981]),
            {
              "LC": 0,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([59.79773629922037, 36.22864745131379]),
            {
              "LC": 0,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([59.78786577004556, 36.22837050440399]),
            {
              "LC": 0,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([59.79318727273111, 36.226985755143524]),
            {
              "LC": 0,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([59.78529084939127, 36.228924397242814]),
            {
              "LC": 0,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([59.785548341456696, 36.233424631124834]),
            {
              "LC": 0,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([59.78323091286783, 36.22802431938754]),
            {
              "LC": 0,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([59.75121606606607, 36.24013988311251]),
            {
              "LC": 0,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([59.860993516627595, 36.23716309000335]),
            {
              "LC": 0,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([59.85206712502603, 36.22490858527988]),
            {
              "LC": 0,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([59.85189546364908, 36.22298315973539]),
            {
              "LC": 0,
              "system:index": "43"
            }),
        ee.Feature(
            ee.Geometry.Point([59.86039270180826, 36.2184130793586]),
            {
              "LC": 0,
              "system:index": "44"
            }),
        ee.Feature(
            ee.Geometry.Point([59.85781778115396, 36.218066850268826]),
            {
              "LC": 0,
              "system:index": "45"
            }),
        ee.Feature(
            ee.Geometry.Point([59.89498246926431, 36.228522293139044]),
            {
              "LC": 0,
              "system:index": "46"
            }),
        ee.Feature(
            ee.Geometry.Point([59.89309419411783, 36.22831458271623]),
            {
              "LC": 0,
              "system:index": "47"
            }),
        ee.Feature(
            ee.Geometry.Point([59.89515413064127, 36.236622569301645]),
            {
              "LC": 0,
              "system:index": "48"
            }),
        ee.Feature(
            ee.Geometry.Point([59.89515413064127, 36.24077623155835]),
            {
              "LC": 0,
              "system:index": "49"
            }),
        ee.Feature(
            ee.Geometry.Point([59.88279451150064, 36.24555267030745]),
            {
              "LC": 0,
              "system:index": "50"
            }),
        ee.Feature(
            ee.Geometry.Point([59.87884629983072, 36.24416822534889]),
            {
              "LC": 0,
              "system:index": "51"
            }),
        ee.Feature(
            ee.Geometry.Point([59.88150705117349, 36.26015707039419]),
            {
              "LC": 0,
              "system:index": "52"
            }),
        ee.Feature(
            ee.Geometry.Point([59.79885209817056, 36.24589877771523]),
            {
              "LC": 0,
              "system:index": "53"
            }),
        ee.Feature(
            ee.Geometry.Point([59.819022309962556, 36.264240276811975]),
            {
              "LC": 0,
              "system:index": "54"
            }),
        ee.Feature(
            ee.Geometry.Point([59.820567262355134, 36.26693922827425]),
            {
              "LC": 0,
              "system:index": "55"
            }),
        ee.Feature(
            ee.Geometry.Point([59.822026384059235, 36.26901528131312]),
            {
              "LC": 0,
              "system:index": "56"
            }),
        ee.Feature(
            ee.Geometry.Point([59.84880555886392, 36.25731946226217]),
            {
              "LC": 0,
              "system:index": "57"
            }),
        ee.Feature(
            ee.Geometry.Point([59.827519548121735, 36.266524011043394]),
            {
              "LC": 0,
              "system:index": "58"
            }),
        ee.Feature(
            ee.Geometry.Point([59.82820619362955, 36.26949968574724]),
            {
              "LC": 0,
              "system:index": "59"
            }),
        ee.Feature(
            ee.Geometry.Point([59.8269187333024, 36.26984568707468]),
            {
              "LC": 0,
              "system:index": "60"
            }),
        ee.Feature(
            ee.Geometry.Point([59.820567262355134, 36.2727520376955]),
            {
              "LC": 0,
              "system:index": "61"
            }),
        ee.Feature(
            ee.Geometry.Point([59.82219804543619, 36.27538149980021]),
            {
              "LC": 0,
              "system:index": "62"
            }),
        ee.Feature(
            ee.Geometry.Point([59.81344331521158, 36.27863360673851]),
            {
              "LC": 0,
              "system:index": "63"
            }),
        ee.Feature(
            ee.Geometry.Point([59.81001008767252, 36.2767653916525]),
            {
              "LC": 0,
              "system:index": "64"
            }),
        ee.Feature(
            ee.Geometry.Point([59.811297547999665, 36.27932552690545]),
            {
              "LC": 0,
              "system:index": "65"
            }),
        ee.Feature(
            ee.Geometry.Point([59.81001008767252, 36.27946391020284]),
            {
              "LC": 0,
              "system:index": "66"
            }),
        ee.Feature(
            ee.Geometry.Point([59.803830278102204, 36.27323641894791]),
            {
              "LC": 0,
              "system:index": "67"
            }),
        ee.Feature(
            ee.Geometry.Point([59.802542817775056, 36.27358240371694]),
            {
              "LC": 0,
              "system:index": "68"
            }),
        ee.Feature(
            ee.Geometry.Point([59.80486024636392, 36.276281032294754]),
            {
              "LC": 0,
              "system:index": "69"
            }),
        ee.Feature(
            ee.Geometry.Point([59.80340112465982, 36.27704216707908]),
            {
              "LC": 0,
              "system:index": "70"
            }),
        ee.Feature(
            ee.Geometry.Point([59.80177034157877, 36.276419420989335]),
            {
              "LC": 0,
              "system:index": "71"
            }),
        ee.Feature(
            ee.Geometry.Point([59.800053727809235, 36.277388134982374]),
            {
              "LC": 0,
              "system:index": "72"
            }),
        ee.Feature(
            ee.Geometry.Point([59.7954188706315, 36.27967148468893]),
            {
              "LC": 0,
              "system:index": "73"
            }),
        ee.Feature(
            ee.Geometry.Point([59.79018319863443, 36.281401250606436]),
            {
              "LC": 0,
              "system:index": "74"
            }),
        ee.Feature(
            ee.Geometry.Point([59.79275811928873, 36.282785035740126]),
            {
              "LC": 0,
              "system:index": "75"
            }),
        ee.Feature(
            ee.Geometry.Point([59.78529084939127, 36.259811026140724]),
            {
              "LC": 0,
              "system:index": "76"
            }),
        ee.Feature(
            ee.Geometry.Point([59.78572000283365, 36.26251013066256]),
            {
              "LC": 0,
              "system:index": "77"
            }),
        ee.Feature(
            ee.Geometry.Point([59.77301706093912, 36.26043390469322]),
            {
              "LC": 0,
              "system:index": "78"
            }),
        ee.Feature(
            ee.Geometry.Point([59.77327455300455, 36.26015707039419]),
            {
              "LC": 0,
              "system:index": "79"
            }),
        ee.Feature(
            ee.Geometry.Point([59.72177613991861, 36.240430101466465]),
            {
              "LC": 0,
              "system:index": "80"
            }),
        ee.Feature(
            ee.Geometry.Point([59.72074617165689, 36.23966860986942]),
            {
              "LC": 0,
              "system:index": "81"
            }),
        ee.Feature(
            ee.Geometry.Point([59.72057451027994, 36.238560972486184]),
            {
              "LC": 0,
              "system:index": "82"
            }),
        ee.Feature(
            ee.Geometry.Point([59.73679651040201, 36.255519950038654]),
            {
              "LC": 0,
              "system:index": "83"
            }),
        ee.Feature(
            ee.Geometry.Point([59.74005807656412, 36.25725025102004]),
            {
              "LC": 0,
              "system:index": "84"
            }),
        ee.Feature(
            ee.Geometry.Point([59.738169801417634, 36.25648892330967]),
            {
              "LC": 0,
              "system:index": "85"
            }),
        ee.Feature(
            ee.Geometry.Point([59.72478021401529, 36.25725025102004]),
            {
              "LC": 0,
              "system:index": "86"
            }),
        ee.Feature(
            ee.Geometry.Point([59.72229112404947, 36.259257352146534]),
            {
              "LC": 0,
              "system:index": "87"
            }),
        ee.Feature(
            ee.Geometry.Point([59.72375024575357, 36.257942360682016]),
            {
              "LC": 0,
              "system:index": "88"
            }),
        ee.Feature(
            ee.Geometry.Point([59.71284974831705, 36.26375583975343]),
            {
              "LC": 0,
              "system:index": "89"
            }),
        ee.Feature(
            ee.Geometry.Point([59.7115622879899, 36.26354822295135]),
            {
              "LC": 0,
              "system:index": "90"
            }),
        ee.Feature(
            ee.Geometry.Point([59.72486604470377, 36.280847729683515]),
            {
              "LC": 0,
              "system:index": "91"
            }),
        ee.Feature(
            ee.Geometry.Point([59.726668489161774, 36.280017440939126]),
            {
              "LC": 0,
              "system:index": "92"
            }),
        ee.Feature(
            ee.Geometry.Point([59.72057451027994, 36.27794168043836]),
            {
              "LC": 0,
              "system:index": "93"
            }),
        ee.Feature(
            ee.Geometry.Point([59.733878266993806, 36.274689544674544]),
            {
              "LC": 0,
              "system:index": "94"
            }),
        ee.Feature(
            ee.Geometry.Point([59.734908235255524, 36.27365160048676]),
            {
              "LC": 0,
              "system:index": "95"
            }),
        ee.Feature(
            ee.Geometry.Point([59.73568071145181, 36.27254444481023]),
            {
              "LC": 0,
              "system:index": "96"
            }),
        ee.Feature(
            ee.Geometry.Point([59.79341736076746, 36.324495330566464]),
            {
              "LC": 0,
              "system:index": "97"
            }),
        ee.Feature(
            ee.Geometry.Point([59.7793411278573, 36.31813311915192]),
            {
              "LC": 0,
              "system:index": "98"
            }),
        ee.Feature(
            ee.Geometry.Point([59.77487793205652, 36.315366778286844]),
            {
              "LC": 0,
              "system:index": "99"
            }),
        ee.Feature(
            ee.Geometry.Point([59.772989656910035, 36.315366778286844]),
            {
              "LC": 0,
              "system:index": "100"
            }),
        ee.Feature(
            ee.Geometry.Point([59.79736557243738, 36.3004268412957]),
            {
              "LC": 0,
              "system:index": "101"
            }),
        ee.Feature(
            ee.Geometry.Point([59.79891052482996, 36.29821327386137]),
            {
              "LC": 0,
              "system:index": "102"
            }),
        ee.Feature(
            ee.Geometry.Point([59.792730715259644, 36.294339379697206]),
            {
              "LC": 0,
              "system:index": "103"
            }),
        ee.Feature(
            ee.Geometry.Point([59.816934969410035, 36.30457711091654]),
            {
              "LC": 0,
              "system:index": "104"
            }),
        ee.Feature(
            ee.Geometry.Point([59.81624832390222, 36.29516951607]),
            {
              "LC": 0,
              "system:index": "105"
            }),
        ee.Feature(
            ee.Geometry.Point([59.82483139274988, 36.30513046351245]),
            {
              "LC": 0,
              "system:index": "106"
            }),
        ee.Feature(
            ee.Geometry.Point([59.82637634514246, 36.30485378770529]),
            {
              "LC": 0,
              "system:index": "107"
            }),
        ee.Feature(
            ee.Geometry.Point([59.82706299065027, 36.30236366126944]),
            {
              "LC": 0,
              "system:index": "108"
            }),
        ee.Feature(
            ee.Geometry.Point([59.833929445728394, 36.324633633742266]),
            {
              "LC": 0,
              "system:index": "109"
            }),
        ee.Feature(
            ee.Geometry.Point([59.85967865227136, 36.274413456926574]),
            {
              "LC": 0,
              "system:index": "110"
            }),
        ee.Feature(
            ee.Geometry.Point([59.843370821460816, 36.26500222507932]),
            {
              "LC": 0,
              "system:index": "111"
            }),
        ee.Feature(
            ee.Geometry.Point([59.86002197502527, 36.272891128678815]),
            {
              "LC": 0,
              "system:index": "112"
            }),
        ee.Feature(
            ee.Geometry.Point([59.83478775261316, 36.25766621372184]),
            {
              "LC": 0,
              "system:index": "113"
            }),
        ee.Feature(
            ee.Geometry.Point([59.821913149341675, 36.25988093126312]),
            {
              "LC": 0,
              "system:index": "114"
            }),
        ee.Feature(
            ee.Geometry.Point([59.81830826042566, 36.260434600837385]),
            {
              "LC": 0,
              "system:index": "115"
            }),
        ee.Feature(
            ee.Geometry.Point([59.77110138176355, 36.30333205322]),
            {
              "LC": 0,
              "system:index": "116"
            }),
        ee.Feature(
            ee.Geometry.Point([59.76715317009363, 36.30457711091654]),
            {
              "LC": 0,
              "system:index": "117"
            }),
        ee.Feature(
            ee.Geometry.Point([59.76818313835535, 36.30858882827829]),
            {
              "LC": 0,
              "system:index": "118"
            }),
        ee.Feature(
            ee.Geometry.Point([59.77419128654871, 36.306928832332254]),
            {
              "LC": 0,
              "system:index": "119"
            }),
        ee.Feature(
            ee.Geometry.Point([59.76904144524011, 36.3080355002228]),
            {
              "LC": 0,
              "system:index": "120"
            }),
        ee.Feature(
            ee.Geometry.Point([59.774706270679566, 36.30623715692499]),
            {
              "LC": 0,
              "system:index": "121"
            }),
        ee.Feature(
            ee.Geometry.Point([59.7599433922616, 36.324495330566464]),
            {
              "LC": 0,
              "system:index": "122"
            }),
        ee.Feature(
            ee.Geometry.Point([59.75771179436121, 36.326016652000355]),
            {
              "LC": 0,
              "system:index": "123"
            }),
        ee.Feature(
            ee.Geometry.Point([59.73762741325769, 36.29558458094389]),
            {
              "LC": 0,
              "system:index": "124"
            }),
        ee.Feature(
            ee.Geometry.Point([59.67614240467883, 36.309581528788414]),
            {
              "LC": 0,
              "system:index": "125"
            }),
        ee.Feature(
            ee.Geometry.Point([59.67629260838366, 36.30935674260128]),
            {
              "LC": 0,
              "system:index": "126"
            }),
        ee.Feature(
            ee.Geometry.Point([59.67517680943347, 36.30831925949377]),
            {
              "LC": 0,
              "system:index": "127"
            }),
        ee.Feature(
            ee.Geometry.Point([59.676185320023066, 36.30805988655997]),
            {
              "LC": 0,
              "system:index": "128"
            }),
        ee.Feature(
            ee.Geometry.Point([59.67629260838366, 36.30717801213162]),
            {
              "LC": 0,
              "system:index": "129"
            }),
        ee.Feature(
            ee.Geometry.Point([59.6763355237279, 36.30790426238557]),
            {
              "LC": 0,
              "system:index": "130"
            }),
        ee.Feature(
            ee.Geometry.Point([59.67762298405505, 36.3077832211463]),
            {
              "LC": 0,
              "system:index": "131"
            }),
        ee.Feature(
            ee.Geometry.Point([59.65354747593737, 36.312088715411974]),
            {
              "LC": 0,
              "system:index": "132"
            }),
        ee.Feature(
            ee.Geometry.Point([59.653011034134394, 36.31227891248641]),
            {
              "LC": 0,
              "system:index": "133"
            }),
        ee.Feature(
            ee.Geometry.Point([59.653011034134394, 36.31134521330536]),
            {
              "LC": 0,
              "system:index": "134"
            }),
        ee.Feature(
            ee.Geometry.Point([59.65341872990466, 36.31117230482251]),
            {
              "LC": 0,
              "system:index": "135"
            }),
        ee.Feature(
            ee.Geometry.Point([59.65369767964221, 36.3109821050485]),
            {
              "LC": 0,
              "system:index": "136"
            }),
        ee.Feature(
            ee.Geometry.Point([59.55844511200342, 36.40876701153212]),
            {
              "LC": 0,
              "system:index": "137"
            }),
        ee.Feature(
            ee.Geometry.Point([59.55846656967554, 36.40838708823361]),
            {
              "LC": 0,
              "system:index": "138"
            }),
        ee.Feature(
            ee.Geometry.Point([59.56183542419824, 36.407938085576404]),
            {
              "LC": 0,
              "system:index": "139"
            }),
        ee.Feature(
            ee.Geometry.Point([59.561298982395265, 36.408248933846245]),
            {
              "LC": 0,
              "system:index": "140"
            }),
        ee.Feature(
            ee.Geometry.Point([59.56011881042871, 36.40975134961721]),
            {
              "LC": 0,
              "system:index": "141"
            }),
        ee.Feature(
            ee.Geometry.Point([59.5588742654458, 36.409613197655894]),
            {
              "LC": 0,
              "system:index": "142"
            }),
        ee.Feature(
            ee.Geometry.Point([59.56323017288599, 36.40652198327538]),
            {
              "LC": 0,
              "system:index": "143"
            }),
        ee.Feature(
            ee.Geometry.Point([59.5623504083291, 36.40729911578258]),
            {
              "LC": 0,
              "system:index": "144"
            }),
        ee.Feature(
            ee.Geometry.Point([59.56333746124658, 36.40893970332634]),
            {
              "LC": 0,
              "system:index": "145"
            }),
        ee.Feature(
            ee.Geometry.Point([59.56016172577295, 36.4052094751689]),
            {
              "LC": 0,
              "system:index": "146"
            }),
        ee.Feature(
            ee.Geometry.Point([59.55947508026514, 36.40474318405671]),
            {
              "LC": 0,
              "system:index": "147"
            }),
        ee.Feature(
            ee.Geometry.Point([59.5588742654458, 36.404397781428784]),
            {
              "LC": 0,
              "system:index": "148"
            }),
        ee.Feature(
            ee.Geometry.Point([59.559024469150636, 36.4041387284502]),
            {
              "LC": 0,
              "system:index": "149"
            }),
        ee.Feature(
            ee.Geometry.Point([59.55883135010156, 36.40405237726543]),
            {
              "LC": 0,
              "system:index": "150"
            }),
        ee.Feature(
            ee.Geometry.Point([59.562007085575196, 36.4033788347307]),
            {
              "LC": 0,
              "system:index": "151"
            }),
        ee.Feature(
            ee.Geometry.Point([59.56267227341089, 36.40401783676466]),
            {
              "LC": 0,
              "system:index": "152"
            }),
        ee.Feature(
            ee.Geometry.Point([59.5639168183938, 36.40441505159664]),
            {
              "LC": 0,
              "system:index": "153"
            }),
        ee.Feature(
            ee.Geometry.Point([59.56488241363916, 36.40470864386303]),
            {
              "LC": 0,
              "system:index": "154"
            }),
        ee.Feature(
            ee.Geometry.Point([59.564517633213136, 36.40458775306415]),
            {
              "LC": 0,
              "system:index": "155"
            }),
        ee.Feature(
            ee.Geometry.Point([59.564775125278565, 36.4044841322297]),
            {
              "LC": 0,
              "system:index": "156"
            }),
        ee.Feature(
            ee.Geometry.Point([59.569517270816895, 36.40617658855484]),
            {
              "LC": 0,
              "system:index": "157"
            }),
        ee.Feature(
            ee.Geometry.Point([59.569517270816895, 36.40596935098555]),
            {
              "LC": 0,
              "system:index": "158"
            }),
        ee.Feature(
            ee.Geometry.Point([59.558552400364015, 36.41287697208147]),
            {
              "LC": 0,
              "system:index": "159"
            }),
        ee.Feature(
            ee.Geometry.Point([59.56048359085474, 36.41313599592439]),
            {
              "LC": 0,
              "system:index": "160"
            }),
        ee.Feature(
            ee.Geometry.Point([59.56063379455957, 36.41393033032337]),
            {
              "LC": 0,
              "system:index": "161"
            }),
        ee.Feature(
            ee.Geometry.Point([59.56891645599756, 36.40992403922337]),
            {
              "LC": 0,
              "system:index": "162"
            }),
        ee.Feature(
            ee.Geometry.Point([59.56838001419458, 36.40995857709853]),
            {
              "LC": 0,
              "system:index": "163"
            }),
        ee.Feature(
            ee.Geometry.Point([59.572499887241456, 36.410735675230264]),
            {
              "LC": 0,
              "system:index": "164"
            }),
        ee.Feature(
            ee.Geometry.Point([59.57164158035669, 36.40983769446828]),
            {
              "LC": 0,
              "system:index": "165"
            }),
        ee.Feature(
            ee.Geometry.Point([59.57359422851953, 36.411754525447826]),
            {
              "LC": 0,
              "system:index": "166"
            }),
        ee.Feature(
            ee.Geometry.Point([59.57734932114038, 36.41151276558849]),
            {
              "LC": 0,
              "system:index": "167"
            }),
        ee.Feature(
            ee.Geometry.Point([59.581233159793946, 36.41444837012029]),
            {
              "LC": 0,
              "system:index": "168"
            }),
        ee.Feature(
            ee.Geometry.Point([59.58146919418726, 36.41417208265855]),
            {
              "LC": 0,
              "system:index": "169"
            }),
        ee.Feature(
            ee.Geometry.Point([59.58211292435083, 36.4143447624373]),
            {
              "LC": 0,
              "system:index": "170"
            }),
        ee.Feature(
            ee.Geometry.Point([59.58764900375757, 36.415035477713346]),
            {
              "LC": 0,
              "system:index": "171"
            }),
        ee.Feature(
            ee.Geometry.Point([59.59331382919702, 36.414517441832146]),
            {
              "LC": 0,
              "system:index": "172"
            }),
        ee.Feature(
            ee.Geometry.Point([59.59234823395166, 36.41298058172231]),
            {
              "LC": 0,
              "system:index": "173"
            }),
        ee.Feature(
            ee.Geometry.Point([59.59185470749292, 36.40622839786082]),
            {
              "LC": 0,
              "system:index": "174"
            }),
        ee.Feature(
            ee.Geometry.Point([59.58670486618433, 36.40474318405671]),
            {
              "LC": 0,
              "system:index": "175"
            }),
        ee.Feature(
            ee.Geometry.Point([59.58694090057764, 36.404328700718935]),
            {
              "LC": 0,
              "system:index": "176"
            }),
        ee.Feature(
            ee.Geometry.Point([59.58758463074121, 36.40324067143783]),
            {
              "LC": 0,
              "system:index": "177"
            }),
        ee.Feature(
            ee.Geometry.Point([59.590974942936036, 36.401945378620105]),
            {
              "LC": 0,
              "system:index": "178"
            }),
        ee.Feature(
            ee.Geometry.Point([59.592283860935304, 36.40363789024268]),
            {
              "LC": 0,
              "system:index": "179"
            }),
        ee.Feature(
            ee.Geometry.Point([59.593528405918214, 36.402981614601586]),
            {
              "LC": 0,
              "system:index": "180"
            }),
        ee.Feature(
            ee.Geometry.Point([59.594730035556886, 36.4023598746709]),
            {
              "LC": 0,
              "system:index": "181"
            }),
        ee.Feature(
            ee.Geometry.Point([59.594021932376954, 36.40242895713107]),
            {
              "LC": 0,
              "system:index": "182"
            }),
        ee.Feature(
            ee.Geometry.Point([59.59728349853906, 36.4029298031307]),
            {
              "LC": 0,
              "system:index": "183"
            }),
        ee.Feature(
            ee.Geometry.Point([59.59691871811304, 36.403447916284996]),
            {
              "LC": 0,
              "system:index": "184"
            }),
        ee.Feature(
            ee.Geometry.Point([59.59760536362085, 36.4022735215093]),
            {
              "LC": 0,
              "system:index": "185"
            }),
        ee.Feature(
            ee.Geometry.Point([59.597712651981446, 36.39823208621444]),
            {
              "LC": 0,
              "system:index": "186"
            }),
        ee.Feature(
            ee.Geometry.Point([59.596983091129395, 36.397921197871085]),
            {
              "LC": 0,
              "system:index": "187"
            }),
        ee.Feature(
            ee.Geometry.Point([59.59434379745874, 36.39923382908348]),
            {
              "LC": 0,
              "system:index": "188"
            }),
        ee.Feature(
            ee.Geometry.Point([59.600523607029054, 36.41417208265855]),
            {
              "LC": 0,
              "system:index": "189"
            }),
        ee.Feature(
            ee.Geometry.Point([59.58539594818506, 36.40113365078289]),
            {
              "LC": 0,
              "system:index": "190"
            }),
        ee.Feature(
            ee.Geometry.Point([59.58455909897241, 36.40185902499788]),
            {
              "LC": 0,
              "system:index": "191"
            }),
        ee.Feature(
            ee.Geometry.Point([59.58410848785791, 36.40123727608531]),
            {
              "LC": 0,
              "system:index": "192"
            }),
        ee.Feature(
            ee.Geometry.Point([59.58346475769434, 36.40071914819148]),
            {
              "LC": 0,
              "system:index": "193"
            }),
        ee.Feature(
            ee.Geometry.Point([59.58430160690698, 36.400822774046595]),
            {
              "LC": 0,
              "system:index": "194"
            }),
        ee.Feature(
            ee.Geometry.Point([59.58805669952783, 36.400736419176916]),
            {
              "LC": 0,
              "system:index": "195"
            }),
        ee.Feature(
            ee.Geometry.Point([59.57458128143701, 36.40078823211025]),
            {
              "LC": 0,
              "system:index": "196"
            }),
        ee.Feature(
            ee.Geometry.Point([59.570740358127686, 36.399406542066224]),
            {
              "LC": 0,
              "system:index": "197"
            }),
        ee.Feature(
            ee.Geometry.Point([59.570525781406495, 36.399251100399006]),
            {
              "LC": 0,
              "system:index": "198"
            }),
        ee.Feature(
            ee.Geometry.Point([59.57219947983179, 36.39693670991288]),
            {
              "LC": 0,
              "system:index": "199"
            }),
        ee.Feature(
            ee.Geometry.Point([59.561277524723145, 36.39724760219427]),
            {
              "LC": 0,
              "system:index": "200"
            }),
        ee.Feature(
            ee.Geometry.Point([59.558573858036134, 36.39766212330165]),
            {
              "LC": 0,
              "system:index": "201"
            }),
        ee.Feature(
            ee.Geometry.Point([59.55823053528223, 36.39793846947833]),
            {
              "LC": 0,
              "system:index": "202"
            }),
        ee.Feature(
            ee.Geometry.Point([59.558058873905274, 36.39900930163208]),
            {
              "LC": 0,
              "system:index": "203"
            }),
        ee.Feature(
            ee.Geometry.Point([59.561298982395265, 36.39923382908348]),
            {
              "LC": 0,
              "system:index": "204"
            }),
        ee.Feature(
            ee.Geometry.Point([59.56170667816553, 36.398957487512725]),
            {
              "LC": 0,
              "system:index": "205"
            }),
        ee.Feature(
            ee.Geometry.Point([59.54788872412403, 36.41014422104464]),
            {
              "LC": 0,
              "system:index": "206"
            }),
        ee.Feature(
            ee.Geometry.Point([59.54930493048389, 36.40952253842798]),
            {
              "LC": 0,
              "system:index": "207"
            }),
        ee.Feature(
            ee.Geometry.Point([59.55153652838428, 36.40865908209601]),
            {
              "LC": 0,
              "system:index": "208"
            }),
        ee.Feature(
            ee.Geometry.Point([59.55115029028614, 36.40845185114835]),
            {
              "LC": 0,
              "system:index": "209"
            }),
        ee.Feature(
            ee.Geometry.Point([59.518706290042, 36.399091343714375]),
            {
              "LC": 0,
              "system:index": "210"
            }),
        ee.Feature(
            ee.Geometry.Point([59.51909252814014, 36.40047303936228]),
            {
              "LC": 0,
              "system:index": "211"
            }),
        ee.Feature(
            ee.Geometry.Point([59.51608845404346, 36.399644024921365]),
            {
              "LC": 0,
              "system:index": "212"
            }),
        ee.Feature(
            ee.Geometry.Point([59.516989676272466, 36.40047303936228]),
            {
              "LC": 0,
              "system:index": "213"
            }),
        ee.Feature(
            ee.Geometry.Point([59.51587387732227, 36.401612919778664]),
            {
              "LC": 0,
              "system:index": "214"
            }),
        ee.Feature(
            ee.Geometry.Point([59.529220549380376, 36.40116387797423]),
            {
              "LC": 0,
              "system:index": "215"
            }),
        ee.Feature(
            ee.Geometry.Point([59.52326136806353, 36.39227301392015]),
            {
              "LC": 0,
              "system:index": "216"
            }),
        ee.Feature(
            ee.Geometry.Point([59.523143350866874, 36.39216937666541]),
            {
              "LC": 0,
              "system:index": "217"
            }),
        ee.Feature(
            ee.Geometry.Point([59.52325063922747, 36.39180664518566]),
            {
              "LC": 0,
              "system:index": "218"
            }),
        ee.Feature(
            ee.Geometry.Point([59.52323454597338, 36.3917332350374]),
            {
              "LC": 0,
              "system:index": "219"
            }),
        ee.Feature(
            ee.Geometry.Point([59.523347198752006, 36.39226869570396]),
            {
              "LC": 0,
              "system:index": "220"
            }),
        ee.Feature(
            ee.Geometry.Point([59.52369588592394, 36.392536424654125]),
            {
              "LC": 0,
              "system:index": "221"
            }),
        ee.Feature(
            ee.Geometry.Point([59.523604690817436, 36.39253210645256]),
            {
              "LC": 0,
              "system:index": "222"
            }),
        ee.Feature(
            ee.Geometry.Point([59.526850163725456, 36.392208240652124]),
            {
              "LC": 0,
              "system:index": "223"
            }),
        ee.Feature(
            ee.Geometry.Point([59.52699500301226, 36.39117186102343]),
            {
              "LC": 0,
              "system:index": "224"
            }),
        ee.Feature(
            ee.Geometry.Point([59.52690917232378, 36.39117617930056]),
            {
              "LC": 0,
              "system:index": "225"
            }),
        ee.Feature(
            ee.Geometry.Point([59.528749167708, 36.38999296239882]),
            {
              "LC": 0,
              "system:index": "226"
            }),
        ee.Feature(
            ee.Geometry.Point([59.53130263069018, 36.389293387730206]),
            {
              "LC": 0,
              "system:index": "227"
            }),
        ee.Feature(
            ee.Geometry.Point([59.53119534232958, 36.38946180442946]),
            {
              "LC": 0,
              "system:index": "228"
            }),
        ee.Feature(
            ee.Geometry.Point([59.53050333240374, 36.38902996600746]),
            {
              "LC": 0,
              "system:index": "229"
            }),
        ee.Feature(
            ee.Geometry.Point([59.514216325523655, 36.38337666224928]),
            {
              "LC": 0,
              "system:index": "230"
            }),
        ee.Feature(
            ee.Geometry.Point([59.514007113220494, 36.385363243568214]),
            {
              "LC": 0,
              "system:index": "231"
            }),
        ee.Feature(
            ee.Geometry.Point([59.513953469040196, 36.38518618077176]),
            {
              "LC": 0,
              "system:index": "232"
            }),
        ee.Feature(
            ee.Geometry.Point([59.51383545184354, 36.385091171300125]),
            {
              "LC": 0,
              "system:index": "233"
            }),
        ee.Feature(
            ee.Geometry.Point([59.513985655548375, 36.38467658315629]),
            {
              "LC": 0,
              "system:index": "234"
            }),
        ee.Feature(
            ee.Geometry.Point([59.5136476972125, 36.38262520304228]),
            {
              "LC": 0,
              "system:index": "235"
            }),
        ee.Feature(
            ee.Geometry.Point([59.514489910843174, 36.38195579361012]),
            {
              "LC": 0,
              "system:index": "236"
            }),
        ee.Feature(
            ee.Geometry.Point([59.51454355502347, 36.38194715603139]),
            {
              "LC": 0,
              "system:index": "237"
            }),
        ee.Feature(
            ee.Geometry.Point([59.51504781031827, 36.38171394104339]),
            {
              "LC": 0,
              "system:index": "238"
            }),
        ee.Feature(
            ee.Geometry.Point([59.51331510329465, 36.381428899552716]),
            {
              "LC": 0,
              "system:index": "239"
            }),
        ee.Feature(
            ee.Geometry.Point([59.51313807749967, 36.381320929018244]),
            {
              "LC": 0,
              "system:index": "240"
            }),
        ee.Feature(
            ee.Geometry.Point([59.51690926337461, 36.3823574399609]),
            {
              "LC": 0,
              "system:index": "241"
            }),
        ee.Feature(
            ee.Geometry.Point([59.519484184028904, 36.383868993654396]),
            {
              "LC": 0,
              "system:index": "242"
            }),
        ee.Feature(
            ee.Geometry.Point([59.51950564170102, 36.38378261994913]),
            {
              "LC": 0,
              "system:index": "243"
            }),
        ee.Feature(
            ee.Geometry.Point([59.519500277282994, 36.38370056484028]),
            {
              "LC": 0,
              "system:index": "244"
            }),
        ee.Feature(
            ee.Geometry.Point([59.519688031914036, 36.38370056484028]),
            {
              "LC": 0,
              "system:index": "245"
            }),
        ee.Feature(
            ee.Geometry.Point([59.36576792774513, 35.7870071197353]),
            {
              "LC": 0,
              "system:index": "246"
            }),
        ee.Feature(
            ee.Geometry.Point([59.36336466846779, 35.78839961852941]),
            {
              "LC": 0,
              "system:index": "247"
            }),
        ee.Feature(
            ee.Geometry.Point([59.36336466846779, 35.792437727063586]),
            {
              "LC": 0,
              "system:index": "248"
            }),
        ee.Feature(
            ee.Geometry.Point([59.413239092425876, 35.85064599554317]),
            {
              "LC": 0,
              "system:index": "249"
            }),
        ee.Feature(
            ee.Geometry.Point([59.4125953622623, 35.850228575893134]),
            {
              "LC": 0,
              "system:index": "250"
            }),
        ee.Feature(
            ee.Geometry.Point([59.407252401904636, 35.841949298883165]),
            {
              "LC": 0,
              "system:index": "251"
            }),
        ee.Feature(
            ee.Geometry.Point([59.41040667970615, 35.83333862983095]),
            {
              "LC": 0,
              "system:index": "252"
            }),
        ee.Feature(
            ee.Geometry.Point([59.640103725212285, 36.017067088264795]),
            {
              "LC": 0,
              "system:index": "253"
            }),
        ee.Feature(
            ee.Geometry.Point([59.64006080986805, 36.01701068168771]),
            {
              "LC": 0,
              "system:index": "254"
            }),
        ee.Feature(
            ee.Geometry.Point([59.64090838791675, 36.01704539343224]),
            {
              "LC": 0,
              "system:index": "255"
            }),
        ee.Feature(
            ee.Geometry.Point([59.63948681713886, 36.01683278375709]),
            {
              "LC": 0,
              "system:index": "256"
            }),
        ee.Feature(
            ee.Geometry.Point([59.639578012245366, 36.0166028175444]),
            {
              "LC": 0,
              "system:index": "257"
            }),
        ee.Feature(
            ee.Geometry.Point([59.639588741081425, 36.016420579691726]),
            {
              "LC": 0,
              "system:index": "258"
            }),
        ee.Feature(
            ee.Geometry.Point([59.63880553604908, 36.01613854408904]),
            {
              "LC": 0,
              "system:index": "259"
            }),
        ee.Feature(
            ee.Geometry.Point([59.63864460350818, 36.01636417265193]),
            {
              "LC": 0,
              "system:index": "260"
            }),
        ee.Feature(
            ee.Geometry.Point([59.63854267956562, 36.0166028175444]),
            {
              "LC": 0,
              "system:index": "261"
            }),
        ee.Feature(
            ee.Geometry.Point([59.638328102844426, 36.01475872459357]),
            {
              "LC": 0,
              "system:index": "262"
            }),
        ee.Feature(
            ee.Geometry.Point([59.638092068451115, 36.014945305371654]),
            {
              "LC": 0,
              "system:index": "263"
            }),
        ee.Feature(
            ee.Geometry.Point([59.63721766831226, 36.01599101737175]),
            {
              "LC": 0,
              "system:index": "264"
            }),
        ee.Feature(
            ee.Geometry.Point([59.6434028423006, 36.01725366357831]),
            {
              "LC": 0,
              "system:index": "265"
            }),
        ee.Feature(
            ee.Geometry.Point([59.64319899441547, 36.01713651168886]),
            {
              "LC": 0,
              "system:index": "266"
            }),
        ee.Feature(
            ee.Geometry.Point([59.64341357113666, 36.01772226939461]),
            {
              "LC": 0,
              "system:index": "267"
            }),
        ee.Feature(
            ee.Geometry.Point([59.64355304600544, 36.01822558364929]),
            {
              "LC": 0,
              "system:index": "268"
            }),
        ee.Feature(
            ee.Geometry.Point([59.64372470738239, 36.0183123616442]),
            {
              "LC": 0,
              "system:index": "269"
            }),
        ee.Feature(
            ee.Geometry.Point([59.64467957379169, 36.01862910051464]),
            {
              "LC": 0,
              "system:index": "270"
            }),
        ee.Feature(
            ee.Geometry.Point([59.644368437545964, 36.01848591734733]),
            {
              "LC": 0,
              "system:index": "271"
            }),
        ee.Feature(
            ee.Geometry.Point([59.64448645474262, 36.018229922551306]),
            {
              "LC": 0,
              "system:index": "272"
            }),
        ee.Feature(
            ee.Geometry.Point([59.64590802552051, 36.01900224330411]),
            {
              "LC": 0,
              "system:index": "273"
            }),
        ee.Feature(
            ee.Geometry.Point([59.64629426361866, 36.01913240897778]),
            {
              "LC": 0,
              "system:index": "274"
            }),
        ee.Feature(
            ee.Geometry.Point([59.45500840694919, 36.44997376963028]),
            {
              "LC": 0,
              "system:index": "275"
            }),
        ee.Feature(
            ee.Geometry.Point([59.45491452963367, 36.44897915376718]),
            {
              "LC": 0,
              "system:index": "276"
            }),
        ee.Feature(
            ee.Geometry.Point([59.45697178394809, 36.4491949066644]),
            {
              "LC": 0,
              "system:index": "277"
            }),
        ee.Feature(
            ee.Geometry.Point([59.45694227964893, 36.448731037193554]),
            {
              "LC": 0,
              "system:index": "278"
            }),
        ee.Feature(
            ee.Geometry.Point([59.457532365632204, 36.449566000244]),
            {
              "LC": 0,
              "system:index": "279"
            }),
        ee.Feature(
            ee.Geometry.Point([59.457290966820864, 36.449591890427484]),
            {
              "LC": 0,
              "system:index": "280"
            }),
        ee.Feature(
            ee.Geometry.Point([59.45706029684558, 36.449587575397494]),
            {
              "LC": 0,
              "system:index": "281"
            }),
        ee.Feature(
            ee.Geometry.Point([59.45881714375034, 36.449652300822024]),
            {
              "LC": 0,
              "system:index": "282"
            }),
        ee.Feature(
            ee.Geometry.Point([59.45928921253696, 36.44966093087454]),
            {
              "LC": 0,
              "system:index": "283"
            }),
        ee.Feature(
            ee.Geometry.Point([59.45835312159076, 36.45014852728253]),
            {
              "LC": 0,
              "system:index": "284"
            }),
        ee.Feature(
            ee.Geometry.Point([59.83138922743392, 36.710188694854445]),
            {
              "LC": 0,
              "system:index": "285"
            }),
        ee.Feature(
            ee.Geometry.Point([59.83163599066329, 36.70997367007565]),
            {
              "LC": 0,
              "system:index": "286"
            }),
        ee.Feature(
            ee.Geometry.Point([59.83279470495772, 36.709922064039226]),
            {
              "LC": 0,
              "system:index": "287"
            }),
        ee.Feature(
            ee.Geometry.Point([59.832923450990435, 36.70957802291052]),
            {
              "LC": 0,
              "system:index": "288"
            }),
        ee.Feature(
            ee.Geometry.Point([59.83313802771163, 36.70919957588985]),
            {
              "LC": 0,
              "system:index": "289"
            }),
        ee.Feature(
            ee.Geometry.Point([59.83326677374434, 36.708812525872645]),
            {
              "LC": 0,
              "system:index": "290"
            }),
        ee.Feature(
            ee.Geometry.Point([59.83354572348189, 36.708726514492945]),
            {
              "LC": 0,
              "system:index": "291"
            }),
        ee.Feature(
            ee.Geometry.Point([59.833685198350665, 36.707178293196044]),
            {
              "LC": 0,
              "system:index": "292"
            }),
        ee.Feature(
            ee.Geometry.Point([59.833427706285235, 36.70759975652781]),
            {
              "LC": 0,
              "system:index": "293"
            }),
        ee.Feature(
            ee.Geometry.Point([59.832665958925006, 36.70839106919229]),
            {
              "LC": 0,
              "system:index": "294"
            }),
        ee.Feature(
            ee.Geometry.Point([59.83230117849898, 36.7090619583293]),
            {
              "LC": 0,
              "system:index": "295"
            }),
        ee.Feature(
            ee.Geometry.Point([59.83477953962874, 36.70736752191664]),
            {
              "LC": 0,
              "system:index": "296"
            }),
        ee.Feature(
            ee.Geometry.Point([59.835176506562945, 36.70689444924145]),
            {
              "LC": 0,
              "system:index": "297"
            }),
        ee.Feature(
            ee.Geometry.Point([59.83584169439864, 36.706541793170814]),
            {
              "LC": 0,
              "system:index": "298"
            }),
        ee.Feature(
            ee.Geometry.Point([59.8367536454637, 36.70710948263665]),
            {
              "LC": 0,
              "system:index": "299"
            }),
        ee.Feature(
            ee.Geometry.Point([59.83653906874251, 36.70736752191664]),
            {
              "LC": 0,
              "system:index": "300"
            }),
        ee.Feature(
            ee.Geometry.Point([59.836700001283404, 36.70553542426603]),
            {
              "LC": 0,
              "system:index": "301"
            }),
        ee.Feature(
            ee.Geometry.Point([59.83621720366072, 36.70619773690814]),
            {
              "LC": 0,
              "system:index": "302"
            }),
        ee.Feature(
            ee.Geometry.Point([59.837161341233966, 36.704933316911024]),
            {
              "LC": 0,
              "system:index": "303"
            }),
        ee.Feature(
            ee.Geometry.Point([59.83726862959456, 36.704632261464575]),
            {
              "LC": 0,
              "system:index": "304"
            }),
        ee.Feature(
            ee.Geometry.Point([59.83375884879949, 36.70300009569771]),
            {
              "LC": 0,
              "system:index": "305"
            }),
        ee.Feature(
            ee.Geometry.Point([59.8340485273731, 36.70365382847864]),
            {
              "LC": 0,
              "system:index": "306"
            }),
        ee.Feature(
            ee.Geometry.Point([59.83385540832403, 36.7035506078829]),
            {
              "LC": 0,
              "system:index": "307"
            }),
        ee.Feature(
            ee.Geometry.Point([59.834617155684256, 36.70348179407538]),
            {
              "LC": 0,
              "system:index": "308"
            }),
        ee.Feature(
            ee.Geometry.Point([59.83395196784856, 36.70282805983121]),
            {
              "LC": 0,
              "system:index": "309"
            }),
        ee.Feature(
            ee.Geometry.Point([59.83652688850286, 36.703473192345086]),
            {
              "LC": 0,
              "system:index": "310"
            }),
        ee.Feature(
            ee.Geometry.Point([59.83573295463445, 36.7036280233427]),
            {
              "LC": 0,
              "system:index": "311"
            }),
        ee.Feature(
            ee.Geometry.Point([59.83654834617498, 36.70314632588149]),
            {
              "LC": 0,
              "system:index": "312"
            }),
        ee.Feature(
            ee.Geometry.Point([59.831513178971676, 36.70210573159102]),
            {
              "LC": 0,
              "system:index": "313"
            }),
        ee.Feature(
            ee.Geometry.Point([59.82891680064526, 36.70158961683078]),
            {
              "LC": 0,
              "system:index": "314"
            }),
        ee.Feature(
            ee.Geometry.Point([59.83784319224682, 36.70133155815109]),
            {
              "LC": 0,
              "system:index": "315"
            }),
        ee.Feature(
            ee.Geometry.Point([59.83868004145947, 36.70158961683078]),
            {
              "LC": 0,
              "system:index": "316"
            }),
        ee.Feature(
            ee.Geometry.Point([59.84123350444165, 36.69928426192461]),
            {
              "LC": 0,
              "system:index": "317"
            }),
        ee.Feature(
            ee.Geometry.Point([59.8409545547041, 36.696531508785654]),
            {
              "LC": 0,
              "system:index": "318"
            }),
        ee.Feature(
            ee.Geometry.Point([59.840503943589596, 36.696290638196125]),
            {
              "LC": 0,
              "system:index": "319"
            }),
        ee.Feature(
            ee.Geometry.Point([59.82654636425908, 36.715033524486785]),
            {
              "LC": 0,
              "system:index": "320"
            }),
        ee.Feature(
            ee.Geometry.Point([59.82628887219365, 36.71475831001673]),
            {
              "LC": 0,
              "system:index": "321"
            }),
        ee.Feature(
            ee.Geometry.Point([59.82624595684941, 36.71432828543353]),
            {
              "LC": 0,
              "system:index": "322"
            }),
        ee.Feature(
            ee.Geometry.Point([59.826653652619676, 36.714104671699054]),
            {
              "LC": 0,
              "system:index": "323"
            }),
        ee.Feature(
            ee.Geometry.Point([59.826675110291795, 36.71338222287805]),
            {
              "LC": 0,
              "system:index": "324"
            }),
        ee.Feature(
            ee.Geometry.Point([59.826932602357225, 36.71296939193025]),
            {
              "LC": 0,
              "system:index": "325"
            }),
        ee.Feature(
            ee.Geometry.Point([59.82654636425908, 36.71272857285299]),
            {
              "LC": 0,
              "system:index": "326"
            }),
        ee.Feature(
            ee.Geometry.Point([59.82725446743901, 36.71235014134938]),
            {
              "LC": 0,
              "system:index": "327"
            }),
        ee.Feature(
            ee.Geometry.Point([59.82779090924199, 36.713554235118266]),
            {
              "LC": 0,
              "system:index": "328"
            }),
        ee.Feature(
            ee.Geometry.Point([59.82575243039067, 36.71649558482779]),
            {
              "LC": 0,
              "system:index": "329"
            }),
        ee.Feature(
            ee.Geometry.Point([59.82622449917729, 36.71625477680334]),
            {
              "LC": 0,
              "system:index": "330"
            }),
        ee.Feature(
            ee.Geometry.Point([59.83025854153569, 36.71121483565517]),
            {
              "LC": 0,
              "system:index": "331"
            }),
        ee.Feature(
            ee.Geometry.Point([59.82950752301152, 36.71161047439234]),
            {
              "LC": 0,
              "system:index": "332"
            }),
        ee.Feature(
            ee.Geometry.Point([59.36686609006257, 35.79190411923249]),
            {
              "LC": 0,
              "system:index": "333"
            }),
        ee.Feature(
            ee.Geometry.Point([59.36691973424287, 35.791795335939966]),
            {
              "LC": 0,
              "system:index": "334"
            }),
        ee.Feature(
            ee.Geometry.Point([59.368040897611095, 35.78864490718609]),
            {
              "LC": 0,
              "system:index": "335"
            }),
        ee.Feature(
            ee.Geometry.Point([59.3686899921927, 35.788523064891635]),
            {
              "LC": 0,
              "system:index": "336"
            }),
        ee.Feature(
            ee.Geometry.Point([59.36963949418397, 35.78828373126944]),
            {
              "LC": 0,
              "system:index": "337"
            }),
        ee.Feature(
            ee.Geometry.Point([59.371565320256664, 35.788327246527075]),
            {
              "LC": 0,
              "system:index": "338"
            }),
        ee.Feature(
            ee.Geometry.Point([59.50687691722254, 35.854475592615245]),
            {
              "LC": 0,
              "system:index": "339"
            }),
        ee.Feature(
            ee.Geometry.Point([59.514054508546394, 35.85406688897074]),
            {
              "LC": 0,
              "system:index": "340"
            }),
        ee.Feature(
            ee.Geometry.Point([59.51418325457911, 35.85368427088346]),
            {
              "LC": 0,
              "system:index": "341"
            }),
        ee.Feature(
            ee.Geometry.Point([59.51420471225123, 35.853049468620284]),
            {
              "LC": 0,
              "system:index": "342"
            }),
        ee.Feature(
            ee.Geometry.Point([59.51417252574305, 35.85241466127461]),
            {
              "LC": 0,
              "system:index": "343"
            }),
        ee.Feature(
            ee.Geometry.Point([59.51444074664454, 35.851058069637475]),
            {
              "LC": 0,
              "system:index": "344"
            }),
        ee.Feature(
            ee.Geometry.Point([59.51434418712, 35.85077979156107]),
            {
              "LC": 0,
              "system:index": "345"
            }),
        ee.Feature(
            ee.Geometry.Point([59.5074455455337, 35.850927626910774]),
            {
              "LC": 0,
              "system:index": "346"
            }),
        ee.Feature(
            ee.Geometry.Point([59.516028614381355, 35.852501621485445]),
            {
              "LC": 0,
              "system:index": "347"
            }),
        ee.Feature(
            ee.Geometry.Point([59.50644776378016, 35.850266713797424]),
            {
              "LC": 0,
              "system:index": "348"
            }),
        ee.Feature(
            ee.Geometry.Point([59.505267591813606, 35.85004930696401]),
            {
              "LC": 0,
              "system:index": "349"
            }),
        ee.Feature(
            ee.Geometry.Point([59.50473115001063, 35.85005800324878]),
            {
              "LC": 0,
              "system:index": "350"
            }),
        ee.Feature(
            ee.Geometry.Point([59.504527302125496, 35.84996234406374]),
            {
              "LC": 0,
              "system:index": "351"
            }),
        ee.Feature(
            ee.Geometry.Point([59.504816980699104, 35.84996234406374]),
            {
              "LC": 0,
              "system:index": "352"
            }),
        ee.Feature(
            ee.Geometry.Point([59.50508520160059, 35.84995364776846]),
            {
              "LC": 0,
              "system:index": "353"
            }),
        ee.Feature(
            ee.Geometry.Point([59.50434491191248, 35.84918837004978]),
            {
              "LC": 0,
              "system:index": "354"
            }),
        ee.Feature(
            ee.Geometry.Point([59.50420543704371, 35.8488926925896]),
            {
              "LC": 0,
              "system:index": "355"
            }),
        ee.Feature(
            ee.Geometry.Point([59.50187727961878, 35.84917097728854]),
            {
              "LC": 0,
              "system:index": "356"
            }),
        ee.Feature(
            ee.Geometry.Point([59.5019523814712, 35.849066620640876]),
            {
              "LC": 0,
              "system:index": "357"
            }),
        ee.Feature(
            ee.Geometry.Point([59.50213477168421, 35.848962263855896]),
            {
              "LC": 0,
              "system:index": "358"
            }),
        ee.Feature(
            ee.Geometry.Point([59.50216695819239, 35.84862310335623]),
            {
              "LC": 0,
              "system:index": "359"
            }),
        ee.Feature(
            ee.Geometry.Point([59.50474187884669, 35.8498318995345]),
            {
              "LC": 0,
              "system:index": "360"
            }),
        ee.Feature(
            ee.Geometry.Point([59.506286831239265, 35.85108415815707]),
            {
              "LC": 0,
              "system:index": "361"
            }),
        ee.Feature(
            ee.Geometry.Point([59.506533594468635, 35.85121460062628]),
            {
              "LC": 0,
              "system:index": "362"
            }),
        ee.Feature(
            ee.Geometry.Point([59.50761720691065, 35.852822079212096]),
            {
              "LC": 0,
              "system:index": "363"
            }),
        ee.Feature(
            ee.Geometry.Point([59.519494028428596, 35.85426559894471]),
            {
              "LC": 0,
              "system:index": "364"
            }),
        ee.Feature(
            ee.Geometry.Point([59.51873228106837, 35.852978606718544]),
            {
              "LC": 0,
              "system:index": "365"
            }),
        ee.Feature(
            ee.Geometry.Point([59.520781488755745, 35.85350905874792]),
            {
              "LC": 0,
              "system:index": "366"
            }),
        ee.Feature(
            ee.Geometry.Point([60.028047606679884, 36.08903331795717]),
            {
              "LC": 0,
              "system:index": "367"
            }),
        ee.Feature(
            ee.Geometry.Point([60.02717857095906, 36.08838306520853]),
            {
              "LC": 0,
              "system:index": "368"
            }),
        ee.Feature(
            ee.Geometry.Point([60.02686743471333, 36.08801025120651]),
            {
              "LC": 0,
              "system:index": "369"
            }),
        ee.Feature(
            ee.Geometry.Point([60.02112750742146, 36.090888676228104]),
            {
              "LC": 0,
              "system:index": "370"
            }),
        ee.Feature(
            ee.Geometry.Point([60.01988296243855, 36.09116610921485]),
            {
              "LC": 0,
              "system:index": "371"
            }),
        ee.Feature(
            ee.Geometry.Point([60.01893882486531, 36.09074128955561]),
            {
              "LC": 0,
              "system:index": "372"
            }),
        ee.Feature(
            ee.Geometry.Point([60.019292876455275, 36.09182500863356]),
            {
              "LC": 0,
              "system:index": "373"
            }),
        ee.Feature(
            ee.Geometry.Point([60.02240423891255, 36.091339504334265]),
            {
              "LC": 0,
              "system:index": "374"
            }),
        ee.Feature(
            ee.Geometry.Point([60.02244715425679, 36.09185101770784]),
            {
              "LC": 0,
              "system:index": "375"
            }),
        ee.Feature(
            ee.Geometry.Point([60.02186779710957, 36.09159959629615]),
            {
              "LC": 0,
              "system:index": "376"
            }),
        ee.Feature(
            ee.Geometry.Point([60.02362732622334, 36.08640626382045]),
            {
              "LC": 0,
              "system:index": "377"
            }),
        ee.Feature(
            ee.Geometry.Point([60.02091293070027, 36.08804493165339]),
            {
              "LC": 0,
              "system:index": "378"
            }),
        ee.Feature(
            ee.Geometry.Point([60.020515963766066, 36.08809695229501]),
            {
              "LC": 0,
              "system:index": "379"
            }),
        ee.Feature(
            ee.Geometry.Point([60.02193217012593, 36.084689527548264]),
            {
              "LC": 0,
              "system:index": "380"
            }),
        ee.Feature(
            ee.Geometry.Point([60.02213601801106, 36.08564327455003]),
            {
              "LC": 0,
              "system:index": "381"
            }),
        ee.Feature(
            ee.Geometry.Point([60.028530404302565, 36.08480224370593]),
            {
              "LC": 0,
              "system:index": "382"
            }),
        ee.Feature(
            ee.Geometry.Point([60.02818708154866, 36.08470686850611]),
            {
              "LC": 0,
              "system:index": "383"
            }),
        ee.Feature(
            ee.Geometry.Point([60.02807979318806, 36.084169297034]),
            {
              "LC": 0,
              "system:index": "384"
            }),
        ee.Feature(
            ee.Geometry.Point([60.014314696523634, 36.084264672886]),
            {
              "LC": 0,
              "system:index": "385"
            }),
        ee.Feature(
            ee.Geometry.Point([60.01397137376973, 36.08409993270534]),
            {
              "LC": 0,
              "system:index": "386"
            }),
        ee.Feature(
            ee.Geometry.Point([60.0116968605251, 36.08828769435306]),
            {
              "LC": 0,
              "system:index": "387"
            }),
        ee.Feature(
            ee.Geometry.Point([60.011020943853346, 36.08842641555912]),
            {
              "LC": 0,
              "system:index": "388"
            }),
        ee.Feature(
            ee.Geometry.Point([60.01168613168904, 36.091686293425504]),
            {
              "LC": 0,
              "system:index": "389"
            }),
        ee.Feature(
            ee.Geometry.Point([60.01146082613179, 36.09152156879796]),
            {
              "LC": 0,
              "system:index": "390"
            }),
        ee.Feature(
            ee.Geometry.Point([60.01125697824666, 36.09145221095676]),
            {
              "LC": 0,
              "system:index": "391"
            }),
        ee.Feature(
            ee.Geometry.Point([60.0291312191219, 36.08617216562723]),
            {
              "LC": 0,
              "system:index": "392"
            }),
        ee.Feature(
            ee.Geometry.Point([60.030783459875074, 36.08604211077424]),
            {
              "LC": 0,
              "system:index": "393"
            })]),
    S = 
    /* color: #0b4a8b */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([59.77411463088305, 36.42249052429632]),
            {
              "LC": 2,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([59.78681757277758, 36.43381629098862]),
            {
              "LC": 2,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([59.79299738234789, 36.40895268473778]),
            {
              "LC": 2,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([59.81908991164477, 36.393754340011434]),
            {
              "LC": 2,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([59.81805994338305, 36.411991996975665]),
            {
              "LC": 2,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([59.82046320266039, 36.41862281092027]),
            {
              "LC": 2,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([59.84346582717211, 36.42387180381702]),
            {
              "LC": 2,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([59.897024176781485, 36.4793788883231]),
            {
              "LC": 2,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([59.9032039863518, 36.49318045054521]),
            {
              "LC": 2,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([59.86578180617602, 36.51939664394303]),
            {
              "LC": 2,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([59.862348578636954, 36.52243162962834]),
            {
              "LC": 2,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([59.85342218703539, 36.510566917786605]),
            {
              "LC": 2,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([59.86166193312914, 36.50835932883904]),
            {
              "LC": 2,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([59.908010504906485, 36.52905300333321]),
            {
              "LC": 2,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([59.93032648391039, 36.5260182774035]),
            {
              "LC": 2,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([59.844839118187735, 36.37247166420229]),
            {
              "LC": 2,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([59.83247949904711, 36.37993508378983]),
            {
              "LC": 2,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([59.78853418654711, 36.396517896503525]),
            {
              "LC": 2,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([59.78098108596117, 36.40093938251383]),
            {
              "LC": 2,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([59.76278498000414, 36.43768324752288]),
            {
              "LC": 2,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([59.754201911156485, 36.447073625523686]),
            {
              "LC": 2,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([59.752485297386954, 36.45149223369825]),
            {
              "LC": 2,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([59.755231879418204, 36.46253765297151]),
            {
              "LC": 2,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([59.75900842971117, 36.4735814990054]),
            {
              "LC": 2,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([59.77926447219164, 36.4710967708242]),
            {
              "LC": 2,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([59.752485297386954, 36.49842439946138]),
            {
              "LC": 2,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([59.73737909621508, 36.50559975411671]),
            {
              "LC": 2,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([59.76827814406664, 36.51084286197806]),
            {
              "LC": 2,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([59.76553156203539, 36.498976373427794]),
            {
              "LC": 2,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([59.787160895531485, 36.512498506467324]),
            {
              "LC": 2,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([59.80947687453539, 36.445692758855216]),
            {
              "LC": 2,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([59.798147223656485, 36.4266342891431]),
            {
              "LC": 2,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([59.79231073684008, 36.42387180381702]),
            {
              "LC": 2,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([59.8043270332268, 36.40453165467334]),
            {
              "LC": 2,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([59.80707361525805, 36.39624154527587]),
            {
              "LC": 2,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([59.79471399611742, 36.388226932266235]),
            {
              "LC": 2,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([59.837629340355704, 36.395136130539505]),
            {
              "LC": 2,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([59.83865930861742, 36.39237252491973]),
            {
              "LC": 2,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([59.87196161574633, 36.4072948279442]),
            {
              "LC": 2,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([59.85651209182055, 36.410610506153844]),
            {
              "LC": 2,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([59.92071344680102, 36.37938226245375]),
            {
              "LC": 2,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([59.91659357375414, 36.36970725299309]),
            {
              "LC": 2,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([59.91384699172289, 36.36168990501153]),
            {
              "LC": 2,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([59.78201105422289, 36.38629224670908]),
            {
              "LC": 2,
              "system:index": "43"
            }),
        ee.Feature(
            ee.Geometry.Point([59.77411463088305, 36.388226932266235]),
            {
              "LC": 2,
              "system:index": "44"
            }),
        ee.Feature(
            ee.Geometry.Point([59.7329159004143, 36.39928135473801]),
            {
              "LC": 2,
              "system:index": "45"
            }),
        ee.Feature(
            ee.Geometry.Point([59.66425134963305, 36.403702683530064]),
            {
              "LC": 2,
              "system:index": "46"
            }),
        ee.Feature(
            ee.Geometry.Point([59.88947107619555, 36.34399352445644]),
            {
              "LC": 2,
              "system:index": "47"
            }),
        ee.Feature(
            ee.Geometry.Point([59.87196161574633, 36.34427006133816]),
            {
              "LC": 2,
              "system:index": "48"
            }),
        ee.Feature(
            ee.Geometry.Point([60.08173181838305, 36.316058241545235]),
            {
              "LC": 2,
              "system:index": "49"
            }),
        ee.Feature(
            ee.Geometry.Point([59.993296365198404, 36.3240802884183]),
            {
              "LC": 2,
              "system:index": "50"
            }),
        ee.Feature(
            ee.Geometry.Point([59.973040322717935, 36.32712291779109]),
            {
              "LC": 2,
              "system:index": "51"
            }),
        ee.Feature(
            ee.Geometry.Point([60.001536111292154, 36.313568472914454]),
            {
              "LC": 2,
              "system:index": "52"
            }),
        ee.Feature(
            ee.Geometry.Point([60.037241677698404, 36.30665203172819]),
            {
              "LC": 2,
              "system:index": "53"
            }),
        ee.Feature(
            ee.Geometry.Point([60.03655503219059, 36.33099518335284]),
            {
              "LC": 2,
              "system:index": "54"
            }),
        ee.Feature(
            ee.Geometry.Point([60.079127053674966, 36.33597352772181]),
            {
              "LC": 2,
              "system:index": "55"
            }),
        ee.Feature(
            ee.Geometry.Point([60.09251664107731, 36.33873913712428]),
            {
              "LC": 2,
              "system:index": "56"
            }),
        ee.Feature(
            ee.Geometry.Point([60.099383096155435, 36.34786495143548]),
            {
              "LC": 2,
              "system:index": "57"
            }),
        ee.Feature(
            ee.Geometry.Point([60.10178635543278, 36.35864862589497]),
            {
              "LC": 2,
              "system:index": "58"
            }),
        ee.Feature(
            ee.Geometry.Point([60.059900979456216, 36.374406693600854]),
            {
              "LC": 2,
              "system:index": "59"
            }),
        ee.Feature(
            ee.Geometry.Point([60.04685471480778, 36.39928135473801]),
            {
              "LC": 2,
              "system:index": "60"
            }),
        ee.Feature(
            ee.Geometry.Point([60.092859963831216, 36.44320713691711]),
            {
              "LC": 2,
              "system:index": "61"
            }),
        ee.Feature(
            ee.Geometry.Point([60.07878373092106, 36.445968934155104]),
            {
              "LC": 2,
              "system:index": "62"
            }),
        ee.Feature(
            ee.Geometry.Point([60.05681107467106, 36.454529880820004]),
            {
              "LC": 2,
              "system:index": "63"
            }),
        ee.Feature(
            ee.Geometry.Point([60.0478846830695, 36.46971633186118]),
            {
              "LC": 2,
              "system:index": "64"
            }),
        ee.Feature(
            ee.Geometry.Point([60.01767228072575, 36.489316260973915]),
            {
              "LC": 2,
              "system:index": "65"
            }),
        ee.Feature(
            ee.Geometry.Point([60.01904557174137, 36.48434773397618]),
            {
              "LC": 2,
              "system:index": "66"
            }),
        ee.Feature(
            ee.Geometry.Point([60.01217911666325, 36.4793788883231]),
            {
              "LC": 2,
              "system:index": "67"
            }),
        ee.Feature(
            ee.Geometry.Point([59.986773232874185, 36.477446473405]),
            {
              "LC": 2,
              "system:index": "68"
            }),
        ee.Feature(
            ee.Geometry.Point([59.984026650842935, 36.48296753103571]),
            {
              "LC": 2,
              "system:index": "69"
            }),
        ee.Feature(
            ee.Geometry.Point([59.984026650842935, 36.49704444733151]),
            {
              "LC": 2,
              "system:index": "70"
            }),
        ee.Feature(
            ee.Geometry.Point([59.98608658736637, 36.50863528090068]),
            {
              "LC": 2,
              "system:index": "71"
            }),
        ee.Feature(
            ee.Geometry.Point([59.99432633346012, 36.51829298326839]),
            {
              "LC": 2,
              "system:index": "72"
            }),
        ee.Feature(
            ee.Geometry.Point([59.985743264612466, 36.52463881716845]),
            {
              "LC": 2,
              "system:index": "73"
            }),
        ee.Feature(
            ee.Geometry.Point([59.971323708948404, 36.520224379118396]),
            {
              "LC": 2,
              "system:index": "74"
            }),
        ee.Feature(
            ee.Geometry.Point([59.965830544885904, 36.51277444377226]),
            {
              "LC": 2,
              "system:index": "75"
            }),
        ee.Feature(
            ee.Geometry.Point([59.95862076705387, 36.50532379123391]),
            {
              "LC": 2,
              "system:index": "76"
            }),
        ee.Feature(
            ee.Geometry.Point([59.94488785689762, 36.47579007940707]),
            {
              "LC": 2,
              "system:index": "77"
            }),
        ee.Feature(
            ee.Geometry.Point([59.93596146529606, 36.470544598189065]),
            {
              "LC": 2,
              "system:index": "78"
            }),
        ee.Feature(
            ee.Geometry.Point([59.92943833297184, 36.46308988263919]),
            {
              "LC": 2,
              "system:index": "79"
            }),
        ee.Feature(
            ee.Geometry.Point([59.92222855513981, 36.45950031949575]),
            {
              "LC": 2,
              "system:index": "80"
            }),
        ee.Feature(
            ee.Geometry.Point([59.858713845667154, 36.3611369540119]),
            {
              "LC": 2,
              "system:index": "81"
            }),
        ee.Feature(
            ee.Geometry.Point([59.85905716842106, 36.37219522750175]),
            {
              "LC": 2,
              "system:index": "82"
            }),
        ee.Feature(
            ee.Geometry.Point([60.22332261031559, 36.28423854844266]),
            {
              "LC": 2,
              "system:index": "83"
            }),
        ee.Feature(
            ee.Geometry.Point([60.25353501265934, 36.28700599356505]),
            {
              "LC": 2,
              "system:index": "84"
            }),
        ee.Feature(
            ee.Geometry.Point([60.107622842249185, 36.283685047641576]),
            {
              "LC": 2,
              "system:index": "85"
            }),
        ee.Feature(
            ee.Geometry.Point([60.092173318323404, 36.283408295768986]),
            {
              "LC": 2,
              "system:index": "86"
            }),
        ee.Feature(
            ee.Geometry.Point([60.07329056685856, 36.26403322616072]),
            {
              "LC": 2,
              "system:index": "87"
            }),
        ee.Feature(
            ee.Geometry.Point([60.061960915979654, 36.255174450170735]),
            {
              "LC": 2,
              "system:index": "88"
            }),
        ee.Feature(
            ee.Geometry.Point([60.04410813277653, 36.26320275859053]),
            {
              "LC": 2,
              "system:index": "89"
            }),
        ee.Feature(
            ee.Geometry.Point([60.029688577112466, 36.26431004672182]),
            {
              "LC": 2,
              "system:index": "90"
            }),
        ee.Feature(
            ee.Geometry.Point([60.01767228072575, 36.263479582095094]),
            {
              "LC": 2,
              "system:index": "91"
            }),
        ee.Feature(
            ee.Geometry.Point([60.02179215377262, 36.263479582095094]),
            {
              "LC": 2,
              "system:index": "92"
            }),
        ee.Feature(
            ee.Geometry.Point([60.00840256637028, 36.265970949483844]),
            {
              "LC": 2,
              "system:index": "93"
            }),
        ee.Feature(
            ee.Geometry.Point([59.996042947229654, 36.26763181692339]),
            {
              "LC": 2,
              "system:index": "94"
            }),
        ee.Feature(
            ee.Geometry.Point([59.99192307418278, 36.27095344583261]),
            {
              "LC": 2,
              "system:index": "95"
            }),
        ee.Feature(
            ee.Geometry.Point([59.981280068811685, 36.27372136198823]),
            {
              "LC": 2,
              "system:index": "96"
            }),
        ee.Feature(
            ee.Geometry.Point([59.973040322717935, 36.27676595642344]),
            {
              "LC": 2,
              "system:index": "97"
            }),
        ee.Feature(
            ee.Geometry.Point([59.96960709517887, 36.2917104250389]),
            {
              "LC": 2,
              "system:index": "98"
            }),
        ee.Feature(
            ee.Geometry.Point([59.94626114791325, 36.27123024186376]),
            {
              "LC": 2,
              "system:index": "99"
            }),
        ee.Feature(
            ee.Geometry.Point([59.93115494674137, 36.297521389962824]),
            {
              "LC": 2,
              "system:index": "100"
            }),
        ee.Feature(
            ee.Geometry.Point([59.8940760893195, 36.280087196752056]),
            {
              "LC": 2,
              "system:index": "101"
            }),
        ee.Feature(
            ee.Geometry.Point([59.891672830042154, 36.28257803426302]),
            {
              "LC": 2,
              "system:index": "102"
            }),
        ee.Feature(
            ee.Geometry.Point([59.83708451217106, 36.28977334054685]),
            {
              "LC": 2,
              "system:index": "103"
            }),
        ee.Feature(
            ee.Geometry.Point([59.845667581018716, 36.28838967932371]),
            {
              "LC": 2,
              "system:index": "104"
            }),
        ee.Feature(
            ee.Geometry.Point([59.84189103072575, 36.28838967932371]),
            {
              "LC": 2,
              "system:index": "105"
            }),
        ee.Feature(
            ee.Geometry.Point([59.71623490279606, 36.29779809178178]),
            {
              "LC": 2,
              "system:index": "106"
            }),
        ee.Feature(
            ee.Geometry.Point([59.64757035201481, 36.34205773878819]),
            {
              "LC": 2,
              "system:index": "107"
            }),
        ee.Feature(
            ee.Geometry.Point([59.64825699752262, 36.34233428254396]),
            {
              "LC": 2,
              "system:index": "108"
            }),
        ee.Feature(
            ee.Geometry.Point([59.57615921920231, 36.32573991916712]),
            {
              "LC": 2,
              "system:index": "109"
            }),
        ee.Feature(
            ee.Geometry.Point([59.59710190719059, 36.39845232758488]),
            {
              "LC": 2,
              "system:index": "110"
            }),
        ee.Feature(
            ee.Geometry.Point([59.5864589018195, 36.41807026471284]),
            {
              "LC": 2,
              "system:index": "111"
            }),
        ee.Feature(
            ee.Geometry.Point([59.56860611861637, 36.42884420663563]),
            {
              "LC": 2,
              "system:index": "112"
            }),
        ee.Feature(
            ee.Geometry.Point([59.576502541956216, 36.42994914179195]),
            {
              "LC": 2,
              "system:index": "113"
            }),
        ee.Feature(
            ee.Geometry.Point([59.56791947310856, 36.42773925575264]),
            {
              "LC": 2,
              "system:index": "114"
            }),
        ee.Feature(
            ee.Geometry.Point([59.651690225061685, 36.47965494366332]),
            {
              "LC": 2,
              "system:index": "115"
            }),
        ee.Feature(
            ee.Geometry.Point([59.64928696578434, 36.467783676012324]),
            {
              "LC": 2,
              "system:index": "116"
            }),
        ee.Feature(
            ee.Geometry.Point([59.566943136965826, 36.40496338056101]),
            {
              "LC": 2,
              "system:index": "117"
            }),
        ee.Feature(
            ee.Geometry.Point([59.567200629031255, 36.40679398366739]),
            {
              "LC": 2,
              "system:index": "118"
            }),
        ee.Feature(
            ee.Geometry.Point([59.56732937506397, 36.40966069055051]),
            {
              "LC": 2,
              "system:index": "119"
            }),
        ee.Feature(
            ee.Geometry.Point([59.56552693060596, 36.41021329658383]),
            {
              "LC": 2,
              "system:index": "120"
            }),
        ee.Feature(
            ee.Geometry.Point([59.56629940680225, 36.41007514544403]),
            {
              "LC": 2,
              "system:index": "121"
            }),
        ee.Feature(
            ee.Geometry.Point([59.56415363959034, 36.413010804304896]),
            {
              "LC": 2,
              "system:index": "122"
            }),
        ee.Feature(
            ee.Geometry.Point([59.56333824804981, 36.41214738674463]),
            {
              "LC": 2,
              "system:index": "123"
            }),
        ee.Feature(
            ee.Geometry.Point([59.56308075598438, 36.41173294290679]),
            {
              "LC": 2,
              "system:index": "124"
            }),
        ee.Feature(
            ee.Geometry.Point([59.562694517886236, 36.41100766087001]),
            {
              "LC": 2,
              "system:index": "125"
            }),
        ee.Feature(
            ee.Geometry.Point([59.561235396182134, 36.41466853911771]),
            {
              "LC": 2,
              "system:index": "126"
            }),
        ee.Feature(
            ee.Geometry.Point([59.56132122687061, 36.41560099940227]),
            {
              "LC": 2,
              "system:index": "127"
            }),
        ee.Feature(
            ee.Geometry.Point([59.56076332739551, 36.416395308592804]),
            {
              "LC": 2,
              "system:index": "128"
            }),
        ee.Feature(
            ee.Geometry.Point([59.55883213690479, 36.41577367600428]),
            {
              "LC": 2,
              "system:index": "129"
            }),
        ee.Feature(
            ee.Geometry.Point([59.55926129034717, 36.41504843169609]),
            {
              "LC": 2,
              "system:index": "130"
            }),
        ee.Feature(
            ee.Geometry.Point([59.55754467657764, 36.414357716535235]),
            {
              "LC": 2,
              "system:index": "131"
            }),
        ee.Feature(
            ee.Geometry.Point([59.55754467657764, 36.41328709589725]),
            {
              "LC": 2,
              "system:index": "132"
            }),
        ee.Feature(
            ee.Geometry.Point([59.58483883551319, 36.3989877155505]),
            {
              "LC": 2,
              "system:index": "133"
            }),
        ee.Feature(
            ee.Geometry.Point([59.5835084598418, 36.39843502967612]),
            {
              "LC": 2,
              "system:index": "134"
            }),
        ee.Feature(
            ee.Geometry.Point([59.5826072376128, 36.39815868526505]),
            {
              "LC": 2,
              "system:index": "135"
            }),
        ee.Feature(
            ee.Geometry.Point([59.58775707892139, 36.39584426224809]),
            {
              "LC": 2,
              "system:index": "136"
            }),
        ee.Feature(
            ee.Geometry.Point([59.58913036993702, 36.39487702026965]),
            {
              "LC": 2,
              "system:index": "137"
            }),
        ee.Feature(
            ee.Geometry.Point([59.585654227053716, 36.397709623501356]),
            {
              "LC": 2,
              "system:index": "138"
            }),
        ee.Feature(
            ee.Geometry.Point([59.584624258792, 36.397778710095416]),
            {
              "LC": 2,
              "system:index": "139"
            }),
        ee.Feature(
            ee.Geometry.Point([59.5835084598418, 36.39788233987137]),
            {
              "LC": 2,
              "system:index": "140"
            }),
        ee.Feature(
            ee.Geometry.Point([59.585911719119146, 36.399125886404946]),
            {
              "LC": 2,
              "system:index": "141"
            }),
        ee.Feature(
            ee.Geometry.Point([59.58677002600391, 36.40106025257395]),
            {
              "LC": 2,
              "system:index": "142"
            }),
        ee.Feature(
            ee.Geometry.Point([59.58685585669239, 36.40081845943594]),
            {
              "LC": 2,
              "system:index": "143"
            }),
        ee.Feature(
            ee.Geometry.Point([59.57441040686329, 36.413874212267984]),
            {
              "LC": 2,
              "system:index": "144"
            }),
        ee.Feature(
            ee.Geometry.Point([59.57441040686329, 36.413632459005704]),
            {
              "LC": 2,
              "system:index": "145"
            }),
        ee.Feature(
            ee.Geometry.Point([59.56350990942676, 36.41601542260212]),
            {
              "LC": 2,
              "system:index": "146"
            }),
        ee.Feature(
            ee.Geometry.Point([59.562952009951665, 36.41553192865397]),
            {
              "LC": 2,
              "system:index": "147"
            }),
        ee.Feature(
            ee.Geometry.Point([59.52591606787403, 36.40109479438941]),
            {
              "LC": 2,
              "system:index": "148"
            }),
        ee.Feature(
            ee.Geometry.Point([59.526259390627935, 36.40074937554403]),
            {
              "LC": 2,
              "system:index": "149"
            }),
        ee.Feature(
            ee.Geometry.Point([59.531495062625005, 36.40624135331225]),
            {
              "LC": 2,
              "system:index": "150"
            }),
        ee.Feature(
            ee.Geometry.Point([59.53235336950977, 36.40679398366739]),
            {
              "LC": 2,
              "system:index": "151"
            }),
        ee.Feature(
            ee.Geometry.Point([59.523984877383306, 36.40789923258548]),
            {
              "LC": 2,
              "system:index": "152"
            }),
        ee.Feature(
            ee.Geometry.Point([59.35722069132486, 35.78320814728113]),
            {
              "LC": 2,
              "system:index": "153"
            }),
        ee.Feature(
            ee.Geometry.Point([59.35722069132486, 35.78084073019747]),
            {
              "LC": 2,
              "system:index": "154"
            }),
        ee.Feature(
            ee.Geometry.Point([59.34846596110025, 35.79267711055421]),
            {
              "LC": 2,
              "system:index": "155"
            }),
        ee.Feature(
            ee.Geometry.Point([59.3453760563151, 35.78891751017635]),
            {
              "LC": 2,
              "system:index": "156"
            }),
        ee.Feature(
            ee.Geometry.Point([59.34005455362955, 35.78905675780651]),
            {
              "LC": 2,
              "system:index": "157"
            }),
        ee.Feature(
            ee.Geometry.Point([59.330956500651034, 35.79253786926755]),
            {
              "LC": 2,
              "system:index": "158"
            }),
        ee.Feature(
            ee.Geometry.Point([59.32614998209635, 35.780005154393955]),
            {
              "LC": 2,
              "system:index": "159"
            }),
        ee.Feature(
            ee.Geometry.Point([59.32700828898111, 35.7717881912316]),
            {
              "LC": 2,
              "system:index": "160"
            }),
        ee.Feature(
            ee.Geometry.Point([59.316193622233065, 35.76997755976406]),
            {
              "LC": 2,
              "system:index": "161"
            }),
        ee.Feature(
            ee.Geometry.Point([59.308983844401034, 35.770256121134516]),
            {
              "LC": 2,
              "system:index": "162"
            }),
        ee.Feature(
            ee.Geometry.Point([59.30005745279947, 35.768863304525304]),
            {
              "LC": 2,
              "system:index": "163"
            }),
        ee.Feature(
            ee.Geometry.Point([59.29404930460611, 35.767331178082635]),
            {
              "LC": 2,
              "system:index": "164"
            }),
        ee.Feature(
            ee.Geometry.Point([59.3014307438151, 35.76593831025098]),
            {
              "LC": 2,
              "system:index": "165"
            }),
        ee.Feature(
            ee.Geometry.Point([59.311215442301425, 35.75340140221809]),
            {
              "LC": 2,
              "system:index": "166"
            }),
        ee.Feature(
            ee.Geometry.Point([59.316193622233065, 35.75005789311043]),
            {
              "LC": 2,
              "system:index": "167"
            }),
        ee.Feature(
            ee.Geometry.Point([59.31327537882486, 35.74434574010436]),
            {
              "LC": 2,
              "system:index": "168"
            }),
        ee.Feature(
            ee.Geometry.Point([59.297997516276034, 35.74072318677975]),
            {
              "LC": 2,
              "system:index": "169"
            }),
        ee.Feature(
            ee.Geometry.Point([59.28855614054361, 35.74100185058002]),
            {
              "LC": 2,
              "system:index": "170"
            }),
        ee.Feature(
            ee.Geometry.Point([59.39944939005533, 35.73626443332974]),
            {
              "LC": 2,
              "system:index": "171"
            }),
        ee.Feature(
            ee.Geometry.Point([59.39344124186197, 35.73514970595461]),
            {
              "LC": 2,
              "system:index": "172"
            }),
        ee.Feature(
            ee.Geometry.Point([59.38897804606119, 35.74114118211438]),
            {
              "LC": 2,
              "system:index": "173"
            }),
        ee.Feature(
            ee.Geometry.Point([59.398591083170565, 35.7442064141784]),
            {
              "LC": 2,
              "system:index": "174"
            }),
        ee.Feature(
            ee.Geometry.Point([59.40477089274088, 35.74169850581347]),
            {
              "LC": 2,
              "system:index": "175"
            }),
        ee.Feature(
            ee.Geometry.Point([59.40724256079483, 35.73860593285162]),
            {
              "LC": 2,
              "system:index": "176"
            }),
        ee.Feature(
            ee.Geometry.Point([59.40861585181045, 35.73080274298035]),
            {
              "LC": 2,
              "system:index": "177"
            }),
        ee.Feature(
            ee.Geometry.Point([59.411534095218656, 35.72690086131973]),
            {
              "LC": 2,
              "system:index": "178"
            }),
        ee.Feature(
            ee.Geometry.Point([59.42561032812881, 35.722162605197134]),
            {
              "LC": 2,
              "system:index": "179"
            }),
        ee.Feature(
            ee.Geometry.Point([59.435051703861234, 35.72132641309725]),
            {
              "LC": 2,
              "system:index": "180"
            }),
        ee.Feature(
            ee.Geometry.Point([59.429043555667874, 35.729687939153166]),
            {
              "LC": 2,
              "system:index": "181"
            }),
        ee.Feature(
            ee.Geometry.Point([59.43161847632217, 35.73776991336762]),
            {
              "LC": 2,
              "system:index": "182"
            }),
        ee.Feature(
            ee.Geometry.Point([59.443291449954984, 35.73595850770603]),
            {
              "LC": 2,
              "system:index": "183"
            }),
        ee.Feature(
            ee.Geometry.Point([59.43814160864639, 35.73721256216832]),
            {
              "LC": 2,
              "system:index": "184"
            }),
        ee.Feature(
            ee.Geometry.Point([59.44088819067764, 35.74473647417996]),
            {
              "LC": 2,
              "system:index": "185"
            }),
        ee.Feature(
            ee.Geometry.Point([59.44861295264053, 35.746547680136686]),
            {
              "LC": 2,
              "system:index": "186"
            }),
        ee.Feature(
            ee.Geometry.Point([59.458225989749906, 35.76033935811973]),
            {
              "LC": 2,
              "system:index": "187"
            }),
        ee.Feature(
            ee.Geometry.Point([59.466980719974515, 35.7642396010937]),
            {
              "LC": 2,
              "system:index": "188"
            }),
        ee.Feature(
            ee.Geometry.Point([59.48380353491592, 35.76312526547032]),
            {
              "LC": 2,
              "system:index": "189"
            }),
        ee.Feature(
            ee.Geometry.Point([59.49427487891006, 35.76312526547032]),
            {
              "LC": 2,
              "system:index": "190"
            }),
        ee.Feature(
            ee.Geometry.Point([59.499939704349515, 35.7638217270642]),
            {
              "LC": 2,
              "system:index": "191"
            }),
        ee.Feature(
            ee.Geometry.Point([59.500454688480374, 35.777471143258225]),
            {
              "LC": 2,
              "system:index": "192"
            }),
        ee.Feature(
            ee.Geometry.Point([59.49049832861709, 35.78262388504285]),
            {
              "LC": 2,
              "system:index": "193"
            }),
        ee.Feature(
            ee.Geometry.Point([59.48500516455459, 35.794181523296466]),
            {
              "LC": 2,
              "system:index": "194"
            }),
        ee.Feature(
            ee.Geometry.Point([59.479855323246, 35.7929283666583]),
            {
              "LC": 2,
              "system:index": "195"
            }),
        ee.Feature(
            ee.Geometry.Point([59.472988868167874, 35.796548543024244]),
            {
              "LC": 2,
              "system:index": "196"
            }),
        ee.Feature(
            ee.Geometry.Point([59.46509244482803, 35.79599160354981]),
            {
              "LC": 2,
              "system:index": "197"
            }),
        ee.Feature(
            ee.Geometry.Point([59.45839765112686, 35.79529542371684]),
            {
              "LC": 2,
              "system:index": "198"
            }),
        ee.Feature(
            ee.Geometry.Point([59.49599149267959, 35.804345285739906]),
            {
              "LC": 2,
              "system:index": "199"
            }),
        ee.Feature(
            ee.Geometry.Point([59.49702146094131, 35.80156082261334]),
            {
              "LC": 2,
              "system:index": "200"
            }),
        ee.Feature(
            ee.Geometry.Point([59.50131299536514, 35.80086469158085]),
            {
              "LC": 2,
              "system:index": "201"
            }),
        ee.Feature(
            ee.Geometry.Point([59.50697782080459, 35.804206064901734]),
            {
              "LC": 2,
              "system:index": "202"
            }),
        ee.Feature(
            ee.Geometry.Point([59.511441016605374, 35.80531982477457]),
            {
              "LC": 2,
              "system:index": "203"
            }),
        ee.Feature(
            ee.Geometry.Point([59.51504590552139, 35.80629435185216]),
            {
              "LC": 2,
              "system:index": "204"
            }),
        ee.Feature(
            ee.Geometry.Point([59.51624753516006, 35.79975086924045]),
            {
              "LC": 2,
              "system:index": "205"
            }),
        ee.Feature(
            ee.Geometry.Point([59.50800778906631, 35.795573896382]),
            {
              "LC": 2,
              "system:index": "206"
            }),
        ee.Feature(
            ee.Geometry.Point([59.507149482181546, 35.80058623745979]),
            {
              "LC": 2,
              "system:index": "207"
            }),
        ee.Feature(
            ee.Geometry.Point([59.521397376468656, 35.791118216624255]),
            {
              "LC": 2,
              "system:index": "208"
            }),
        ee.Feature(
            ee.Geometry.Point([59.52774884741592, 35.793624567230495]),
            {
              "LC": 2,
              "system:index": "209"
            }),
        ee.Feature(
            ee.Geometry.Point([59.52259900610733, 35.79209291792011]),
            {
              "LC": 2,
              "system:index": "210"
            }),
        ee.Feature(
            ee.Geometry.Point([59.523628974369046, 35.79097897260605]),
            {
              "LC": 2,
              "system:index": "211"
            }),
        ee.Feature(
            ee.Geometry.Point([59.53307035010147, 35.785409011817826]),
            {
              "LC": 2,
              "system:index": "212"
            }),
        ee.Feature(
            ee.Geometry.Point([59.538906836917874, 35.78401646062841]),
            {
              "LC": 2,
              "system:index": "213"
            }),
        ee.Feature(
            ee.Geometry.Point([59.52998044531631, 35.802535395810295]),
            {
              "LC": 2,
              "system:index": "214"
            }),
        ee.Feature(
            ee.Geometry.Point([59.52163645801857, 35.814713257242445]),
            {
              "LC": 2,
              "system:index": "215"
            }),
        ee.Feature(
            ee.Geometry.Point([59.51219508228615, 35.81568766905317]),
            {
              "LC": 2,
              "system:index": "216"
            }),
        ee.Feature(
            ee.Geometry.Point([59.50309702930763, 35.816244470433034]),
            {
              "LC": 2,
              "system:index": "217"
            }),
        ee.Feature(
            ee.Geometry.Point([59.495543928721695, 35.81721886345175]),
            {
              "LC": 2,
              "system:index": "218"
            }),
        ee.Feature(
            ee.Geometry.Point([59.48438593921974, 35.81721886345175]),
            {
              "LC": 2,
              "system:index": "219"
            }),
        ee.Feature(
            ee.Geometry.Point([59.47271296558693, 35.814713257242445]),
            {
              "LC": 2,
              "system:index": "220"
            }),
        ee.Feature(
            ee.Geometry.Point([59.46447321949318, 35.81220757196145]),
            {
              "LC": 2,
              "system:index": "221"
            }),
        ee.Feature(
            ee.Geometry.Point([59.44953867969826, 35.811511534239784]),
            {
              "LC": 2,
              "system:index": "222"
            }),
        ee.Feature(
            ee.Geometry.Point([59.43923899708107, 35.81192915760491]),
            {
              "LC": 2,
              "system:index": "223"
            }),
        ee.Feature(
            ee.Geometry.Point([59.43426081714943, 35.81902841875917]),
            {
              "LC": 2,
              "system:index": "224"
            }),
        ee.Feature(
            ee.Geometry.Point([59.42499110279396, 35.82390009341957]),
            {
              "LC": 2,
              "system:index": "225"
            }),
        ee.Feature(
            ee.Geometry.Point([59.41554972706154, 35.82515276143474]),
            {
              "LC": 2,
              "system:index": "226"
            }),
        ee.Feature(
            ee.Geometry.Point([59.41383311329201, 35.82278659414233]),
            {
              "LC": 2,
              "system:index": "227"
            }),
        ee.Feature(
            ee.Geometry.Point([59.40868327198341, 35.81833244082979]),
            {
              "LC": 2,
              "system:index": "228"
            }),
        ee.Feature(
            ee.Geometry.Point([59.40868327198341, 35.81346042448576]),
            {
              "LC": 2,
              "system:index": "229"
            }),
        ee.Feature(
            ee.Geometry.Point([59.395637007334976, 35.80928417253212]),
            {
              "LC": 2,
              "system:index": "230"
            }),
        ee.Feature(
            ee.Geometry.Point([59.38808390674904, 35.809423384469135]),
            {
              "LC": 2,
              "system:index": "231"
            }),
        ee.Feature(
            ee.Geometry.Point([59.38636729297951, 35.816105270454145]),
            {
              "LC": 2,
              "system:index": "232"
            }),
        ee.Feature(
            ee.Geometry.Point([59.377955885508804, 35.816244470433034]),
            {
              "LC": 2,
              "system:index": "233"
            }),
        ee.Feature(
            ee.Geometry.Point([59.366454573252945, 35.81847163690378]),
            {
              "LC": 2,
              "system:index": "234"
            }),
        ee.Feature(
            ee.Geometry.Point([59.36061808643654, 35.81916761361286]),
            {
              "LC": 2,
              "system:index": "235"
            }),
        ee.Feature(
            ee.Geometry.Point([59.36456629810646, 35.82320415820184]),
            {
              "LC": 2,
              "system:index": "236"
            }),
        ee.Feature(
            ee.Geometry.Point([59.34963175831154, 35.827240497525835]),
            {
              "LC": 2,
              "system:index": "237"
            }),
        ee.Feature(
            ee.Geometry.Point([59.35392329273537, 35.83586922405935]),
            {
              "LC": 2,
              "system:index": "238"
            }),
        ee.Feature(
            ee.Geometry.Point([59.33332392750099, 35.83099828409334]),
            {
              "LC": 2,
              "system:index": "239"
            }),
        ee.Feature(
            ee.Geometry.Point([59.33727213917091, 35.82264740563435]),
            {
              "LC": 2,
              "system:index": "240"
            }),
        ee.Feature(
            ee.Geometry.Point([59.34431025562599, 35.81847163690378]),
            {
              "LC": 2,
              "system:index": "241"
            }),
        ee.Feature(
            ee.Geometry.Point([59.34860179004982, 35.81401724148475]),
            {
              "LC": 2,
              "system:index": "242"
            }),
        ee.Feature(
            ee.Geometry.Point([59.34963175831154, 35.80524692020647]),
            {
              "LC": 2,
              "system:index": "243"
            }),
        ee.Feature(
            ee.Geometry.Point([59.343966932872085, 35.80399393810137]),
            {
              "LC": 2,
              "system:index": "244"
            }),
        ee.Feature(
            ee.Geometry.Point([59.338988752940445, 35.80315860571715]),
            {
              "LC": 2,
              "system:index": "245"
            }),
        ee.Feature(
            ee.Geometry.Point([59.29418513355568, 35.79522250994866]),
            {
              "LC": 2,
              "system:index": "246"
            }),
        ee.Feature(
            ee.Geometry.Point([59.29040858326271, 35.795918690420486]),
            {
              "LC": 2,
              "system:index": "247"
            }),
        ee.Feature(
            ee.Geometry.Point([59.281825514415054, 35.79480479873766]),
            {
              "LC": 2,
              "system:index": "248"
            }),
        ee.Feature(
            ee.Geometry.Point([59.273585768321304, 35.79480479873766]),
            {
              "LC": 2,
              "system:index": "249"
            }),
        ee.Feature(
            ee.Geometry.Point([59.27925059376076, 35.778094549748964]),
            {
              "LC": 2,
              "system:index": "250"
            }),
        ee.Feature(
            ee.Geometry.Point([59.27375742969826, 35.76890241542889]),
            {
              "LC": 2,
              "system:index": "251"
            }),
        ee.Feature(
            ee.Geometry.Point([59.274787397959976, 35.76277373559211]),
            {
              "LC": 2,
              "system:index": "252"
            }),
        ee.Feature(
            ee.Geometry.Point([59.27719065723732, 35.76472382130648]),
            {
              "LC": 2,
              "system:index": "253"
            }),
        ee.Feature(
            ee.Geometry.Point([59.27564570484474, 35.74675336532902]),
            {
              "LC": 2,
              "system:index": "254"
            }),
        ee.Feature(
            ee.Geometry.Point([59.26723429737404, 35.77516989499651]),
            {
              "LC": 2,
              "system:index": "255"
            }),
        ee.Feature(
            ee.Geometry.Point([59.26860758838966, 35.794108608506136]),
            {
              "LC": 2,
              "system:index": "256"
            }),
        ee.Feature(
            ee.Geometry.Point([59.26895091114357, 35.80580379479752]),
            {
              "LC": 2,
              "system:index": "257"
            }),
        ee.Feature(
            ee.Geometry.Point([59.26895091114357, 35.812764397746015]),
            {
              "LC": 2,
              "system:index": "258"
            }),
        ee.Feature(
            ee.Geometry.Point([59.265346022227554, 35.81749725926061]),
            {
              "LC": 2,
              "system:index": "259"
            }),
        ee.Feature(
            ee.Geometry.Point([59.267577620127945, 35.82278659414233]),
            {
              "LC": 2,
              "system:index": "260"
            }),
        ee.Feature(
            ee.Geometry.Point([59.267062635997085, 35.833920883955926]),
            {
              "LC": 2,
              "system:index": "261"
            }),
        ee.Feature(
            ee.Geometry.Point([59.27375742969826, 35.83920912435128]),
            {
              "LC": 2,
              "system:index": "262"
            }),
        ee.Feature(
            ee.Geometry.Point([59.27495905933693, 35.83698253977986]),
            {
              "LC": 2,
              "system:index": "263"
            }),
        ee.Feature(
            ee.Geometry.Point([59.27461573658302, 35.82250821688231]),
            {
              "LC": 2,
              "system:index": "264"
            }),
        ee.Feature(
            ee.Geometry.Point([59.27667567310646, 35.81415644512439]),
            {
              "LC": 2,
              "system:index": "265"
            }),
        ee.Feature(
            ee.Geometry.Point([59.31512782154396, 35.8038547166474]),
            {
              "LC": 2,
              "system:index": "266"
            }),
        ee.Feature(
            ee.Geometry.Point([59.31066462574318, 35.8116507422722]),
            {
              "LC": 2,
              "system:index": "267"
            }),
        ee.Feature(
            ee.Geometry.Point([59.31186625538185, 35.81582686976422]),
            {
              "LC": 2,
              "system:index": "268"
            }),
        ee.Feature(
            ee.Geometry.Point([59.32388255176857, 35.81902841875917]),
            {
              "LC": 2,
              "system:index": "269"
            }),
        ee.Feature(
            ee.Geometry.Point([59.42653605518654, 35.779208675643005]),
            {
              "LC": 2,
              "system:index": "270"
            }),
        ee.Feature(
            ee.Geometry.Point([59.42241618213966, 35.77475207839291]),
            {
              "LC": 2,
              "system:index": "271"
            }),
        ee.Feature(
            ee.Geometry.Point([59.41709467945412, 35.78965284658433]),
            {
              "LC": 2,
              "system:index": "272"
            }),
        ee.Feature(
            ee.Geometry.Point([59.41657969532326, 35.813738833473366]),
            {
              "LC": 2,
              "system:index": "273"
            }),
        ee.Feature(
            ee.Geometry.Point([59.41949793873146, 35.82097712450119]),
            {
              "LC": 2,
              "system:index": "274"
            }),
        ee.Feature(
            ee.Geometry.Point([59.42224452076271, 35.8337817149749]),
            {
              "LC": 2,
              "system:index": "275"
            }),
        ee.Feature(
            ee.Geometry.Point([59.42069956837013, 35.843662106010065]),
            {
              "LC": 2,
              "system:index": "276"
            }),
        ee.Feature(
            ee.Geometry.Point([59.41469142017677, 35.84435786181252]),
            {
              "LC": 2,
              "system:index": "277"
            }),
        ee.Feature(
            ee.Geometry.Point([59.39134547291115, 35.837817516317564]),
            {
              "LC": 2,
              "system:index": "278"
            }),
        ee.Feature(
            ee.Geometry.Point([59.39855525074318, 35.8304415862004]),
            {
              "LC": 2,
              "system:index": "279"
            }),
        ee.Feature(
            ee.Geometry.Point([59.39683863697365, 35.82946735549015]),
            {
              "LC": 2,
              "system:index": "280"
            }),
        ee.Feature(
            ee.Geometry.Point([59.386195631602554, 35.83433838943441]),
            {
              "LC": 2,
              "system:index": "281"
            }),
        ee.Feature(
            ee.Geometry.Point([59.3776125627549, 35.83865248406716]),
            {
              "LC": 2,
              "system:index": "282"
            }),
        ee.Feature(
            ee.Geometry.Point([59.41463384111362, 35.8422276079464]),
            {
              "LC": 2,
              "system:index": "283"
            }),
        ee.Feature(
            ee.Geometry.Point([59.414011568622165, 35.84205366489631]),
            {
              "LC": 2,
              "system:index": "284"
            }),
        ee.Feature(
            ee.Geometry.Point([59.416221708850436, 35.83991413418015]),
            {
              "LC": 2,
              "system:index": "285"
            }),
        ee.Feature(
            ee.Geometry.Point([59.41630753953891, 35.838818254635584]),
            {
              "LC": 2,
              "system:index": "286"
            }),
        ee.Feature(
            ee.Geometry.Point([59.41688689668613, 35.838522538513956]),
            {
              "LC": 2,
              "system:index": "287"
            }),
        ee.Feature(
            ee.Geometry.Point([59.41787394960361, 35.83833119220077]),
            {
              "LC": 2,
              "system:index": "288"
            }),
        ee.Feature(
            ee.Geometry.Point([59.41742333848911, 35.837878917262245]),
            {
              "LC": 2,
              "system:index": "289"
            }),
        ee.Feature(
            ee.Geometry.Point([59.41656503160434, 35.837600592941534]),
            {
              "LC": 2,
              "system:index": "290"
            }),
        ee.Feature(
            ee.Geometry.Point([59.41019210298496, 35.83770496467622]),
            {
              "LC": 2,
              "system:index": "291"
            }),
        ee.Feature(
            ee.Geometry.Point([59.42405375917392, 35.8378615220208]),
            {
              "LC": 2,
              "system:index": "292"
            }),
        ee.Feature(
            ee.Geometry.Point([59.42317399461704, 35.83727008154246]),
            {
              "LC": 2,
              "system:index": "293"
            }),
        ee.Feature(
            ee.Geometry.Point([59.42190799196201, 35.836939568766425]),
            {
              "LC": 2,
              "system:index": "294"
            }),
        ee.Feature(
            ee.Geometry.Point([59.421478838519626, 35.837339663004045]),
            {
              "LC": 2,
              "system:index": "295"
            }),
        ee.Feature(
            ee.Geometry.Point([59.42064198930698, 35.837617988240176]),
            {
              "LC": 2,
              "system:index": "296"
            }),
        ee.Feature(
            ee.Geometry.Point([59.419762224750095, 35.8378615220208]),
            {
              "LC": 2,
              "system:index": "297"
            }),
        ee.Feature(
            ee.Geometry.Point([59.404248327807956, 35.843653926568784]),
            {
              "LC": 2,
              "system:index": "298"
            }),
        ee.Feature(
            ee.Geometry.Point([59.40465602357822, 35.84624558622388]),
            {
              "LC": 2,
              "system:index": "299"
            }),
        ee.Feature(
            ee.Geometry.Point([59.645328668373295, 36.0159606441898]),
            {
              "LC": 2,
              "system:index": "300"
            }),
        ee.Feature(
            ee.Geometry.Point([59.64575782181568, 36.016312104579356]),
            {
              "LC": 2,
              "system:index": "301"
            }),
        ee.Feature(
            ee.Geometry.Point([59.64646056057758, 36.01551806221054]),
            {
              "LC": 2,
              "system:index": "302"
            }),
        ee.Feature(
            ee.Geometry.Point([59.64628889920063, 36.015908575850645]),
            {
              "LC": 2,
              "system:index": "303"
            }),
        ee.Feature(
            ee.Geometry.Point([59.64521065117664, 36.01553541841339]),
            {
              "LC": 2,
              "system:index": "304"
            }),
        ee.Feature(
            ee.Geometry.Point([59.645103362816045, 36.0152794140335]),
            {
              "LC": 2,
              "system:index": "305"
            }),
        ee.Feature(
            ee.Geometry.Point([59.644620565193364, 36.015058121441825]),
            {
              "LC": 2,
              "system:index": "306"
            }),
        ee.Feature(
            ee.Geometry.Point([59.64437916638202, 36.01499303526721]),
            {
              "LC": 2,
              "system:index": "307"
            }),
        ee.Feature(
            ee.Geometry.Point([59.642598179596135, 36.01475872459357]),
            {
              "LC": 2,
              "system:index": "308"
            }),
        ee.Feature(
            ee.Geometry.Point([59.64152529599018, 36.01466760358794]),
            {
              "LC": 2,
              "system:index": "309"
            }),
        ee.Feature(
            ee.Geometry.Point([59.64189544083423, 36.01498869618701]),
            {
              "LC": 2,
              "system:index": "310"
            }),
        ee.Feature(
            ee.Geometry.Point([59.64199200035877, 36.01462855169612]),
            {
              "LC": 2,
              "system:index": "311"
            }),
        ee.Feature(
            ee.Geometry.Point([59.64045241238422, 36.01455478695881]),
            {
              "LC": 2,
              "system:index": "312"
            }),
        ee.Feature(
            ee.Geometry.Point([59.64666440846271, 36.01510151219504]),
            {
              "LC": 2,
              "system:index": "313"
            }),
        ee.Feature(
            ee.Geometry.Point([59.647115019577214, 36.015483349793335]),
            {
              "LC": 2,
              "system:index": "314"
            }),
        ee.Feature(
            ee.Geometry.Point([59.64719548584766, 36.01592593196752]),
            {
              "LC": 2,
              "system:index": "315"
            }),
        ee.Feature(
            ee.Geometry.Point([59.64714184166736, 36.01627739251188]),
            {
              "LC": 2,
              "system:index": "316"
            }),
        ee.Feature(
            ee.Geometry.Point([59.64714720608539, 36.01719725713475]),
            {
              "LC": 2,
              "system:index": "317"
            }),
        ee.Feature(
            ee.Geometry.Point([59.64778557183094, 36.01737949319151]),
            {
              "LC": 2,
              "system:index": "318"
            }),
        ee.Feature(
            ee.Geometry.Point([59.648327378051945, 36.01712349480151]),
            {
              "LC": 2,
              "system:index": "319"
            }),
        ee.Feature(
            ee.Geometry.Point([59.64870288731403, 36.01689352943707]),
            {
              "LC": 2,
              "system:index": "320"
            }),
        ee.Feature(
            ee.Geometry.Point([59.64878871800251, 36.016659224413395]),
            {
              "LC": 2,
              "system:index": "321"
            }),
        ee.Feature(
            ee.Geometry.Point([59.64952900769062, 36.01649434268286]),
            {
              "LC": 2,
              "system:index": "322"
            }),
        ee.Feature(
            ee.Geometry.Point([59.64954510094471, 36.017054071365976]),
            {
              "LC": 2,
              "system:index": "323"
            }),
        ee.Feature(
            ee.Geometry.Point([59.64854195477314, 36.017427221612934]),
            {
              "LC": 2,
              "system:index": "324"
            }),
        ee.Feature(
            ee.Geometry.Point([59.64894428612537, 36.0181735168065]),
            {
              "LC": 2,
              "system:index": "325"
            }),
        ee.Feature(
            ee.Geometry.Point([59.64948072792835, 36.01861174499305]),
            {
              "LC": 2,
              "system:index": "326"
            }),
        ee.Feature(
            ee.Geometry.Point([59.64974358441181, 36.0183557506058]),
            {
              "LC": 2,
              "system:index": "327"
            }),
        ee.Feature(
            ee.Geometry.Point([59.64975431324787, 36.01821690584456]),
            {
              "LC": 2,
              "system:index": "328"
            }),
        ee.Feature(
            ee.Geometry.Point([59.642061737793156, 36.018251617057814]),
            {
              "LC": 2,
              "system:index": "329"
            }),
        ee.Feature(
            ee.Geometry.Point([59.64204564453907, 36.01796958800765]),
            {
              "LC": 2,
              "system:index": "330"
            }),
        ee.Feature(
            ee.Geometry.Point([59.642083195465275, 36.01783508148982]),
            {
              "LC": 2,
              "system:index": "331"
            }),
        ee.Feature(
            ee.Geometry.Point([59.64224412800617, 36.01774396404086]),
            {
              "LC": 2,
              "system:index": "332"
            }),
        ee.Feature(
            ee.Geometry.Point([59.6401788270647, 36.017852437182434]),
            {
              "LC": 2,
              "system:index": "333"
            }),
        ee.Feature(
            ee.Geometry.Point([59.639615563171574, 36.017579084579694]),
            {
              "LC": 2,
              "system:index": "334"
            }),
        ee.Feature(
            ee.Geometry.Point([59.63948145272083, 36.01811711102131]),
            {
              "LC": 2,
              "system:index": "335"
            }),
        ee.Feature(
            ee.Geometry.Point([59.63843539120502, 36.017622473945025]),
            {
              "LC": 2,
              "system:index": "336"
            }),
        ee.Feature(
            ee.Geometry.Point([59.63802233101673, 36.017596440328695]),
            {
              "LC": 2,
              "system:index": "337"
            }),
        ee.Feature(
            ee.Geometry.Point([59.63822617890186, 36.01720593505177]),
            {
              "LC": 2,
              "system:index": "338"
            }),
        ee.Feature(
            ee.Geometry.Point([59.6384675777132, 36.01730573102882]),
            {
              "LC": 2,
              "system:index": "339"
            }),
        ee.Feature(
            ee.Geometry.Point([59.638081339615056, 36.01839913954353]),
            {
              "LC": 2,
              "system:index": "340"
            }),
        ee.Feature(
            ee.Geometry.Point([59.639315155761906, 36.018377445077654]),
            {
              "LC": 2,
              "system:index": "341"
            }),
        ee.Feature(
            ee.Geometry.Point([59.638843086975285, 36.01826029485873]),
            {
              "LC": 2,
              "system:index": "342"
            }),
        ee.Feature(
            ee.Geometry.Point([59.63779166104145, 36.01818219461604]),
            {
              "LC": 2,
              "system:index": "343"
            }),
        ee.Feature(
            ee.Geometry.Point([59.39534242843111, 36.44024700270801]),
            {
              "LC": 2,
              "system:index": "344"
            }),
        ee.Feature(
            ee.Geometry.Point([59.39475234244783, 36.44121367980055]),
            {
              "LC": 2,
              "system:index": "345"
            }),
        ee.Feature(
            ee.Geometry.Point([59.39443047736604, 36.44125683474709]),
            {
              "LC": 2,
              "system:index": "346"
            }),
        ee.Feature(
            ee.Geometry.Point([59.3939369509073, 36.44139493041475]),
            {
              "LC": 2,
              "system:index": "347"
            }),
        ee.Feature(
            ee.Geometry.Point([59.39345415328462, 36.44244790179926]),
            {
              "LC": 2,
              "system:index": "348"
            }),
        ee.Feature(
            ee.Geometry.Point([59.39329322074373, 36.442396116655424]),
            {
              "LC": 2,
              "system:index": "349"
            }),
        ee.Feature(
            ee.Geometry.Point([59.391415674433304, 36.43919400145775]),
            {
              "LC": 2,
              "system:index": "350"
            }),
        ee.Feature(
            ee.Geometry.Point([59.39109380935152, 36.43912495169623]),
            {
              "LC": 2,
              "system:index": "351"
            }),
        ee.Feature(
            ee.Geometry.Point([59.390675384745194, 36.43884875203582]),
            {
              "LC": 2,
              "system:index": "352"
            }),
        ee.Feature(
            ee.Geometry.Point([59.39204867576082, 36.43797699040988]),
            {
              "LC": 2,
              "system:index": "353"
            }),
        ee.Feature(
            ee.Geometry.Point([59.39245637153108, 36.43764899835195]),
            {
              "LC": 2,
              "system:index": "354"
            }),
        ee.Feature(
            ee.Geometry.Point([59.39249928687532, 36.4372951106295]),
            {
              "LC": 2,
              "system:index": "355"
            }),
        ee.Feature(
            ee.Geometry.Point([59.39249928687532, 36.43700164153815]),
            {
              "LC": 2,
              "system:index": "356"
            }),
        ee.Feature(
            ee.Geometry.Point([59.392864067301346, 36.43673406581121]),
            {
              "LC": 2,
              "system:index": "357"
            }),
        ee.Feature(
            ee.Geometry.Point([59.39581449721773, 36.43725195347978]),
            {
              "LC": 2,
              "system:index": "358"
            }),
        ee.Feature(
            ee.Geometry.Point([59.396361667856766, 36.43702753591438]),
            {
              "LC": 2,
              "system:index": "359"
            }),
        ee.Feature(
            ee.Geometry.Point([59.39747746680696, 36.436820380662645]),
            {
              "LC": 2,
              "system:index": "360"
            }),
        ee.Feature(
            ee.Geometry.Point([59.39723070357759, 36.43673406581121]),
            {
              "LC": 2,
              "system:index": "361"
            }),
        ee.Feature(
            ee.Geometry.Point([59.39999874328096, 36.438693389294826]),
            {
              "LC": 2,
              "system:index": "362"
            }),
        ee.Feature(
            ee.Geometry.Point([59.39955886100252, 36.4408080221299]),
            {
              "LC": 2,
              "system:index": "363"
            }),
        ee.Feature(
            ee.Geometry.Point([59.39921553824861, 36.44085117730206]),
            {
              "LC": 2,
              "system:index": "364"
            }),
        ee.Feature(
            ee.Geometry.Point([59.398668367609574, 36.44127409671901]),
            {
              "LC": 2,
              "system:index": "365"
            }),
        ee.Feature(
            ee.Geometry.Point([59.39849670623262, 36.44139493041475]),
            {
              "LC": 2,
              "system:index": "366"
            }),
        ee.Feature(
            ee.Geometry.Point([59.39774568770845, 36.441317251631936]),
            {
              "LC": 2,
              "system:index": "367"
            }),
        ee.Feature(
            ee.Geometry.Point([59.3975740263315, 36.44221486837982]),
            {
              "LC": 2,
              "system:index": "368"
            }),
        ee.Feature(
            ee.Geometry.Point([59.398357231363846, 36.44217171396606]),
            {
              "LC": 2,
              "system:index": "369"
            }),
        ee.Feature(
            ee.Geometry.Point([59.39876492713411, 36.4421199286379]),
            {
              "LC": 2,
              "system:index": "370"
            }),
        ee.Feature(
            ee.Geometry.Point([59.39996655677278, 36.442292546264056]),
            {
              "LC": 2,
              "system:index": "371"
            }),
        ee.Feature(
            ee.Geometry.Point([59.40079267714937, 36.44224939189353]),
            {
              "LC": 2,
              "system:index": "372"
            }),
        ee.Feature(
            ee.Geometry.Point([59.39704831336458, 36.443121105524135]),
            {
              "LC": 2,
              "system:index": "373"
            }),
        ee.Feature(
            ee.Geometry.Point([59.396629888758255, 36.44339728997804]),
            {
              "LC": 2,
              "system:index": "374"
            }),
        ee.Feature(
            ee.Geometry.Point([59.39351852630098, 36.442206237498986]),
            {
              "LC": 2,
              "system:index": "375"
            }),
        ee.Feature(
            ee.Geometry.Point([59.39378674720247, 36.44186963239792]),
            {
              "LC": 2,
              "system:index": "376"
            }),
        ee.Feature(
            ee.Geometry.Point([59.39532097075899, 36.44205088147993]),
            {
              "LC": 2,
              "system:index": "377"
            }),
        ee.Feature(
            ee.Geometry.Point([59.39684446547945, 36.44216308308044]),
            {
              "LC": 2,
              "system:index": "378"
            }),
        ee.Feature(
            ee.Geometry.Point([59.3889480421396, 36.43840855679522]),
            {
              "LC": 2,
              "system:index": "379"
            }),
        ee.Feature(
            ee.Geometry.Point([59.38870127891023, 36.437821625923654]),
            {
              "LC": 2,
              "system:index": "380"
            }),
        ee.Feature(
            ee.Geometry.Point([59.38909824584444, 36.437614472791516]),
            {
              "LC": 2,
              "system:index": "381"
            }),
        ee.Feature(
            ee.Geometry.Point([59.477604806201875, 36.45287680808016]),
            {
              "LC": 2,
              "system:index": "382"
            }),
        ee.Feature(
            ee.Geometry.Point([59.47729769326967, 36.452736575421625]),
            {
              "LC": 2,
              "system:index": "383"
            }),
        ee.Feature(
            ee.Geometry.Point([59.47727087117952, 36.45264596341512]),
            {
              "LC": 2,
              "system:index": "384"
            }),
        ee.Feature(
            ee.Geometry.Point([59.47745460249704, 36.452548879004986]),
            {
              "LC": 2,
              "system:index": "385"
            }),
        ee.Feature(
            ee.Geometry.Point([59.476990580337464, 36.45291456298336]),
            {
              "LC": 2,
              "system:index": "386"
            }),
        ee.Feature(
            ee.Geometry.Point([59.476900726335465, 36.45304292951679]),
            {
              "LC": 2,
              "system:index": "387"
            }),
        ee.Feature(
            ee.Geometry.Point([59.47680416681093, 36.45294800302514]),
            {
              "LC": 2,
              "system:index": "388"
            }),
        ee.Feature(
            ee.Geometry.Point([59.47711798526567, 36.452692348145966]),
            {
              "LC": 2,
              "system:index": "389"
            }),
        ee.Feature(
            ee.Geometry.Point([59.476990580337464, 36.45246689651957]),
            {
              "LC": 2,
              "system:index": "390"
            }),
        ee.Feature(
            ee.Geometry.Point([59.47722527362627, 36.45321012930481]),
            {
              "LC": 2,
              "system:index": "391"
            }),
        ee.Feature(
            ee.Geometry.Point([59.82595564189282, 36.70575284378551]),
            {
              "LC": 2,
              "system:index": "392"
            }),
        ee.Feature(
            ee.Geometry.Point([59.82745767894116, 36.70540878399077]),
            {
              "LC": 2,
              "system:index": "393"
            }),
        ee.Feature(
            ee.Geometry.Point([59.82870222392407, 36.705099128858535]),
            {
              "LC": 2,
              "system:index": "394"
            }),
        ee.Feature(
            ee.Geometry.Point([59.82859493556347, 36.70702585163293]),
            {
              "LC": 2,
              "system:index": "395"
            }),
        ee.Feature(
            ee.Geometry.Point([59.8298609382185, 36.70736990418812]),
            {
              "LC": 2,
              "system:index": "396"
            }),
        ee.Feature(
            ee.Geometry.Point([59.82958198848095, 36.70650976991201]),
            {
              "LC": 2,
              "system:index": "397"
            }),
        ee.Feature(
            ee.Geometry.Point([59.8298609382185, 36.7058388584935]),
            {
              "LC": 2,
              "system:index": "398"
            }),
        ee.Feature(
            ee.Geometry.Point([59.831041110185055, 36.705649626008814]),
            {
              "LC": 2,
              "system:index": "399"
            }),
        ee.Feature(
            ee.Geometry.Point([59.830569041398434, 36.705099128858535]),
            {
              "LC": 2,
              "system:index": "400"
            }),
        ee.Feature(
            ee.Geometry.Point([59.83033300700512, 36.70451422131581]),
            {
              "LC": 2,
              "system:index": "401"
            }),
        ee.Feature(
            ee.Geometry.Point([59.8298609382185, 36.70355083448274]),
            {
              "LC": 2,
              "system:index": "402"
            }),
        ee.Feature(
            ee.Geometry.Point([59.82923866572705, 36.70287989723342]),
            {
              "LC": 2,
              "system:index": "403"
            }),
        ee.Feature(
            ee.Geometry.Point([59.826813948777584, 36.70274226835577]),
            {
              "LC": 2,
              "system:index": "404"
            }),
        ee.Feature(
            ee.Geometry.Point([59.8254835731062, 36.702604639231694]),
            {
              "LC": 2,
              "system:index": "405"
            }),
        ee.Feature(
            ee.Geometry.Point([59.82387424769726, 36.702535824577254]),
            {
              "LC": 2,
              "system:index": "406"
            }),
        ee.Feature(
            ee.Geometry.Point([59.82192159953442, 36.70255302824663]),
            {
              "LC": 2,
              "system:index": "407"
            }),
        ee.Feature(
            ee.Geometry.Point([59.820784342912106, 36.70248421354596]),
            {
              "LC": 2,
              "system:index": "408"
            }),
        ee.Feature(
            ee.Geometry.Point([59.819797289994625, 36.70158961683078]),
            {
              "LC": 2,
              "system:index": "409"
            }),
        ee.Feature(
            ee.Geometry.Point([59.81891752543774, 36.70244980617252]),
            {
              "LC": 2,
              "system:index": "410"
            }),
        ee.Feature(
            ee.Geometry.Point([59.81767298045483, 36.7035852413633]),
            {
              "LC": 2,
              "system:index": "411"
            }),
        ee.Feature(
            ee.Geometry.Point([59.81623531642285, 36.704548627765085]),
            {
              "LC": 2,
              "system:index": "412"
            }),
        ee.Feature(
            ee.Geometry.Point([59.817587149766354, 36.705443190039546]),
            {
              "LC": 2,
              "system:index": "413"
            }),
        ee.Feature(
            ee.Geometry.Point([59.81099964442578, 36.6983896279666]),
            {
              "LC": 2,
              "system:index": "414"
            }),
        ee.Feature(
            ee.Geometry.Point([59.81265188517895, 36.69718529658153]),
            {
              "LC": 2,
              "system:index": "415"
            }),
        ee.Feature(
            ee.Geometry.Point([59.81215835872021, 36.69720250144845]),
            {
              "LC": 2,
              "system:index": "416"
            }),
        ee.Feature(
            ee.Geometry.Point([59.81166483226147, 36.69575727920509]),
            {
              "LC": 2,
              "system:index": "417"
            }),
        ee.Feature(
            ee.Geometry.Point([59.81142879786816, 36.695499200945584]),
            {
              "LC": 2,
              "system:index": "418"
            }),
        ee.Feature(
            ee.Geometry.Point([59.81376768412915, 36.69706486240534]),
            {
              "LC": 2,
              "system:index": "419"
            }),
        ee.Feature(
            ee.Geometry.Point([59.81518389048901, 36.69666914878367]),
            {
              "LC": 2,
              "system:index": "420"
            }),
        ee.Feature(
            ee.Geometry.Point([59.8159563666853, 36.69654871379888]),
            {
              "LC": 2,
              "system:index": "421"
            }),
        ee.Feature(
            ee.Geometry.Point([59.810334456590084, 36.70062619333937]),
            {
              "LC": 2,
              "system:index": "422"
            }),
        ee.Feature(
            ee.Geometry.Point([59.84116913142529, 36.70227776907431]),
            {
              "LC": 2,
              "system:index": "423"
            }),
        ee.Feature(
            ee.Geometry.Point([59.84108330073681, 36.70183047081684]),
            {
              "LC": 2,
              "system:index": "424"
            }),
        ee.Feature(
            ee.Geometry.Point([59.84290720286694, 36.70171004391814]),
            {
              "LC": 2,
              "system:index": "425"
            }),
        ee.Feature(
            ee.Geometry.Point([59.84187723460522, 36.70157241294575]),
            {
              "LC": 2,
              "system:index": "426"
            }),
        ee.Feature(
            ee.Geometry.Point([59.841297877458004, 36.70119392650099]),
            {
              "LC": 2,
              "system:index": "427"
            }),
        ee.Feature(
            ee.Geometry.Point([59.835289729264645, 36.69959394048424]),
            {
              "LC": 2,
              "system:index": "428"
            }),
        ee.Feature(
            ee.Geometry.Point([59.83481766047802, 36.70062619333937]),
            {
              "LC": 2,
              "system:index": "429"
            }),
        ee.Feature(
            ee.Geometry.Point([59.836770308640865, 36.6983552187603]),
            {
              "LC": 2,
              "system:index": "430"
            }),
        ee.Feature(
            ee.Geometry.Point([59.83312250438061, 36.6973745499058]),
            {
              "LC": 2,
              "system:index": "431"
            }),
        ee.Feature(
            ee.Geometry.Point([59.83138443293896, 36.69900899104649]),
            {
              "LC": 2,
              "system:index": "432"
            }),
        ee.Feature(
            ee.Geometry.Point([59.8484647399458, 36.705477596072924]),
            {
              "LC": 2,
              "system:index": "433"
            }),
        ee.Feature(
            ee.Geometry.Point([59.84737039866772, 36.7048066756436]),
            {
              "LC": 2,
              "system:index": "434"
            }),
        ee.Feature(
            ee.Geometry.Point([59.84605138821538, 36.7135886375201]),
            {
              "LC": 2,
              "system:index": "435"
            }),
        ee.Feature(
            ee.Geometry.Point([59.845643692445115, 36.714259481276855]),
            {
              "LC": 2,
              "system:index": "436"
            }),
        ee.Feature(
            ee.Geometry.Point([59.846673660706834, 36.714792711879404]),
            {
              "LC": 2,
              "system:index": "437"
            }),
        ee.Feature(
            ee.Geometry.Point([59.84381979031499, 36.721672774773936]),
            {
              "LC": 2,
              "system:index": "438"
            }),
        ee.Feature(
            ee.Geometry.Point([59.84497850460942, 36.72242954407234]),
            {
              "LC": 2,
              "system:index": "439"
            }),
        ee.Feature(
            ee.Geometry.Point([59.846180134248094, 36.72234354793668]),
            {
              "LC": 2,
              "system:index": "440"
            }),
        ee.Feature(
            ee.Geometry.Point([59.84682386441167, 36.72222315318497]),
            {
              "LC": 2,
              "system:index": "441"
            }),
        ee.Feature(
            ee.Geometry.Point([59.84821861309941, 36.71978081890639]),
            {
              "LC": 2,
              "system:index": "442"
            }),
        ee.Feature(
            ee.Geometry.Point([59.84721010250981, 36.71749321003067]),
            {
              "LC": 2,
              "system:index": "443"
            }),
        ee.Feature(
            ee.Geometry.Point([59.85049312634404, 36.71692559727973]),
            {
              "LC": 2,
              "system:index": "444"
            }),
        ee.Feature(
            ee.Geometry.Point([59.85006397290166, 36.71637518090992]),
            {
              "LC": 2,
              "system:index": "445"
            }),
        ee.Feature(
            ee.Geometry.Point([59.85122268719609, 36.71709760158655]),
            {
              "LC": 2,
              "system:index": "446"
            }),
        ee.Feature(
            ee.Geometry.Point([59.844377689790086, 36.71591076403037]),
            {
              "LC": 2,
              "system:index": "447"
            }),
        ee.Feature(
            ee.Geometry.Point([59.84399145169194, 36.71465510433628]),
            {
              "LC": 2,
              "system:index": "448"
            }),
        ee.Feature(
            ee.Geometry.Point([59.842403583955125, 36.715222733863065]),
            {
              "LC": 2,
              "system:index": "449"
            }),
        ee.Feature(
            ee.Geometry.Point([59.84276836438115, 36.71683959498191]),
            {
              "LC": 2,
              "system:index": "450"
            }),
        ee.Feature(
            ee.Geometry.Point([59.84051530880864, 36.71857682272708]),
            {
              "LC": 2,
              "system:index": "451"
            }),
        ee.Feature(
            ee.Geometry.Point([59.83770435376103, 36.715807559898096]),
            {
              "LC": 2,
              "system:index": "452"
            }),
        ee.Feature(
            ee.Geometry.Point([59.83658855481084, 36.71501632361128]),
            {
              "LC": 2,
              "system:index": "453"
            }),
        ee.Feature(
            ee.Geometry.Point([59.83225410504277, 36.71460350144405]),
            {
              "LC": 2,
              "system:index": "454"
            }),
        ee.Feature(
            ee.Geometry.Point([59.832940750550584, 36.715738757066234]),
            {
              "LC": 2,
              "system:index": "455"
            }),
        ee.Feature(
            ee.Geometry.Point([59.83371322674687, 36.71628917799589]),
            {
              "LC": 2,
              "system:index": "456"
            }),
        ee.Feature(
            ee.Geometry.Point([59.83300512356694, 36.71823282035254]),
            {
              "LC": 2,
              "system:index": "457"
            }),
        ee.Feature(
            ee.Geometry.Point([59.83253305478032, 36.71775121444009]),
            {
              "LC": 2,
              "system:index": "458"
            }),
        ee.Feature(
            ee.Geometry.Point([59.83148162884648, 36.71924762292655]),
            {
              "LC": 2,
              "system:index": "459"
            }),
        ee.Feature(
            ee.Geometry.Point([59.83053749127324, 36.717200803985776]),
            {
              "LC": 2,
              "system:index": "460"
            }),
        ee.Feature(
            ee.Geometry.Point([59.8300439648145, 36.716650389587784]),
            {
              "LC": 2,
              "system:index": "461"
            }),
        ee.Feature(
            ee.Geometry.Point([59.82875650448735, 36.71697719861222]),
            {
              "LC": 2,
              "system:index": "462"
            }),
        ee.Feature(
            ee.Geometry.Point([59.8275763325208, 36.71697719861222]),
            {
              "LC": 2,
              "system:index": "463"
            }),
        ee.Feature(
            ee.Geometry.Point([59.82749050183232, 36.716082770609404]),
            {
              "LC": 2,
              "system:index": "464"
            }),
        ee.Feature(
            ee.Geometry.Point([59.829679184388475, 36.71432828543353]),
            {
              "LC": 2,
              "system:index": "465"
            }),
        ee.Feature(
            ee.Geometry.Point([59.829142742585496, 36.71384665504282]),
            {
              "LC": 2,
              "system:index": "466"
            }),
        ee.Feature(
            ee.Geometry.Point([59.854119472932176, 36.71646118372765]),
            {
              "LC": 2,
              "system:index": "467"
            }),
        ee.Feature(
            ee.Geometry.Point([59.84577243847783, 36.72112239241901]),
            {
              "LC": 2,
              "system:index": "468"
            }),
        ee.Feature(
            ee.Geometry.Point([59.84070842785771, 36.723960259176465]),
            {
              "LC": 2,
              "system:index": "469"
            }),
        ee.Feature(
            ee.Geometry.Point([59.83969991726811, 36.724665409802874]),
            {
              "LC": 2,
              "system:index": "470"
            }),
        ee.Feature(
            ee.Geometry.Point([59.83605211300786, 36.72365067880753]),
            {
              "LC": 2,
              "system:index": "471"
            }),
        ee.Feature(
            ee.Geometry.Point([59.835901909303026, 36.722773527652144]),
            {
              "LC": 2,
              "system:index": "472"
            }),
        ee.Feature(
            ee.Geometry.Point([59.83684604687627, 36.72036561024145]),
            {
              "LC": 2,
              "system:index": "473"
            }),
        ee.Feature(
            ee.Geometry.Point([59.83779018444951, 36.72072680266539]),
            {
              "LC": 2,
              "system:index": "474"
            }),
        ee.Feature(
            ee.Geometry.Point([59.83809059185918, 36.718783223412366]),
            {
              "LC": 2,
              "system:index": "475"
            }),
        ee.Feature(
            ee.Geometry.Point([59.83781164212163, 36.71931642261579]),
            {
              "LC": 2,
              "system:index": "476"
            }),
        ee.Feature(
            ee.Geometry.Point([59.83577316327031, 36.7205032075556]),
            {
              "LC": 2,
              "system:index": "477"
            }),
        ee.Feature(
            ee.Geometry.Point([59.834700279664354, 36.721105192906876]),
            {
              "LC": 2,
              "system:index": "478"
            }),
        ee.Feature(
            ee.Geometry.Point([59.833198242616014, 36.72187916714024]),
            {
              "LC": 2,
              "system:index": "479"
            }),
        ee.Feature(
            ee.Geometry.Point([59.83311241192754, 36.72196516379586]),
            {
              "LC": 2,
              "system:index": "480"
            }),
        ee.Feature(
            ee.Geometry.Point([59.83176057858403, 36.722188754649835]),
            {
              "LC": 2,
              "system:index": "481"
            }),
        ee.Feature(
            ee.Geometry.Point([59.325729591400055, 36.90550153401869]),
            {
              "LC": 2,
              "system:index": "482"
            }),
        ee.Feature(
            ee.Geometry.Point([59.32557938769522, 36.90430045518226]),
            {
              "LC": 2,
              "system:index": "483"
            }),
        ee.Feature(
            ee.Geometry.Point([59.32437775805655, 36.90378570132152]),
            {
              "LC": 2,
              "system:index": "484"
            }),
        ee.Feature(
            ee.Geometry.Point([59.32785390093985, 36.90258459547463]),
            {
              "LC": 2,
              "system:index": "485"
            }),
        ee.Feature(
            ee.Geometry.Point([59.3281328506774, 36.902121306737996]),
            {
              "LC": 2,
              "system:index": "486"
            }),
        ee.Feature(
            ee.Geometry.Point([59.33338998034659, 36.901160402613215]),
            {
              "LC": 2,
              "system:index": "487"
            }),
        ee.Feature(
            ee.Geometry.Point([59.331716281921295, 36.899804820861654]),
            {
              "LC": 2,
              "system:index": "488"
            }),
        ee.Feature(
            ee.Geometry.Point([59.332982284576325, 36.90394012784438]),
            {
              "LC": 2,
              "system:index": "489"
            }),
        ee.Feature(
            ee.Geometry.Point([59.32839034274283, 36.907165854867]),
            {
              "LC": 2,
              "system:index": "490"
            }),
        ee.Feature(
            ee.Geometry.Point([59.32690976336661, 36.907028592665576]),
            {
              "LC": 2,
              "system:index": "491"
            }),
        ee.Feature(
            ee.Geometry.Point([59.32259677127066, 36.906239330214916]),
            {
              "LC": 2,
              "system:index": "492"
            }),
        ee.Feature(
            ee.Geometry.Point([59.32191012576285, 36.905381426985876]),
            {
              "LC": 2,
              "system:index": "493"
            }),
        ee.Feature(
            ee.Geometry.Point([59.31806920245352, 36.90279050067687]),
            {
              "LC": 2,
              "system:index": "494"
            }),
        ee.Feature(
            ee.Geometry.Point([59.31957123950186, 36.902069830038066]),
            {
              "LC": 2,
              "system:index": "495"
            }),
        ee.Feature(
            ee.Geometry.Point([59.322768432647614, 36.899616067062226]),
            {
              "LC": 2,
              "system:index": "496"
            }),
        ee.Feature(
            ee.Geometry.Point([59.32289717868033, 36.89697346484899]),
            {
              "LC": 2,
              "system:index": "497"
            }),
        ee.Feature(
            ee.Geometry.Point([59.31583760455313, 36.904248979952456]),
            {
              "LC": 2,
              "system:index": "498"
            }),
        ee.Feature(
            ee.Geometry.Point([59.314507228881745, 36.905467217742896]),
            {
              "LC": 2,
              "system:index": "499"
            }),
        ee.Feature(
            ee.Geometry.Point([59.313477260620026, 36.90426613836626]),
            {
              "LC": 2,
              "system:index": "500"
            }),
        ee.Feature(
            ee.Geometry.Point([59.31771942546946, 36.89875091930296]),
            {
              "LC": 2,
              "system:index": "501"
            }),
        ee.Feature(
            ee.Geometry.Point([59.31707569530589, 36.89830476704506]),
            {
              "LC": 2,
              "system:index": "502"
            }),
        ee.Feature(
            ee.Geometry.Point([59.3167538302241, 36.90118755099536]),
            {
              "LC": 2,
              "system:index": "503"
            }),
        ee.Feature(
            ee.Geometry.Point([59.314887012749736, 36.90065561691231]),
            {
              "LC": 2,
              "system:index": "504"
            }),
        ee.Feature(
            ee.Geometry.Point([59.31884547288721, 36.90000500357878]),
            {
              "LC": 2,
              "system:index": "505"
            }),
        ee.Feature(
            ee.Geometry.Point([59.31897421891993, 36.89900975362446]),
            {
              "LC": 2,
              "system:index": "506"
            }),
        ee.Feature(
            ee.Geometry.Point([59.319017134264165, 36.89849496407218]),
            {
              "LC": 2,
              "system:index": "507"
            }),
        ee.Feature(
            ee.Geometry.Point([59.32094832475489, 36.89930146616263]),
            {
              "LC": 2,
              "system:index": "508"
            }),
        ee.Feature(
            ee.Geometry.Point([59.321012697771245, 36.898014490690336]),
            {
              "LC": 2,
              "system:index": "509"
            }),
        ee.Feature(
            ee.Geometry.Point([59.32536860521143, 36.898889636372864]),
            {
              "LC": 2,
              "system:index": "510"
            }),
        ee.Feature(
            ee.Geometry.Point([59.327728949144536, 36.898666560975435]),
            {
              "LC": 2,
              "system:index": "511"
            }),
        ee.Feature(
            ee.Geometry.Point([59.331999025896245, 36.89823756799381]),
            {
              "LC": 2,
              "system:index": "512"
            }),
        ee.Feature(
            ee.Geometry.Point([59.33309336717432, 36.89818608867397]),
            {
              "LC": 2,
              "system:index": "513"
            }),
        ee.Feature(
            ee.Geometry.Point([59.332471094682866, 36.89784289232086]),
            {
              "LC": 2,
              "system:index": "514"
            }),
        ee.Feature(
            ee.Geometry.Point([59.33386584337061, 36.89971329372995]),
            {
              "LC": 2,
              "system:index": "515"
            }),
        ee.Feature(
            ee.Geometry.Point([59.33614035661524, 36.89928430663243]),
            {
              "LC": 2,
              "system:index": "516"
            }),
        ee.Feature(
            ee.Geometry.Point([59.33292170579737, 36.9022013713395]),
            {
              "LC": 2,
              "system:index": "517"
            }),
        ee.Feature(
            ee.Geometry.Point([59.330282412126714, 36.90321373831849]),
            {
              "LC": 2,
              "system:index": "518"
            }),
        ee.Feature(
            ee.Geometry.Point([59.3297030549795, 36.9028362471171]),
            {
              "LC": 2,
              "system:index": "519"
            }),
        ee.Feature(
            ee.Geometry.Point([59.33545371110743, 36.90441483426178]),
            {
              "LC": 2,
              "system:index": "520"
            }),
        ee.Feature(
            ee.Geometry.Point([59.33513184602564, 36.9018925109431]),
            {
              "LC": 2,
              "system:index": "521"
            }),
        ee.Feature(
            ee.Geometry.Point([59.335775576189214, 36.901274786399775]),
            {
              "LC": 2,
              "system:index": "522"
            }),
        ee.Feature(
            ee.Geometry.Point([59.37476021209955, 35.81778016571707]),
            {
              "LC": 2,
              "system:index": "523"
            }),
        ee.Feature(
            ee.Geometry.Point([59.37476021209955, 35.81664918070097]),
            {
              "LC": 2,
              "system:index": "524"
            }),
        ee.Feature(
            ee.Geometry.Point([59.37585455337763, 35.81685797914737]),
            {
              "LC": 2,
              "system:index": "525"
            }),
        ee.Feature(
            ee.Geometry.Point([59.373730243837834, 35.815239776824995]),
            {
              "LC": 2,
              "system:index": "526"
            }),
        ee.Feature(
            ee.Geometry.Point([59.37330109039545, 35.81489177201654]),
            {
              "LC": 2,
              "system:index": "527"
            }),
        ee.Feature(
            ee.Geometry.Point([59.371970714724064, 35.81438716233493]),
            {
              "LC": 2,
              "system:index": "528"
            }),
        ee.Feature(
            ee.Geometry.Point([59.3720136300683, 35.8138477484393]),
            {
              "LC": 2,
              "system:index": "529"
            }),
        ee.Feature(
            ee.Geometry.Point([59.382442058718205, 35.81377814637942]),
            {
              "LC": 2,
              "system:index": "530"
            }),
        ee.Feature(
            ee.Geometry.Point([59.38261372009516, 35.8147003687217]),
            {
              "LC": 2,
              "system:index": "531"
            }),
        ee.Feature(
            ee.Geometry.Point([59.38156229416132, 35.81442196310558]),
            {
              "LC": 2,
              "system:index": "532"
            }),
        ee.Feature(
            ee.Geometry.Point([59.38048941055536, 35.81412615606884]),
            {
              "LC": 2,
              "system:index": "533"
            }),
        ee.Feature(
            ee.Geometry.Point([59.37888008514643, 35.81410875562058]),
            {
              "LC": 2,
              "system:index": "534"
            }),
        ee.Feature(
            ee.Geometry.Point([59.377935947573185, 35.81356933983362]),
            {
              "LC": 2,
              "system:index": "535"
            }),
        ee.Feature(
            ee.Geometry.Point([59.37707764068842, 35.81355193926335]),
            {
              "LC": 2,
              "system:index": "536"
            }),
        ee.Feature(
            ee.Geometry.Point([59.37480312744379, 35.81337793335093]),
            {
              "LC": 2,
              "system:index": "537"
            }),
        ee.Feature(
            ee.Geometry.Point([59.37411648193598, 35.812403493194665]),
            {
              "LC": 2,
              "system:index": "538"
            }),
        ee.Feature(
            ee.Geometry.Point([59.37651974121332, 35.81289071476757]),
            {
              "LC": 2,
              "system:index": "539"
            }),
        ee.Feature(
            ee.Geometry.Point([59.377184929049015, 35.812490497266225]),
            {
              "LC": 2,
              "system:index": "540"
            }),
        ee.Feature(
            ee.Geometry.Point([59.38033920685053, 35.81221208390166]),
            {
              "LC": 2,
              "system:index": "541"
            }),
        ee.Feature(
            ee.Geometry.Point([59.38548904815912, 35.81259490202626]),
            {
              "LC": 2,
              "system:index": "542"
            }),
        ee.Feature(
            ee.Geometry.Point([59.386690677797795, 35.81302992038215]),
            {
              "LC": 2,
              "system:index": "543"
            }),
        ee.Feature(
            ee.Geometry.Point([59.38752752701044, 35.81410875562058]),
            {
              "LC": 2,
              "system:index": "544"
            }),
        ee.Feature(
            ee.Geometry.Point([59.38928705612421, 35.81476996997322]),
            {
              "LC": 2,
              "system:index": "545"
            }),
        ee.Feature(
            ee.Geometry.Point([59.39074617782831, 35.816005382034504]),
            {
              "LC": 2,
              "system:index": "546"
            }),
        ee.Feature(
            ee.Geometry.Point([59.38995945869355, 35.81703197743321]),
            {
              "LC": 2,
              "system:index": "547"
            }),
        ee.Feature(
            ee.Geometry.Point([59.38757765708833, 35.81701457762179]),
            {
              "LC": 2,
              "system:index": "548"
            }),
        ee.Feature(
            ee.Geometry.Point([59.38661206184297, 35.81689277883503]),
            {
              "LC": 2,
              "system:index": "549"
            }),
        ee.Feature(
            ee.Geometry.Point([59.38511002479463, 35.816718780244116]),
            {
              "LC": 2,
              "system:index": "550"
            }),
        ee.Feature(
            ee.Geometry.Point([59.382663850173046, 35.816718780244116]),
            {
              "LC": 2,
              "system:index": "551"
            }),
        ee.Feature(
            ee.Geometry.Point([59.37955248771577, 35.8163359820018]),
            {
              "LC": 2,
              "system:index": "552"
            }),
        ee.Feature(
            ee.Geometry.Point([59.38953030525117, 35.810750397722614]),
            {
              "LC": 2,
              "system:index": "553"
            }),
        ee.Feature(
            ee.Geometry.Point([59.38588250099092, 35.809932537764794]),
            {
              "LC": 2,
              "system:index": "554"
            }),
        ee.Feature(
            ee.Geometry.Point([59.37914479194551, 35.808958055328844]),
            {
              "LC": 2,
              "system:index": "555"
            }),
        ee.Feature(
            ee.Geometry.Point([59.3767844480124, 35.80861002298954]),
            {
              "LC": 2,
              "system:index": "556"
            }),
        ee.Feature(
            ee.Geometry.Point([59.37319149954293, 35.80716567248292]),
            {
              "LC": 2,
              "system:index": "557"
            }),
        ee.Feature(
            ee.Geometry.Point([59.372182988953334, 35.80784434647442]),
            {
              "LC": 2,
              "system:index": "558"
            }),
        ee.Feature(
            ee.Geometry.Point([59.37156071646188, 35.80807056984946]),
            {
              "LC": 2,
              "system:index": "559"
            }),
        ee.Feature(
            ee.Geometry.Point([59.371904039215785, 35.813026204563855]),
            {
              "LC": 2,
              "system:index": "560"
            }),
        ee.Feature(
            ee.Geometry.Point([59.37186112387155, 35.81262598774541]),
            {
              "LC": 2,
              "system:index": "561"
            }),
        ee.Feature(
            ee.Geometry.Point([59.37132468206857, 35.8127651938241]),
            {
              "LC": 2,
              "system:index": "562"
            }),
        ee.Feature(
            ee.Geometry.Point([59.37053074820016, 35.81259118618761]),
            {
              "LC": 2,
              "system:index": "563"
            }),
        ee.Feature(
            ee.Geometry.Point([59.36977972967599, 35.812504182226384]),
            {
              "LC": 2,
              "system:index": "564"
            }),
        ee.Feature(
            ee.Geometry.Point([59.369135999512416, 35.81224316977068]),
            {
              "LC": 2,
              "system:index": "565"
            }),
        ee.Feature(
            ee.Geometry.Point([59.36681857092355, 35.811808147104635]),
            {
              "LC": 2,
              "system:index": "566"
            }),
        ee.Feature(
            ee.Geometry.Point([59.36572237433417, 35.810087974452365]),
            {
              "LC": 2,
              "system:index": "567"
            }),
        ee.Feature(
            ee.Geometry.Point([59.37771721304877, 35.80756474133742]),
            {
              "LC": 2,
              "system:index": "568"
            }),
        ee.Feature(
            ee.Geometry.Point([59.37690182150824, 35.80751253566787]),
            {
              "LC": 2,
              "system:index": "569"
            }),
        ee.Feature(
            ee.Geometry.Point([59.37668724478705, 35.807477731869106]),
            {
              "LC": 2,
              "system:index": "570"
            }),
        ee.Feature(
            ee.Geometry.Point([59.37773867072089, 35.8069730750731]),
            {
              "LC": 2,
              "system:index": "571"
            }),
        ee.Feature(
            ee.Geometry.Point([59.37765284003241, 35.8069730750731]),
            {
              "LC": 2,
              "system:index": "572"
            }),
        ee.Feature(
            ee.Geometry.Point([59.37589331091864, 35.8053198665593]),
            {
              "LC": 2,
              "system:index": "573"
            }),
        ee.Feature(
            ee.Geometry.Point([59.375828937902284, 35.805232854631676]),
            {
              "LC": 2,
              "system:index": "574"
            }),
        ee.Feature(
            ee.Geometry.Point([59.374820427312685, 35.80643361081413]),
            {
              "LC": 2,
              "system:index": "575"
            }),
        ee.Feature(
            ee.Geometry.Point([59.37913341940863, 35.804902208437376]),
            {
              "LC": 2,
              "system:index": "576"
            }),
        ee.Feature(
            ee.Geometry.Point([59.38014192999823, 35.804728183571726]),
            {
              "LC": 2,
              "system:index": "577"
            }),
        ee.Feature(
            ee.Geometry.Point([59.38020630301459, 35.80462376846931]),
            {
              "LC": 2,
              "system:index": "578"
            }),
        ee.Feature(
            ee.Geometry.Point([59.38119335593207, 35.814107580234335]),
            {
              "LC": 2,
              "system:index": "579"
            }),
        ee.Feature(
            ee.Geometry.Point([59.3824593585871, 35.81454259030294]),
            {
              "LC": 2,
              "system:index": "580"
            }),
        ee.Feature(
            ee.Geometry.Point([59.383789734258485, 35.815064599239335]),
            {
              "LC": 2,
              "system:index": "581"
            }),
        ee.Feature(
            ee.Geometry.Point([59.38464804114325, 35.81551700420815]),
            {
              "LC": 2,
              "system:index": "582"
            }),
        ee.Feature(
            ee.Geometry.Point([59.385785297765565, 35.815377802953854]),
            {
              "LC": 2,
              "system:index": "583"
            }),
        ee.Feature(
            ee.Geometry.Point([59.38808126868231, 35.81549960406471]),
            {
              "LC": 2,
              "system:index": "584"
            }),
        ee.Feature(
            ee.Geometry.Point([59.388038353338075, 35.81525600165613]),
            {
              "LC": 2,
              "system:index": "585"
            }),
        ee.Feature(
            ee.Geometry.Point([59.38900394858344, 35.81682200409838]),
            {
              "LC": 2,
              "system:index": "586"
            }),
        ee.Feature(
            ee.Geometry.Point([59.38475450926969, 35.82445014400549]),
            {
              "LC": 2,
              "system:index": "587"
            }),
        ee.Feature(
            ee.Geometry.Point([59.38575229102323, 35.82336275008194]),
            {
              "LC": 2,
              "system:index": "588"
            }),
        ee.Feature(
            ee.Geometry.Point([59.38609561377714, 35.822501523523066]),
            {
              "LC": 2,
              "system:index": "589"
            }),
        ee.Feature(
            ee.Geometry.Point([59.38680371695707, 35.82199696220836]),
            {
              "LC": 2,
              "system:index": "590"
            }),
        ee.Feature(
            ee.Geometry.Point([59.38818773680875, 35.822936487599506]),
            {
              "LC": 2,
              "system:index": "591"
            }),
        ee.Feature(
            ee.Geometry.Point([59.38845595771024, 35.82325835948158]),
            {
              "LC": 2,
              "system:index": "592"
            }),
        ee.Feature(
            ee.Geometry.Point([59.389099687873816, 35.82302348012878]),
            {
              "LC": 2,
              "system:index": "593"
            }),
        ee.Feature(
            ee.Geometry.Point([59.38927134925077, 35.82368462023547]),
            {
              "LC": 2,
              "system:index": "594"
            }),
        ee.Feature(
            ee.Geometry.Point([59.38918551856229, 35.82412827695629]),
            {
              "LC": 2,
              "system:index": "595"
            }),
        ee.Feature(
            ee.Geometry.Point([59.39031204634855, 35.82425006464192]),
            {
              "LC": 2,
              "system:index": "596"
            }),
        ee.Feature(
            ee.Geometry.Point([59.38995799475858, 35.82364982352505]),
            {
              "LC": 2,
              "system:index": "597"
            }),
        ee.Feature(
            ee.Geometry.Point([59.38975414687345, 35.821501097101894]),
            {
              "LC": 2,
              "system:index": "598"
            }),
        ee.Feature(
            ee.Geometry.Point([59.38855251723478, 35.821127021375304]),
            {
              "LC": 2,
              "system:index": "599"
            }),
        ee.Feature(
            ee.Geometry.Point([59.38983997756193, 35.82133580804472]),
            {
              "LC": 2,
              "system:index": "600"
            }),
        ee.Feature(
            ee.Geometry.Point([59.38979706221769, 35.82124881366587]),
            {
              "LC": 2,
              "system:index": "601"
            }),
        ee.Feature(
            ee.Geometry.Point([59.39023694449613, 35.821845767566295]),
            {
              "LC": 2,
              "system:index": "602"
            }),
        ee.Feature(
            ee.Geometry.Point([59.39058026725004, 35.82170657740857]),
            {
              "LC": 2,
              "system:index": "603"
            }),
        ee.Feature(
            ee.Geometry.Point([59.39157804900358, 35.821697878015605]),
            {
              "LC": 2,
              "system:index": "604"
            }),
        ee.Feature(
            ee.Geometry.Point([59.39123472624967, 35.82136730037659]),
            {
              "LC": 2,
              "system:index": "605"
            }),
        ee.Feature(
            ee.Geometry.Point([59.391127437889075, 35.821001923489675]),
            {
              "LC": 2,
              "system:index": "606"
            }),
        ee.Feature(
            ee.Geometry.Point([59.39106306487272, 35.82079313594206]),
            {
              "LC": 2,
              "system:index": "607"
            }),
        ee.Feature(
            ee.Geometry.Point([59.39227542334745, 35.82227203590606]),
            {
              "LC": 2,
              "system:index": "608"
            }),
        ee.Feature(
            ee.Geometry.Point([59.3935628836746, 35.82425545848245]),
            {
              "LC": 2,
              "system:index": "609"
            }),
        ee.Feature(
            ee.Geometry.Point([59.392897695838904, 35.82401188294085]),
            {
              "LC": 2,
              "system:index": "610"
            }),
        ee.Feature(
            ee.Geometry.Point([59.391653150855994, 35.82248951887099]),
            {
              "LC": 2,
              "system:index": "611"
            }),
        ee.Feature(
            ee.Geometry.Point([59.39178189688871, 35.824829597872956]),
            {
              "LC": 2,
              "system:index": "612"
            }),
        ee.Feature(
            ee.Geometry.Point([59.394399732887244, 35.82377700581785]),
            {
              "LC": 2,
              "system:index": "613"
            }),
        ee.Feature(
            ee.Geometry.Point([59.3954726164932, 35.82373350997806]),
            {
              "LC": 2,
              "system:index": "614"
            }),
        ee.Feature(
            ee.Geometry.Point([59.39449629241178, 35.82382920079416]),
            {
              "LC": 2,
              "system:index": "615"
            }),
        ee.Feature(
            ee.Geometry.Point([59.390912861167884, 35.824577325015916]),
            {
              "LC": 2,
              "system:index": "616"
            }),
        ee.Feature(
            ee.Geometry.Point([59.38859543257902, 35.82506447188115]),
            {
              "LC": 2,
              "system:index": "617"
            }),
        ee.Feature(
            ee.Geometry.Point([59.3870075648422, 35.82469041294753]),
            {
              "LC": 2,
              "system:index": "618"
            }),
        ee.Feature(
            ee.Geometry.Point([59.38618144446561, 35.82530804419252]),
            {
              "LC": 2,
              "system:index": "619"
            }),
        ee.Feature(
            ee.Geometry.Point([59.385645002662635, 35.82548202395727]),
            {
              "LC": 2,
              "system:index": "620"
            }),
        ee.Feature(
            ee.Geometry.Point([59.38496908599088, 35.82503837480344]),
            {
              "LC": 2,
              "system:index": "621"
            }),
        ee.Feature(
            ee.Geometry.Point([59.384389728843665, 35.825560314727014]),
            {
              "LC": 2,
              "system:index": "622"
            }),
        ee.Feature(
            ee.Geometry.Point([59.38470086508939, 35.82573429393879]),
            {
              "LC": 2,
              "system:index": "623"
            }),
        ee.Feature(
            ee.Geometry.Point([59.383874744712806, 35.82428155581757]),
            {
              "LC": 2,
              "system:index": "624"
            }),
        ee.Feature(
            ee.Geometry.Point([59.38274821692655, 35.824629519465915]),
            {
              "LC": 2,
              "system:index": "625"
            }),
        ee.Feature(
            ee.Geometry.Point([59.38259801322172, 35.824481635101755]),
            {
              "LC": 2,
              "system:index": "626"
            }),
        ee.Feature(
            ee.Geometry.Point([59.38244780951688, 35.82336814398277]),
            {
              "LC": 2,
              "system:index": "627"
            }),
        ee.Feature(
            ee.Geometry.Point([59.38320955687711, 35.82269830195671]),
            {
              "LC": 2,
              "system:index": "628"
            }),
        ee.Feature(
            ee.Geometry.Point([59.37905749732206, 35.822124147149545]),
            {
              "LC": 2,
              "system:index": "629"
            }),
        ee.Feature(
            ee.Geometry.Point([59.38006600791166, 35.82051475169103]),
            {
              "LC": 2,
              "system:index": "630"
            }),
        ee.Feature(
            ee.Geometry.Point([59.38404640608976, 35.8209062292652]),
            {
              "LC": 2,
              "system:index": "631"
            }),
        ee.Feature(
            ee.Geometry.Point([59.381922096549964, 35.825742992889346]),
            {
              "LC": 2,
              "system:index": "632"
            }),
        ee.Feature(
            ee.Geometry.Point([59.38197574073026, 35.82516886010612]),
            {
              "LC": 2,
              "system:index": "633"
            }),
        ee.Feature(
            ee.Geometry.Point([59.38276967459867, 35.825238452179825]),
            {
              "LC": 2,
              "system:index": "634"
            }),
        ee.Feature(
            ee.Geometry.Point([59.38169679099271, 35.82653459340084]),
            {
              "LC": 2,
              "system:index": "635"
            }),
        ee.Feature(
            ee.Geometry.Point([59.38285550528715, 35.826395411465384]),
            {
              "LC": 2,
              "system:index": "636"
            }),
        ee.Feature(
            ee.Geometry.Point([59.383134455024695, 35.826038756641715]),
            {
              "LC": 2,
              "system:index": "637"
            }),
        ee.Feature(
            ee.Geometry.Point([59.38373526984403, 35.82587347703361]),
            {
              "LC": 2,
              "system:index": "638"
            }),
        ee.Feature(
            ee.Geometry.Point([59.383359760581946, 35.825803885516706]),
            {
              "LC": 2,
              "system:index": "639"
            }),
        ee.Feature(
            ee.Geometry.Point([59.38355287963102, 35.82621273480471]),
            {
              "LC": 2,
              "system:index": "640"
            }),
        ee.Feature(
            ee.Geometry.Point([59.38356360846708, 35.826056154475175]),
            {
              "LC": 2,
              "system:index": "641"
            }),
        ee.Feature(
            ee.Geometry.Point([59.38384255820463, 35.8264041103435]),
            {
              "LC": 2,
              "system:index": "642"
            }),
        ee.Feature(
            ee.Geometry.Point([59.38373526984403, 35.826395411465384]),
            {
              "LC": 2,
              "system:index": "643"
            }),
        ee.Feature(
            ee.Geometry.Point([59.381643146812415, 35.825777788682146]),
            {
              "LC": 2,
              "system:index": "644"
            }),
        ee.Feature(
            ee.Geometry.Point([59.3814607565994, 35.825742992889346]),
            {
              "LC": 2,
              "system:index": "645"
            }),
        ee.Feature(
            ee.Geometry.Point([59.38126763755033, 35.825777788682146]),
            {
              "LC": 2,
              "system:index": "646"
            }),
        ee.Feature(
            ee.Geometry.Point([59.38160023146818, 35.82491658832738]),
            {
              "LC": 2,
              "system:index": "647"
            }),
        ee.Feature(
            ee.Geometry.Point([59.38175043517301, 35.82486439406618]),
            {
              "LC": 2,
              "system:index": "648"
            }),
        ee.Feature(
            ee.Geometry.Point([59.381160349189734, 35.824829597872956]),
            {
              "LC": 2,
              "system:index": "649"
            }),
        ee.Feature(
            ee.Geometry.Point([59.38097795897672, 35.82471651013963]),
            {
              "LC": 2,
              "system:index": "650"
            }),
        ee.Feature(
            ee.Geometry.Point([59.38073119574735, 35.82456862593757]),
            {
              "LC": 2,
              "system:index": "651"
            }),
        ee.Feature(
            ee.Geometry.Point([59.38020548278043, 35.82445553783243]),
            {
              "LC": 2,
              "system:index": "652"
            }),
        ee.Feature(
            ee.Geometry.Point([59.38280186110685, 35.8234986320313]),
            {
              "LC": 2,
              "system:index": "653"
            }),
        ee.Feature(
            ee.Geometry.Point([59.38202938491056, 35.824090175160755]),
            {
              "LC": 2,
              "system:index": "654"
            }),
        ee.Feature(
            ee.Geometry.Point([59.382168859779334, 35.82444683874073]),
            {
              "LC": 2,
              "system:index": "655"
            }),
        ee.Feature(
            ee.Geometry.Point([59.38357433730314, 35.82478610260999]),
            {
              "LC": 2,
              "system:index": "656"
            }),
        ee.Feature(
            ee.Geometry.Point([59.38382110053251, 35.82512536502905]),
            {
              "LC": 2,
              "system:index": "657"
            }),
        ee.Feature(
            ee.Geometry.Point([59.38379964286039, 35.8249687825543]),
            {
              "LC": 2,
              "system:index": "658"
            }),
        ee.Feature(
            ee.Geometry.Point([59.3834777777786, 35.825238452179825]),
            {
              "LC": 2,
              "system:index": "659"
            }),
        ee.Feature(
            ee.Geometry.Point([59.383123726188636, 35.825821283401666]),
            {
              "LC": 2,
              "system:index": "660"
            }),
        ee.Feature(
            ee.Geometry.Point([59.38250145369718, 35.825864778097355]),
            {
              "LC": 2,
              "system:index": "661"
            }),
        ee.Feature(
            ee.Geometry.Point([59.38244780951688, 35.82566470229985]),
            {
              "LC": 2,
              "system:index": "662"
            }),
        ee.Feature(
            ee.Geometry.Point([59.38501200133512, 35.82634321817667]),
            {
              "LC": 2,
              "system:index": "663"
            }),
        ee.Feature(
            ee.Geometry.Point([59.384421915351844, 35.82616924029971]),
            {
              "LC": 2,
              "system:index": "664"
            }),
        ee.Feature(
            ee.Geometry.Point([59.38426098281095, 35.825864778097355]),
            {
              "LC": 2,
              "system:index": "665"
            }),
        ee.Feature(
            ee.Geometry.Point([59.384389728843665, 35.82486439406618]),
            {
              "LC": 2,
              "system:index": "666"
            }),
        ee.Feature(
            ee.Geometry.Point([59.39157804900358, 35.825447228034854]),
            {
              "LC": 2,
              "system:index": "667"
            }),
        ee.Feature(
            ee.Geometry.Point([59.391846269905066, 35.82548202395727]),
            {
              "LC": 2,
              "system:index": "668"
            }),
        ee.Feature(
            ee.Geometry.Point([59.39198574477384, 35.825534217812354]),
            {
              "LC": 2,
              "system:index": "669"
            }),
        ee.Feature(
            ee.Geometry.Point([59.39068755561063, 35.82573429393879]),
            {
              "LC": 2,
              "system:index": "670"
            }),
        ee.Feature(
            ee.Geometry.Point([59.390859216987586, 35.82592567063126]),
            {
              "LC": 2,
              "system:index": "671"
            }),
        ee.Feature(
            ee.Geometry.Point([59.390859216987586, 35.825708197081326]),
            {
              "LC": 2,
              "system:index": "672"
            }),
        ee.Feature(
            ee.Geometry.Point([59.39018330031583, 35.82597786419458]),
            {
              "LC": 2,
              "system:index": "673"
            }),
        ee.Feature(
            ee.Geometry.Point([59.389904350578284, 35.82602135880443]),
            {
              "LC": 2,
              "system:index": "674"
            }),
        ee.Feature(
            ee.Geometry.Point([59.38977560454557, 35.82602135880443]),
            {
              "LC": 2,
              "system:index": "675"
            }),
        ee.Feature(
            ee.Geometry.Point([59.38975414687345, 35.82575169183899]),
            {
              "LC": 2,
              "system:index": "676"
            }),
        ee.Feature(
            ee.Geometry.Point([59.38980779105375, 35.8256038095657]),
            {
              "LC": 2,
              "system:index": "677"
            }),
        ee.Feature(
            ee.Geometry.Point([59.38980779105375, 35.825368937153556]),
            {
              "LC": 2,
              "system:index": "678"
            }),
        ee.Feature(
            ee.Geometry.Point([59.390129656135535, 35.8255255188389]),
            {
              "LC": 2,
              "system:index": "679"
            }),
        ee.Feature(
            ee.Geometry.Point([59.38476523810575, 35.819175013828705]),
            {
              "LC": 2,
              "system:index": "680"
            }),
        ee.Feature(
            ee.Geometry.Point([59.38431462699125, 35.81875742857436]),
            {
              "LC": 2,
              "system:index": "681"
            }),
        ee.Feature(
            ee.Geometry.Point([59.385108560859656, 35.8187487288582]),
            {
              "LC": 2,
              "system:index": "682"
            }),
        ee.Feature(
            ee.Geometry.Point([59.38530167990873, 35.81908801708183]),
            {
              "LC": 2,
              "system:index": "683"
            }),
        ee.Feature(
            ee.Geometry.Point([59.385387510597205, 35.819531699494036]),
            {
              "LC": 2,
              "system:index": "684"
            }),
        ee.Feature(
            ee.Geometry.Point([59.38620290213773, 35.819757889573374]),
            {
              "LC": 2,
              "system:index": "685"
            }),
        ee.Feature(
            ee.Geometry.Point([59.386127800285315, 35.81980138759167]),
            {
              "LC": 2,
              "system:index": "686"
            }),
        ee.Feature(
            ee.Geometry.Point([59.38475450926969, 35.82001017774772]),
            {
              "LC": 2,
              "system:index": "687"
            }),
        ee.Feature(
            ee.Geometry.Point([59.38346704894254, 35.819531699494036]),
            {
              "LC": 2,
              "system:index": "688"
            }),
        ee.Feature(
            ee.Geometry.Point([59.38324174338529, 35.82007977434438]),
            {
              "LC": 2,
              "system:index": "689"
            }),
        ee.Feature(
            ee.Geometry.Point([59.38283404761503, 35.82007977434438]),
            {
              "LC": 2,
              "system:index": "690"
            }),
        ee.Feature(
            ee.Geometry.Point([59.381868452369666, 35.819957980260206]),
            {
              "LC": 2,
              "system:index": "691"
            }),
        ee.Feature(
            ee.Geometry.Point([59.38219031745145, 35.81914021514139]),
            {
              "LC": 2,
              "system:index": "692"
            }),
        ee.Feature(
            ee.Geometry.Point([59.383896202384925, 35.819148914814654]),
            {
              "LC": 2,
              "system:index": "693"
            }),
        ee.Feature(
            ee.Geometry.Point([59.38507637435148, 35.819018419615716]),
            {
              "LC": 2,
              "system:index": "694"
            }),
        ee.Feature(
            ee.Geometry.Point([59.38484033995817, 35.818835725976854]),
            {
              "LC": 2,
              "system:index": "695"
            }),
        ee.Feature(
            ee.Geometry.Point([59.386889547645545, 35.819444703138075]),
            {
              "LC": 2,
              "system:index": "696"
            }),
        ee.Feature(
            ee.Geometry.Point([59.386353105842566, 35.81943600349723]),
            {
              "LC": 2,
              "system:index": "697"
            }),
        ee.Feature(
            ee.Geometry.Point([59.38626727515409, 35.818818326560745]),
            {
              "LC": 2,
              "system:index": "698"
            }),
        ee.Feature(
            ee.Geometry.Point([59.38578447753141, 35.81860953327005]),
            {
              "LC": 2,
              "system:index": "699"
            }),
        ee.Feature(
            ee.Geometry.Point([59.38604196959684, 35.818861825093855]),
            {
              "LC": 2,
              "system:index": "700"
            }),
        ee.Feature(
            ee.Geometry.Point([59.38555917197416, 35.81988838355676]),
            {
              "LC": 2,
              "system:index": "701"
            }),
        ee.Feature(
            ee.Geometry.Point([59.385140747367835, 35.81988838355676]),
            {
              "LC": 2,
              "system:index": "702"
            }),
        ee.Feature(
            ee.Geometry.Point([59.38426098281095, 35.81918371349814]),
            {
              "LC": 2,
              "system:index": "703"
            }),
        ee.Feature(
            ee.Geometry.Point([59.383627981483436, 35.81884442568347]),
            {
              "LC": 2,
              "system:index": "704"
            }),
        ee.Feature(
            ee.Geometry.Point([59.38350996428678, 35.81864433218995]),
            {
              "LC": 2,
              "system:index": "705"
            }),
        ee.Feature(
            ee.Geometry.Point([59.38281258994291, 35.81880092714083]),
            {
              "LC": 2,
              "system:index": "706"
            }),
        ee.Feature(
            ee.Geometry.Point([59.382125944435096, 35.81888792420228]),
            {
              "LC": 2,
              "system:index": "707"
            }),
        ee.Feature(
            ee.Geometry.Point([59.379647583305335, 35.819488201327964]),
            {
              "LC": 2,
              "system:index": "708"
            }),
        ee.Feature(
            ee.Geometry.Point([59.37895020896146, 35.81909671676082]),
            {
              "LC": 2,
              "system:index": "709"
            }),
        ee.Feature(
            ee.Geometry.Point([59.3805058901901, 35.818914023302135]),
            {
              "LC": 2,
              "system:index": "710"
            }),
        ee.Feature(
            ee.Geometry.Point([59.38108524733732, 35.818974921168405]),
            {
              "LC": 2,
              "system:index": "711"
            }),
        ee.Feature(
            ee.Geometry.Point([59.381149620353675, 35.82054085025604]),
            {
              "LC": 2,
              "system:index": "712"
            }),
        ee.Feature(
            ee.Geometry.Point([59.3814607565994, 35.82226333657505]),
            {
              "LC": 2,
              "system:index": "713"
            }),
        ee.Feature(
            ee.Geometry.Point([59.37929353171537, 35.823516030421565]),
            {
              "LC": 2,
              "system:index": "714"
            }),
        ee.Feature(
            ee.Geometry.Point([59.37779149466703, 35.823228956494575]),
            {
              "LC": 2,
              "system:index": "715"
            }),
        ee.Feature(
            ee.Geometry.Point([59.37707266265104, 35.820958426129195]),
            {
              "LC": 2,
              "system:index": "716"
            }),
        ee.Feature(
            ee.Geometry.Point([59.37648257666776, 35.82031466240759]),
            {
              "LC": 2,
              "system:index": "717"
            }),
        ee.Feature(
            ee.Geometry.Point([59.37625727111051, 35.821654381036495]),
            {
              "LC": 2,
              "system:index": "718"
            }),
        ee.Feature(
            ee.Geometry.Point([59.375892490684485, 35.82249821817719]),
            {
              "LC": 2,
              "system:index": "719"
            }),
        ee.Feature(
            ee.Geometry.Point([59.376525492012, 35.82416846730341]),
            {
              "LC": 2,
              "system:index": "720"
            }),
        ee.Feature(
            ee.Geometry.Point([59.38369235449979, 35.82317676112358]),
            {
              "LC": 2,
              "system:index": "721"
            }),
        ee.Feature(
            ee.Geometry.Point([59.38345632010648, 35.823081069520924]),
            {
              "LC": 2,
              "system:index": "722"
            }),
        ee.Feature(
            ee.Geometry.Point([59.382866234123206, 35.82312456571824]),
            {
              "LC": 2,
              "system:index": "723"
            }),
        ee.Feature(
            ee.Geometry.Point([59.38272675925443, 35.82303757329975]),
            {
              "LC": 2,
              "system:index": "724"
            }),
        ee.Feature(
            ee.Geometry.Point([59.38271603041837, 35.82287228744198]),
            {
              "LC": 2,
              "system:index": "725"
            }),
        ee.Feature(
            ee.Geometry.Point([59.38200792723844, 35.82277659547227]),
            {
              "LC": 2,
              "system:index": "726"
            }),
        ee.Feature(
            ee.Geometry.Point([59.38281258994291, 35.822750497642325]),
            {
              "LC": 2,
              "system:index": "727"
            }),
        ee.Feature(
            ee.Geometry.Point([59.38625654631803, 35.82609531657658]),
            {
              "LC": 2,
              "system:index": "728"
            }),
        ee.Feature(
            ee.Geometry.Point([59.38603124076078, 35.82599092957011]),
            {
              "LC": 2,
              "system:index": "729"
            }),
        ee.Feature(
            ee.Geometry.Point([59.386106342613196, 35.82573866040432]),
            {
              "LC": 2,
              "system:index": "730"
            }),
        ee.Feature(
            ee.Geometry.Point([59.38575229102323, 35.82635628349208]),
            {
              "LC": 2,
              "system:index": "731"
            }),
        ee.Feature(
            ee.Geometry.Point([59.38494762831876, 35.82590394029317]),
            {
              "LC": 2,
              "system:index": "732"
            }),
        ee.Feature(
            ee.Geometry.Point([59.38401421958158, 35.826138811122085]),
            {
              "LC": 2,
              "system:index": "733"
            }),
        ee.Feature(
            ee.Geometry.Point([59.384379000007605, 35.82455559430866]),
            {
              "LC": 2,
              "system:index": "734"
            }),
        ee.Feature(
            ee.Geometry.Point([59.38426098281095, 35.82443380709184]),
            {
              "LC": 2,
              "system:index": "735"
            }),
        ee.Feature(
            ee.Geometry.Point([59.387908787071204, 35.822798360648115]),
            {
              "LC": 2,
              "system:index": "736"
            }),
        ee.Feature(
            ee.Geometry.Point([59.38678225928495, 35.82253738203413]),
            {
              "LC": 2,
              "system:index": "737"
            }),
        ee.Feature(
            ee.Geometry.Point([59.38699683600614, 35.822572179232225]),
            {
              "LC": 2,
              "system:index": "738"
            }),
        ee.Feature(
            ee.Geometry.Point([59.387104124366736, 35.82245038897212]),
            {
              "LC": 2,
              "system:index": "739"
            }),
        ee.Feature(
            ee.Geometry.Point([59.3865569537277, 35.82085839910086]),
            {
              "LC": 2,
              "system:index": "740"
            }),
        ee.Feature(
            ee.Geometry.Point([59.38632091933439, 35.82070180820852]),
            {
              "LC": 2,
              "system:index": "741"
            }),
        ee.Feature(
            ee.Geometry.Point([59.38628873282621, 35.82146736074577]),
            {
              "LC": 2,
              "system:index": "742"
            }),
        ee.Feature(
            ee.Geometry.Point([59.385612816154456, 35.820771404198815]),
            {
              "LC": 2,
              "system:index": "743"
            }),
        ee.Feature(
            ee.Geometry.Point([59.384893984138465, 35.82071050771064]),
            {
              "LC": 2,
              "system:index": "744"
            }),
        ee.Feature(
            ee.Geometry.Point([59.384625763236976, 35.82114548160123]),
            {
              "LC": 2,
              "system:index": "745"
            }),
        ee.Feature(
            ee.Geometry.Point([59.38451847487638, 35.82056261604489]),
            {
              "LC": 2,
              "system:index": "746"
            }),
        ee.Feature(
            ee.Geometry.Point([59.38432535582731, 35.82185883362204]),
            {
              "LC": 2,
              "system:index": "747"
            }),
        ee.Feature(
            ee.Geometry.Point([59.38378891402433, 35.821841434868524]),
            {
              "LC": 2,
              "system:index": "748"
            }),
        ee.Feature(
            ee.Geometry.Point([59.38334903174589, 35.821797937968086]),
            {
              "LC": 2,
              "system:index": "749"
            }),
        ee.Feature(
            ee.Geometry.Point([59.3820186560745, 35.821510857827384]),
            {
              "LC": 2,
              "system:index": "750"
            }),
        ee.Feature(
            ee.Geometry.Point([59.381417841255164, 35.82114548160123]),
            {
              "LC": 2,
              "system:index": "751"
            }),
        ee.Feature(
            ee.Geometry.Point([59.37901458197782, 35.82185883362204]),
            {
              "LC": 2,
              "system:index": "752"
            }),
        ee.Feature(
            ee.Geometry.Point([59.37952956610868, 35.82148475958127]),
            {
              "LC": 2,
              "system:index": "753"
            }),
        ee.Feature(
            ee.Geometry.Point([59.38047370368192, 35.82269396930548]),
            {
              "LC": 2,
              "system:index": "754"
            }),
        ee.Feature(
            ee.Geometry.Point([59.37947592192838, 35.825016644222416]),
            {
              "LC": 2,
              "system:index": "755"
            }),
        ee.Feature(
            ee.Geometry.Point([59.37773785048673, 35.82530371168375]),
            {
              "LC": 2,
              "system:index": "756"
            }),
        ee.Feature(
            ee.Geometry.Point([59.375645727455115, 35.82621710124394]),
            {
              "LC": 2,
              "system:index": "757"
            }),
        ee.Feature(
            ee.Geometry.Point([59.376933187782264, 35.82177183981637]),
            {
              "LC": 2,
              "system:index": "758"
            }),
        ee.Feature(
            ee.Geometry.Point([59.37826356345365, 35.81961436293534]),
            {
              "LC": 2,
              "system:index": "759"
            }),
        ee.Feature(
            ee.Geometry.Point([59.3834777777786, 35.81840510629917]),
            {
              "LC": 2,
              "system:index": "760"
            }),
        ee.Feature(
            ee.Geometry.Point([59.3860526984329, 35.81792661837136]),
            {
              "LC": 2,
              "system:index": "761"
            }),
        ee.Feature(
            ee.Geometry.Point([59.3854411547775, 35.818004916593246]),
            {
              "LC": 2,
              "system:index": "762"
            }),
        ee.Feature(
            ee.Geometry.Point([59.386900276481605, 35.8180397157782]),
            {
              "LC": 2,
              "system:index": "763"
            }),
        ee.Feature(
            ee.Geometry.Point([59.39029058867643, 35.81857040145857]),
            {
              "LC": 2,
              "system:index": "764"
            }),
        ee.Feature(
            ee.Geometry.Point([59.39253291541288, 35.826530260959025]),
            {
              "LC": 2,
              "system:index": "765"
            }),
        ee.Feature(
            ee.Geometry.Point([59.39424952918241, 35.82633888572441]),
            {
              "LC": 2,
              "system:index": "766"
            }),
        ee.Feature(
            ee.Geometry.Point([59.39458212310026, 35.82600832741406]),
            {
              "LC": 2,
              "system:index": "767"
            }),
        ee.Feature(
            ee.Geometry.Point([59.39467868262479, 35.82587784349152]),
            {
              "LC": 2,
              "system:index": "768"
            }),
        ee.Feature(
            ee.Geometry.Point([59.394635767280555, 35.82671293688885]),
            {
              "LC": 2,
              "system:index": "769"
            }),
        ee.Feature(
            ee.Geometry.Point([59.393648714363074, 35.826782527608664]),
            {
              "LC": 2,
              "system:index": "770"
            }),
        ee.Feature(
            ee.Geometry.Point([59.39296206885526, 35.82646936888897]),
            {
              "LC": 2,
              "system:index": "771"
            }),
        ee.Feature(
            ee.Geometry.Point([59.39328393393705, 35.826399777894565]),
            {
              "LC": 2,
              "system:index": "772"
            }),
        ee.Feature(
            ee.Geometry.Point([59.39328393393705, 35.82595613387077]),
            {
              "LC": 2,
              "system:index": "773"
            }),
        ee.Feature(
            ee.Geometry.Point([59.39458212310026, 35.82504274130727]),
            {
              "LC": 2,
              "system:index": "774"
            }),
        ee.Feature(
            ee.Geometry.Point([59.394389004051185, 35.82487745962502]),
            {
              "LC": 2,
              "system:index": "775"
            }),
        ee.Feature(
            ee.Geometry.Point([59.39655622893522, 35.824390311611964]),
            {
              "LC": 2,
              "system:index": "776"
            }),
        ee.Feature(
            ee.Geometry.Point([59.397607654869056, 35.822963646659815]),
            {
              "LC": 2,
              "system:index": "777"
            }),
        ee.Feature(
            ee.Geometry.Point([59.39832648688505, 35.82344210422724]),
            {
              "LC": 2,
              "system:index": "778"
            }),
        ee.Feature(
            ee.Geometry.Point([59.3990024035568, 35.82269396930548]),
            {
              "LC": 2,
              "system:index": "779"
            }),
        ee.Feature(
            ee.Geometry.Point([59.397639841377234, 35.821615250725934]),
            {
              "LC": 2,
              "system:index": "780"
            }),
        ee.Feature(
            ee.Geometry.Point([59.39676007682035, 35.82030163008028]),
            {
              "LC": 2,
              "system:index": "781"
            }),
        ee.Feature(
            ee.Geometry.Point([59.39380964690397, 35.819875351159475]),
            {
              "LC": 2,
              "system:index": "782"
            }),
        ee.Feature(
            ee.Geometry.Point([59.39399203711698, 35.82156305429381]),
            {
              "LC": 2,
              "system:index": "783"
            }),
        ee.Feature(
            ee.Geometry.Point([59.38919624739835, 35.82387706314945]),
            {
              "LC": 2,
              "system:index": "784"
            }),
        ee.Feature(
            ee.Geometry.Point([59.38833794051359, 35.82399015207882]),
            {
              "LC": 2,
              "system:index": "785"
            }),
        ee.Feature(
            ee.Geometry.Point([59.3879624312515, 35.82661724954947]),
            {
              "LC": 2,
              "system:index": "786"
            }),
        ee.Feature(
            ee.Geometry.Point([59.38701829367826, 35.82657375526617]),
            {
              "LC": 2,
              "system:index": "787"
            }),
        ee.Feature(
            ee.Geometry.Point([59.38722214156339, 35.82632148795293]),
            {
              "LC": 2,
              "system:index": "788"
            }),
        ee.Feature(
            ee.Geometry.Point([59.38675007277677, 35.82632148795293]),
            {
              "LC": 2,
              "system:index": "789"
            }),
        ee.Feature(
            ee.Geometry.Point([59.49480922699572, 35.80779793320393]),
            {
              "LC": 2,
              "system:index": "790"
            }),
        ee.Feature(
            ee.Geometry.Point([59.492448883062615, 35.80805896027052]),
            {
              "LC": 2,
              "system:index": "791"
            }),
        ee.Feature(
            ee.Geometry.Point([59.491912441259636, 35.807989353136655]),
            {
              "LC": 2,
              "system:index": "792"
            }),
        ee.Feature(
            ee.Geometry.Point([59.49148328781725, 35.80713666079566]),
            {
              "LC": 2,
              "system:index": "793"
            }),
        ee.Feature(
            ee.Geometry.Point([59.48963792801501, 35.80480476152135]),
            {
              "LC": 2,
              "system:index": "794"
            }),
        ee.Feature(
            ee.Geometry.Point([59.48959501267077, 35.803464758576716]),
            {
              "LC": 2,
              "system:index": "795"
            }),
        ee.Feature(
            ee.Geometry.Point([59.49631126404406, 35.8054138462958]),
            {
              "LC": 2,
              "system:index": "796"
            }),
        ee.Feature(
            ee.Geometry.Point([59.50397165299059, 35.80593591524208]),
            {
              "LC": 2,
              "system:index": "797"
            }),
        ee.Feature(
            ee.Geometry.Point([59.50478704453112, 35.80718886671228]),
            {
              "LC": 2,
              "system:index": "798"
            }),
        ee.Feature(
            ee.Geometry.Point([59.50377853394152, 35.807119258815824]),
            {
              "LC": 2,
              "system:index": "799"
            }),
        ee.Feature(
            ee.Geometry.Point([59.50322063446642, 35.80657979554977]),
            {
              "LC": 2,
              "system:index": "800"
            }),
        ee.Feature(
            ee.Geometry.Point([59.50272710800768, 35.80605773083578]),
            {
              "LC": 2,
              "system:index": "801"
            }),
        ee.Feature(
            ee.Geometry.Point([59.500431137090935, 35.806092535256795]),
            {
              "LC": 2,
              "system:index": "802"
            }),
        ee.Feature(
            ee.Geometry.Point([59.499401168829216, 35.80698004283989]),
            {
              "LC": 2,
              "system:index": "803"
            }),
        ee.Feature(
            ee.Geometry.Point([59.49914367676379, 35.80732808232217]),
            {
              "LC": 2,
              "system:index": "804"
            }),
        ee.Feature(
            ee.Geometry.Point([59.49613960266711, 35.80727587649706]),
            {
              "LC": 2,
              "system:index": "805"
            }),
        ee.Feature(
            ee.Geometry.Point([59.49560316086413, 35.80678862047455]),
            {
              "LC": 2,
              "system:index": "806"
            }),
        ee.Feature(
            ee.Geometry.Point([59.491955356603874, 35.80765871841765]),
            {
              "LC": 2,
              "system:index": "807"
            }),
        ee.Feature(
            ee.Geometry.Point([59.492963867193474, 35.807571709052304]),
            {
              "LC": 2,
              "system:index": "808"
            }),
        ee.Feature(
            ee.Geometry.Point([59.49088247299792, 35.808163370856924]),
            {
              "LC": 2,
              "system:index": "809"
            }),
        ee.Feature(
            ee.Geometry.Point([59.493671970373406, 35.80905085529926]),
            {
              "LC": 2,
              "system:index": "810"
            }),
        ee.Feature(
            ee.Geometry.Point([59.49650438309313, 35.809764315992936]),
            {
              "LC": 2,
              "system:index": "811"
            }),
        ee.Feature(
            ee.Geometry.Point([59.500688629156365, 35.808789831492774]),
            {
              "LC": 2,
              "system:index": "812"
            }),
        ee.Feature(
            ee.Geometry.Point([59.50386436463, 35.808546208499365]),
            {
              "LC": 2,
              "system:index": "813"
            }),
        ee.Feature(
            ee.Geometry.Point([59.50822027207018, 35.80863321679709]),
            {
              "LC": 2,
              "system:index": "814"
            }),
        ee.Feature(
            ee.Geometry.Point([59.50849922180773, 35.810060139278804]),
            {
              "LC": 2,
              "system:index": "815"
            }),
        ee.Feature(
            ee.Geometry.Point([59.50551660538317, 35.811243421402445]),
            {
              "LC": 2,
              "system:index": "816"
            }),
        ee.Feature(
            ee.Geometry.Point([59.50281293869616, 35.811313025684164]),
            {
              "LC": 2,
              "system:index": "817"
            }),
        ee.Feature(
            ee.Geometry.Point([59.49950845718981, 35.81181765490203]),
            {
              "LC": 2,
              "system:index": "818"
            }),
        ee.Feature(
            ee.Geometry.Point([59.49854286194445, 35.81086059676244]),
            {
              "LC": 2,
              "system:index": "819"
            }),
        ee.Feature(
            ee.Geometry.Point([59.4973626899779, 35.80788494232145]),
            {
              "LC": 2,
              "system:index": "820"
            }),
        ee.Feature(
            ee.Geometry.Point([59.49749143601061, 35.806962640825745]),
            {
              "LC": 2,
              "system:index": "821"
            }),
        ee.Feature(
            ee.Geometry.Point([59.4963541793883, 35.808441798416276]),
            {
              "LC": 2,
              "system:index": "822"
            }),
        ee.Feature(
            ee.Geometry.Point([59.4948950576842, 35.80997313254441]),
            {
              "LC": 2,
              "system:index": "823"
            }),
        ee.Feature(
            ee.Geometry.Point([59.493779258734, 35.810060139278804]),
            {
              "LC": 2,
              "system:index": "824"
            }),
        ee.Feature(
            ee.Geometry.Point([59.491912441259636, 35.80979911878965]),
            {
              "LC": 2,
              "system:index": "825"
            }),
        ee.Feature(
            ee.Geometry.Point([59.491161422735466, 35.80894644587961]),
            {
              "LC": 2,
              "system:index": "826"
            }),
        ee.Feature(
            ee.Geometry.Point([59.489702301031365, 35.808981249034765]),
            {
              "LC": 2,
              "system:index": "827"
            }),
        ee.Feature(
            ee.Geometry.Point([59.48961647034289, 35.80818077260797]),
            {
              "LC": 2,
              "system:index": "828"
            }),
        ee.Feature(
            ee.Geometry.Point([59.48987396240832, 35.80661459974204]),
            {
              "LC": 2,
              "system:index": "829"
            }),
        ee.Feature(
            ee.Geometry.Point([59.48976667404772, 35.81554137136338]),
            {
              "LC": 2,
              "system:index": "830"
            }),
        ee.Feature(
            ee.Geometry.Point([59.488693790441765, 35.815297769082946]),
            {
              "LC": 2,
              "system:index": "831"
            }),
        ee.Feature(
            ee.Geometry.Point([59.48824317932726, 35.814758361373656]),
            {
              "LC": 2,
              "system:index": "832"
            }),
        ee.Feature(
            ee.Geometry.Point([59.487470703130974, 35.814340752888405]),
            {
              "LC": 2,
              "system:index": "833"
            }),
        ee.Feature(
            ee.Geometry.Point([59.48708446503283, 35.814097146924354]),
            {
              "LC": 2,
              "system:index": "834"
            }),
        ee.Feature(
            ee.Geometry.Point([59.48639781952502, 35.81496716479261]),
            {
              "LC": 2,
              "system:index": "835"
            }),
        ee.Feature(
            ee.Geometry.Point([59.48599012375475, 35.814688760111984]),
            {
              "LC": 2,
              "system:index": "836"
            }),
        ee.Feature(
            ee.Geometry.Point([59.48650510788561, 35.811243421402445]),
            {
              "LC": 2,
              "system:index": "837"
            }),
        ee.Feature(
            ee.Geometry.Point([59.48577554703356, 35.81113901486547]),
            {
              "LC": 2,
              "system:index": "838"
            }),
        ee.Feature(
            ee.Geometry.Point([59.4862690734923, 35.81054737522974]),
            {
              "LC": 2,
              "system:index": "839"
            }),
        ee.Feature(
            ee.Geometry.Point([59.486183242803826, 35.80979911878965]),
            {
              "LC": 2,
              "system:index": "840"
            }),
        ee.Feature(
            ee.Geometry.Point([59.48633344650866, 35.80936408273457]),
            {
              "LC": 2,
              "system:index": "841"
            }),
        ee.Feature(
            ee.Geometry.Point([59.486204700475945, 35.80887683952361]),
            {
              "LC": 2,
              "system:index": "842"
            }),
        ee.Feature(
            ee.Geometry.Point([59.48852212906481, 35.81089539907871]),
            {
              "LC": 2,
              "system:index": "843"
            }),
        ee.Feature(
            ee.Geometry.Point([59.49015291214587, 35.81242668589429]),
            {
              "LC": 2,
              "system:index": "844"
            }),
        ee.Feature(
            ee.Geometry.Point([59.49081809998156, 35.8130531128988]),
            {
              "LC": 2,
              "system:index": "845"
            }),
        ee.Feature(
            ee.Geometry.Point([59.49156911850573, 35.81336632454786]),
            {
              "LC": 2,
              "system:index": "846"
            }),
        ee.Feature(
            ee.Geometry.Point([59.49184806824328, 35.813331523314524]),
            {
              "LC": 2,
              "system:index": "847"
            }),
        ee.Feature(
            ee.Geometry.Point([59.489444808965935, 35.81206126785946]),
            {
              "LC": 2,
              "system:index": "848"
            }),
        ee.Feature(
            ee.Geometry.Point([59.4913116264403, 35.81157404119722]),
            {
              "LC": 2,
              "system:index": "849"
            }),
        ee.Feature(
            ee.Geometry.Point([59.49156911850573, 35.81072138734488]),
            {
              "LC": 2,
              "system:index": "850"
            }),
        ee.Feature(
            ee.Geometry.Point([59.490195827490105, 35.810582177683266]),
            {
              "LC": 2,
              "system:index": "851"
            }),
        ee.Feature(
            ee.Geometry.Point([59.49002416611315, 35.8098861257147]),
            {
              "LC": 2,
              "system:index": "852"
            }),
        ee.Feature(
            ee.Geometry.Point([59.4892946052611, 35.80979911878965]),
            {
              "LC": 2,
              "system:index": "853"
            }),
        ee.Feature(
            ee.Geometry.Point([59.49474485397936, 35.81293130803496]),
            {
              "LC": 2,
              "system:index": "854"
            }),
        ee.Feature(
            ee.Geometry.Point([59.49412258148791, 35.812270078370986]),
            {
              "LC": 2,
              "system:index": "855"
            }),
        ee.Feature(
            ee.Geometry.Point([59.49360759735705, 35.813975343662065]),
            {
              "LC": 2,
              "system:index": "856"
            }),
        ee.Feature(
            ee.Geometry.Point([59.49360759735705, 35.81340112576592]),
            {
              "LC": 2,
              "system:index": "857"
            }),
        ee.Feature(
            ee.Geometry.Point([59.493457393652214, 35.81345332756447]),
            {
              "LC": 2,
              "system:index": "858"
            }),
        ee.Feature(
            ee.Geometry.Point([59.494465904241814, 35.81463655912568]),
            {
              "LC": 2,
              "system:index": "859"
            }),
        ee.Feature(
            ee.Geometry.Point([59.49438007355334, 35.81566317222334]),
            {
              "LC": 2,
              "system:index": "860"
            }),
        ee.Feature(
            ee.Geometry.Point([59.493714885717644, 35.81467135978703]),
            {
              "LC": 2,
              "system:index": "861"
            }),
        ee.Feature(
            ee.Geometry.Point([59.49632022595735, 35.81329672206595]),
            {
              "LC": 2,
              "system:index": "862"
            }),
        ee.Feature(
            ee.Geometry.Point([59.496105649236156, 35.81340112576592]),
            {
              "LC": 2,
              "system:index": "863"
            }),
        ee.Feature(
            ee.Geometry.Point([59.49546191907258, 35.81381873919312]),
            {
              "LC": 2,
              "system:index": "864"
            }),
        ee.Feature(
            ee.Geometry.Point([59.49584815717073, 35.81491496398936]),
            {
              "LC": 2,
              "system:index": "865"
            }),
        ee.Feature(
            ee.Geometry.Point([59.49728582120271, 35.81435815328581]),
            {
              "LC": 2,
              "system:index": "866"
            }),
        ee.Feature(
            ee.Geometry.Point([59.496921040776684, 35.81430595208216]),
            {
              "LC": 2,
              "system:index": "867"
            }),
        ee.Feature(
            ee.Geometry.Point([59.497157075169994, 35.81597637357663]),
            {
              "LC": 2,
              "system:index": "868"
            }),
        ee.Feature(
            ee.Geometry.Point([59.49724290585847, 35.81677677142182]),
            {
              "LC": 2,
              "system:index": "869"
            }),
        ee.Feature(
            ee.Geometry.Point([59.49653480267854, 35.816654972270236]),
            {
              "LC": 2,
              "system:index": "870"
            }),
        ee.Feature(
            ee.Geometry.Point([59.49520442700715, 35.816672372160475]),
            {
              "LC": 2,
              "system:index": "871"
            }),
        ee.Feature(
            ee.Geometry.Point([59.49428174710603, 35.81670717192951]),
            {
              "LC": 2,
              "system:index": "872"
            }),
        ee.Feature(
            ee.Geometry.Point([59.49344489789338, 35.81648097315814]),
            {
              "LC": 2,
              "system:index": "873"
            }),
        ee.Feature(
            ee.Geometry.Point([59.492157437566235, 35.816672372160475]),
            {
              "LC": 2,
              "system:index": "874"
            }),
        ee.Feature(
            ee.Geometry.Point([59.49125621533723, 35.81642877335015]),
            {
              "LC": 2,
              "system:index": "875"
            }),
        ee.Feature(
            ee.Geometry.Point([59.48893878674836, 35.816585372671156]),
            {
              "LC": 2,
              "system:index": "876"
            }),
        ee.Feature(
            ee.Geometry.Point([59.50582597470613, 35.815558771497685]),
            {
              "LC": 2,
              "system:index": "877"
            }),
        ee.Feature(
            ee.Geometry.Point([59.498380162480785, 35.80964250608436]),
            {
              "LC": 2,
              "system:index": "878"
            }),
        ee.Feature(
            ee.Geometry.Point([59.489904381993725, 35.80790234413351]),
            {
              "LC": 2,
              "system:index": "879"
            }),
        ee.Feature(
            ee.Geometry.Point([59.4880804798636, 35.80708445484472]),
            {
              "LC": 2,
              "system:index": "880"
            }),
        ee.Feature(
            ee.Geometry.Point([59.48621366238923, 35.80731068038429]),
            {
              "LC": 2,
              "system:index": "881"
            }),
        ee.Feature(
            ee.Geometry.Point([59.4846043369803, 35.80644057862824]),
            {
              "LC": 2,
              "system:index": "882"
            }),
        ee.Feature(
            ee.Geometry.Point([59.48374603009553, 35.8064753828815]),
            {
              "LC": 2,
              "system:index": "883"
            }),
        ee.Feature(
            ee.Geometry.Point([59.483123757604076, 35.80666680600183]),
            {
              "LC": 2,
              "system:index": "884"
            }),
        ee.Feature(
            ee.Geometry.Point([59.48132131314607, 35.809277075237574]),
            {
              "LC": 2,
              "system:index": "885"
            }),
        ee.Feature(
            ee.Geometry.Point([59.48179338193269, 35.80887683952361]),
            {
              "LC": 2,
              "system:index": "886"
            }),
        ee.Feature(
            ee.Geometry.Point([59.48175046658845, 35.80805896027052]),
            {
              "LC": 2,
              "system:index": "887"
            }),
        ee.Feature(
            ee.Geometry.Point([59.4815788052115, 35.80570968578669]),
            {
              "LC": 2,
              "system:index": "888"
            }),
        ee.Feature(
            ee.Geometry.Point([59.486878850224926, 35.80329073056173]),
            {
              "LC": 2,
              "system:index": "889"
            }),
        ee.Feature(
            ee.Geometry.Point([59.485934712651684, 35.80379541075482]),
            {
              "LC": 2,
              "system:index": "890"
            }),
        ee.Feature(
            ee.Geometry.Point([59.48911044812532, 35.80903345373885]),
            {
              "LC": 2,
              "system:index": "891"
            }),
        ee.Feature(
            ee.Geometry.Point([59.48782298779817, 35.81035596146266]),
            {
              "LC": 2,
              "system:index": "892"
            }),
        ee.Feature(
            ee.Geometry.Point([59.48805902219148, 35.81357513162754]),
            {
              "LC": 2,
              "system:index": "893"
            }),
        ee.Feature(
            ee.Geometry.Point([59.488166310552074, 35.81312271559426]),
            {
              "LC": 2,
              "system:index": "894"
            }),
        ee.Feature(
            ee.Geometry.Point([59.48904607510896, 35.81347072815633]),
            {
              "LC": 2,
              "system:index": "895"
            }),
        ee.Feature(
            ee.Geometry.Point([59.50653407788606, 35.81442775483728]),
            {
              "LC": 2,
              "system:index": "896"
            }),
        ee.Feature(
            ee.Geometry.Point([59.50606200909944, 35.81460175844908]),
            {
              "LC": 2,
              "system:index": "897"
            }),
        ee.Feature(
            ee.Geometry.Point([59.50541827893586, 35.81416674870463]),
            {
              "LC": 2,
              "system:index": "898"
            }),
        ee.Feature(
            ee.Geometry.Point([59.505096413854076, 35.81404494554911]),
            {
              "LC": 2,
              "system:index": "899"
            }),
        ee.Feature(
            ee.Geometry.Point([59.50728509641023, 35.81465395945825]),
            {
              "LC": 2,
              "system:index": "900"
            }),
        ee.Feature(
            ee.Geometry.Point([59.506898858312084, 35.81432335248719]),
            {
              "LC": 2,
              "system:index": "901"
            }),
        ee.Feature(
            ee.Geometry.Point([59.50543973660798, 35.80457852884408]),
            {
              "LC": 2,
              "system:index": "902"
            }),
        ee.Feature(
            ee.Geometry.Point([59.50518224454255, 35.80430008774137]),
            {
              "LC": 2,
              "system:index": "903"
            }),
        ee.Feature(
            ee.Geometry.Point([59.50428102231355, 35.803778008042926]),
            {
              "LC": 2,
              "system:index": "904"
            }),
        ee.Feature(
            ee.Geometry.Point([59.50174901700349, 35.80468294400596]),
            {
              "LC": 2,
              "system:index": "905"
            }),
        ee.Feature(
            ee.Geometry.Point([59.50048301434846, 35.80473515153545]),
            {
              "LC": 2,
              "system:index": "906"
            }),
        ee.Feature(
            ee.Geometry.Point([59.49780080533357, 35.80322111924897]),
            {
              "LC": 2,
              "system:index": "907"
            }),
        ee.Feature(
            ee.Geometry.Point([59.49323032117219, 35.803186313569704]),
            {
              "LC": 2,
              "system:index": "908"
            }),
        ee.Feature(
            ee.Geometry.Point([59.49119184232087, 35.80296007628279]),
            {
              "LC": 2,
              "system:index": "909"
            }),
        ee.Feature(
            ee.Geometry.Point([59.49095580792756, 35.8045959313806]),
            {
              "LC": 2,
              "system:index": "910"
            }),
        ee.Feature(
            ee.Geometry.Point([59.49505422330232, 35.80499618866803]),
            {
              "LC": 2,
              "system:index": "911"
            }),
        ee.Feature(
            ee.Geometry.Point([59.4945821545157, 35.80635356792838]),
            {
              "LC": 2,
              "system:index": "912"
            }),
        ee.Feature(
            ee.Geometry.Point([59.489410855534985, 35.80553566269018]),
            {
              "LC": 2,
              "system:index": "913"
            }),
        ee.Feature(
            ee.Geometry.Point([59.48653552747102, 35.80569228349419]),
            {
              "LC": 2,
              "system:index": "914"
            }),
        ee.Feature(
            ee.Geometry.Point([59.485162236455395, 35.80577929491852]),
            {
              "LC": 2,
              "system:index": "915"
            }),
        ee.Feature(
            ee.Geometry.Point([59.48775861478181, 35.806562393447955]),
            {
              "LC": 2,
              "system:index": "916"
            }),
        ee.Feature(
            ee.Geometry.Point([59.48256585812898, 35.80238577873757]),
            {
              "LC": 2,
              "system:index": "917"
            }),
        ee.Feature(
            ee.Geometry.Point([59.48447559094758, 35.80261201766013]),
            {
              "LC": 2,
              "system:index": "918"
            }),
        ee.Feature(
            ee.Geometry.Point([59.48383186078401, 35.802994882061185]),
            {
              "LC": 2,
              "system:index": "919"
            }),
        ee.Feature(
            ee.Geometry.Point([59.48269460416169, 35.80386502156429]),
            {
              "LC": 2,
              "system:index": "920"
            }),
        ee.Feature(
            ee.Geometry.Point([59.47808120465608, 35.80250759977595]),
            {
              "LC": 2,
              "system:index": "921"
            }),
        ee.Feature(
            ee.Geometry.Point([59.47610709882112, 35.80423047731316]),
            {
              "LC": 2,
              "system:index": "922"
            }),
        ee.Feature(
            ee.Geometry.Point([59.47786662793489, 35.806162144053125]),
            {
              "LC": 2,
              "system:index": "923"
            }),
        ee.Feature(
            ee.Geometry.Point([59.47786662793489, 35.80677121841845]),
            {
              "LC": 2,
              "system:index": "924"
            }),
        ee.Feature(
            ee.Geometry.Point([59.477137067082836, 35.810529973997255]),
            {
              "LC": 2,
              "system:index": "925"
            }),
        ee.Feature(
            ee.Geometry.Point([59.47333905911775, 35.80974691458888]),
            {
              "LC": 2,
              "system:index": "926"
            }),
        ee.Feature(
            ee.Geometry.Point([59.48228690839143, 35.811278223550914]),
            {
              "LC": 2,
              "system:index": "927"
            }),
        ee.Feature(
            ee.Geometry.Point([59.483681657079174, 35.81597637357663]),
            {
              "LC": 2,
              "system:index": "928"
            }),
        ee.Feature(
            ee.Geometry.Point([59.48183629727693, 35.81493236426091]),
            {
              "LC": 2,
              "system:index": "929"
            }),
        ee.Feature(
            ee.Geometry.Point([59.481922127965404, 35.81293130803496]),
            {
              "LC": 2,
              "system:index": "930"
            }),
        ee.Feature(
            ee.Geometry.Point([59.48286626553865, 35.81301831152819]),
            {
              "LC": 2,
              "system:index": "931"
            }),
        ee.Feature(
            ee.Geometry.Point([59.488681294682934, 35.81990868542572]),
            {
              "LC": 2,
              "system:index": "932"
            }),
        ee.Feature(
            ee.Geometry.Point([59.49247930264802, 35.81877773073253]),
            {
              "LC": 2,
              "system:index": "933"
            }),
        ee.Feature(
            ee.Geometry.Point([59.50196359372468, 35.819003922960114]),
            {
              "LC": 2,
              "system:index": "934"
            }),
        ee.Feature(
            ee.Geometry.Point([59.51024625516267, 35.81743796355563]),
            {
              "LC": 2,
              "system:index": "935"
            }),
        ee.Feature(
            ee.Geometry.Point([59.510589577916576, 35.81343592696877]),
            {
              "LC": 2,
              "system:index": "936"
            }),
        ee.Feature(
            ee.Geometry.Point([59.45752475476594, 35.814462555590154]),
            {
              "LC": 2,
              "system:index": "937"
            }),
        ee.Feature(
            ee.Geometry.Point([59.45675227856965, 35.81279210224749]),
            {
              "LC": 2,
              "system:index": "938"
            }),
        ee.Feature(
            ee.Geometry.Point([59.45280406689973, 35.81007754061424]),
            {
              "LC": 2,
              "system:index": "939"
            }),
        ee.Feature(
            ee.Geometry.Point([59.45314738965364, 35.812513689940424]),
            {
              "LC": 2,
              "system:index": "940"
            }),
        ee.Feature(
            ee.Geometry.Point([59.45529315686555, 35.81320971887777]),
            {
              "LC": 2,
              "system:index": "941"
            }),
        ee.Feature(
            ee.Geometry.Point([59.45434901929231, 35.80833738819591]),
            {
              "LC": 2,
              "system:index": "942"
            }),
        ee.Feature(
            ee.Geometry.Point([59.45872638440461, 35.80896384745908]),
            {
              "LC": 2,
              "system:index": "943"
            }),
        ee.Feature(
            ee.Geometry.Point([59.45881221509309, 35.81237448342084]),
            {
              "LC": 2,
              "system:index": "944"
            }),
        ee.Feature(
            ee.Geometry.Point([59.4510874531302, 35.80193329895939]),
            {
              "LC": 2,
              "system:index": "945"
            }),
        ee.Feature(
            ee.Geometry.Point([59.445422627690746, 35.798939906274214]),
            {
              "LC": 2,
              "system:index": "946"
            }),
        ee.Feature(
            ee.Geometry.Point([59.44027278638215, 35.79594640079822]),
            {
              "LC": 2,
              "system:index": "947"
            }),
        ee.Feature(
            ee.Geometry.Point([59.438985326055004, 35.80861581514518]),
            {
              "LC": 2,
              "system:index": "948"
            }),
        ee.Feature(
            ee.Geometry.Point([59.43177554822297, 35.80416086682397]),
            {
              "LC": 2,
              "system:index": "949"
            }),
        ee.Feature(
            ee.Geometry.Point([59.429458119634106, 35.81174805106264]),
            {
              "LC": 2,
              "system:index": "950"
            }),
        ee.Feature(
            ee.Geometry.Point([59.43984363293977, 35.802907867586626]),
            {
              "LC": 2,
              "system:index": "951"
            }),
        ee.Feature(
            ee.Geometry.Point([59.44516513562532, 35.81689857038651]),
            {
              "LC": 2,
              "system:index": "952"
            }),
        ee.Feature(
            ee.Geometry.Point([59.444220998052074, 35.814114547375155]),
            {
              "LC": 2,
              "system:index": "953"
            }),
        ee.Feature(
            ee.Geometry.Point([59.44576595044465, 35.81146963509496]),
            {
              "LC": 2,
              "system:index": "954"
            }),
        ee.Feature(
            ee.Geometry.Point([59.45074413037629, 35.808267781306064]),
            {
              "LC": 2,
              "system:index": "955"
            }),
        ee.Feature(
            ee.Geometry.Point([59.4510874531302, 35.806179546242646]),
            {
              "LC": 2,
              "system:index": "956"
            }),
        ee.Feature(
            ee.Geometry.Point([59.455207326177074, 35.804856968970746]),
            {
              "LC": 2,
              "system:index": "957"
            }),
        ee.Feature(
            ee.Geometry.Point([59.46164462781282, 35.80367359169144]),
            {
              "LC": 2,
              "system:index": "958"
            }),
        ee.Feature(
            ee.Geometry.Point([59.46087215161653, 35.801515623030376]),
            {
              "LC": 2,
              "system:index": "959"
            }),
        ee.Feature(
            ee.Geometry.Point([59.45786807751985, 35.80012335407303]),
            {
              "LC": 2,
              "system:index": "960"
            }),
        ee.Feature(
            ee.Geometry.Point([59.448426701787426, 35.79594640079822]),
            {
              "LC": 2,
              "system:index": "961"
            }),
        ee.Feature(
            ee.Geometry.Point([59.444220998052074, 35.79288316216408]),
            {
              "LC": 2,
              "system:index": "962"
            }),
        ee.Feature(
            ee.Geometry.Point([59.43658206677766, 35.788496955804256]),
            {
              "LC": 2,
              "system:index": "963"
            }),
        ee.Feature(
            ee.Geometry.Point([59.429458119634106, 35.78905394780846]),
            {
              "LC": 2,
              "system:index": "964"
            }),
        ee.Feature(
            ee.Geometry.Point([59.37667224622102, 35.79914875128442]),
            {
              "LC": 2,
              "system:index": "965"
            }),
        ee.Feature(
            ee.Geometry.Point([59.37864635205598, 35.79699065970446]),
            {
              "LC": 2,
              "system:index": "966"
            }),
        ee.Feature(
            ee.Geometry.Point([59.38422534680696, 35.79559831144621]),
            {
              "LC": 2,
              "system:index": "967"
            }),
        ee.Feature(
            ee.Geometry.Point([59.388516881230785, 35.79253505939257]),
            {
              "LC": 2,
              "system:index": "968"
            }),
        ee.Feature(
            ee.Geometry.Point([59.50388357196192, 35.85161462286047]),
            {
              "LC": 2,
              "system:index": "969"
            }),
        ee.Feature(
            ee.Geometry.Point([59.5193330958877, 35.8511798159888]),
            {
              "LC": 2,
              "system:index": "970"
            }),
        ee.Feature(
            ee.Geometry.Point([59.519268722871345, 35.85076239914887]),
            {
              "LC": 2,
              "system:index": "971"
            }),
        ee.Feature(
            ee.Geometry.Point([59.5179276183639, 35.85036237261533]),
            {
              "LC": 2,
              "system:index": "972"
            }),
        ee.Feature(
            ee.Geometry.Point([59.517047853807014, 35.85204073128146]),
            {
              "LC": 2,
              "system:index": "973"
            }),
        ee.Feature(
            ee.Geometry.Point([59.51906487498621, 35.84821436954465]),
            {
              "LC": 2,
              "system:index": "974"
            }),
        ee.Feature(
            ee.Geometry.Point([59.51910779033045, 35.84784911627098]),
            {
              "LC": 2,
              "system:index": "975"
            }),
        ee.Feature(
            ee.Geometry.Point([59.51932236705164, 35.84732732296179]),
            {
              "LC": 2,
              "system:index": "976"
            }),
        ee.Feature(
            ee.Geometry.Point([59.51941892657618, 35.84688379594961]),
            {
              "LC": 2,
              "system:index": "977"
            }),
        ee.Feature(
            ee.Geometry.Point([59.51959058795313, 35.84656201989801]),
            {
              "LC": 2,
              "system:index": "978"
            }),
        ee.Feature(
            ee.Geometry.Point([59.52018067393641, 35.846579413231474]),
            {
              "LC": 2,
              "system:index": "979"
            }),
        ee.Feature(
            ee.Geometry.Point([59.5214574054275, 35.84782302668707]),
            {
              "LC": 2,
              "system:index": "980"
            }),
        ee.Feature(
            ee.Geometry.Point([59.52098533664088, 35.848962263855896]),
            {
              "LC": 2,
              "system:index": "981"
            }),
        ee.Feature(
            ee.Geometry.Point([59.52058836970667, 35.849284030168505]),
            {
              "LC": 2,
              "system:index": "982"
            }),
        ee.Feature(
            ee.Geometry.Point([59.520502539018196, 35.85005800324878]),
            {
              "LC": 2,
              "system:index": "983"
            }),
        ee.Feature(
            ee.Geometry.Point([60.33472840431292, 35.93137430435088]),
            {
              "LC": 2,
              "system:index": "984"
            }),
        ee.Feature(
            ee.Geometry.Point([60.34846131446917, 35.92748227228405]),
            {
              "LC": 2,
              "system:index": "985"
            }),
        ee.Feature(
            ee.Geometry.Point([60.34502808693011, 35.92192189413915]),
            {
              "LC": 2,
              "system:index": "986"
            }),
        ee.Feature(
            ee.Geometry.Point([60.38382355812151, 35.92303400104576]),
            {
              "LC": 2,
              "system:index": "987"
            }),
        ee.Feature(
            ee.Geometry.Point([60.41214768531878, 35.91177319622042]),
            {
              "LC": 2,
              "system:index": "988"
            }),
        ee.Feature(
            ee.Geometry.Point([60.366829081803154, 35.898146869678435]),
            {
              "LC": 2,
              "system:index": "989"
            }),
        ee.Feature(
            ee.Geometry.Point([60.36219422462542, 35.89800781343741]),
            {
              "LC": 2,
              "system:index": "990"
            }),
        ee.Feature(
            ee.Geometry.Point([60.35944764259417, 35.8971734708612]),
            {
              "LC": 2,
              "system:index": "991"
            }),
        ee.Feature(
            ee.Geometry.Point([60.3556710923012, 35.90023268397987]),
            {
              "LC": 2,
              "system:index": "992"
            }),
        ee.Feature(
            ee.Geometry.Point([60.356529399185966, 35.89133282659746]),
            {
              "LC": 2,
              "system:index": "993"
            }),
        ee.Feature(
            ee.Geometry.Point([60.363739177018, 35.8878560480577]),
            {
              "LC": 2,
              "system:index": "994"
            }),
        ee.Feature(
            ee.Geometry.Point([60.35361115577776, 35.88437911685876]),
            {
              "LC": 2,
              "system:index": "995"
            }),
        ee.Feature(
            ee.Geometry.Point([60.346058055191826, 35.88326646663449]),
            {
              "LC": 2,
              "system:index": "996"
            }),
        ee.Feature(
            ee.Geometry.Point([60.33816163185198, 35.87798116460532]),
            {
              "LC": 2,
              "system:index": "997"
            }),
        ee.Feature(
            ee.Geometry.Point([60.33747498634417, 35.875755668770005]),
            {
              "LC": 2,
              "system:index": "998"
            }),
        ee.Feature(
            ee.Geometry.Point([60.3336984360512, 35.86963523285644]),
            {
              "LC": 2,
              "system:index": "999"
            }),
        ee.Feature(
            ee.Geometry.Point([60.3336984360512, 35.86699217119058]),
            {
              "LC": 2,
              "system:index": "1000"
            }),
        ee.Feature(
            ee.Geometry.Point([60.332325145035576, 35.861984023124506]),
            {
              "LC": 2,
              "system:index": "1001"
            }),
        ee.Feature(
            ee.Geometry.Point([60.33215348365862, 35.85975807795885]),
            {
              "LC": 2,
              "system:index": "1002"
            }),
        ee.Feature(
            ee.Geometry.Point([60.32099549415667, 35.85961895431047]),
            {
              "LC": 2,
              "system:index": "1003"
            }),
        ee.Feature(
            ee.Geometry.Point([60.32219712379534, 35.86657483760587]),
            {
              "LC": 2,
              "system:index": "1004"
            }),
        ee.Feature(
            ee.Geometry.Point([60.32254044654925, 35.8745037998877]),
            {
              "LC": 2,
              "system:index": "1005"
            }),
        ee.Feature(
            ee.Geometry.Point([60.32030884864886, 35.88090203300679]),
            {
              "LC": 2,
              "system:index": "1006"
            }),
        ee.Feature(
            ee.Geometry.Point([60.298851176529716, 35.86740950257755]),
            {
              "LC": 2,
              "system:index": "1007"
            }),
        ee.Feature(
            ee.Geometry.Point([60.28769318702776, 35.86671394904496]),
            {
              "LC": 2,
              "system:index": "1008"
            }),
        ee.Feature(
            ee.Geometry.Point([60.277393504410576, 35.87116538615904]),
            {
              "LC": 2,
              "system:index": "1009"
            }),
        ee.Feature(
            ee.Geometry.Point([60.28220002296526, 35.87923297853729]),
            {
              "LC": 2,
              "system:index": "1010"
            }),
        ee.Feature(
            ee.Geometry.Point([60.27636353614886, 35.88326646663449]),
            {
              "LC": 2,
              "system:index": "1011"
            }),
        ee.Feature(
            ee.Geometry.Point([60.270183726578544, 35.885074515311]),
            {
              "LC": 2,
              "system:index": "1012"
            }),
        ee.Feature(
            ee.Geometry.Point([60.28082673194964, 35.89967647220713]),
            {
              "LC": 2,
              "system:index": "1013"
            }),
        ee.Feature(
            ee.Geometry.Point([60.27756516578753, 35.89828592567519]),
            {
              "LC": 2,
              "system:index": "1014"
            }),
        ee.Feature(
            ee.Geometry.Point([60.27378861549456, 35.90204034524718]),
            {
              "LC": 2,
              "system:index": "1015"
            }),
        ee.Feature(
            ee.Geometry.Point([60.26898209693987, 35.90078889184399]),
            {
              "LC": 2,
              "system:index": "1016"
            }),
        ee.Feature(
            ee.Geometry.Point([60.26606385353167, 35.90648979708829]),
            {
              "LC": 2,
              "system:index": "1017"
            }),
        ee.Feature(
            ee.Geometry.Point([60.26280228736956, 35.90913154075307]),
            {
              "LC": 2,
              "system:index": "1018"
            }),
        ee.Feature(
            ee.Geometry.Point([60.2593690598305, 35.91038286223193]),
            {
              "LC": 2,
              "system:index": "1019"
            }),
        ee.Feature(
            ee.Geometry.Point([60.257652446060966, 35.91191222827552]),
            {
              "LC": 2,
              "system:index": "1020"
            }),
        ee.Feature(
            ee.Geometry.Point([60.25833909156878, 35.91594405159137]),
            {
              "LC": 2,
              "system:index": "1021"
            }),
        ee.Feature(
            ee.Geometry.Point([60.26331727150042, 35.926509234332244]),
            {
              "LC": 2,
              "system:index": "1022"
            }),
        ee.Feature(
            ee.Geometry.Point([60.26537720802386, 35.92470213208319]),
            {
              "LC": 2,
              "system:index": "1023"
            }),
        ee.Feature(
            ee.Geometry.Point([60.26898209693987, 35.92331202532886]),
            {
              "LC": 2,
              "system:index": "1024"
            }),
        ee.Feature(
            ee.Geometry.Point([60.26984040382464, 35.935127153823]),
            {
              "LC": 2,
              "system:index": "1025"
            }),
        ee.Feature(
            ee.Geometry.Point([60.265892192154716, 35.934988162575074]),
            {
              "LC": 2,
              "system:index": "1026"
            }),
        ee.Feature(
            ee.Geometry.Point([60.25301758888323, 35.930957310079116]),
            {
              "LC": 2,
              "system:index": "1027"
            }),
        ee.Feature(
            ee.Geometry.Point([60.252159281998466, 35.934988162575074]),
            {
              "LC": 2,
              "system:index": "1028"
            }),
        ee.Feature(
            ee.Geometry.Point([60.258167430191826, 35.94110354628781]),
            {
              "LC": 2,
              "system:index": "1029"
            }),
        ee.Feature(
            ee.Geometry.Point([60.2513009751137, 35.94068660333786]),
            {
              "LC": 2,
              "system:index": "1030"
            }),
        ee.Feature(
            ee.Geometry.Point([60.2818316902005, 35.93631567338438]),
            {
              "LC": 2,
              "system:index": "1031"
            }),
        ee.Feature(
            ee.Geometry.Point([60.28185851229065, 35.93608981587834]),
            {
              "LC": 2,
              "system:index": "1032"
            }),
        ee.Feature(
            ee.Geometry.Point([60.281906792052915, 35.93581183652346]),
            {
              "LC": 2,
              "system:index": "1033"
            }),
        ee.Feature(
            ee.Geometry.Point([60.281879969962766, 35.93557294723432]),
            {
              "LC": 2,
              "system:index": "1034"
            }),
        ee.Feature(
            ee.Geometry.Point([60.281938978561094, 35.93531668337612]),
            {
              "LC": 2,
              "system:index": "1035"
            }),
        ee.Feature(
            ee.Geometry.Point([60.28194970739715, 35.93513860122266]),
            {
              "LC": 2,
              "system:index": "1036"
            }),
        ee.Feature(
            ee.Geometry.Point([60.281938978561094, 35.93490839686885]),
            {
              "LC": 2,
              "system:index": "1037"
            }),
        ee.Feature(
            ee.Geometry.Point([60.28194970739715, 35.93472162680618]),
            {
              "LC": 2,
              "system:index": "1038"
            }),
        ee.Feature(
            ee.Geometry.Point([60.28194970739715, 35.93451748227942]),
            {
              "LC": 2,
              "system:index": "1039"
            }),
        ee.Feature(
            ee.Geometry.Point([60.28196043623321, 35.93433071129312]),
            {
              "LC": 2,
              "system:index": "1040"
            }),
        ee.Feature(
            ee.Geometry.Point([60.281912156470945, 35.93409744429891]),
            {
              "LC": 2,
              "system:index": "1041"
            }),
        ee.Feature(
            ee.Geometry.Point([60.281912156470945, 35.9338542062863]),
            {
              "LC": 2,
              "system:index": "1042"
            }),
        ee.Feature(
            ee.Geometry.Point([60.281890698798826, 35.933619654636765]),
            {
              "LC": 2,
              "system:index": "1043"
            }),
        ee.Feature(
            ee.Geometry.Point([60.281933614143064, 35.93333297945339]),
            {
              "LC": 2,
              "system:index": "1044"
            }),
        ee.Feature(
            ee.Geometry.Point([60.28199798715942, 35.93298549298885]),
            {
              "LC": 2,
              "system:index": "1045"
            }),
        ee.Feature(
            ee.Geometry.Point([60.282394954093625, 35.93296811862554]),
            {
              "LC": 2,
              "system:index": "1046"
            }),
        ee.Feature(
            ee.Geometry.Point([60.282432505019834, 35.9333503537365]),
            {
              "LC": 2,
              "system:index": "1047"
            }),
        ee.Feature(
            ee.Geometry.Point([60.28247005594604, 35.93366743373293]),
            {
              "LC": 2,
              "system:index": "1048"
            }),
        ee.Feature(
            ee.Geometry.Point([60.28256125105255, 35.93394107709101]),
            {
              "LC": 2,
              "system:index": "1049"
            }),
        ee.Feature(
            ee.Geometry.Point([60.28247542036407, 35.93436239913956]),
            {
              "LC": 2,
              "system:index": "1050"
            }),
        ee.Feature(
            ee.Geometry.Point([60.28260416639679, 35.93483584082399]),
            {
              "LC": 2,
              "system:index": "1051"
            }),
        ee.Feature(
            ee.Geometry.Point([60.282684632667234, 35.935161601804154]),
            {
              "LC": 2,
              "system:index": "1052"
            }),
        ee.Feature(
            ee.Geometry.Point([60.282689997085264, 35.93550039179945]),
            {
              "LC": 2,
              "system:index": "1053"
            }),
        ee.Feature(
            ee.Geometry.Point([60.28226620806091, 35.93584786720937]),
            {
              "LC": 2,
              "system:index": "1054"
            }),
        ee.Feature(
            ee.Geometry.Point([60.282158919700315, 35.936047664878416]),
            {
              "LC": 2,
              "system:index": "1055"
            }),
        ee.Feature(
            ee.Geometry.Point([60.27431614054077, 35.93639513788261]),
            {
              "LC": 2,
              "system:index": "1056"
            }),
        ee.Feature(
            ee.Geometry.Point([60.274198123344114, 35.93605635172215]),
            {
              "LC": 2,
              "system:index": "1057"
            }),
        ee.Feature(
            ee.Geometry.Point([60.273903080352476, 35.935817463171965]),
            {
              "LC": 2,
              "system:index": "1058"
            }),
        ee.Feature(
            ee.Geometry.Point([60.27420885218017, 35.93533968390579]),
            {
              "LC": 2,
              "system:index": "1059"
            }),
        ee.Feature(
            ee.Geometry.Point([60.27386552942627, 35.9352832188926]),
            {
              "LC": 2,
              "system:index": "1060"
            }),
        ee.Feature(
            ee.Geometry.Point([60.2737636054837, 35.93491402358167]),
            {
              "LC": 2,
              "system:index": "1061"
            }),
        ee.Feature(
            ee.Geometry.Point([60.273645588287046, 35.93459694858533]),
            {
              "LC": 2,
              "system:index": "1062"
            }),
        ee.Feature(
            ee.Geometry.Point([60.27359730852478, 35.93431462046343]),
            {
              "LC": 2,
              "system:index": "1063"
            }),
        ee.Feature(
            ee.Geometry.Point([60.273634859450986, 35.93405400899441]),
            {
              "LC": 2,
              "system:index": "1064"
            }),
        ee.Feature(
            ee.Geometry.Point([60.2736187661969, 35.93378905312012]),
            {
              "LC": 2,
              "system:index": "1065"
            }),
        ee.Feature(
            ee.Geometry.Point([60.27355439318054, 35.93360228041281]),
            {
              "LC": 2,
              "system:index": "1066"
            }),
        ee.Feature(
            ee.Geometry.Point([60.2732593501889, 35.93303761605591]),
            {
              "LC": 2,
              "system:index": "1067"
            }),
        ee.Feature(
            ee.Geometry.Point([60.27336127413147, 35.93291599551267]),
            {
              "LC": 2,
              "system:index": "1068"
            }),
        ee.Feature(
            ee.Geometry.Point([60.27310914648407, 35.93280740558381]),
            {
              "LC": 2,
              "system:index": "1069"
            }),
        ee.Feature(
            ee.Geometry.Point([60.2735651220166, 35.93325479513202]),
            {
              "LC": 2,
              "system:index": "1070"
            }),
        ee.Feature(
            ee.Geometry.Point([60.22732180913361, 36.07051991439745]),
            {
              "LC": 2,
              "system:index": "1071"
            }),
        ee.Feature(
            ee.Geometry.Point([60.22783679326447, 36.070706363087325]),
            {
              "LC": 2,
              "system:index": "1072"
            }),
        ee.Feature(
            ee.Geometry.Point([60.22793871720704, 36.07121801070995]),
            {
              "LC": 2,
              "system:index": "1073"
            }),
        ee.Feature(
            ee.Geometry.Point([60.2275900300351, 36.071074923150725]),
            {
              "LC": 2,
              "system:index": "1074"
            }),
        ee.Feature(
            ee.Geometry.Point([60.22896868546876, 36.0706586669529]),
            {
              "LC": 2,
              "system:index": "1075"
            }),
        ee.Feature(
            ee.Geometry.Point([60.22887212594422, 36.07029010493904]),
            {
              "LC": 2,
              "system:index": "1076"
            }),
        ee.Feature(
            ee.Geometry.Point([60.22836787064942, 36.07021639232904]),
            {
              "LC": 2,
              "system:index": "1077"
            }),
        ee.Feature(
            ee.Geometry.Point([60.22790653069886, 36.06999091803432]),
            {
              "LC": 2,
              "system:index": "1078"
            }),
        ee.Feature(
            ee.Geometry.Point([60.22764903863343, 36.069661377517875]),
            {
              "LC": 2,
              "system:index": "1079"
            }),
        ee.Feature(
            ee.Geometry.Point([60.22748274167451, 36.06948359850809]),
            {
              "LC": 2,
              "system:index": "1080"
            }),
        ee.Feature(
            ee.Geometry.Point([60.22712869008454, 36.068677083807906]),
            {
              "LC": 2,
              "system:index": "1081"
            }),
        ee.Feature(
            ee.Geometry.Point([60.228029912313545, 36.06885486464048]),
            {
              "LC": 2,
              "system:index": "1082"
            }),
        ee.Feature(
            ee.Geometry.Point([60.228056734403694, 36.06904998948201]),
            {
              "LC": 2,
              "system:index": "1083"
            }),
        ee.Feature(
            ee.Geometry.Point([60.22846979459199, 36.069357852136605]),
            {
              "LC": 2,
              "system:index": "1084"
            }),
        ee.Feature(
            ee.Geometry.Point([60.22899014314088, 36.06928413865296]),
            {
              "LC": 2,
              "system:index": "1085"
            }),
        ee.Feature(
            ee.Geometry.Point([60.22896868546876, 36.06973075458344]),
            {
              "LC": 2,
              "system:index": "1086"
            }),
        ee.Feature(
            ee.Geometry.Point([60.22917789777192, 36.07002127038086]),
            {
              "LC": 2,
              "system:index": "1087"
            }),
        ee.Feature(
            ee.Geometry.Point([60.22944075425538, 36.07019904817545]),
            {
              "LC": 2,
              "system:index": "1088"
            }),
        ee.Feature(
            ee.Geometry.Point([60.229800170263374, 36.070107991306465]),
            {
              "LC": 2,
              "system:index": "1089"
            }),
        ee.Feature(
            ee.Geometry.Point([60.22982699235352, 36.069834820067044]),
            {
              "LC": 2,
              "system:index": "1090"
            }),
        ee.Feature(
            ee.Geometry.Point([60.23015958627137, 36.06984782824283]),
            {
              "LC": 2,
              "system:index": "1091"
            }),
        ee.Feature(
            ee.Geometry.Point([60.22981626351746, 36.069080342191654]),
            {
              "LC": 2,
              "system:index": "1092"
            }),
        ee.Feature(
            ee.Geometry.Point([60.22959632237824, 36.068898225758204]),
            {
              "LC": 2,
              "system:index": "1093"
            }),
        ee.Feature(
            ee.Geometry.Point([60.229279821714485, 36.06885052852738]),
            {
              "LC": 2,
              "system:index": "1094"
            }),
        ee.Feature(
            ee.Geometry.Point([60.2296606953946, 36.06839957146125]),
            {
              "LC": 2,
              "system:index": "1095"
            }),
        ee.Feature(
            ee.Geometry.Point([60.22941393216523, 36.068490630307906]),
            {
              "LC": 2,
              "system:index": "1096"
            }),
        ee.Feature(
            ee.Geometry.Point([60.228780930837715, 36.06820878115503]),
            {
              "LC": 2,
              "system:index": "1097"
            }),
        ee.Feature(
            ee.Geometry.Point([60.228775566419685, 36.06856868066402]),
            {
              "LC": 2,
              "system:index": "1098"
            }),
        ee.Feature(
            ee.Geometry.Point([60.229290550550544, 36.067952947972685]),
            {
              "LC": 2,
              "system:index": "1099"
            }),
        ee.Feature(
            ee.Geometry.Point([60.2297143395749, 36.06794427564682]),
            {
              "LC": 2,
              "system:index": "1100"
            }),
        ee.Feature(
            ee.Geometry.Point([60.22872192223939, 36.06785321616773]),
            {
              "LC": 2,
              "system:index": "1101"
            }),
        ee.Feature(
            ee.Geometry.Point([60.22823376019868, 36.06814807505145]),
            {
              "LC": 2,
              "system:index": "1102"
            }),
        ee.Feature(
            ee.Geometry.Point([60.22772414048585, 36.06838222690706]),
            {
              "LC": 2,
              "system:index": "1103"
            }),
        ee.Feature(
            ee.Geometry.Point([60.23065311273011, 36.07054593052022]),
            {
              "LC": 2,
              "system:index": "1104"
            }),
        ee.Feature(
            ee.Geometry.Point([60.23057264645966, 36.070246744588566]),
            {
              "LC": 2,
              "system:index": "1105"
            }),
        ee.Feature(
            ee.Geometry.Point([60.23007912000092, 36.070810427280186]),
            {
              "LC": 2,
              "system:index": "1106"
            }),
        ee.Feature(
            ee.Geometry.Point([60.229258364042366, 36.07106625116908]),
            {
              "LC": 2,
              "system:index": "1107"
            }),
        ee.Feature(
            ee.Geometry.Point([60.22868437131318, 36.07111394705633]),
            {
              "LC": 2,
              "system:index": "1108"
            }),
        ee.Feature(
            ee.Geometry.Point([60.22833568414124, 36.07100121127619]),
            {
              "LC": 2,
              "system:index": "1109"
            }),
        ee.Feature(
            ee.Geometry.Point([60.22838932832154, 36.070827771298944]),
            {
              "LC": 2,
              "system:index": "1110"
            }),
        ee.Feature(
            ee.Geometry.Point([60.22837859948548, 36.07137844190621]),
            {
              "LC": 2,
              "system:index": "1111"
            }),
        ee.Feature(
            ee.Geometry.Point([60.228308862051094, 36.07135242605879]),
            {
              "LC": 2,
              "system:index": "1112"
            }),
        ee.Feature(
            ee.Geometry.Point([60.23088914712342, 36.071148634956174]),
            {
              "LC": 2,
              "system:index": "1113"
            }),
        ee.Feature(
            ee.Geometry.Point([60.2309749778119, 36.07084945131701]),
            {
              "LC": 2,
              "system:index": "1114"
            }),
        ee.Feature(
            ee.Geometry.Point([60.231028621992195, 36.0706586669529]),
            {
              "LC": 2,
              "system:index": "1115"
            }),
        ee.Feature(
            ee.Geometry.Point([60.231055444082344, 36.070441865977415]),
            {
              "LC": 2,
              "system:index": "1116"
            }),
        ee.Feature(
            ee.Geometry.Point([60.230991071065986, 36.07011666339378]),
            {
              "LC": 2,
              "system:index": "1117"
            }),
        ee.Feature(
            ee.Geometry.Point([60.23098034222993, 36.06978712340414]),
            {
              "LC": 2,
              "system:index": "1118"
            }),
        ee.Feature(
            ee.Geometry.Point([60.231028621992195, 36.06952695927924]),
            {
              "LC": 2,
              "system:index": "1119"
            }),
        ee.Feature(
            ee.Geometry.Point([60.21947366555604, 36.06922343337928]),
            {
              "LC": 2,
              "system:index": "1120"
            }),
        ee.Feature(
            ee.Geometry.Point([60.21938247044953, 36.0689459229601]),
            {
              "LC": 2,
              "system:index": "1121"
            }),
        ee.Feature(
            ee.Geometry.Point([60.219575589498604, 36.06883318407266]),
            {
              "LC": 2,
              "system:index": "1122"
            }),
        ee.Feature(
            ee.Geometry.Point([60.21949512322816, 36.068724781143885]),
            {
              "LC": 2,
              "system:index": "1123"
            }),
        ee.Feature(
            ee.Geometry.Point([60.219285910924995, 36.06850797483818]),
            {
              "LC": 2,
              "system:index": "1124"
            }),
        ee.Feature(
            ee.Geometry.Point([60.219065969785774, 36.06851231097015]),
            {
              "LC": 2,
              "system:index": "1125"
            }),
        ee.Feature(
            ee.Geometry.Point([60.21884066422852, 36.06836488234909]),
            {
              "LC": 2,
              "system:index": "1126"
            }),
        ee.Feature(
            ee.Geometry.Point([60.21865827401551, 36.06824347033602]),
            {
              "LC": 2,
              "system:index": "1127"
            }),
        ee.Feature(
            ee.Geometry.Point([60.218508070310676, 36.06809170505618]),
            {
              "LC": 2,
              "system:index": "1128"
            }),
        ee.Feature(
            ee.Geometry.Point([60.218760197958076, 36.068126394288825]),
            {
              "LC": 2,
              "system:index": "1129"
            }),
        ee.Feature(
            ee.Geometry.Point([60.2189801390973, 36.068317184794864]),
            {
              "LC": 2,
              "system:index": "1130"
            }),
        ee.Feature(
            ee.Geometry.Point([60.219055240949714, 36.06843859669414]),
            {
              "LC": 2,
              "system:index": "1131"
            }),
        ee.Feature(
            ee.Geometry.Point([60.21865827401551, 36.0686423948181]),
            {
              "LC": 2,
              "system:index": "1132"
            }),
        ee.Feature(
            ee.Geometry.Point([60.21896404584321, 36.06893725074373]),
            {
              "LC": 2,
              "system:index": "1133"
            }),
        ee.Feature(
            ee.Geometry.Point([60.21896404584321, 36.068755133978996]),
            {
              "LC": 2,
              "system:index": "1134"
            }),
        ee.Feature(
            ee.Geometry.Point([60.049685218417274, 36.09026721360568]),
            {
              "LC": 2,
              "system:index": "1135"
            }),
        ee.Feature(
            ee.Geometry.Point([60.049685218417274, 36.08977302976502]),
            {
              "LC": 2,
              "system:index": "1136"
            }),
        ee.Feature(
            ee.Geometry.Point([60.05023238905631, 36.0891661330783]),
            {
              "LC": 2,
              "system:index": "1137"
            }),
        ee.Feature(
            ee.Geometry.Point([60.05027530440055, 36.08822109890839]),
            {
              "LC": 2,
              "system:index": "1138"
            }),
        ee.Feature(
            ee.Geometry.Point([60.04957793005668, 36.0868425424509]),
            {
              "LC": 2,
              "system:index": "1139"
            }),
        ee.Feature(
            ee.Geometry.Point([60.048633792483436, 36.08661711582466]),
            {
              "LC": 2,
              "system:index": "1140"
            }),
        ee.Feature(
            ee.Geometry.Point([60.04749653586112, 36.087015947108114]),
            {
              "LC": 2,
              "system:index": "1141"
            }),
        ee.Feature(
            ee.Geometry.Point([60.046691873156654, 36.08661711582466]),
            {
              "LC": 2,
              "system:index": "1142"
            }),
        ee.Feature(
            ee.Geometry.Point([60.04656312712394, 36.08714600035002]),
            {
              "LC": 2,
              "system:index": "1143"
            }),
        ee.Feature(
            ee.Geometry.Point([60.0475287223693, 36.08580210647485]),
            {
              "LC": 2,
              "system:index": "1144"
            }),
        ee.Feature(
            ee.Geometry.Point([60.05024311789237, 36.085359917015225]),
            {
              "LC": 2,
              "system:index": "1145"
            }),
        ee.Feature(
            ee.Geometry.Point([60.051680781924354, 36.08552465455561]),
            {
              "LC": 2,
              "system:index": "1146"
            }),
        ee.Feature(
            ee.Geometry.Point([60.05409477003776, 36.08554199532924]),
            {
              "LC": 2,
              "system:index": "1147"
            }),
        ee.Feature(
            ee.Geometry.Point([60.05504963644706, 36.08559401762722]),
            {
              "LC": 2,
              "system:index": "1148"
            }),
        ee.Feature(
            ee.Geometry.Point([60.055382230364906, 36.085966843088606]),
            {
              "LC": 2,
              "system:index": "1149"
            }),
        ee.Feature(
            ee.Geometry.Point([60.05533931502067, 36.084770327200026]),
            {
              "LC": 2,
              "system:index": "1150"
            }),
        ee.Feature(
            ee.Geometry.Point([60.055682637774574, 36.08441483708644]),
            {
              "LC": 2,
              "system:index": "1151"
            }),
        ee.Feature(
            ee.Geometry.Point([60.05651948698722, 36.084068015914326]),
            {
              "LC": 2,
              "system:index": "1152"
            }),
        ee.Feature(
            ee.Geometry.Point([60.05747435339652, 36.08402466316021]),
            {
              "LC": 2,
              "system:index": "1153"
            }),
        ee.Feature(
            ee.Geometry.Point([60.05727050551139, 36.08432813193685]),
            {
              "LC": 2,
              "system:index": "1154"
            }),
        ee.Feature(
            ee.Geometry.Point([60.057152488314735, 36.084683622442476]),
            {
              "LC": 2,
              "system:index": "1155"
            }),
        ee.Feature(
            ee.Geometry.Point([60.05697009810172, 36.0849437364282]),
            {
              "LC": 2,
              "system:index": "1156"
            }),
        ee.Feature(
            ee.Geometry.Point([60.056927182757484, 36.08554199532924]),
            {
              "LC": 2,
              "system:index": "1157"
            }),
        ee.Feature(
            ee.Geometry.Point([60.05329010733329, 36.083851251904775]),
            {
              "LC": 2,
              "system:index": "1158"
            }),
        ee.Feature(
            ee.Geometry.Point([60.052367427432166, 36.08385992247664]),
            {
              "LC": 2,
              "system:index": "1159"
            }),
        ee.Feature(
            ee.Geometry.Point([60.050886848055946, 36.08367784026685]),
            {
              "LC": 2,
              "system:index": "1160"
            }),
        ee.Feature(
            ee.Geometry.Point([60.05008218535148, 36.08423275616185]),
            {
              "LC": 2,
              "system:index": "1161"
            }),
        ee.Feature(
            ee.Geometry.Point([60.048387029254066, 36.084241426691634]),
            {
              "LC": 2,
              "system:index": "1162"
            }),
        ee.Feature(
            ee.Geometry.Point([60.047904231631385, 36.08390327532157]),
            {
              "LC": 2,
              "system:index": "1163"
            }),
        ee.Feature(
            ee.Geometry.Point([59.84001170419055, 36.02718309964286]),
            {
              "LC": 2,
              "system:index": "1164"
            }),
        ee.Feature(
            ee.Geometry.Point([59.8392284991582, 36.026193936201516]),
            {
              "LC": 2,
              "system:index": "1165"
            }),
        ee.Feature(
            ee.Geometry.Point([59.83899246476489, 36.025473747988514]),
            {
              "LC": 2,
              "system:index": "1166"
            }),
        ee.Feature(
            ee.Geometry.Point([59.83855258248645, 36.02428498918761]),
            {
              "LC": 2,
              "system:index": "1167"
            }),
        ee.Feature(
            ee.Geometry.Point([59.837962496503174, 36.02236731857473]),
            {
              "LC": 2,
              "system:index": "1168"
            }),
        ee.Feature(
            ee.Geometry.Point([59.83702908776599, 36.02231525446841]),
            {
              "LC": 2,
              "system:index": "1169"
            }),
        ee.Feature(
            ee.Geometry.Point([59.836202967389404, 36.02294002147367]),
            {
              "LC": 2,
              "system:index": "1170"
            }),
        ee.Feature(
            ee.Geometry.Point([59.83576308511096, 36.024302343459695]),
            {
              "LC": 2,
              "system:index": "1171"
            }),
        ee.Feature(
            ee.Geometry.Point([59.83658920548755, 36.02480561568744]),
            {
              "LC": 2,
              "system:index": "1172"
            }),
        ee.Feature(
            ee.Geometry.Point([59.837962496503174, 36.026193936201516]),
            {
              "LC": 2,
              "system:index": "1173"
            }),
        ee.Feature(
            ee.Geometry.Point([59.83701835892993, 36.02621129005313]),
            {
              "LC": 2,
              "system:index": "1174"
            }),
        ee.Feature(
            ee.Geometry.Point([59.79655036004123, 35.92806239279517]),
            {
              "LC": 2,
              "system:index": "1175"
            }),
        ee.Feature(
            ee.Geometry.Point([59.79603537591037, 35.92755850333328]),
            {
              "LC": 2,
              "system:index": "1176"
            }),
        ee.Feature(
            ee.Geometry.Point([59.795692053156465, 35.92715886458019]),
            {
              "LC": 2,
              "system:index": "1177"
            }),
        ee.Feature(
            ee.Geometry.Point([59.79753741295871, 35.92639433264197]),
            {
              "LC": 2,
              "system:index": "1178"
            }),
        ee.Feature(
            ee.Geometry.Point([59.79689368279514, 35.9268634781167]),
            {
              "LC": 2,
              "system:index": "1179"
            }),
        ee.Feature(
            ee.Geometry.Point([59.79824551613864, 35.925647169287714]),
            {
              "LC": 2,
              "system:index": "1180"
            }),
        ee.Feature(
            ee.Geometry.Point([59.79805239708957, 35.92509113616324]),
            {
              "LC": 2,
              "system:index": "1181"
            }),
        ee.Feature(
            ee.Geometry.Point([59.797430124598115, 35.925004255634384]),
            {
              "LC": 2,
              "system:index": "1182"
            }),
        ee.Feature(
            ee.Geometry.Point([59.797666158991426, 35.924257079145804]),
            {
              "LC": 2,
              "system:index": "1183"
            }),
        ee.Feature(
            ee.Geometry.Point([59.75608119042453, 35.927940764598375]),
            {
              "LC": 2,
              "system:index": "1184"
            }),
        ee.Feature(
            ee.Geometry.Point([59.755995359736055, 35.92733262080798]),
            {
              "LC": 2,
              "system:index": "1185"
            }),
        ee.Feature(
            ee.Geometry.Point([59.75803383858737, 35.92509113616324]),
            {
              "LC": 2,
              "system:index": "1186"
            })]),
    I = 
    /* color: #ffc82d */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([59.647217462662226, 36.309270286202896]),
            {
              "LC": 3,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([59.64704580128527, 36.309149247084115]),
            {
              "LC": 3,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([59.64492149174548, 36.30918382970866]),
            {
              "LC": 3,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([59.645264814499384, 36.30868238015164]),
            {
              "LC": 3,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([59.643998811844355, 36.31054983110923]),
            {
              "LC": 3,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([59.64837617695666, 36.30563903090722]),
            {
              "LC": 3,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([59.647281835678584, 36.30569090717347]),
            {
              "LC": 3,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([59.648762415054804, 36.30721259563042]),
            {
              "LC": 3,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([59.64964217961169, 36.30641717127744]),
            {
              "LC": 3,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([59.6494276028905, 36.30479171367347]),
            {
              "LC": 3,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([59.64914865315295, 36.30444586725889]),
            {
              "LC": 3,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([59.64968509495593, 36.30425565107711]),
            {
              "LC": 3,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([59.649513433578974, 36.30399626462699]),
            {
              "LC": 3,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([59.65015716374255, 36.303788754845726]),
            {
              "LC": 3,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([59.653762052658564, 36.30231887808821]),
            {
              "LC": 3,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([59.65333289921618, 36.30249180620342]),
            {
              "LC": 3,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([59.65444869816638, 36.30174821258761]),
            {
              "LC": 3,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([59.65427703678942, 36.30185197026194]),
            {
              "LC": 3,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([59.65393371403552, 36.30192114196812]),
            {
              "LC": 3,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([59.652753542068965, 36.30103919811883]),
            {
              "LC": 3,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([59.65208835423327, 36.30128130134505]),
            {
              "LC": 3,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([59.65266771138049, 36.301679040728054]),
            {
              "LC": 3,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([59.642775724533564, 36.30721259563042]),
            {
              "LC": 3,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([59.63730401814318, 36.308111761215756]),
            {
              "LC": 3,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([59.6368748647008, 36.308336550992]),
            {
              "LC": 3,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([59.634299944046504, 36.30804259500038]),
            {
              "LC": 3,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([59.6339566212926, 36.307852387591744]),
            {
              "LC": 3,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([59.639750192764765, 36.312209749967586]),
            {
              "LC": 3,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([59.52271419742449, 36.39093867370285]),
            {
              "LC": 3,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([59.52283221462115, 36.390891172496254]),
            {
              "LC": 3,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([59.52303606250628, 36.39075730530327]),
            {
              "LC": 3,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([59.523121893194755, 36.39064934772167]),
            {
              "LC": 3,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([59.52323454597338, 36.39058889141051]),
            {
              "LC": 3,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([59.52344912269457, 36.3904766152793]),
            {
              "LC": 3,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([59.52352958896502, 36.39035570234126]),
            {
              "LC": 3,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([59.52368515708788, 36.390230470885776]),
            {
              "LC": 3,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([59.52326673248156, 36.38989795880088]),
            {
              "LC": 3,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([59.522891223219474, 36.39013114924314]),
            {
              "LC": 3,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([59.52258545139178, 36.39033411072539]),
            {
              "LC": 3,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([59.52241915443285, 36.390519798425856]),
            {
              "LC": 3,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([59.522129475859245, 36.390571618170085]),
            {
              "LC": 3,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([59.52344375827654, 36.39069684907605]),
            {
              "LC": 3,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([59.52424305656298, 36.38890473241642]),
            {
              "LC": 3,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([59.524108946112236, 36.38903428440354]),
            {
              "LC": 3,
              "system:index": "43"
            }),
        ee.Feature(
            ee.Geometry.Point([59.52373343685015, 36.38934088991308]),
            {
              "LC": 3,
              "system:index": "44"
            }),
        ee.Feature(
            ee.Geometry.Point([59.523658334997734, 36.38955249019333]),
            {
              "LC": 3,
              "system:index": "45"
            }),
        ee.Feature(
            ee.Geometry.Point([59.523374020842155, 36.38873631451039]),
            {
              "LC": 3,
              "system:index": "46"
            }),
        ee.Feature(
            ee.Geometry.Point([59.52326136806353, 36.38866290146281]),
            {
              "LC": 3,
              "system:index": "47"
            }),
        ee.Feature(
            ee.Geometry.Point([59.525396406439384, 36.38897814523563]),
            {
              "LC": 3,
              "system:index": "48"
            }),
        ee.Feature(
            ee.Geometry.Point([59.52717739322527, 36.38990227714875]),
            {
              "LC": 3,
              "system:index": "49"
            }),
        ee.Feature(
            ee.Geometry.Point([59.51873875703557, 36.38812503344637]),
            {
              "LC": 3,
              "system:index": "50"
            }),
        ee.Feature(
            ee.Geometry.Point([59.51857782449468, 36.388220039210836]),
            {
              "LC": 3,
              "system:index": "51"
            }),
        ee.Feature(
            ee.Geometry.Point([59.51852954473241, 36.38787024468672]),
            {
              "LC": 3,
              "system:index": "52"
            }),
        ee.Feature(
            ee.Geometry.Point([59.51824523057683, 36.387740690759884]),
            {
              "LC": 3,
              "system:index": "53"
            }),
        ee.Feature(
            ee.Geometry.Point([59.51806284036382, 36.3874859007407]),
            {
              "LC": 3,
              "system:index": "54"
            }),
        ee.Feature(
            ee.Geometry.Point([59.51798237409337, 36.38772341688665]),
            {
              "LC": 3,
              "system:index": "55"
            }),
        ee.Feature(
            ee.Geometry.Point([59.51835251893743, 36.38805161982159]),
            {
              "LC": 3,
              "system:index": "56"
            }),
        ee.Feature(
            ee.Geometry.Point([59.517735610864, 36.38834527390479]),
            {
              "LC": 3,
              "system:index": "57"
            }),
        ee.Feature(
            ee.Geometry.Point([59.517403016946155, 36.388276178926176]),
            {
              "LC": 3,
              "system:index": "58"
            }),
        ee.Feature(
            ee.Geometry.Point([59.517419110200244, 36.38837550293863]),
            {
              "LC": 3,
              "system:index": "59"
            }),
        ee.Feature(
            ee.Geometry.Point([59.517639051339465, 36.388695066291724]),
            {
              "LC": 3,
              "system:index": "60"
            }),
        ee.Feature(
            ee.Geometry.Point([59.517660509011584, 36.38862165320519]),
            {
              "LC": 3,
              "system:index": "61"
            }),
        ee.Feature(
            ee.Geometry.Point([59.517606864831286, 36.388539603202936]),
            {
              "LC": 3,
              "system:index": "62"
            }),
        ee.Feature(
            ee.Geometry.Point([59.51871729936345, 36.387308842778005]),
            {
              "LC": 3,
              "system:index": "63"
            }),
        ee.Feature(
            ee.Geometry.Point([59.51892651166661, 36.38745998984452]),
            {
              "LC": 3,
              "system:index": "64"
            }),
        ee.Feature(
            ee.Geometry.Point([59.51943613137944, 36.387801149285934]),
            {
              "LC": 3,
              "system:index": "65"
            }),
        ee.Feature(
            ee.Geometry.Point([59.5196989878629, 36.38788751852732]),
            {
              "LC": 3,
              "system:index": "66"
            }),
        ee.Feature(
            ee.Geometry.Point([59.51983846273168, 36.387196561909825]),
            {
              "LC": 3,
              "system:index": "67"
            }),
        ee.Feature(
            ee.Geometry.Point([59.51947904672368, 36.38703677731786]),
            {
              "LC": 3,
              "system:index": "68"
            }),
        ee.Feature(
            ee.Geometry.Point([59.51929129209264, 36.38687267388158]),
            {
              "LC": 3,
              "system:index": "69"
            }),
        ee.Feature(
            ee.Geometry.Point([59.51918936815007, 36.3868294887092]),
            {
              "LC": 3,
              "system:index": "70"
            }),
        ee.Feature(
            ee.Geometry.Point([59.52004231061681, 36.38741680499835]),
            {
              "LC": 3,
              "system:index": "71"
            }),
        ee.Feature(
            ee.Geometry.Point([59.52292836751683, 36.38902326512496]),
            {
              "LC": 3,
              "system:index": "72"
            }),
        ee.Feature(
            ee.Geometry.Point([59.52282107915624, 36.38926077657436]),
            {
              "LC": 3,
              "system:index": "73"
            }),
        ee.Feature(
            ee.Geometry.Point([59.52275134172185, 36.38933418905737]),
            {
              "LC": 3,
              "system:index": "74"
            }),
        ee.Feature(
            ee.Geometry.Point([59.52259577359899, 36.38943351171817]),
            {
              "LC": 3,
              "system:index": "75"
            }),
        ee.Feature(
            ee.Geometry.Point([59.52250994291051, 36.38951124240768]),
            {
              "LC": 3,
              "system:index": "76"
            }),
        ee.Feature(
            ee.Geometry.Point([59.52217734899266, 36.389822164388534]),
            {
              "LC": 3,
              "system:index": "77"
            }),
        ee.Feature(
            ee.Geometry.Point([59.52200032319768, 36.38996898822501]),
            {
              "LC": 3,
              "system:index": "78"
            }),
        ee.Feature(
            ee.Geometry.Point([59.52182866182073, 36.39001217165357]),
            {
              "LC": 3,
              "system:index": "79"
            }),
        ee.Feature(
            ee.Geometry.Point([59.52154971208318, 36.39005967339727]),
            {
              "LC": 3,
              "system:index": "80"
            }),
        ee.Feature(
            ee.Geometry.Point([59.52470935430272, 36.38844891625757]),
            {
              "LC": 3,
              "system:index": "81"
            }),
        ee.Feature(
            ee.Geometry.Point([59.52531016912206, 36.38810775965853]),
            {
              "LC": 3,
              "system:index": "82"
            }),
        ee.Feature(
            ee.Geometry.Point([59.525412093064624, 36.38801707220948]),
            {
              "LC": 3,
              "system:index": "83"
            }),
        ee.Feature(
            ee.Geometry.Point([59.52554620351537, 36.387930703112026]),
            {
              "LC": 3,
              "system:index": "84"
            }),
        ee.Feature(
            ee.Geometry.Point([59.52552474584325, 36.38779251235652]),
            {
              "LC": 3,
              "system:index": "85"
            }),
        ee.Feature(
            ee.Geometry.Point([59.52527261819585, 36.38733475372456]),
            {
              "LC": 3,
              "system:index": "86"
            }),
        ee.Feature(
            ee.Geometry.Point([59.52483273591741, 36.38735634617343]),
            {
              "LC": 3,
              "system:index": "87"
            }),
        ee.Feature(
            ee.Geometry.Point([59.52517069425328, 36.38709291788758]),
            {
              "LC": 3,
              "system:index": "88"
            }),
        ee.Feature(
            ee.Geometry.Point([59.52392078485234, 36.386678340417]),
            {
              "LC": 3,
              "system:index": "89"
            }),
        ee.Feature(
            ee.Geometry.Point([59.52270306195958, 36.38614715980227]),
            {
              "LC": 3,
              "system:index": "90"
            }),
        ee.Feature(
            ee.Geometry.Point([59.52255285825475, 36.386237849432426]),
            {
              "LC": 3,
              "system:index": "91"
            }),
        ee.Feature(
            ee.Geometry.Point([59.52683366384252, 36.38839277666698]),
            {
              "LC": 3,
              "system:index": "92"
            }),
        ee.Feature(
            ee.Geometry.Point([59.52674783315404, 36.38859142426706]),
            {
              "LC": 3,
              "system:index": "93"
            }),
        ee.Feature(
            ee.Geometry.Point([59.52649570550664, 36.38880302658715]),
            {
              "LC": 3,
              "system:index": "94"
            }),
        ee.Feature(
            ee.Geometry.Point([59.52183379912595, 36.384654989963224]),
            {
              "LC": 3,
              "system:index": "95"
            }),
        ee.Feature(
            ee.Geometry.Point([59.52179088378171, 36.384607484917396]),
            {
              "LC": 3,
              "system:index": "96"
            }),
        ee.Feature(
            ee.Geometry.Point([59.522187850715916, 36.38446065095589]),
            {
              "LC": 3,
              "system:index": "97"
            }),
        ee.Feature(
            ee.Geometry.Point([59.52227368140439, 36.38431381671711]),
            {
              "LC": 3,
              "system:index": "98"
            }),
        ee.Feature(
            ee.Geometry.Point([59.52481105113248, 36.38234016489175]),
            {
              "LC": 3,
              "system:index": "99"
            }),
        ee.Feature(
            ee.Geometry.Point([59.524741313698094, 36.38223219562248]),
            {
              "LC": 3,
              "system:index": "100"
            }),
        ee.Feature(
            ee.Geometry.Point([59.52401711726407, 36.38255178422462]),
            {
              "LC": 3,
              "system:index": "101"
            }),
        ee.Feature(
            ee.Geometry.Point([59.52303542876462, 36.3819903439154]),
            {
              "LC": 3,
              "system:index": "102"
            }),
        ee.Feature(
            ee.Geometry.Point([59.52313735270719, 36.38226242703299]),
            {
              "LC": 3,
              "system:index": "103"
            }),
        ee.Feature(
            ee.Geometry.Point([59.51725433930875, 36.378665360286455]),
            {
              "LC": 3,
              "system:index": "104"
            }),
        ee.Feature(
            ee.Geometry.Point([59.517120228858005, 36.37882948104355]),
            {
              "LC": 3,
              "system:index": "105"
            }),
        ee.Feature(
            ee.Geometry.Point([59.51701294049741, 36.37894609294999]),
            {
              "LC": 3,
              "system:index": "106"
            }),
        ee.Feature(
            ee.Geometry.Point([59.516648160071384, 36.37894177399362]),
            {
              "LC": 3,
              "system:index": "107"
            }),
        ee.Feature(
            ee.Geometry.Point([59.51480280026914, 36.37805638287156]),
            {
              "LC": 3,
              "system:index": "108"
            }),
        ee.Feature(
            ee.Geometry.Point([59.51407860383512, 36.37805206386578]),
            {
              "LC": 3,
              "system:index": "109"
            }),
        ee.Feature(
            ee.Geometry.Point([59.513901578040134, 36.377952726666486]),
            {
              "LC": 3,
              "system:index": "110"
            }),
        ee.Feature(
            ee.Geometry.Point([59.51323639020444, 36.378453730377885]),
            {
              "LC": 3,
              "system:index": "111"
            }),
        ee.Feature(
            ee.Geometry.Point([59.513649450392734, 36.37867831720091]),
            {
              "LC": 3,
              "system:index": "112"
            }),
        ee.Feature(
            ee.Geometry.Point([59.51325784787656, 36.37887267065893]),
            {
              "LC": 3,
              "system:index": "113"
            }),
        ee.Feature(
            ee.Geometry.Point([59.51622437104703, 36.37987466300249]),
            {
              "LC": 3,
              "system:index": "114"
            }),
        ee.Feature(
            ee.Geometry.Point([59.51599906548978, 36.37987034409767]),
            {
              "LC": 3,
              "system:index": "115"
            }),
        ee.Feature(
            ee.Geometry.Point([59.515848861784946, 36.38026336345356]),
            {
              "LC": 3,
              "system:index": "116"
            }),
        ee.Feature(
            ee.Geometry.Point([59.515848861784946, 36.38010788350625]),
            {
              "LC": 3,
              "system:index": "117"
            }),
        ee.Feature(
            ee.Geometry.Point([59.51672862634183, 36.380565684683475]),
            {
              "LC": 3,
              "system:index": "118"
            }),
        ee.Feature(
            ee.Geometry.Point([59.40018113349397, 36.43694122129334]),
            {
              "LC": 3,
              "system:index": "119"
            }),
        ee.Feature(
            ee.Geometry.Point([59.40054591392, 36.43653554128866]),
            {
              "LC": 3,
              "system:index": "120"
            }),
        ee.Feature(
            ee.Geometry.Point([59.401168186411454, 36.43707069318891]),
            {
              "LC": 3,
              "system:index": "121"
            }),
        ee.Feature(
            ee.Geometry.Point([59.401650984034134, 36.43799425311137]),
            {
              "LC": 3,
              "system:index": "122"
            }),
        ee.Feature(
            ee.Geometry.Point([59.40229471419771, 36.43849486978428]),
            {
              "LC": 3,
              "system:index": "123"
            }),
        ee.Feature(
            ee.Geometry.Point([59.40257366393526, 36.43816687991511]),
            {
              "LC": 3,
              "system:index": "124"
            }),
        ee.Feature(
            ee.Geometry.Point([59.40322812293489, 36.43860707652655]),
            {
              "LC": 3,
              "system:index": "125"
            }),
        ee.Feature(
            ee.Geometry.Point([59.40279896949251, 36.439573774047815]),
            {
              "LC": 3,
              "system:index": "126"
            }),
        ee.Feature(
            ee.Geometry.Point([59.402616579279496, 36.43944430632819]),
            {
              "LC": 3,
              "system:index": "127"
            }),
        ee.Feature(
            ee.Geometry.Point([59.404633600458695, 36.43998806929912]),
            {
              "LC": 3,
              "system:index": "128"
            }),
        ee.Feature(
            ee.Geometry.Point([59.40430100654085, 36.440661294365086]),
            {
              "LC": 3,
              "system:index": "129"
            }),
        ee.Feature(
            ee.Geometry.Point([59.403968412623, 36.43716563910835]),
            {
              "LC": 3,
              "system:index": "130"
            }),
        ee.Feature(
            ee.Geometry.Point([59.40353925918062, 36.43748500180315]),
            {
              "LC": 3,
              "system:index": "131"
            }),
        ee.Feature(
            ee.Geometry.Point([59.40377529357393, 36.43764036696327]),
            {
              "LC": 3,
              "system:index": "132"
            }),
        ee.Feature(
            ee.Geometry.Point([59.403882581934525, 36.437743943563916]),
            {
              "LC": 3,
              "system:index": "133"
            }),
        ee.Feature(
            ee.Geometry.Point([59.40420444701631, 36.43804604119282]),
            {
              "LC": 3,
              "system:index": "134"
            }),
        ee.Feature(
            ee.Geometry.Point([59.40404351447542, 36.437959727704545]),
            {
              "LC": 3,
              "system:index": "135"
            }),
        ee.Feature(
            ee.Geometry.Point([59.40305646155794, 36.436406068500354]),
            {
              "LC": 3,
              "system:index": "136"
            }),
        ee.Feature(
            ee.Geometry.Point([59.40277751182039, 36.43648375219926]),
            {
              "LC": 3,
              "system:index": "137"
            }),
        ee.Feature(
            ee.Geometry.Point([59.402616579279496, 36.43607806980329]),
            {
              "LC": 3,
              "system:index": "138"
            }),
        ee.Feature(
            ee.Geometry.Point([59.40253074859102, 36.43595722782862]),
            {
              "LC": 3,
              "system:index": "139"
            }),
        ee.Feature(
            ee.Geometry.Point([59.402348358378006, 36.435888175187216]),
            {
              "LC": 3,
              "system:index": "140"
            }),
        ee.Feature(
            ee.Geometry.Point([59.4020050356241, 36.43591406993495]),
            {
              "LC": 3,
              "system:index": "141"
            }),
        ee.Feature(
            ee.Geometry.Point([59.39923699592073, 36.43626796395475]),
            {
              "LC": 3,
              "system:index": "142"
            }),
        ee.Feature(
            ee.Geometry.Point([59.399633962854935, 36.4365182782627]),
            {
              "LC": 3,
              "system:index": "143"
            }),
        ee.Feature(
            ee.Geometry.Point([59.39875419829805, 36.43593133309531]),
            {
              "LC": 3,
              "system:index": "144"
            }),
        ee.Feature(
            ee.Geometry.Point([59.400867779001786, 36.43828771844923]),
            {
              "LC": 3,
              "system:index": "145"
            }),
        ee.Feature(
            ee.Geometry.Point([59.400106031641556, 36.437743943563916]),
            {
              "LC": 3,
              "system:index": "146"
            }),
        ee.Feature(
            ee.Geometry.Point([59.39983781074007, 36.437528158823284]),
            {
              "LC": 3,
              "system:index": "147"
            }),
        ee.Feature(
            ee.Geometry.Point([59.40154369567354, 36.43860707652655]),
            {
              "LC": 3,
              "system:index": "148"
            }),
        ee.Feature(
            ee.Geometry.Point([59.40168317054231, 36.43877107070421]),
            {
              "LC": 3,
              "system:index": "149"
            }),
        ee.Feature(
            ee.Geometry.Point([59.4019513914438, 36.439616929906364]),
            {
              "LC": 3,
              "system:index": "150"
            }),
        ee.Feature(
            ee.Geometry.Point([59.402348358378006, 36.43987586455363]),
            {
              "LC": 3,
              "system:index": "151"
            }),
        ee.Feature(
            ee.Geometry.Point([59.40423663352449, 36.44129998966964]),
            {
              "LC": 3,
              "system:index": "152"
            }),
        ee.Feature(
            ee.Geometry.Point([59.41031988357027, 36.439168107804385]),
            {
              "LC": 3,
              "system:index": "153"
            }),
        ee.Feature(
            ee.Geometry.Point([59.408903677210404, 36.43720016486845]),
            {
              "LC": 3,
              "system:index": "154"
            }),
        ee.Feature(
            ee.Geometry.Point([59.408603269800736, 36.43700164153815]),
            {
              "LC": 3,
              "system:index": "155"
            }),
        ee.Feature(
            ee.Geometry.Point([59.40847452376802, 36.43677722324894]),
            {
              "LC": 3,
              "system:index": "156"
            }),
        ee.Feature(
            ee.Geometry.Point([59.40817411635835, 36.43625933241251]),
            {
              "LC": 3,
              "system:index": "157"
            }),
        ee.Feature(
            ee.Geometry.Point([59.44280658167865, 36.44757084637121]),
            {
              "LC": 3,
              "system:index": "158"
            }),
        ee.Feature(
            ee.Geometry.Point([59.442538360777164, 36.44701850619315]),
            {
              "LC": 3,
              "system:index": "159"
            }),
        ee.Feature(
            ee.Geometry.Point([59.44189463061359, 36.446423010033406]),
            {
              "LC": 3,
              "system:index": "160"
            }),
        ee.Feature(
            ee.Geometry.Point([59.44419060153034, 36.448140443061114]),
            {
              "LC": 3,
              "system:index": "161"
            }),
        ee.Feature(
            ee.Geometry.Point([59.44489870471027, 36.44873592603807]),
            {
              "LC": 3,
              "system:index": "162"
            }),
        ee.Feature(
            ee.Geometry.Point([59.44105778140094, 36.450030438479345]),
            {
              "LC": 3,
              "system:index": "163"
            }),
        ee.Feature(
            ee.Geometry.Point([59.43980250758197, 36.450030438479345]),
            {
              "LC": 3,
              "system:index": "164"
            }),
        ee.Feature(
            ee.Geometry.Point([59.43721685809162, 36.44996139836116]),
            {
              "LC": 3,
              "system:index": "165"
            }),
        ee.Feature(
            ee.Geometry.Point([59.43734560412433, 36.45043604793286]),
            {
              "LC": 3,
              "system:index": "166"
            }),
        ee.Feature(
            ee.Geometry.Point([59.43718467158344, 36.45034974822676]),
            {
              "LC": 3,
              "system:index": "167"
            }),
        ee.Feature(
            ee.Geometry.Point([59.43641219538715, 36.450617277003154]),
            {
              "LC": 3,
              "system:index": "168"
            }),
        ee.Feature(
            ee.Geometry.Point([59.43615470332172, 36.45025481843915]),
            {
              "LC": 3,
              "system:index": "169"
            }),
        ee.Feature(
            ee.Geometry.Point([59.4366375009444, 36.4510056235852]),
            {
              "LC": 3,
              "system:index": "170"
            }),
        ee.Feature(
            ee.Geometry.Point([59.436980823698306, 36.45135081891484]),
            {
              "LC": 3,
              "system:index": "171"
            }),
        ee.Feature(
            ee.Geometry.Point([59.437485078993106, 36.45186860902892]),
            {
              "LC": 3,
              "system:index": "172"
            }),
        ee.Feature(
            ee.Geometry.Point([59.442012647810245, 36.4506949464751]),
            {
              "LC": 3,
              "system:index": "173"
            }),
        ee.Feature(
            ee.Geometry.Point([59.4426349203017, 36.45102288338816]),
            {
              "LC": 3,
              "system:index": "174"
            }),
        ee.Feature(
            ee.Geometry.Point([59.44306407374408, 36.45202394538915]),
            {
              "LC": 3,
              "system:index": "175"
            }),
        ee.Feature(
            ee.Geometry.Point([59.444008211317325, 36.45160971440393]),
            {
              "LC": 3,
              "system:index": "176"
            }),
        ee.Feature(
            ee.Geometry.Point([59.44365415972736, 36.45130766958264]),
            {
              "LC": 3,
              "system:index": "177"
            }),
        ee.Feature(
            ee.Geometry.Point([59.44663677615192, 36.44732056771525]),
            {
              "LC": 3,
              "system:index": "178"
            }),
        ee.Feature(
            ee.Geometry.Point([59.44603596133258, 36.446966724099845]),
            {
              "LC": 3,
              "system:index": "179"
            }),
        ee.Feature(
            ee.Geometry.Point([59.4466689626601, 36.44791605698554]),
            {
              "LC": 3,
              "system:index": "180"
            }),
        ee.Feature(
            ee.Geometry.Point([59.44704447192218, 36.446500683704784]),
            {
              "LC": 3,
              "system:index": "181"
            }),
        ee.Feature(
            ee.Geometry.Point([59.44787059229877, 36.44728604645798]),
            {
              "LC": 3,
              "system:index": "182"
            }),
        ee.Feature(
            ee.Geometry.Point([59.44819245738056, 36.447700300531594]),
            {
              "LC": 3,
              "system:index": "183"
            }),
        ee.Feature(
            ee.Geometry.Point([59.44860015315082, 36.44811455239321]),
            {
              "LC": 3,
              "system:index": "184"
            }),
        ee.Feature(
            ee.Geometry.Point([59.44738779467609, 36.44502487065121]),
            {
              "LC": 3,
              "system:index": "185"
            }),
        ee.Feature(
            ee.Geometry.Point([59.44733415049579, 36.44438620600703]),
            {
              "LC": 3,
              "system:index": "186"
            }),
        ee.Feature(
            ee.Geometry.Point([59.44690499705341, 36.444593341062244]),
            {
              "LC": 3,
              "system:index": "187"
            }),
        ee.Feature(
            ee.Geometry.Point([59.45234451693561, 36.44427400762122]),
            {
              "LC": 3,
              "system:index": "188"
            }),
        ee.Feature(
            ee.Geometry.Point([59.454232792082095, 36.44677685612868]),
            {
              "LC": 3,
              "system:index": "189"
            }),
        ee.Feature(
            ee.Geometry.Point([59.45406113070514, 36.44633670586293]),
            {
              "LC": 3,
              "system:index": "190"
            }),
        ee.Feature(
            ee.Geometry.Point([59.45337448519733, 36.44996139836116]),
            {
              "LC": 3,
              "system:index": "191"
            }),
        ee.Feature(
            ee.Geometry.Point([59.550137928965206, 36.813944696732385]),
            {
              "LC": 3,
              "system:index": "192"
            }),
        ee.Feature(
            ee.Geometry.Point([59.54986434364569, 36.813691310453045]),
            {
              "LC": 3,
              "system:index": "193"
            }),
        ee.Feature(
            ee.Geometry.Point([59.54936545276892, 36.813248956124674]),
            {
              "LC": 3,
              "system:index": "194"
            }),
        ee.Feature(
            ee.Geometry.Point([59.549172333719845, 36.813356323915]),
            {
              "LC": 3,
              "system:index": "195"
            }),
        ee.Feature(
            ee.Geometry.Point([59.548893383982296, 36.81344221803888]),
            {
              "LC": 3,
              "system:index": "196"
            }),
        ee.Feature(
            ee.Geometry.Point([59.54850178146612, 36.81346369155477]),
            {
              "LC": 3,
              "system:index": "197"
            }),
        ee.Feature(
            ee.Geometry.Point([59.54713921928656, 36.813708489210335]),
            {
              "LC": 3,
              "system:index": "198"
            }),
        ee.Feature(
            ee.Geometry.Point([59.54710166836035, 36.81363977415799]),
            {
              "LC": 3,
              "system:index": "199"
            }),
        ee.Feature(
            ee.Geometry.Point([59.54929571533453, 36.81458030608128]),
            {
              "LC": 3,
              "system:index": "200"
            }),
        ee.Feature(
            ee.Geometry.Point([59.549687317850704, 36.815417756287275]),
            {
              "LC": 3,
              "system:index": "201"
            }),
        ee.Feature(
            ee.Geometry.Point([59.54777222061407, 36.81271640965873]),
            {
              "LC": 3,
              "system:index": "202"
            }),
        ee.Feature(
            ee.Geometry.Point([59.54682808304083, 36.81226975492749]),
            {
              "LC": 3,
              "system:index": "203"
            }),
        ee.Feature(
            ee.Geometry.Point([59.55062072658789, 36.81249737737576]),
            {
              "LC": 3,
              "system:index": "204"
            }),
        ee.Feature(
            ee.Geometry.Point([59.55047588730108, 36.81250167213244]),
            {
              "LC": 3,
              "system:index": "205"
            }),
        ee.Feature(
            ee.Geometry.Point([59.5508031168009, 36.812308407843766]),
            {
              "LC": 3,
              "system:index": "206"
            }),
        ee.Feature(
            ee.Geometry.Point([59.37094304776521, 35.78989377993442]),
            {
              "LC": 3,
              "system:index": "207"
            }),
        ee.Feature(
            ee.Geometry.Point([59.37084112382264, 35.789889428495506]),
            {
              "LC": 3,
              "system:index": "208"
            }),
        ee.Feature(
            ee.Geometry.Point([59.370792844060375, 35.78955871844045]),
            {
              "LC": 3,
              "system:index": "209"
            }),
        ee.Feature(
            ee.Geometry.Point([59.3707070133719, 35.78955871844045]),
            {
              "LC": 3,
              "system:index": "210"
            }),
        ee.Feature(
            ee.Geometry.Point([59.37042806363435, 35.789323739407166]),
            {
              "LC": 3,
              "system:index": "211"
            }),
        ee.Feature(
            ee.Geometry.Point([59.370331504109814, 35.78931503646667]),
            {
              "LC": 3,
              "system:index": "212"
            }),
        ee.Feature(
            ee.Geometry.Point([59.370310046437694, 35.789449931937355]),
            {
              "LC": 3,
              "system:index": "213"
            }),
        ee.Feature(
            ee.Geometry.Point([59.37019739365907, 35.7894064172944]),
            {
              "LC": 3,
              "system:index": "214"
            }),
        ee.Feature(
            ee.Geometry.Point([59.37013302064271, 35.7893716055629]),
            {
              "LC": 3,
              "system:index": "215"
            }),
        ee.Feature(
            ee.Geometry.Point([59.36975751138063, 35.790524736055794]),
            {
              "LC": 3,
              "system:index": "216"
            }),
        ee.Feature(
            ee.Geometry.Point([59.37172088837953, 35.791207903587015]),
            {
              "LC": 3,
              "system:index": "217"
            }),
        ee.Feature(
            ee.Geometry.Point([59.371538498166515, 35.79126011997201]),
            {
              "LC": 3,
              "system:index": "218"
            }),
        ee.Feature(
            ee.Geometry.Point([59.372316338780834, 35.79133844448515]),
            {
              "LC": 3,
              "system:index": "219"
            }),
        ee.Feature(
            ee.Geometry.Point([59.372316338780834, 35.79129928223821]),
            {
              "LC": 3,
              "system:index": "220"
            }),
        ee.Feature(
            ee.Geometry.Point([59.37225733018251, 35.79109911934142]),
            {
              "LC": 3,
              "system:index": "221"
            }),
        ee.Feature(
            ee.Geometry.Point([59.371795990231945, 35.79093811838463]),
            {
              "LC": 3,
              "system:index": "222"
            }),
        ee.Feature(
            ee.Geometry.Point([59.37161360001893, 35.79099468632553]),
            {
              "LC": 3,
              "system:index": "223"
            }),
        ee.Feature(
            ee.Geometry.Point([59.37161896443696, 35.79090330732407]),
            {
              "LC": 3,
              "system:index": "224"
            }),
        ee.Feature(
            ee.Geometry.Point([59.37169943070741, 35.79090330732407]),
            {
              "LC": 3,
              "system:index": "225"
            }),
        ee.Feature(
            ee.Geometry.Point([59.371570684674694, 35.79032892262318]),
            {
              "LC": 3,
              "system:index": "226"
            }),
        ee.Feature(
            ee.Geometry.Point([59.36800334668489, 35.790080891582576]),
            {
              "LC": 3,
              "system:index": "227"
            }),
        ee.Feature(
            ee.Geometry.Point([59.36783704972596, 35.79040724805412]),
            {
              "LC": 3,
              "system:index": "228"
            }),
        ee.Feature(
            ee.Geometry.Point([59.367574193242504, 35.79011135157663]),
            {
              "LC": 3,
              "system:index": "229"
            }),
        ee.Feature(
            ee.Geometry.Point([59.367327430013134, 35.79049862762598]),
            {
              "LC": 3,
              "system:index": "230"
            }),
        ee.Feature(
            ee.Geometry.Point([59.36735425210328, 35.790381139585705]),
            {
              "LC": 3,
              "system:index": "231"
            }),
        ee.Feature(
            ee.Geometry.Point([59.367305972341015, 35.79019838006673]),
            {
              "LC": 3,
              "system:index": "232"
            }),
        ee.Feature(
            ee.Geometry.Point([59.36684999680848, 35.789972105794234]),
            {
              "LC": 3,
              "system:index": "233"
            }),
        ee.Feature(
            ee.Geometry.Point([59.36668369984956, 35.79001562012745]),
            {
              "LC": 3,
              "system:index": "234"
            }),
        ee.Feature(
            ee.Geometry.Point([59.36823401666017, 35.78929763058281]),
            {
              "LC": 3,
              "system:index": "235"
            }),
        ee.Feature(
            ee.Geometry.Point([59.36794970250459, 35.78923235848437]),
            {
              "LC": 3,
              "system:index": "236"
            }),
        ee.Feature(
            ee.Geometry.Point([59.36792288041444, 35.789206249629984]),
            {
              "LC": 3,
              "system:index": "237"
            }),
        ee.Feature(
            ee.Geometry.Point([59.368818738225414, 35.78902348740913]),
            {
              "LC": 3,
              "system:index": "238"
            }),
        ee.Feature(
            ee.Geometry.Point([59.37437627530427, 35.789728425087986]),
            {
              "LC": 3,
              "system:index": "239"
            }),
        ee.Feature(
            ee.Geometry.Point([59.37409196114869, 35.78949344655646]),
            {
              "LC": 3,
              "system:index": "240"
            }),
        ee.Feature(
            ee.Geometry.Point([59.37308345055909, 35.78934549675424]),
            {
              "LC": 3,
              "system:index": "241"
            }),
        ee.Feature(
            ee.Geometry.Point([59.37324974751802, 35.789402065828796]),
            {
              "LC": 3,
              "system:index": "242"
            }),
        ee.Feature(
            ee.Geometry.Point([59.37237534737916, 35.79006783729582]),
            {
              "LC": 3,
              "system:index": "243"
            }),
        ee.Feature(
            ee.Geometry.Point([59.37283132291169, 35.79005913443682]),
            {
              "LC": 3,
              "system:index": "244"
            }),
        ee.Feature(
            ee.Geometry.Point([59.37285814500184, 35.79035938252216]),
            {
              "LC": 3,
              "system:index": "245"
            }),
        ee.Feature(
            ee.Geometry.Point([59.37293324685426, 35.79059870989366]),
            {
              "LC": 3,
              "system:index": "246"
            }),
        ee.Feature(
            ee.Geometry.Point([59.37218759274812, 35.79062046689169]),
            {
              "LC": 3,
              "system:index": "247"
            }),
        ee.Feature(
            ee.Geometry.Point([59.372310974362804, 35.790677035058685]),
            {
              "LC": 3,
              "system:index": "248"
            }),
        ee.Feature(
            ee.Geometry.Point([59.373324849370434, 35.7908423879314]),
            {
              "LC": 3,
              "system:index": "249"
            }),
        ee.Feature(
            ee.Geometry.Point([59.372825958493664, 35.791164389906626]),
            {
              "LC": 3,
              "system:index": "250"
            }),
        ee.Feature(
            ee.Geometry.Point([59.3726703903708, 35.79103384872257]),
            {
              "LC": 3,
              "system:index": "251"
            }),
        ee.Feature(
            ee.Geometry.Point([59.37366280770631, 35.791129578945196]),
            {
              "LC": 3,
              "system:index": "252"
            }),
        ee.Feature(
            ee.Geometry.Point([59.371517040494396, 35.78929327911125]),
            {
              "LC": 3,
              "system:index": "253"
            }),
        ee.Feature(
            ee.Geometry.Point([59.37121663308473, 35.78911051709051]),
            {
              "LC": 3,
              "system:index": "254"
            }),
        ee.Feature(
            ee.Geometry.Point([59.37062118268342, 35.78954131260998]),
            {
              "LC": 3,
              "system:index": "255"
            }),
        ee.Feature(
            ee.Geometry.Point([59.37419388509126, 35.78887988822647]),
            {
              "LC": 3,
              "system:index": "256"
            }),
        ee.Feature(
            ee.Geometry.Point([59.374783971074535, 35.788675367730534]),
            {
              "LC": 3,
              "system:index": "257"
            }),
        ee.Feature(
            ee.Geometry.Point([59.37520239568086, 35.788932106141104]),
            {
              "LC": 3,
              "system:index": "258"
            }),
        ee.Feature(
            ee.Geometry.Point([59.37314782357545, 35.789140977456505]),
            {
              "LC": 3,
              "system:index": "259"
            }),
        ee.Feature(
            ee.Geometry.Point([59.37359307027192, 35.78967620769656]),
            {
              "LC": 3,
              "system:index": "260"
            }),
        ee.Feature(
            ee.Geometry.Point([59.51289579425196, 35.84891878182162]),
            {
              "LC": 3,
              "system:index": "261"
            }),
        ee.Feature(
            ee.Geometry.Point([59.51262757335047, 35.84922315556087]),
            {
              "LC": 3,
              "system:index": "262"
            }),
        ee.Feature(
            ee.Geometry.Point([59.51189801249842, 35.849405779243625]),
            {
              "LC": 3,
              "system:index": "263"
            }),
        ee.Feature(
            ee.Geometry.Point([59.51168343577723, 35.84922315556087]),
            {
              "LC": 3,
              "system:index": "264"
            }),
        ee.Feature(
            ee.Geometry.Point([59.51143667254786, 35.849544920814864]),
            {
              "LC": 3,
              "system:index": "265"
            }),
        ee.Feature(
            ee.Geometry.Point([59.5114259437118, 35.8500058255258]),
            {
              "LC": 3,
              "system:index": "266"
            }),
        ee.Feature(
            ee.Geometry.Point([59.51165124926905, 35.85005800324878]),
            {
              "LC": 3,
              "system:index": "267"
            }),
        ee.Feature(
            ee.Geometry.Point([59.51190874133448, 35.84996234406374]),
            {
              "LC": 3,
              "system:index": "268"
            }),
        ee.Feature(
            ee.Geometry.Point([59.5113722995315, 35.8503971576114]),
            {
              "LC": 3,
              "system:index": "269"
            }),
        ee.Feature(
            ee.Geometry.Point([59.51141521487574, 35.85154505392123]),
            {
              "LC": 3,
              "system:index": "270"
            }),
        ee.Feature(
            ee.Geometry.Point([59.51087877307276, 35.852849461374824]),
            {
              "LC": 3,
              "system:index": "271"
            }),
        ee.Feature(
            ee.Geometry.Point([59.51067492518763, 35.85361470376014]),
            {
              "LC": 3,
              "system:index": "272"
            }),
        ee.Feature(
            ee.Geometry.Point([59.510792942384285, 35.85388427602304]),
            {
              "LC": 3,
              "system:index": "273"
            }),
        ee.Feature(
            ee.Geometry.Point([59.5124880984817, 35.84741428875176]),
            {
              "LC": 3,
              "system:index": "274"
            }),
        ee.Feature(
            ee.Geometry.Point([59.51342150721888, 35.846588109896764]),
            {
              "LC": 3,
              "system:index": "275"
            }),
        ee.Feature(
            ee.Geometry.Point([59.513271303514045, 35.84767518554941]),
            {
              "LC": 3,
              "system:index": "276"
            }),
        ee.Feature(
            ee.Geometry.Point([59.514548035005134, 35.847092514852584]),
            {
              "LC": 3,
              "system:index": "277"
            }),
        ee.Feature(
            ee.Geometry.Point([59.51423689875941, 35.84844917433219]),
            {
              "LC": 3,
              "system:index": "278"
            }),
        ee.Feature(
            ee.Geometry.Point([59.5138399318252, 35.84832742378841]),
            {
              "LC": 3,
              "system:index": "279"
            }),
        ee.Feature(
            ee.Geometry.Point([59.51364681277613, 35.84952752813181]),
            {
              "LC": 3,
              "system:index": "280"
            }),
        ee.Feature(
            ee.Geometry.Point([59.513528795579475, 35.85009278837838]),
            {
              "LC": 3,
              "system:index": "281"
            }),
        ee.Feature(
            ee.Geometry.Point([59.51343223605494, 35.8499971292353]),
            {
              "LC": 3,
              "system:index": "282"
            }),
        ee.Feature(
            ee.Geometry.Point([59.51318547282557, 35.85031019509259]),
            {
              "LC": 3,
              "system:index": "283"
            }),
        ee.Feature(
            ee.Geometry.Point([59.36480424002507, 36.513514713716596]),
            {
              "LC": 3,
              "system:index": "284"
            }),
        ee.Feature(
            ee.Geometry.Point([59.36495444372991, 36.51341986128627]),
            {
              "LC": 3,
              "system:index": "285"
            }),
        ee.Feature(
            ee.Geometry.Point([59.359761687077075, 36.513997597014104]),
            {
              "LC": 3,
              "system:index": "286"
            }),
        ee.Feature(
            ee.Geometry.Point([59.36167141989568, 36.51669651424789]),
            {
              "LC": 3,
              "system:index": "287"
            }),
        ee.Feature(
            ee.Geometry.Point([59.36390301779607, 36.515368624240644]),
            {
              "LC": 3,
              "system:index": "288"
            }),
        ee.Feature(
            ee.Geometry.Point([59.364021034992724, 36.515334133287496]),
            {
              "LC": 3,
              "system:index": "289"
            }),
        ee.Feature(
            ee.Geometry.Point([59.36666032866338, 36.51473053911908]),
            {
              "LC": 3,
              "system:index": "290"
            }),
        ee.Feature(
            ee.Geometry.Point([59.3666281421552, 36.514618442540915]),
            {
              "LC": 3,
              "system:index": "291"
            }),
        ee.Feature(
            ee.Geometry.Point([59.358978482044726, 36.513566451356866]),
            {
              "LC": 3,
              "system:index": "292"
            }),
        ee.Feature(
            ee.Geometry.Point([59.358012886799365, 36.513713041149835]),
            {
              "LC": 3,
              "system:index": "293"
            }),
        ee.Feature(
            ee.Geometry.Point([59.361583632308914, 36.52006434809305]),
            {
              "LC": 3,
              "system:index": "294"
            }),
        ee.Feature(
            ee.Geometry.Point([59.3619054973907, 36.51978843678114]),
            {
              "LC": 3,
              "system:index": "295"
            }),
        ee.Feature(
            ee.Geometry.Point([59.36218444712825, 36.51955563584645]),
            {
              "LC": 3,
              "system:index": "296"
            }),
        ee.Feature(
            ee.Geometry.Point([59.362291735488846, 36.51925385581453]),
            {
              "LC": 3,
              "system:index": "297"
            }),
        ee.Feature(
            ee.Geometry.Point([59.362538498718216, 36.51910727651722]),
            {
              "LC": 3,
              "system:index": "298"
            }),
        ee.Feature(
            ee.Geometry.Point([59.362087887603714, 36.51873651587865]),
            {
              "LC": 3,
              "system:index": "299"
            }),
        ee.Feature(
            ee.Geometry.Point([59.361787480194046, 36.51911589883651]),
            {
              "LC": 3,
              "system:index": "300"
            }),
        ee.Feature(
            ee.Geometry.Point([59.36147634394832, 36.519547013576144]),
            {
              "LC": 3,
              "system:index": "301"
            }),
        ee.Feature(
            ee.Geometry.Point([59.36126176722713, 36.519969503690575]),
            {
              "LC": 3,
              "system:index": "302"
            }),
        ee.Feature(
            ee.Geometry.Point([59.361529988128616, 36.5187623829576]),
            {
              "LC": 3,
              "system:index": "303"
            }),
        ee.Feature(
            ee.Geometry.Point([59.36164800532527, 36.51846059983189]),
            {
              "LC": 3,
              "system:index": "304"
            }),
        ee.Feature(
            ee.Geometry.Point([60.23890868094419, 35.939980266531805]),
            {
              "LC": 3,
              "system:index": "305"
            }),
        ee.Feature(
            ee.Geometry.Point([60.2394504871652, 35.940332065434916]),
            {
              "LC": 3,
              "system:index": "306"
            }),
        ee.Feature(
            ee.Geometry.Point([60.23938074973081, 35.94027560398807]),
            {
              "LC": 3,
              "system:index": "307"
            }),
        ee.Feature(
            ee.Geometry.Point([60.240051301984536, 35.93951554212345]),
            {
              "LC": 3,
              "system:index": "308"
            }),
        ee.Feature(
            ee.Geometry.Point([60.23950949576353, 35.93880324894143]),
            {
              "LC": 3,
              "system:index": "309"
            }),
        ee.Feature(
            ee.Geometry.Point([60.239852818517434, 35.93923757481617]),
            {
              "LC": 3,
              "system:index": "310"
            }),
        ee.Feature(
            ee.Geometry.Point([60.23977771666502, 35.938959606531306]),
            {
              "LC": 3,
              "system:index": "311"
            }),
        ee.Feature(
            ee.Geometry.Point([60.23963824179624, 35.93889880083865]),
            {
              "LC": 3,
              "system:index": "312"
            }),
        ee.Feature(
            ee.Geometry.Point([60.2394504871652, 35.938911830633884]),
            {
              "LC": 3,
              "system:index": "313"
            }),
        ee.Feature(
            ee.Geometry.Point([60.23925736811613, 35.938811935482335]),
            {
              "LC": 3,
              "system:index": "314"
            }),
        ee.Feature(
            ee.Geometry.Point([60.23913935091947, 35.93882930856123]),
            {
              "LC": 3,
              "system:index": "315"
            }),
        ee.Feature(
            ee.Geometry.Point([60.239053520230996, 35.93889880083865]),
            {
              "LC": 3,
              "system:index": "316"
            }),
        ee.Feature(
            ee.Geometry.Point([60.23928419020628, 35.9407099217718]),
            {
              "LC": 3,
              "system:index": "317"
            }),
        ee.Feature(
            ee.Geometry.Point([60.23801282313322, 35.940288633556285]),
            {
              "LC": 3,
              "system:index": "318"
            }),
        ee.Feature(
            ee.Geometry.Point([60.24094715979551, 35.93957200411329]),
            {
              "LC": 3,
              "system:index": "319"
            }),
        ee.Feature(
            ee.Geometry.Point([60.23988500502561, 35.93907253126492]),
            {
              "LC": 3,
              "system:index": "320"
            }),
        ee.Feature(
            ee.Geometry.Point([60.240104946164834, 35.93824730833915]),
            {
              "LC": 3,
              "system:index": "321"
            }),
        ee.Feature(
            ee.Geometry.Point([60.24017468359922, 35.93815609896071]),
            {
              "LC": 3,
              "system:index": "322"
            }),
        ee.Feature(
            ee.Geometry.Point([60.24002447989439, 35.9378346936453]),
            {
              "LC": 3,
              "system:index": "323"
            }),
        ee.Feature(
            ee.Geometry.Point([60.24004593756651, 35.93779126039433]),
            {
              "LC": 3,
              "system:index": "324"
            }),
        ee.Feature(
            ee.Geometry.Point([60.24043754008268, 35.93791287343689]),
            {
              "LC": 3,
              "system:index": "325"
            }),
        ee.Feature(
            ee.Geometry.Point([60.24052873518919, 35.93773914046166]),
            {
              "LC": 3,
              "system:index": "326"
            }),
        ee.Feature(
            ee.Geometry.Point([60.240357073812234, 35.93748288362618]),
            {
              "LC": 3,
              "system:index": "327"
            }),
        ee.Feature(
            ee.Geometry.Point([60.238828214673745, 35.938616488081536]),
            {
              "LC": 3,
              "system:index": "328"
            }),
        ee.Feature(
            ee.Geometry.Point([60.23854390051817, 35.938798905670666]),
            {
              "LC": 3,
              "system:index": "329"
            }),
        ee.Feature(
            ee.Geometry.Point([60.238592180280435, 35.93938958830845]),
            {
              "LC": 3,
              "system:index": "330"
            }),
        ee.Feature(
            ee.Geometry.Point([60.239069613485086, 35.940149651384324]),
            {
              "LC": 3,
              "system:index": "331"
            }),
        ee.Feature(
            ee.Geometry.Point([60.24144605067228, 35.938342860908456]),
            {
              "LC": 3,
              "system:index": "332"
            }),
        ee.Feature(
            ee.Geometry.Point([60.24094715979551, 35.937821663672516]),
            {
              "LC": 3,
              "system:index": "333"
            }),
        ee.Feature(
            ee.Geometry.Point([60.275662609466245, 35.935251531415304]),
            {
              "LC": 3,
              "system:index": "334"
            }),
        ee.Feature(
            ee.Geometry.Point([60.275410481818845, 35.93594648289555]),
            {
              "LC": 3,
              "system:index": "335"
            }),
        ee.Feature(
            ee.Geometry.Point([60.276676484473874, 35.93583355369576]),
            {
              "LC": 3,
              "system:index": "336"
            }),
        ee.Feature(
            ee.Geometry.Point([60.27701444280975, 35.935334057223265]),
            {
              "LC": 3,
              "system:index": "337"
            }),
        ee.Feature(
            ee.Geometry.Point([60.276939340957334, 35.93512557080546]),
            {
              "LC": 3,
              "system:index": "338"
            }),
        ee.Feature(
            ee.Geometry.Point([60.27696616304748, 35.93486496200993]),
            {
              "LC": 3,
              "system:index": "339"
            }),
        ee.Feature(
            ee.Geometry.Point([60.27733630789154, 35.93500395347446]),
            {
              "LC": 3,
              "system:index": "340"
            }),
        ee.Feature(
            ee.Geometry.Point([60.276193686851194, 35.93620708812551]),
            {
              "LC": 3,
              "system:index": "341"
            }),
        ee.Feature(
            ee.Geometry.Point([60.27472383631103, 35.93645031889825]),
            {
              "LC": 3,
              "system:index": "342"
            }),
        ee.Feature(
            ee.Geometry.Point([60.275201269515684, 35.93513860122266]),
            {
              "LC": 3,
              "system:index": "343"
            }),
        ee.Feature(
            ee.Geometry.Point([60.27632243288391, 35.933835548868174]),
            {
              "LC": 3,
              "system:index": "344"
            }),
        ee.Feature(
            ee.Geometry.Point([60.27637071264618, 35.93368352469436]),
            {
              "LC": 3,
              "system:index": "345"
            }),
        ee.Feature(
            ee.Geometry.Point([60.27672476423614, 35.93338816260661]),
            {
              "LC": 3,
              "system:index": "346"
            }),
        ee.Feature(
            ee.Geometry.Point([60.27646727217071, 35.933210076108665]),
            {
              "LC": 3,
              "system:index": "347"
            }),
        ee.Feature(
            ee.Geometry.Point([60.27632243288391, 35.93321441968655]),
            {
              "LC": 3,
              "system:index": "348"
            }),
        ee.Feature(
            ee.Geometry.Point([60.277191468604734, 35.93363574560792]),
            {
              "LC": 3,
              "system:index": "349"
            }),
        ee.Feature(
            ee.Geometry.Point([60.27749724043243, 35.933118860917745]),
            {
              "LC": 3,
              "system:index": "350"
            }),
        ee.Feature(
            ee.Geometry.Point([60.27749724043243, 35.93306239431827]),
            {
              "LC": 3,
              "system:index": "351"
            }),
        ee.Feature(
            ee.Geometry.Point([60.27770108831756, 35.93296683536572]),
            {
              "LC": 3,
              "system:index": "352"
            }),
        ee.Feature(
            ee.Geometry.Point([60.277690359481504, 35.93290602506304]),
            {
              "LC": 3,
              "system:index": "353"
            }),
        ee.Feature(
            ee.Geometry.Point([60.27778155458801, 35.93289733787311]),
            {
              "LC": 3,
              "system:index": "354"
            }),
        ee.Feature(
            ee.Geometry.Point([60.27724511278503, 35.93394413738477]),
            {
              "LC": 3,
              "system:index": "355"
            }),
        ee.Feature(
            ee.Geometry.Point([60.22392613252076, 36.06998224593313]),
            {
              "LC": 3,
              "system:index": "356"
            }),
        ee.Feature(
            ee.Geometry.Point([60.22387248834046, 36.06994322146607]),
            {
              "LC": 3,
              "system:index": "357"
            }),
        ee.Feature(
            ee.Geometry.Point([60.22367936929139, 36.069726418518634]),
            {
              "LC": 3,
              "system:index": "358"
            }),
        ee.Feature(
            ee.Geometry.Point([60.223513072332466, 36.06983048400799]),
            {
              "LC": 3,
              "system:index": "359"
            }),
        ee.Feature(
            ee.Geometry.Point([60.223319953283394, 36.06957899217305]),
            {
              "LC": 3,
              "system:index": "360"
            }),
        ee.Feature(
            ee.Geometry.Point([60.223319953283394, 36.069479262429645]),
            {
              "LC": 3,
              "system:index": "361"
            }),
        ee.Feature(
            ee.Geometry.Point([60.22319120725068, 36.06914538367283]),
            {
              "LC": 3,
              "system:index": "362"
            }),
        ee.Feature(
            ee.Geometry.Point([60.22312146981629, 36.069076006090974]),
            {
              "LC": 3,
              "system:index": "363"
            }),
        ee.Feature(
            ee.Geometry.Point([60.22283715566071, 36.06892424241737]),
            {
              "LC": 3,
              "system:index": "364"
            }),
        ee.Feature(
            ee.Geometry.Point([60.22284252007874, 36.06885486464048]),
            {
              "LC": 3,
              "system:index": "365"
            }),
        ee.Feature(
            ee.Geometry.Point([60.22269231637391, 36.0688418563005]),
            {
              "LC": 3,
              "system:index": "366"
            }),
        ee.Feature(
            ee.Geometry.Point([60.22247237523469, 36.06850797483818]),
            {
              "LC": 3,
              "system:index": "367"
            }),
        ee.Feature(
            ee.Geometry.Point([60.22248846848878, 36.06846027737074]),
            {
              "LC": 3,
              "system:index": "368"
            }),
        ee.Feature(
            ee.Geometry.Point([60.22294980843934, 36.06845160510081]),
            {
              "LC": 3,
              "system:index": "369"
            }),
        ee.Feature(
            ee.Geometry.Point([60.223293131193245, 36.06880716738337]),
            {
              "LC": 3,
              "system:index": "370"
            }),
        ee.Feature(
            ee.Geometry.Point([60.22191447575959, 36.06936218822173]),
            {
              "LC": 3,
              "system:index": "371"
            }),
        ee.Feature(
            ee.Geometry.Point([60.22188228925141, 36.06928413865296]),
            {
              "LC": 3,
              "system:index": "372"
            }),
        ee.Feature(
            ee.Geometry.Point([60.22208613713654, 36.06968305785743]),
            {
              "LC": 3,
              "system:index": "373"
            }),
        ee.Feature(
            ee.Geometry.Point([60.222263162931526, 36.07015135173343]),
            {
              "LC": 3,
              "system:index": "374"
            }),
        ee.Feature(
            ee.Geometry.Point([60.22222561200532, 36.070008262233785]),
            {
              "LC": 3,
              "system:index": "375"
            }),
        ee.Feature(
            ee.Geometry.Point([60.22274059613618, 36.06985650035879]),
            {
              "LC": 3,
              "system:index": "376"
            }),
        ee.Feature(
            ee.Geometry.Point([60.222542112669075, 36.070355145419924]),
            {
              "LC": 3,
              "system:index": "377"
            }),
        ee.Feature(
            ee.Geometry.Point([60.22259575684937, 36.07035948145007]),
            {
              "LC": 3,
              "system:index": "378"
            }),
        ee.Feature(
            ee.Geometry.Point([60.224274819692695, 36.069531295355034]),
            {
              "LC": 3,
              "system:index": "379"
            }),
        ee.Feature(
            ee.Geometry.Point([60.22511703332337, 36.06848195804133]),
            {
              "LC": 3,
              "system:index": "380"
            }),
        ee.Feature(
            ee.Geometry.Point([60.223041003545845, 36.06811338582837]),
            {
              "LC": 3,
              "system:index": "381"
            }),
        ee.Feature(
            ee.Geometry.Point([60.22274059613618, 36.06791825866355]),
            {
              "LC": 3,
              "system:index": "382"
            }),
        ee.Feature(
            ee.Geometry.Point([60.22266012986573, 36.06783153532383]),
            {
              "LC": 3,
              "system:index": "383"
            }),
        ee.Feature(
            ee.Geometry.Point([60.22217733224305, 36.06779684596117]),
            {
              "LC": 3,
              "system:index": "384"
            }),
        ee.Feature(
            ee.Geometry.Point([60.22211832364472, 36.06771012248759]),
            {
              "LC": 3,
              "system:index": "385"
            }),
        ee.Feature(
            ee.Geometry.Point([60.06198046454154, 36.084536224135235]),
            {
              "LC": 3,
              "system:index": "386"
            }),
        ee.Feature(
            ee.Geometry.Point([60.06201265104972, 36.0844668601303]),
            {
              "LC": 3,
              "system:index": "387"
            }),
        ee.Feature(
            ee.Geometry.Point([60.06025312193595, 36.084570906114735]),
            {
              "LC": 3,
              "system:index": "388"
            }),
        ee.Feature(
            ee.Geometry.Point([60.060639360034095, 36.08504778178151]),
            {
              "LC": 3,
              "system:index": "389"
            }),
        ee.Feature(
            ee.Geometry.Point([60.0605320716735, 36.08506512266035]),
            {
              "LC": 3,
              "system:index": "390"
            }),
        ee.Feature(
            ee.Geometry.Point([60.060113647067176, 36.08583678789593]),
            {
              "LC": 3,
              "system:index": "391"
            }),
        ee.Feature(
            ee.Geometry.Point([60.060381867968665, 36.085654710264684]),
            {
              "LC": 3,
              "system:index": "392"
            }),
        ee.Feature(
            ee.Geometry.Point([60.0605857158538, 36.08601886510545]),
            {
              "LC": 3,
              "system:index": "393"
            }),
        ee.Feature(
            ee.Geometry.Point([60.06052134283744, 36.085966843088606]),
            {
              "LC": 3,
              "system:index": "394"
            }),
        ee.Feature(
            ee.Geometry.Point([60.060896852099525, 36.086313655883906]),
            {
              "LC": 3,
              "system:index": "395"
            }),
        ee.Feature(
            ee.Geometry.Point([60.061132886492835, 36.08640902913436]),
            {
              "LC": 3,
              "system:index": "396"
            }),
        ee.Feature(
            ee.Geometry.Point([60.06124017485343, 36.086452380573604]),
            {
              "LC": 3,
              "system:index": "397"
            }),
        ee.Feature(
            ee.Geometry.Point([60.0615942264434, 36.08605354643088]),
            {
              "LC": 3,
              "system:index": "398"
            }),
        ee.Feature(
            ee.Geometry.Point([60.061390378558265, 36.0858541286007]),
            {
              "LC": 3,
              "system:index": "399"
            }),
        ee.Feature(
            ee.Geometry.Point([60.0595772052642, 36.08379055787501]),
            {
              "LC": 3,
              "system:index": "400"
            }),
        ee.Feature(
            ee.Geometry.Point([60.05950210341178, 36.08380789903117]),
            {
              "LC": 3,
              "system:index": "401"
            }),
        ee.Feature(
            ee.Geometry.Point([60.061379649722205, 36.084068015914326]),
            {
              "LC": 3,
              "system:index": "402"
            }),
        ee.Feature(
            ee.Geometry.Point([60.06085393675529, 36.08367784026685]),
            {
              "LC": 3,
              "system:index": "403"
            }),
        ee.Feature(
            ee.Geometry.Point([60.061905362689124, 36.085273212907964]),
            {
              "LC": 3,
              "system:index": "404"
            }),
        ee.Feature(
            ee.Geometry.Point([60.06185171850883, 36.08549864338798]),
            {
              "LC": 3,
              "system:index": "405"
            }),
        ee.Feature(
            ee.Geometry.Point([60.062420346819984, 36.08530789456234]),
            {
              "LC": 3,
              "system:index": "406"
            }),
        ee.Feature(
            ee.Geometry.Point([60.062602737033, 36.08531656497355]),
            {
              "LC": 3,
              "system:index": "407"
            }),
        ee.Feature(
            ee.Geometry.Point([60.062355973803626, 36.08576742503851]),
            {
              "LC": 3,
              "system:index": "408"
            }),
        ee.Feature(
            ee.Geometry.Point([60.0624954486724, 36.08583678789593]),
            {
              "LC": 3,
              "system:index": "409"
            }),
        ee.Feature(
            ee.Geometry.Point([60.063632705294715, 36.08663445635733]),
            {
              "LC": 3,
              "system:index": "410"
            }),
        ee.Feature(
            ee.Geometry.Point([60.06360051878654, 36.08656509420373]),
            {
              "LC": 3,
              "system:index": "411"
            }),
        ee.Feature(
            ee.Geometry.Point([60.062881686770545, 36.08624429344724]),
            {
              "LC": 3,
              "system:index": "412"
            }),
        ee.Feature(
            ee.Geometry.Point([60.062420346819984, 36.0866084455569]),
            {
              "LC": 3,
              "system:index": "413"
            }),
        ee.Feature(
            ee.Geometry.Point([60.06106851347648, 36.0858541286007]),
            {
              "LC": 3,
              "system:index": "414"
            }),
        ee.Feature(
            ee.Geometry.Point([60.06030676611625, 36.08673849947296]),
            {
              "LC": 3,
              "system:index": "415"
            }),
        ee.Feature(
            ee.Geometry.Point([60.05978105314933, 36.08611423871355]),
            {
              "LC": 3,
              "system:index": "416"
            }),
        ee.Feature(
            ee.Geometry.Point([60.059652307116615, 36.08528188332299]),
            {
              "LC": 3,
              "system:index": "417"
            }),
        ee.Feature(
            ee.Geometry.Point([60.059169509493934, 36.08507379309831]),
            {
              "LC": 3,
              "system:index": "418"
            }),
        ee.Feature(
            ee.Geometry.Point([60.05970595129691, 36.084310790895444]),
            {
              "LC": 3,
              "system:index": "419"
            }),
        ee.Feature(
            ee.Geometry.Point([60.059405543887245, 36.08423275616185]),
            {
              "LC": 3,
              "system:index": "420"
            }),
        ee.Feature(
            ee.Geometry.Point([60.063117721163856, 36.08459691758934]),
            {
              "LC": 3,
              "system:index": "421"
            }),
        ee.Feature(
            ee.Geometry.Point([60.024292514059034, 36.08768078619811]),
            {
              "LC": 3,
              "system:index": "422"
            }),
        ee.Feature(
            ee.Geometry.Point([60.022264764043776, 36.08727328809334]),
            {
              "LC": 3,
              "system:index": "423"
            }),
        ee.Feature(
            ee.Geometry.Point([60.02237205240437, 36.0877848279289]),
            {
              "LC": 3,
              "system:index": "424"
            }),
        ee.Feature(
            ee.Geometry.Point([60.02292995187947, 36.08840040535165]),
            {
              "LC": 3,
              "system:index": "425"
            }),
        ee.Feature(
            ee.Geometry.Point([60.02285485002705, 36.08826168409967]),
            {
              "LC": 3,
              "system:index": "426"
            }),
        ee.Feature(
            ee.Geometry.Point([60.02359513971516, 36.08898129793524]),
            {
              "LC": 3,
              "system:index": "427"
            }),
        ee.Feature(
            ee.Geometry.Point([60.023058697912184, 36.08920671778166]),
            {
              "LC": 3,
              "system:index": "428"
            }),
        ee.Feature(
            ee.Geometry.Point([60.02438907358357, 36.086518977516704]),
            {
              "LC": 3,
              "system:index": "429"
            }),
        ee.Feature(
            ee.Geometry.Point([60.023251816961256, 36.0866490315808]),
            {
              "LC": 3,
              "system:index": "430"
            }),
        ee.Feature(
            ee.Geometry.Point([60.02311234209248, 36.08734264962205]),
            {
              "LC": 3,
              "system:index": "431"
            }),
        ee.Feature(
            ee.Geometry.Point([60.02134208414265, 36.08777615778992]),
            {
              "LC": 3,
              "system:index": "432"
            }),
        ee.Feature(
            ee.Geometry.Point([60.021288439962355, 36.08768078619811]),
            {
              "LC": 3,
              "system:index": "433"
            }),
        ee.Feature(
            ee.Geometry.Point([60.02134208414265, 36.08803626154311]),
            {
              "LC": 3,
              "system:index": "434"
            }),
        ee.Feature(
            ee.Geometry.Point([60.02124552461812, 36.08690913906348]),
            {
              "LC": 3,
              "system:index": "435"
            }),
        ee.Feature(
            ee.Geometry.Point([60.02142791483113, 36.087186586096365]),
            {
              "LC": 3,
              "system:index": "436"
            }),
        ee.Feature(
            ee.Geometry.Point([60.02193217012593, 36.08700451159149]),
            {
              "LC": 3,
              "system:index": "437"
            }),
        ee.Feature(
            ee.Geometry.Point([60.02214674684712, 36.08695249022691]),
            {
              "LC": 3,
              "system:index": "438"
            }),
        ee.Feature(
            ee.Geometry.Point([59.84584819100696, 36.02475355319229]),
            {
              "LC": 3,
              "system:index": "439"
            }),
        ee.Feature(
            ee.Geometry.Point([59.84586964867908, 36.024632073903085]),
            {
              "LC": 3,
              "system:index": "440"
            }),
        ee.Feature(
            ee.Geometry.Point([59.845901835187256, 36.024527948648995]),
            {
              "LC": 3,
              "system:index": "441"
            }),
        ee.Feature(
            ee.Geometry.Point([59.84523664735156, 36.024406469011936]),
            {
              "LC": 3,
              "system:index": "442"
            }),
        ee.Feature(
            ee.Geometry.Point([59.84523664735156, 36.024354406253025]),
            {
              "LC": 3,
              "system:index": "443"
            }),
        ee.Feature(
            ee.Geometry.Point([59.84505425713855, 36.02414615487332]),
            {
              "LC": 3,
              "system:index": "444"
            }),
        ee.Feature(
            ee.Geometry.Point([59.8447216632207, 36.02400732031439]),
            {
              "LC": 3,
              "system:index": "445"
            }),
        ee.Feature(
            ee.Geometry.Point([59.8442710521062, 36.024154832025125]),
            {
              "LC": 3,
              "system:index": "446"
            }),
        ee.Feature(
            ee.Geometry.Point([59.844195950253784, 36.024406469011936]),
            {
              "LC": 3,
              "system:index": "447"
            }),
        ee.Feature(
            ee.Geometry.Point([59.843927729352295, 36.02458868839727]),
            {
              "LC": 3,
              "system:index": "448"
            }),
        ee.Feature(
            ee.Geometry.Point([59.8437131526311, 36.02410276909994]),
            {
              "LC": 3,
              "system:index": "449"
            }),
        ee.Feature(
            ee.Geometry.Point([59.8437667968114, 36.02389451705512]),
            {
              "LC": 3,
              "system:index": "450"
            }),
        ee.Feature(
            ee.Geometry.Point([59.843659508450806, 36.023955257291725]),
            {
              "LC": 3,
              "system:index": "451"
            }),
        ee.Feature(
            ee.Geometry.Point([59.84388481400806, 36.02356478352517]),
            {
              "LC": 3,
              "system:index": "452"
            }),
        ee.Feature(
            ee.Geometry.Point([59.84380971215564, 36.02369494166234]),
            {
              "LC": 3,
              "system:index": "453"
            }),
        ee.Feature(
            ee.Geometry.Point([59.84252225182849, 36.023313143850224]),
            {
              "LC": 3,
              "system:index": "454"
            }),
        ee.Feature(
            ee.Geometry.Point([59.84238277695972, 36.023443302403116]),
            {
              "LC": 3,
              "system:index": "455"
            }),
        ee.Feature(
            ee.Geometry.Point([59.842178929074585, 36.023347852818695]),
            {
              "LC": 3,
              "system:index": "456"
            }),
        ee.Feature(
            ee.Geometry.Point([59.842178929074585, 36.02318298508235]),
            {
              "LC": 3,
              "system:index": "457"
            }),
        ee.Feature(
            ee.Geometry.Point([59.84183560632068, 36.02276647558025]),
            {
              "LC": 3,
              "system:index": "458"
            }),
        ee.Feature(
            ee.Geometry.Point([59.84183560632068, 36.022705734427234]),
            {
              "LC": 3,
              "system:index": "459"
            }),
        ee.Feature(
            ee.Geometry.Point([59.841910708173096, 36.02267970249016]),
            {
              "LC": 3,
              "system:index": "460"
            }),
        ee.Feature(
            ee.Geometry.Point([59.84783302567798, 36.02562125695379]),
            {
              "LC": 3,
              "system:index": "461"
            }),
        ee.Feature(
            ee.Geometry.Point([59.8478544833501, 36.02548242499411]),
            {
              "LC": 3,
              "system:index": "462"
            }),
        ee.Feature(
            ee.Geometry.Point([59.84887372277576, 36.02439779188784]),
            {
              "LC": 3,
              "system:index": "463"
            }),
        ee.Feature(
            ee.Geometry.Point([59.848884451611816, 36.024154832025125]),
            {
              "LC": 3,
              "system:index": "464"
            }),
        ee.Feature(
            ee.Geometry.Point([59.84903465531665, 36.02399864314633]),
            {
              "LC": 3,
              "system:index": "465"
            }),
        ee.Feature(
            ee.Geometry.Point([59.84935652039844, 36.02405938330266]),
            {
              "LC": 3,
              "system:index": "466"
            }),
        ee.Feature(
            ee.Geometry.Point([59.84548341058093, 36.023373884535005]),
            {
              "LC": 3,
              "system:index": "467"
            }),
        ee.Feature(
            ee.Geometry.Point([59.84485040925342, 36.02324372586744]),
            {
              "LC": 3,
              "system:index": "468"
            }),
        ee.Feature(
            ee.Geometry.Point([59.84429250977832, 36.023235048615305]),
            {
              "LC": 3,
              "system:index": "469"
            }),
        ee.Feature(
            ee.Geometry.Point([59.84429250977832, 36.02313092151499]),
            {
              "LC": 3,
              "system:index": "470"
            }),
        ee.Feature(
            ee.Geometry.Point([59.843659508450806, 36.02288795774579]),
            {
              "LC": 3,
              "system:index": "471"
            }),
        ee.Feature(
            ee.Geometry.Point([59.8427582862218, 36.02288795774579]),
            {
              "LC": 3,
              "system:index": "472"
            }),
        ee.Feature(
            ee.Geometry.Point([59.84250079415637, 36.02214170719892]),
            {
              "LC": 3,
              "system:index": "473"
            }),
        ee.Feature(
            ee.Geometry.Point([59.841427910550415, 36.02235864122607]),
            {
              "LC": 3,
              "system:index": "474"
            }),
        ee.Feature(
            ee.Geometry.Point([59.84038721345264, 36.022749120969856]),
            {
              "LC": 3,
              "system:index": "475"
            }),
        ee.Feature(
            ee.Geometry.Point([59.84049450181323, 36.023573460740984]),
            {
              "LC": 3,
              "system:index": "476"
            }),
        ee.Feature(
            ee.Geometry.Point([59.840440857632935, 36.023373884535005]),
            {
              "LC": 3,
              "system:index": "477"
            }),
        ee.Feature(
            ee.Geometry.Point([59.84077345155078, 36.023660232846794]),
            {
              "LC": 3,
              "system:index": "478"
            }),
        ee.Feature(
            ee.Geometry.Point([59.84147082589465, 36.023747004857015]),
            {
              "LC": 3,
              "system:index": "479"
            }),
        ee.Feature(
            ee.Geometry.Point([59.84148155473071, 36.023738327660304]),
            {
              "LC": 3,
              "system:index": "480"
            }),
        ee.Feature(
            ee.Geometry.Point([59.84150301240283, 36.02369494166234]),
            {
              "LC": 3,
              "system:index": "481"
            }),
        ee.Feature(
            ee.Geometry.Point([59.841460097058594, 36.023365207297175]),
            {
              "LC": 3,
              "system:index": "482"
            }),
        ee.Feature(
            ee.Geometry.Point([59.8467386843999, 36.02510063584363]),
            {
              "LC": 3,
              "system:index": "483"
            }),
        ee.Feature(
            ee.Geometry.Point([59.8468459727605, 36.02502254238038]),
            {
              "LC": 3,
              "system:index": "484"
            }),
        ee.Feature(
            ee.Geometry.Point([59.846953261121094, 36.02497915708957]),
            {
              "LC": 3,
              "system:index": "485"
            }),
        ee.Feature(
            ee.Geometry.Point([59.84709273598987, 36.02477958444416]),
            {
              "LC": 3,
              "system:index": "486"
            }),
        ee.Feature(
            ee.Geometry.Point([59.84799395821887, 36.02461471970362]),
            {
              "LC": 3,
              "system:index": "487"
            }),
        ee.Feature(
            ee.Geometry.Point([59.84831582330066, 36.02549110199877]),
            {
              "LC": 3,
              "system:index": "488"
            }),
        ee.Feature(
            ee.Geometry.Point([59.844678747876465, 36.02608981301156]),
            {
              "LC": 3,
              "system:index": "489"
            }),
        ee.Feature(
            ee.Geometry.Point([59.84505425713855, 36.02684470302107]),
            {
              "LC": 3,
              "system:index": "490"
            }),
        ee.Feature(
            ee.Geometry.Point([59.84480749390918, 36.02661910446569]),
            {
              "LC": 3,
              "system:index": "491"
            }),
        ee.Feature(
            ee.Geometry.Point([59.84974275849658, 36.02513534402467]),
            {
              "LC": 3,
              "system:index": "492"
            }),
        ee.Feature(
            ee.Geometry.Point([59.849678385480225, 36.024406469011936]),
            {
              "LC": 3,
              "system:index": "493"
            }),
        ee.Feature(
            ee.Geometry.Point([59.84933506272632, 36.02497915708957]),
            {
              "LC": 3,
              "system:index": "494"
            }),
        ee.Feature(
            ee.Geometry.Point([59.847436058743774, 36.02320033959714]),
            {
              "LC": 3,
              "system:index": "495"
            }),
        ee.Feature(
            ee.Geometry.Point([59.83528028748828, 36.0281896040806]),
            {
              "LC": 3,
              "system:index": "496"
            }),
        ee.Feature(
            ee.Geometry.Point([59.83507643960315, 36.02813754382161]),
            {
              "LC": 3,
              "system:index": "497"
            }),
        ee.Feature(
            ee.Geometry.Point([59.8347438456853, 36.028007393023564]),
            {
              "LC": 3,
              "system:index": "498"
            }),
        ee.Feature(
            ee.Geometry.Point([59.77541455300388, 35.92507376006513]),
            {
              "LC": 3,
              "system:index": "499"
            }),
        ee.Feature(
            ee.Geometry.Point([59.77479228051242, 35.924604603972135]),
            {
              "LC": 3,
              "system:index": "500"
            }),
        ee.Feature(
            ee.Geometry.Point([59.774706449823945, 35.9243960892596]),
            {
              "LC": 3,
              "system:index": "501"
            }),
        ee.Feature(
            ee.Geometry.Point([59.76859101326999, 35.92359677776826]),
            {
              "LC": 3,
              "system:index": "502"
            }),
        ee.Feature(
            ee.Geometry.Point([59.76809748681125, 35.92307548331264]),
            {
              "LC": 3,
              "system:index": "503"
            }),
        ee.Feature(
            ee.Geometry.Point([59.7659088042551, 35.92413544509577]),
            {
              "LC": 3,
              "system:index": "504"
            }),
        ee.Feature(
            ee.Geometry.Point([59.761724558191865, 35.93204126919816]),
            {
              "LC": 3,
              "system:index": "505"
            }),
        ee.Feature(
            ee.Geometry.Point([59.76166018517551, 35.931815399479476]),
            {
              "LC": 3,
              "system:index": "506"
            }),
        ee.Feature(
            ee.Geometry.Point([59.76676711113986, 35.931693777055976]),
            {
              "LC": 3,
              "system:index": "507"
            }),
        ee.Feature(
            ee.Geometry.Point([59.76352700264987, 35.91815776985247]),
            {
              "LC": 3,
              "system:index": "508"
            }),
        ee.Feature(
            ee.Geometry.Point([59.76318367989597, 35.9177059504526]),
            {
              "LC": 3,
              "system:index": "509"
            }),
        ee.Feature(
            ee.Geometry.Point([59.78466280968723, 35.92788863817105]),
            {
              "LC": 3,
              "system:index": "510"
            }),
        ee.Feature(
            ee.Geometry.Point([59.78509196312961, 35.927176240220156]),
            {
              "LC": 3,
              "system:index": "511"
            }),
        ee.Feature(
            ee.Geometry.Point([59.78354701073703, 35.928149269964045]),
            {
              "LC": 3,
              "system:index": "512"
            }),
        ee.Feature(
            ee.Geometry.Point([59.78281744988498, 35.92847940233523]),
            {
              "LC": 3,
              "system:index": "513"
            }),
        ee.Feature(
            ee.Geometry.Point([59.78260287316379, 35.92820139621955]),
            {
              "LC": 3,
              "system:index": "514"
            }),
        ee.Feature(
            ee.Geometry.Point([59.78189476998386, 35.92874003218093]),
            {
              "LC": 3,
              "system:index": "515"
            }),
        ee.Feature(
            ee.Geometry.Point([59.78236683877048, 35.92874003218093]),
            {
              "LC": 3,
              "system:index": "516"
            }),
        ee.Feature(
            ee.Geometry.Point([59.782967653589814, 35.92941766575912]),
            {
              "LC": 3,
              "system:index": "517"
            }),
        ee.Feature(
            ee.Geometry.Point([59.78301056893405, 35.92927866447296]),
            {
              "LC": 3,
              "system:index": "518"
            }),
        ee.Feature(
            ee.Geometry.Point([59.78303202660617, 35.929243914113236]),
            {
              "LC": 3,
              "system:index": "519"
            }),
        ee.Feature(
            ee.Geometry.Point([59.784727182703584, 35.927801760715795]),
            {
              "LC": 3,
              "system:index": "520"
            }),
        ee.Feature(
            ee.Geometry.Point([59.78515633614597, 35.92828827323571]),
            {
              "LC": 3,
              "system:index": "521"
            }),
        ee.Feature(
            ee.Geometry.Point([59.78479155571994, 35.92856627904592]),
            {
              "LC": 3,
              "system:index": "522"
            }),
        ee.Feature(
            ee.Geometry.Point([59.78560694726047, 35.926811350979186]),
            {
              "LC": 3,
              "system:index": "523"
            })]),
    I2 = 
    /* color: #00ffff */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([59.65004987538195, 36.309512363876784]),
            {
              "LC": 4,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([59.64964217961169, 36.30920112101517]),
            {
              "LC": 4,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([59.64908428013659, 36.30890716828288]),
            {
              "LC": 4,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([59.648762415054804, 36.30871696298325]),
            {
              "LC": 4,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([59.648504922989375, 36.30849217430366]),
            {
              "LC": 4,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([59.648032854202754, 36.30823280194502]),
            {
              "LC": 4,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([59.64753932774401, 36.30786967919351]),
            {
              "LC": 4,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([59.6473032933507, 36.307731346271936]),
            {
              "LC": 4,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([59.64689559758044, 36.30747197138255]),
            {
              "LC": 4,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([59.64459962666369, 36.30603674806654]),
            {
              "LC": 4,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([59.64408464253283, 36.30652092274012]),
            {
              "LC": 4,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([59.64329070866442, 36.307333637755455]),
            {
              "LC": 4,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([59.642475317123896, 36.308215510423786]),
            {
              "LC": 4,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([59.64204616368151, 36.30859592300551]),
            {
              "LC": 4,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([59.64084453404284, 36.31082648670646]),
            {
              "LC": 4,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([59.640973280075556, 36.31049795807547]),
            {
              "LC": 4,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([59.641037653091914, 36.31023859238898]),
            {
              "LC": 4,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([59.6423680287633, 36.31074003193776]),
            {
              "LC": 4,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([59.64543647587634, 36.31369673060139]),
            {
              "LC": 4,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([59.637540052536494, 36.31295324382967]),
            {
              "LC": 4,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([59.63745422184802, 36.31269388631097]),
            {
              "LC": 4,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([59.63738984883166, 36.31243452792947]),
            {
              "LC": 4,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([59.637025068405634, 36.313160729223384]),
            {
              "LC": 4,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([59.636231134537226, 36.31350653698585]),
            {
              "LC": 4,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([59.6353084546361, 36.31383505293942]),
            {
              "LC": 4,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([59.656766126755244, 36.30933945132927]),
            {
              "LC": 4,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([59.660993288162715, 36.30691863540168]),
            {
              "LC": 4,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([59.659212301376826, 36.30790426238557]),
            {
              "LC": 4,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([59.66002769291735, 36.307973428723635]),
            {
              "LC": 4,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([59.65938396275378, 36.308301967991696]),
            {
              "LC": 4,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([59.66180867970324, 36.30691863540168]),
            {
              "LC": 4,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([59.66251678288317, 36.305881119854476]),
            {
              "LC": 4,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([59.665220449570185, 36.30328727059485]),
            {
              "LC": 4,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([59.665241907242304, 36.30292412481397]),
            {
              "LC": 4,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([59.66528482258654, 36.30263014841952]),
            {
              "LC": 4,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([59.56049023345981, 36.40586809357067]),
            {
              "LC": 4,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([59.56026761011157, 36.405986823650466]),
            {
              "LC": 4,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([59.56015227512393, 36.406064537786264]),
            {
              "LC": 4,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([59.56005303339038, 36.40615304545733]),
            {
              "LC": 4,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([59.55991892293964, 36.406250187907126]),
            {
              "LC": 4,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([59.56068067029987, 36.40578606177322]),
            {
              "LC": 4,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([59.5608120985416, 36.40577310937623]),
            {
              "LC": 4,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([59.56426356018772, 36.40564221211623]),
            {
              "LC": 4,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([59.5641696828722, 36.405620624746746]),
            {
              "LC": 4,
              "system:index": "43"
            }),
        ee.Feature(
            ee.Geometry.Point([59.56405703009357, 36.405540751427516]),
            {
              "LC": 4,
              "system:index": "44"
            }),
        ee.Feature(
            ee.Geometry.Point([59.53296329605864, 36.40288049365966]),
            {
              "LC": 4,
              "system:index": "45"
            }),
        ee.Feature(
            ee.Geometry.Point([59.53308399546431, 36.40278766462902]),
            {
              "LC": 4,
              "system:index": "46"
            }),
        ee.Feature(
            ee.Geometry.Point([59.533169826152786, 36.40273369421139]),
            {
              "LC": 4,
              "system:index": "47"
            }),
        ee.Feature(
            ee.Geometry.Point([59.534041544082626, 36.402010486998606]),
            {
              "LC": 4,
              "system:index": "48"
            }),
        ee.Feature(
            ee.Geometry.Point([59.533360262992844, 36.4025739415555]),
            {
              "LC": 4,
              "system:index": "49"
            }),
        ee.Feature(
            ee.Geometry.Point([59.533558746459946, 36.40248111215866]),
            {
              "LC": 4,
              "system:index": "50"
            }),
        ee.Feature(
            ee.Geometry.Point([59.533695539119705, 36.40237964734221]),
            {
              "LC": 4,
              "system:index": "51"
            }),
        ee.Feature(
            ee.Geometry.Point([59.53362848389433, 36.40239907678543]),
            {
              "LC": 4,
              "system:index": "52"
            }),
        ee.Feature(
            ee.Geometry.Point([59.533942302349075, 36.40217887614479]),
            {
              "LC": 4,
              "system:index": "53"
            }),
        ee.Feature(
            ee.Geometry.Point([59.53384037840651, 36.402219893958474]),
            {
              "LC": 4,
              "system:index": "54"
            }),
        ee.Feature(
            ee.Geometry.Point([59.53374113667296, 36.40227602356317]),
            {
              "LC": 4,
              "system:index": "55"
            }),
        ee.Feature(
            ee.Geometry.Point([59.533953031185135, 36.402111952297055]),
            {
              "LC": 4,
              "system:index": "56"
            }),
        ee.Feature(
            ee.Geometry.Point([59.532708486202225, 36.40304024568532]),
            {
              "LC": 4,
              "system:index": "57"
            }),
        ee.Feature(
            ee.Geometry.Point([59.53264679539488, 36.40315034486318]),
            {
              "LC": 4,
              "system:index": "58"
            }),
        ee.Feature(
            ee.Geometry.Point([59.53251804936217, 36.40323237944331]),
            {
              "LC": 4,
              "system:index": "59"
            }),
        ee.Feature(
            ee.Geometry.Point([59.532434900882706, 36.40333816074772]),
            {
              "LC": 4,
              "system:index": "60"
            }),
        ee.Feature(
            ee.Geometry.Point([59.53241076100157, 36.40341587753269]),
            {
              "LC": 4,
              "system:index": "61"
            }),
        ee.Feature(
            ee.Geometry.Point([59.53233834135817, 36.40350007062867]),
            {
              "LC": 4,
              "system:index": "62"
            }),
        ee.Feature(
            ee.Geometry.Point([59.532182773235306, 36.403612327948096]),
            {
              "LC": 4,
              "system:index": "63"
            }),
        ee.Feature(
            ee.Geometry.Point([59.53340317833708, 36.40267108847998]),
            {
              "LC": 4,
              "system:index": "64"
            }),
        ee.Feature(
            ee.Geometry.Point([59.53446220494133, 36.40157795542598]),
            {
              "LC": 4,
              "system:index": "65"
            }),
        ee.Feature(
            ee.Geometry.Point([59.53448634482246, 36.401649197428895]),
            {
              "LC": 4,
              "system:index": "66"
            }),
        ee.Feature(
            ee.Geometry.Point([59.53459631539207, 36.40167078590174]),
            {
              "LC": 4,
              "system:index": "67"
            }),
        ee.Feature(
            ee.Geometry.Point([59.53473042584282, 36.401739868974516]),
            {
              "LC": 4,
              "system:index": "68"
            }),
        ee.Feature(
            ee.Geometry.Point([59.53480820990425, 36.401757139733114]),
            {
              "LC": 4,
              "system:index": "69"
            }),
        ee.Feature(
            ee.Geometry.Point([59.53493427372795, 36.40181326967205]),
            {
              "LC": 4,
              "system:index": "70"
            }),
        ee.Feature(
            ee.Geometry.Point([59.535036197670514, 36.40184133462632]),
            {
              "LC": 4,
              "system:index": "71"
            }),
        ee.Feature(
            ee.Geometry.Point([59.5351595792852, 36.401927688268174]),
            {
              "LC": 4,
              "system:index": "72"
            }),
        ee.Feature(
            ee.Geometry.Point([59.535266867645795, 36.402003247626084]),
            {
              "LC": 4,
              "system:index": "73"
            }),
        ee.Feature(
            ee.Geometry.Point([59.53552167750221, 36.40210255409905]),
            {
              "LC": 4,
              "system:index": "74"
            }),
        ee.Feature(
            ee.Geometry.Point([59.53561555481773, 36.40218243095259]),
            {
              "LC": 4,
              "system:index": "75"
            }),
        ee.Feature(
            ee.Geometry.Point([59.53584086037498, 36.402350819726195]),
            {
              "LC": 4,
              "system:index": "76"
            }),
        ee.Feature(
            ee.Geometry.Point([59.53594814873558, 36.402426378672665]),
            {
              "LC": 4,
              "system:index": "77"
            }),
        ee.Feature(
            ee.Geometry.Point([59.53610103464943, 36.402549431656816]),
            {
              "LC": 4,
              "system:index": "78"
            }),
        ee.Feature(
            ee.Geometry.Point([59.53662942982536, 36.40280417230303]),
            {
              "LC": 4,
              "system:index": "79"
            }),
        ee.Feature(
            ee.Geometry.Point([59.5366187009893, 36.40287973080868]),
            {
              "LC": 4,
              "system:index": "80"
            }),
        ee.Feature(
            ee.Geometry.Point([59.5368520531736, 36.4029682421076]),
            {
              "LC": 4,
              "system:index": "81"
            }),
        ee.Feature(
            ee.Geometry.Point([59.53675012923103, 36.40288836606179]),
            {
              "LC": 4,
              "system:index": "82"
            }),
        ee.Feature(
            ee.Geometry.Point([59.53709076977592, 36.40315174082072]),
            {
              "LC": 4,
              "system:index": "83"
            }),
        ee.Feature(
            ee.Geometry.Point([59.53719805813652, 36.40321218736075]),
            {
              "LC": 4,
              "system:index": "84"
            }),
        ee.Feature(
            ee.Geometry.Point([59.53733485079628, 36.40329206307367]),
            {
              "LC": 4,
              "system:index": "85"
            }),
        ee.Feature(
            ee.Geometry.Point([59.534263721474225, 36.40147648943028]),
            {
              "LC": 4,
              "system:index": "86"
            }),
        ee.Feature(
            ee.Geometry.Point([59.534148386486585, 36.40142683580963]),
            {
              "LC": 4,
              "system:index": "87"
            }),
        ee.Feature(
            ee.Geometry.Point([59.534022322662885, 36.4013188930466]),
            {
              "LC": 4,
              "system:index": "88"
            }),
        ee.Feature(
            ee.Geometry.Point([59.53392039872032, 36.401221744431666]),
            {
              "LC": 4,
              "system:index": "89"
            }),
        ee.Feature(
            ee.Geometry.Point([59.53379969931465, 36.40112891341951]),
            {
              "LC": 4,
              "system:index": "90"
            }),
        ee.Feature(
            ee.Geometry.Point([59.53367899990898, 36.40105982980358]),
            {
              "LC": 4,
              "system:index": "91"
            }),
        ee.Feature(
            ee.Geometry.Point([59.535497537621076, 36.401351275891265]),
            {
              "LC": 4,
              "system:index": "92"
            }),
        ee.Feature(
            ee.Geometry.Point([59.53537415600639, 36.40141604154008]),
            {
              "LC": 4,
              "system:index": "93"
            }),
        ee.Feature(
            ee.Geometry.Point([59.535261503227765, 36.40150023680286]),
            {
              "LC": 4,
              "system:index": "94"
            }),
        ee.Feature(
            ee.Geometry.Point([59.535677245625074, 36.40119583811386]),
            {
              "LC": 4,
              "system:index": "95"
            }),
        ee.Feature(
            ee.Geometry.Point([59.53581672049385, 36.40108789502997]),
            {
              "LC": 4,
              "system:index": "96"
            }),
        ee.Feature(
            ee.Geometry.Point([59.527086198118766, 36.3904766152793]),
            {
              "LC": 4,
              "system:index": "97"
            }),
        ee.Feature(
            ee.Geometry.Point([59.52698963859423, 36.390390248914166]),
            {
              "LC": 4,
              "system:index": "98"
            }),
        ee.Feature(
            ee.Geometry.Point([59.52678042629107, 36.390290927475675]),
            {
              "LC": 4,
              "system:index": "99"
            }),
        ee.Feature(
            ee.Geometry.Point([59.526619493750175, 36.3901441042472]),
            {
              "LC": 4,
              "system:index": "100"
            }),
        ee.Feature(
            ee.Geometry.Point([59.52621716239794, 36.38984182025661]),
            {
              "LC": 4,
              "system:index": "101"
            }),
        ee.Feature(
            ee.Geometry.Point([59.5257236359392, 36.389466122801544]),
            {
              "LC": 4,
              "system:index": "102"
            }),
        ee.Feature(
            ee.Geometry.Point([59.525600254324516, 36.38936680018244]),
            {
              "LC": 4,
              "system:index": "103"
            }),
        ee.Feature(
            ee.Geometry.Point([59.525385677603325, 36.389254522286244]),
            {
              "LC": 4,
              "system:index": "104"
            }),
        ee.Feature(
            ee.Geometry.Point([59.523100435522636, 36.39154755023531]),
            {
              "LC": 4,
              "system:index": "105"
            }),
        ee.Feature(
            ee.Geometry.Point([59.522875129965385, 36.391383456320106]),
            {
              "LC": 4,
              "system:index": "106"
            }),
        ee.Feature(
            ee.Geometry.Point([59.52277857044085, 36.39127549960805]),
            {
              "LC": 4,
              "system:index": "107"
            }),
        ee.Feature(
            ee.Geometry.Point([59.522644459990104, 36.39117617930056]),
            {
              "LC": 4,
              "system:index": "108"
            }),
        ee.Feature(
            ee.Geometry.Point([59.52254253604754, 36.39109413199429]),
            {
              "LC": 4,
              "system:index": "109"
            }),
        ee.Feature(
            ee.Geometry.Point([59.52242451885088, 36.39099481145505]),
            {
              "LC": 4,
              "system:index": "110"
            }),
        ee.Feature(
            ee.Geometry.Point([59.52231723049029, 36.390917082248905]),
            {
              "LC": 4,
              "system:index": "111"
            }),
        ee.Feature(
            ee.Geometry.Point([59.52220994212969, 36.390830716373124]),
            {
              "LC": 4,
              "system:index": "112"
            }),
        ee.Feature(
            ee.Geometry.Point([59.52156044091924, 36.38947669544417]),
            {
              "LC": 4,
              "system:index": "113"
            }),
        ee.Feature(
            ee.Geometry.Point([59.52172137346013, 36.389347144194225]),
            {
              "LC": 4,
              "system:index": "114"
            }),
        ee.Feature(
            ee.Geometry.Point([59.52228463735326, 36.38882461862825]),
            {
              "LC": 4,
              "system:index": "115"
            }),
        ee.Feature(
            ee.Geometry.Point([59.52249384965642, 36.38864756371423]),
            {
              "LC": 4,
              "system:index": "116"
            }),
        ee.Feature(
            ee.Geometry.Point([59.52269769754155, 36.38845323468594]),
            {
              "LC": 4,
              "system:index": "117"
            }),
        ee.Feature(
            ee.Geometry.Point([59.522890816590625, 36.388289134239336]),
            {
              "LC": 4,
              "system:index": "118"
            }),
        ee.Feature(
            ee.Geometry.Point([59.523132215401965, 36.38808616741836]),
            {
              "LC": 4,
              "system:index": "119"
            }),
        ee.Feature(
            ee.Geometry.Point([59.52343798722966, 36.387801149285934]),
            {
              "LC": 4,
              "system:index": "120"
            }),
        ee.Feature(
            ee.Geometry.Point([59.523647199532824, 36.38797820612749]),
            {
              "LC": 4,
              "system:index": "121"
            }),
        ee.Feature(
            ee.Geometry.Point([59.52396370019658, 36.38822435765193]),
            {
              "LC": 4,
              "system:index": "122"
            }),
        ee.Feature(
            ee.Geometry.Point([59.524366031548816, 36.388518011082674]),
            {
              "LC": 4,
              "system:index": "123"
            }),
        ee.Feature(
            ee.Geometry.Point([59.52469326104863, 36.388807344995854]),
            {
              "LC": 4,
              "system:index": "124"
            }),
        ee.Feature(
            ee.Geometry.Point([59.524913202187854, 36.38898008114711]),
            {
              "LC": 4,
              "system:index": "125"
            }),
        ee.Feature(
            ee.Geometry.Point([59.525100956818896, 36.3890794042603]),
            {
              "LC": 4,
              "system:index": "126"
            }),
        ee.Feature(
            ee.Geometry.Point([59.52528871144994, 36.389226229499535]),
            {
              "LC": 4,
              "system:index": "127"
            }),
        ee.Feature(
            ee.Geometry.Point([59.5254979237531, 36.38910963300869]),
            {
              "LC": 4,
              "system:index": "128"
            }),
        ee.Feature(
            ee.Geometry.Point([59.525621305367785, 36.38898871794459]),
            {
              "LC": 4,
              "system:index": "129"
            }),
        ee.Feature(
            ee.Geometry.Point([59.52578760232671, 36.38883757385003]),
            {
              "LC": 4,
              "system:index": "130"
            }),
        ee.Feature(
            ee.Geometry.Point([59.52600754346593, 36.38864324529667]),
            {
              "LC": 4,
              "system:index": "131"
            }),
        ee.Feature(
            ee.Geometry.Point([59.52631867971166, 36.3883539107728]),
            {
              "LC": 4,
              "system:index": "132"
            }),
        ee.Feature(
            ee.Geometry.Point([59.519253514053624, 36.38482773533977]),
            {
              "LC": 4,
              "system:index": "133"
            }),
        ee.Feature(
            ee.Geometry.Point([59.519446633102696, 36.38467658315629]),
            {
              "LC": 4,
              "system:index": "134"
            }),
        ee.Feature(
            ee.Geometry.Point([59.51961293006162, 36.38449951879623]),
            {
              "LC": 4,
              "system:index": "135"
            }),
        ee.Feature(
            ee.Geometry.Point([59.5197899558566, 36.38422312484289]),
            {
              "LC": 4,
              "system:index": "136"
            }),
        ee.Feature(
            ee.Geometry.Point([59.519940159561436, 36.384093564839056]),
            {
              "LC": 4,
              "system:index": "137"
            }),
        ee.Feature(
            ee.Geometry.Point([59.52011718535642, 36.383851718921015]),
            {
              "LC": 4,
              "system:index": "138"
            }),
        ee.Feature(
            ee.Geometry.Point([59.519966981651585, 36.383203913649105]),
            {
              "LC": 4,
              "system:index": "139"
            }),
        ee.Feature(
            ee.Geometry.Point([59.51963438773374, 36.38314777027142]),
            {
              "LC": 4,
              "system:index": "140"
            }),
        ee.Feature(
            ee.Geometry.Point([59.519441268684666, 36.38307003322]),
            {
              "LC": 4,
              "system:index": "141"
            }),
        ee.Feature(
            ee.Geometry.Point([59.518947742225926, 36.38285409655835]),
            {
              "LC": 4,
              "system:index": "142"
            }),
        ee.Feature(
            ee.Geometry.Point([59.518700978996556, 36.38278067795679]),
            {
              "LC": 4,
              "system:index": "143"
            }),
        ee.Feature(
            ee.Geometry.Point([59.51857223296384, 36.38265111554963]),
            {
              "LC": 4,
              "system:index": "144"
            }),
        ee.Feature(
            ee.Geometry.Point([59.518239639045994, 36.382426540199205]),
            {
              "LC": 4,
              "system:index": "145"
            }),
        ee.Feature(
            ee.Geometry.Point([59.5210505940936, 36.38305707703721]),
            {
              "LC": 4,
              "system:index": "146"
            }),
        ee.Feature(
            ee.Geometry.Point([59.51907112384061, 36.383221188526406]),
            {
              "LC": 4,
              "system:index": "147"
            }),
        ee.Feature(
            ee.Geometry.Point([59.51905503058652, 36.38508685268501]),
            {
              "LC": 4,
              "system:index": "148"
            }),
        ee.Feature(
            ee.Geometry.Point([59.51850785994748, 36.38561804054332]),
            {
              "LC": 4,
              "system:index": "149"
            }),
        ee.Feature(
            ee.Geometry.Point([59.52167286658506, 36.382607928032606]),
            {
              "LC": 4,
              "system:index": "150"
            }),
        ee.Feature(
            ee.Geometry.Point([59.52167286658506, 36.38242222143611]),
            {
              "LC": 4,
              "system:index": "151"
            }),
        ee.Feature(
            ee.Geometry.Point([59.52165677333097, 36.38225378948833]),
            {
              "LC": 4,
              "system:index": "152"
            }),
        ee.Feature(
            ee.Geometry.Point([59.521989367248814, 36.3820248942053]),
            {
              "LC": 4,
              "system:index": "153"
            }),
        ee.Feature(
            ee.Geometry.Point([59.5226706483386, 36.38154550756155]),
            {
              "LC": 4,
              "system:index": "154"
            }),
        ee.Feature(
            ee.Geometry.Point([59.523180268051426, 36.38123887131182]),
            {
              "LC": 4,
              "system:index": "155"
            }),
        ee.Feature(
            ee.Geometry.Point([59.52292814040403, 36.38125614662564]),
            {
              "LC": 4,
              "system:index": "156"
            }),
        ee.Feature(
            ee.Geometry.Point([59.52230050349454, 36.38182622982863]),
            {
              "LC": 4,
              "system:index": "157"
            }),
        ee.Feature(
            ee.Geometry.Point([59.51681270385007, 36.38156278280725]),
            {
              "LC": 4,
              "system:index": "158"
            }),
        ee.Feature(
            ee.Geometry.Point([59.51901386842252, 36.37838894559688]),
            {
              "LC": 4,
              "system:index": "159"
            }),
        ee.Feature(
            ee.Geometry.Point([59.51882611379148, 36.378665360286455]),
            {
              "LC": 4,
              "system:index": "160"
            }),
        ee.Feature(
            ee.Geometry.Point([59.518622265906345, 36.37888562753886]),
            {
              "LC": 4,
              "system:index": "161"
            }),
        ee.Feature(
            ee.Geometry.Point([59.51831112966062, 36.379308884429655]),
            {
              "LC": 4,
              "system:index": "162"
            }),
        ee.Feature(
            ee.Geometry.Point([59.5179302559805, 36.37982283612891]),
            {
              "LC": 4,
              "system:index": "163"
            }),
        ee.Feature(
            ee.Geometry.Point([59.51766203507901, 36.380155391300896]),
            {
              "LC": 4,
              "system:index": "164"
            }),
        ee.Feature(
            ee.Geometry.Point([59.40645846803623, 35.84556724053676]),
            {
              "LC": 4,
              "system:index": "165"
            }),
        ee.Feature(
            ee.Geometry.Point([59.40607222993808, 35.84381047217262]),
            {
              "LC": 4,
              "system:index": "166"
            }),
        ee.Feature(
            ee.Geometry.Point([59.40592202623325, 35.84294077046368]),
            {
              "LC": 4,
              "system:index": "167"
            }),
        ee.Feature(
            ee.Geometry.Point([59.407531351642184, 35.84960244229802]),
            {
              "LC": 4,
              "system:index": "168"
            }),
        ee.Feature(
            ee.Geometry.Point([59.407788843707614, 35.85052424837223]),
            {
              "LC": 4,
              "system:index": "169"
            }),
        ee.Feature(
            ee.Geometry.Point([59.40806779344516, 35.851115590022985]),
            {
              "LC": 4,
              "system:index": "170"
            }),
        ee.Feature(
            ee.Geometry.Point([59.40667304475742, 35.83855732870313]),
            {
              "LC": 4,
              "system:index": "171"
            }),
        ee.Feature(
            ee.Geometry.Point([59.405750364856296, 35.83885304469507]),
            {
              "LC": 4,
              "system:index": "172"
            }),
        ee.Feature(
            ee.Geometry.Point([59.40568599183994, 35.839792370533935]),
            {
              "LC": 4,
              "system:index": "173"
            }),
        ee.Feature(
            ee.Geometry.Point([59.40615806062656, 35.84066210676367]),
            {
              "LC": 4,
              "system:index": "174"
            }),
        ee.Feature(
            ee.Geometry.Point([59.40570744951206, 35.84196669322822]),
            {
              "LC": 4,
              "system:index": "175"
            }),
        ee.Feature(
            ee.Geometry.Point([59.643536821310406, 36.01616881088627]),
            {
              "LC": 4,
              "system:index": "176"
            }),
        ee.Feature(
            ee.Geometry.Point([59.64340807527769, 36.01617314990153]),
            {
              "LC": 4,
              "system:index": "177"
            }),
        ee.Feature(
            ee.Geometry.Point([59.6434456262039, 36.0161644718708]),
            {
              "LC": 4,
              "system:index": "178"
            }),
        ee.Feature(
            ee.Geometry.Point([59.643826499884014, 36.016281625205146]),
            {
              "LC": 4,
              "system:index": "179"
            }),
        ee.Feature(
            ee.Geometry.Point([59.644024983351116, 36.01631633727076]),
            {
              "LC": 4,
              "system:index": "180"
            }),
        ee.Feature(
            ee.Geometry.Point([59.64422346681822, 36.0164074563703]),
            {
              "LC": 4,
              "system:index": "181"
            }),
        ee.Feature(
            ee.Geometry.Point([59.64462579817045, 36.01660271122882]),
            {
              "LC": 4,
              "system:index": "182"
            }),
        ee.Feature(
            ee.Geometry.Point([59.64498521417845, 36.01681532152461]),
            {
              "LC": 4,
              "system:index": "183"
            }),
        ee.Feature(
            ee.Geometry.Point([59.64534999460447, 36.017023592278704]),
            {
              "LC": 4,
              "system:index": "184"
            }),
        ee.Feature(
            ee.Geometry.Point([59.64519442648161, 36.01688908414629]),
            {
              "LC": 4,
              "system:index": "185"
            }),
        ee.Feature(
            ee.Geometry.Point([59.645060316030865, 36.01681966050428]),
            {
              "LC": 4,
              "system:index": "186"
            }),
        ee.Feature(
            ee.Geometry.Point([59.643059388105755, 36.01605599640595]),
            {
              "LC": 4,
              "system:index": "187"
            }),
        ee.Feature(
            ee.Geometry.Point([59.64245334030933, 36.01587820263694]),
            {
              "LC": 4,
              "system:index": "188"
            }),
        ee.Feature(
            ee.Geometry.Point([59.642313865440556, 36.015852168444425]),
            {
              "LC": 4,
              "system:index": "189"
            }),
        ee.Feature(
            ee.Geometry.Point([59.64215829731769, 36.01578708292551]),
            {
              "LC": 4,
              "system:index": "190"
            }),
        ee.Feature(
            ee.Geometry.Point([59.64265182377643, 36.015908575850645]),
            {
              "LC": 4,
              "system:index": "191"
            }),
        ee.Feature(
            ee.Geometry.Point([59.642850307243535, 36.01603440761141]),
            {
              "LC": 4,
              "system:index": "192"
            }),
        ee.Feature(
            ee.Geometry.Point([59.64279666306324, 36.01598233932098]),
            {
              "LC": 4,
              "system:index": "193"
            }),
        ee.Feature(
            ee.Geometry.Point([59.39902241919954, 36.43923715752749]),
            {
              "LC": 4,
              "system:index": "194"
            }),
        ee.Feature(
            ee.Geometry.Point([59.399129707560135, 36.43915947658468]),
            {
              "LC": 4,
              "system:index": "195"
            }),
        ee.Feature(
            ee.Geometry.Point([59.39921553824861, 36.43901274570276]),
            {
              "LC": 4,
              "system:index": "196"
            }),
        ee.Feature(
            ee.Geometry.Point([59.399365741953446, 36.43876243944033]),
            {
              "LC": 4,
              "system:index": "197"
            }),
        ee.Feature(
            ee.Geometry.Point([59.3994837591501, 36.43859844524445]),
            {
              "LC": 4,
              "system:index": "198"
            }),
        ee.Feature(
            ee.Geometry.Point([59.39951594565828, 36.438365400264686]),
            {
              "LC": 4,
              "system:index": "199"
            }),
        ee.Feature(
            ee.Geometry.Point([59.39952667449434, 36.438037409848306]),
            {
              "LC": 4,
              "system:index": "200"
            }),
        ee.Feature(
            ee.Geometry.Point([59.39759548400362, 36.43747637039625]),
            {
              "LC": 4,
              "system:index": "201"
            }),
        ee.Feature(
            ee.Geometry.Point([59.39732726310213, 36.43758857861114]),
            {
              "LC": 4,
              "system:index": "202"
            }),
        ee.Feature(
            ee.Geometry.Point([59.39705904220064, 36.437821625923654]),
            {
              "LC": 4,
              "system:index": "203"
            }),
        ee.Feature(
            ee.Geometry.Point([59.39672644828279, 36.43812372325017]),
            {
              "LC": 4,
              "system:index": "204"
            }),
        ee.Feature(
            ee.Geometry.Point([59.39608271811922, 36.43876243944033]),
            {
              "LC": 4,
              "system:index": "205"
            }),
        ee.Feature(
            ee.Geometry.Point([59.39503129218538, 36.43966008574091]),
            {
              "LC": 4,
              "system:index": "206"
            }),
        ee.Feature(
            ee.Geometry.Point([59.39453776572664, 36.440065749412526]),
            {
              "LC": 4,
              "system:index": "207"
            }),
        ee.Feature(
            ee.Geometry.Point([59.394172985300614, 36.440367838003134]),
            {
              "LC": 4,
              "system:index": "208"
            }),
        ee.Feature(
            ee.Geometry.Point([59.40422590468843, 36.438693389294826]),
            {
              "LC": 4,
              "system:index": "209"
            }),
        ee.Feature(
            ee.Geometry.Point([59.40370019172151, 36.43834813764574]),
            {
              "LC": 4,
              "system:index": "210"
            }),
        ee.Feature(
            ee.Geometry.Point([59.40323885177095, 36.43804604119282]),
            {
              "LC": 4,
              "system:index": "211"
            }),
        ee.Feature(
            ee.Geometry.Point([59.402895529017044, 36.43768352389699]),
            {
              "LC": 4,
              "system:index": "212"
            }),
        ee.Feature(
            ee.Geometry.Point([59.402380544886185, 36.43726058491164]),
            {
              "LC": 4,
              "system:index": "213"
            }),
        ee.Feature(
            ee.Geometry.Point([59.401887018427445, 36.43690669541806]),
            {
              "LC": 4,
              "system:index": "214"
            }),
        ee.Feature(
            ee.Geometry.Point([59.40892766921802, 36.43515764439756]),
            {
              "LC": 4,
              "system:index": "215"
            }),
        ee.Feature(
            ee.Geometry.Point([59.408906211545904, 36.43482964042452]),
            {
              "LC": 4,
              "system:index": "216"
            }),
        ee.Feature(
            ee.Geometry.Point([59.40833758323475, 36.434915957393926]),
            {
              "LC": 4,
              "system:index": "217"
            }),
        ee.Feature(
            ee.Geometry.Point([59.407672395399054, 36.434268577783534]),
            {
              "LC": 4,
              "system:index": "218"
            }),
        ee.Feature(
            ee.Geometry.Point([59.40729688613697, 36.43402688801142]),
            {
              "LC": 4,
              "system:index": "219"
            }),
        ee.Feature(
            ee.Geometry.Point([59.40670680015369, 36.43368161560289]),
            {
              "LC": 4,
              "system:index": "220"
            }),
        ee.Feature(
            ee.Geometry.Point([59.40576266258045, 36.43312917655461]),
            {
              "LC": 4,
              "system:index": "221"
            }),
        ee.Feature(
            ee.Geometry.Point([59.40522622077747, 36.432645789162]),
            {
              "LC": 4,
              "system:index": "222"
            }),
        ee.Feature(
            ee.Geometry.Point([59.40499018638416, 36.43251630988495]),
            {
              "LC": 4,
              "system:index": "223"
            }),
        ee.Feature(
            ee.Geometry.Point([59.40457176177784, 36.43254220575764]),
            {
              "LC": 4,
              "system:index": "224"
            }),
        ee.Feature(
            ee.Geometry.Point([59.40326284377857, 36.43392330645015]),
            {
              "LC": 4,
              "system:index": "225"
            }),
        ee.Feature(
            ee.Geometry.Point([59.40070938079639, 36.436081227085396]),
            {
              "LC": 4,
              "system:index": "226"
            }),
        ee.Feature(
            ee.Geometry.Point([59.40081666915699, 36.43602080612406]),
            {
              "LC": 4,
              "system:index": "227"
            }),
        ee.Feature(
            ee.Geometry.Point([59.40100978820606, 36.43606396395839]),
            {
              "LC": 4,
              "system:index": "228"
            }),
        ee.Feature(
            ee.Geometry.Point([59.40097760169788, 36.43594312196177]),
            {
              "LC": 4,
              "system:index": "229"
            }),
        ee.Feature(
            ee.Geometry.Point([59.40084885566517, 36.43596901669118]),
            {
              "LC": 4,
              "system:index": "230"
            }),
        ee.Feature(
            ee.Geometry.Point([59.40002273528858, 36.435252592657385]),
            {
              "LC": 4,
              "system:index": "231"
            }),
        ee.Feature(
            ee.Geometry.Point([59.40125655143543, 36.43402688801142]),
            {
              "LC": 4,
              "system:index": "232"
            }),
        ee.Feature(
            ee.Geometry.Point([59.40123509376331, 36.433854251999165]),
            {
              "LC": 4,
              "system:index": "233"
            }),
        ee.Feature(
            ee.Geometry.Point([59.398617257764776, 36.43442394938247]),
            {
              "LC": 4,
              "system:index": "234"
            }),
        ee.Feature(
            ee.Geometry.Point([59.39871381728931, 36.43428584130989]),
            {
              "LC": 4,
              "system:index": "235"
            }),
        ee.Feature(
            ee.Geometry.Point([59.397394170453985, 36.43563238453507]),
            {
              "LC": 4,
              "system:index": "236"
            }),
        ee.Feature(
            ee.Geometry.Point([59.397426356962164, 36.43556333160464]),
            {
              "LC": 4,
              "system:index": "237"
            }),
        ee.Feature(
            ee.Geometry.Point([59.4476774732497, 36.450004548442244]),
            {
              "LC": 4,
              "system:index": "238"
            }),
        ee.Feature(
            ee.Geometry.Point([59.450273851576114, 36.44824400564632]),
            {
              "LC": 4,
              "system:index": "239"
            }),
        ee.Feature(
            ee.Geometry.Point([59.4501987497237, 36.44814907328182]),
            {
              "LC": 4,
              "system:index": "240"
            }),
        ee.Feature(
            ee.Geometry.Point([59.45042405528095, 36.44818359415508]),
            {
              "LC": 4,
              "system:index": "241"
            }),
        ee.Feature(
            ee.Geometry.Point([59.45033822459247, 36.448157703501586]),
            {
              "LC": 4,
              "system:index": "242"
            }),
        ee.Feature(
            ee.Geometry.Point([59.4450489084151, 36.45186860902892]),
            {
              "LC": 4,
              "system:index": "243"
            }),
        ee.Feature(
            ee.Geometry.Point([59.44492016238239, 36.451980796431414]),
            {
              "LC": 4,
              "system:index": "244"
            }),
        ee.Feature(
            ee.Geometry.Point([59.444973806562686, 36.451816830173065]),
            {
              "LC": 4,
              "system:index": "245"
            }),
        ee.Feature(
            ee.Geometry.Point([59.44140110415485, 36.44901209050486]),
            {
              "LC": 4,
              "system:index": "246"
            }),
        ee.Feature(
            ee.Geometry.Point([59.45900489838138, 36.449909044474]),
            {
              "LC": 4,
              "system:index": "247"
            }),
        ee.Feature(
            ee.Geometry.Point([59.45895125420108, 36.44989825694269]),
            {
              "LC": 4,
              "system:index": "248"
            }),
        ee.Feature(
            ee.Geometry.Point([59.458739359688906, 36.449909044474]),
            {
              "LC": 4,
              "system:index": "249"
            }),
        ee.Feature(
            ee.Geometry.Point([59.45858915598407, 36.449958667098635]),
            {
              "LC": 4,
              "system:index": "250"
            }),
        ee.Feature(
            ee.Geometry.Point([59.458288748574404, 36.44999534467038]),
            {
              "LC": 4,
              "system:index": "251"
            }),
        ee.Feature(
            ee.Geometry.Point([59.45806612522617, 36.450016919704495]),
            {
              "LC": 4,
              "system:index": "252"
            }),
        ee.Feature(
            ee.Geometry.Point([59.45800175220981, 36.44999750217407]),
            {
              "LC": 4,
              "system:index": "253"
            }),
        ee.Feature(
            ee.Geometry.Point([59.45783009083286, 36.449982399647055]),
            {
              "LC": 4,
              "system:index": "254"
            }),
        ee.Feature(
            ee.Geometry.Point([59.459106822323946, 36.44988962691655]),
            {
              "LC": 4,
              "system:index": "255"
            }),
        ee.Feature(
            ee.Geometry.Point([59.45915778429523, 36.44986805184707]),
            {
              "LC": 4,
              "system:index": "256"
            }),
        ee.Feature(
            ee.Geometry.Point([59.459238250565676, 36.44984000424775]),
            {
              "LC": 4,
              "system:index": "257"
            }),
        ee.Feature(
            ee.Geometry.Point([59.479214829427015, 36.452899854983514]),
            {
              "LC": 4,
              "system:index": "258"
            }),
        ee.Feature(
            ee.Geometry.Point([59.47920007727743, 36.452826502569394]),
            {
              "LC": 4,
              "system:index": "259"
            }),
        ee.Feature(
            ee.Geometry.Point([59.47923494599463, 36.45277580306617]),
            {
              "LC": 4,
              "system:index": "260"
            }),
        ee.Feature(
            ee.Geometry.Point([59.479240310412656, 36.45269382082059]),
            {
              "LC": 4,
              "system:index": "261"
            }),
        ee.Feature(
            ee.Geometry.Point([59.4792845668614, 36.45258271316527]),
            {
              "LC": 4,
              "system:index": "262"
            }),
        ee.Feature(
            ee.Geometry.Point([59.4791585030377, 36.452576240869774]),
            {
              "LC": 4,
              "system:index": "263"
            }),
        ee.Feature(
            ee.Geometry.Point([59.47895599625708, 36.452529856069496]),
            {
              "LC": 4,
              "system:index": "264"
            }),
        ee.Feature(
            ee.Geometry.Point([59.478825909119855, 36.45250720301741]),
            {
              "LC": 4,
              "system:index": "265"
            }),
        ee.Feature(
            ee.Geometry.Point([59.47886480115057, 36.45259457903896]),
            {
              "LC": 4,
              "system:index": "266"
            }),
        ee.Feature(
            ee.Geometry.Point([59.478647542220365, 36.45264743609064]),
            {
              "LC": 4,
              "system:index": "267"
            }),
        ee.Feature(
            ee.Geometry.Point([59.47866497657896, 36.45263557022502]),
            {
              "LC": 4,
              "system:index": "268"
            }),
        ee.Feature(
            ee.Geometry.Point([59.47887955330015, 36.4528340535564]),
            {
              "LC": 4,
              "system:index": "269"
            }),
        ee.Feature(
            ee.Geometry.Point([59.479039438125255, 36.453016355733936]),
            {
              "LC": 4,
              "system:index": "270"
            }),
        ee.Feature(
            ee.Geometry.Point([59.47933179890788, 36.45329142625589]),
            {
              "LC": 4,
              "system:index": "271"
            }),
        ee.Feature(
            ee.Geometry.Point([59.47941897070086, 36.45338311621308]),
            {
              "LC": 4,
              "system:index": "272"
            }),
        ee.Feature(
            ee.Geometry.Point([59.47848690306819, 36.45250396686658]),
            {
              "LC": 4,
              "system:index": "273"
            }),
        ee.Feature(
            ee.Geometry.Point([59.4783997312752, 36.45263880637037]),
            {
              "LC": 4,
              "system:index": "274"
            }),
        ee.Feature(
            ee.Geometry.Point([59.478630401250484, 36.45287180848042]),
            {
              "LC": 4,
              "system:index": "275"
            }),
        ee.Feature(
            ee.Geometry.Point([59.55130518358852, 36.81303278710279]),
            {
              "LC": 4,
              "system:index": "276"
            }),
        ee.Feature(
            ee.Geometry.Point([59.55102623385097, 36.812614050099135]),
            {
              "LC": 4,
              "system:index": "277"
            }),
        ee.Feature(
            ee.Geometry.Point([59.37312527121527, 35.81064481509992]),
            {
              "LC": 4,
              "system:index": "278"
            }),
        ee.Feature(
            ee.Geometry.Point([59.37175198019965, 35.81050560530408]),
            {
              "LC": 4,
              "system:index": "279"
            }),
        ee.Feature(
            ee.Geometry.Point([59.37100096167548, 35.81038379653254]),
            {
              "LC": 4,
              "system:index": "280"
            }),
        ee.Feature(
            ee.Geometry.Point([59.370528892888856, 35.81029679015277]),
            {
              "LC": 4,
              "system:index": "281"
            }),
        ee.Feature(
            ee.Geometry.Point([59.370099739446474, 35.81017498106093]),
            {
              "LC": 4,
              "system:index": "282"
            }),
        ee.Feature(
            ee.Geometry.Point([59.36967058600409, 35.810087974452365]),
            {
              "LC": 4,
              "system:index": "283"
            }),
        ee.Feature(
            ee.Geometry.Point([59.36913414420111, 35.809931362316725]),
            {
              "LC": 4,
              "system:index": "284"
            }),
        ee.Feature(
            ee.Geometry.Point([59.36872644843085, 35.80977474987223]),
            {
              "LC": 4,
              "system:index": "285"
            }),
        ee.Feature(
            ee.Geometry.Point([59.36827583731635, 35.80965293997964]),
            {
              "LC": 4,
              "system:index": "286"
            }),
        ee.Feature(
            ee.Geometry.Point([59.36726732672675, 35.80925270615994]),
            {
              "LC": 4,
              "system:index": "287"
            }),
        ee.Feature(
            ee.Geometry.Point([59.36668796957953, 35.808956879866365]),
            {
              "LC": 4,
              "system:index": "288"
            }),
        ee.Feature(
            ee.Geometry.Point([59.36625881613715, 35.808695855751004]),
            {
              "LC": 4,
              "system:index": "289"
            }),
        ee.Feature(
            ee.Geometry.Point([59.365872578039, 35.80850443752117]),
            {
              "LC": 4,
              "system:index": "290"
            }),
        ee.Feature(
            ee.Geometry.Point([59.36516447485907, 35.80808679614548]),
            {
              "LC": 4,
              "system:index": "291"
            }),
        ee.Feature(
            ee.Geometry.Point([59.37851114691718, 35.81087103049767]),
            {
              "LC": 4,
              "system:index": "292"
            }),
        ee.Feature(
            ee.Geometry.Point([59.378081993474794, 35.810940635105794]),
            {
              "LC": 4,
              "system:index": "293"
            }),
        ee.Feature(
            ee.Geometry.Point([59.37745972098334, 35.81090583280937]),
            {
              "LC": 4,
              "system:index": "294"
            }),
        ee.Feature(
            ee.Geometry.Point([59.37698765219672, 35.81088843165543]),
            {
              "LC": 4,
              "system:index": "295"
            }),
        ee.Feature(
            ee.Geometry.Point([59.376279549016786, 35.81085362933613]),
            {
              "LC": 4,
              "system:index": "296"
            }),
        ee.Feature(
            ee.Geometry.Point([59.375592903508974, 35.81073182109841]),
            {
              "LC": 4,
              "system:index": "297"
            }),
        ee.Feature(
            ee.Geometry.Point([59.37460585059149, 35.81069701871046]),
            {
              "LC": 4,
              "system:index": "298"
            }),
        ee.Feature(
            ee.Geometry.Point([59.374090866460634, 35.81069701871046]),
            {
              "LC": 4,
              "system:index": "299"
            }),
        ee.Feature(
            ee.Geometry.Point([59.37975569190009, 35.811045041903604]),
            {
              "LC": 4,
              "system:index": "300"
            }),
        ee.Feature(
            ee.Geometry.Point([59.38211603583319, 35.81114944856411]),
            {
              "LC": 4,
              "system:index": "301"
            }),
        ee.Feature(
            ee.Geometry.Point([59.384068683996034, 35.81128865723128]),
            {
              "LC": 4,
              "system:index": "302"
            }),
        ee.Feature(
            ee.Geometry.Point([59.385828213109804, 35.8115670738335]),
            {
              "LC": 4,
              "system:index": "303"
            }),
        ee.Feature(
            ee.Geometry.Point([59.387287334813905, 35.81198469690652]),
            {
              "LC": 4,
              "system:index": "304"
            }),
        ee.Feature(
            ee.Geometry.Point([59.38966913641913, 35.81280253572896]),
            {
              "LC": 4,
              "system:index": "305"
            }),
        ee.Feature(
            ee.Geometry.Point([59.39082785071356, 35.81337675795387]),
            {
              "LC": 4,
              "system:index": "306"
            }),
        ee.Feature(
            ee.Geometry.Point([59.39157886923773, 35.81391617504913]),
            {
              "LC": 4,
              "system:index": "307"
            }),
        ee.Feature(
            ee.Geometry.Point([59.392523006810976, 35.81455999065612]),
            {
              "LC": 4,
              "system:index": "308"
            }),
        ee.Feature(
            ee.Geometry.Point([59.39323110999091, 35.81525600165613]),
            {
              "LC": 4,
              "system:index": "309"
            }),
        ee.Feature(
            ee.Geometry.Point([59.39396067084296, 35.816004206676325]),
            {
              "LC": 4,
              "system:index": "310"
            }),
        ee.Feature(
            ee.Geometry.Point([59.39436836661322, 35.81628260674444]),
            {
              "LC": 4,
              "system:index": "311"
            }),
        ee.Feature(
            ee.Geometry.Point([59.39469023169501, 35.81664800535235]),
            {
              "LC": 4,
              "system:index": "312"
            }),
        ee.Feature(
            ee.Geometry.Point([59.36245462492803, 36.51306631938538]),
            {
              "LC": 4,
              "system:index": "313"
            }),
        ee.Feature(
            ee.Geometry.Point([59.36095258787969, 36.513868253569136]),
            {
              "LC": 4,
              "system:index": "314"
            }),
        ee.Feature(
            ee.Geometry.Point([59.361188622273, 36.513713041149835]),
            {
              "LC": 4,
              "system:index": "315"
            }),
        ee.Feature(
            ee.Geometry.Point([59.36140319899419, 36.513652680680465]),
            {
              "LC": 4,
              "system:index": "316"
            }),
        ee.Feature(
            ee.Geometry.Point([59.358238192356616, 36.51537724697652]),
            {
              "LC": 4,
              "system:index": "317"
            }),
        ee.Feature(
            ee.Geometry.Point([59.358291836536914, 36.515351378766006]),
            {
              "LC": 4,
              "system:index": "318"
            }),
        ee.Feature(
            ee.Geometry.Point([59.35836693838933, 36.515325510546816]),
            {
              "LC": 4,
              "system:index": "319"
            }),
        ee.Feature(
            ee.Geometry.Point([59.35840985373357, 36.51527377408251]),
            {
              "LC": 4,
              "system:index": "320"
            }),
        ee.Feature(
            ee.Geometry.Point([59.358484955585986, 36.51519616932121]),
            {
              "LC": 4,
              "system:index": "321"
            }),
        ee.Feature(
            ee.Geometry.Point([59.35868880347112, 36.51511856448207]),
            {
              "LC": 4,
              "system:index": "322"
            }),
        ee.Feature(
            ee.Geometry.Point([59.35887119368413, 36.51498922291058]),
            {
              "LC": 4,
              "system:index": "323"
            }),
        ee.Feature(
            ee.Geometry.Point([59.358989210880786, 36.51493748622144]),
            {
              "LC": 4,
              "system:index": "324"
            }),
        ee.Feature(
            ee.Geometry.Point([59.35913941458562, 36.5148512583294]),
            {
              "LC": 4,
              "system:index": "325"
            }),
        ee.Feature(
            ee.Geometry.Point([59.35930034712651, 36.51476503034125]),
            {
              "LC": 4,
              "system:index": "326"
            }),
        ee.Feature(
            ee.Geometry.Point([59.35939690665105, 36.51467880225702]),
            {
              "LC": 4,
              "system:index": "327"
            }),
        ee.Feature(
            ee.Geometry.Point([59.359547110355884, 36.514592574076715]),
            {
              "LC": 4,
              "system:index": "328"
            }),
        ee.Feature(
            ee.Geometry.Point([59.35963294104436, 36.51453221429336]),
            {
              "LC": 4,
              "system:index": "329"
            }),
        ee.Feature(
            ee.Geometry.Point([59.35971877173284, 36.51450634580036]),
            {
              "LC": 4,
              "system:index": "330"
            }),
        ee.Feature(
            ee.Geometry.Point([59.35987970427373, 36.51441149458537]),
            {
              "LC": 4,
              "system:index": "331"
            }),
        ee.Feature(
            ee.Geometry.Point([59.358012886799365, 36.515532456058146]),
            {
              "LC": 4,
              "system:index": "332"
            }),
        ee.Feature(
            ee.Geometry.Point([59.35764810637334, 36.51574802371066]),
            {
              "LC": 4,
              "system:index": "333"
            }),
        ee.Feature(
            ee.Geometry.Point([59.35742280081609, 36.51585149597056]),
            {
              "LC": 4,
              "system:index": "334"
            }),
        ee.Feature(
            ee.Geometry.Point([59.35721895293096, 36.515963590762674]),
            {
              "LC": 4,
              "system:index": "335"
            }),
        ee.Feature(
            ee.Geometry.Point([59.358291836536914, 36.51483401273944]),
            {
              "LC": 4,
              "system:index": "336"
            }),
        ee.Feature(
            ee.Geometry.Point([59.35793778494695, 36.514635688178885]),
            {
              "LC": 4,
              "system:index": "337"
            }),
        ee.Feature(
            ee.Geometry.Point([59.36910454638667, 36.52023679216336]),
            {
              "LC": 4,
              "system:index": "338"
            }),
        ee.Feature(
            ee.Geometry.Point([59.36611120112605, 36.52157322067709]),
            {
              "LC": 4,
              "system:index": "339"
            }),
        ee.Feature(
            ee.Geometry.Point([59.364061993438675, 36.52256474949611]),
            {
              "LC": 4,
              "system:index": "340"
            }),
        ee.Feature(
            ee.Geometry.Point([60.248854311971414, 35.92777057154587]),
            {
              "LC": 4,
              "system:index": "341"
            }),
        ee.Feature(
            ee.Geometry.Point([60.24673000243162, 35.92907372386573]),
            {
              "LC": 4,
              "system:index": "342"
            }),
        ee.Feature(
            ee.Geometry.Point([60.25488391783689, 35.92516420247395]),
            {
              "LC": 4,
              "system:index": "343"
            }),
        ee.Feature(
            ee.Geometry.Point([60.24739519026731, 35.9285350901776]),
            {
              "LC": 4,
              "system:index": "344"
            }),
        ee.Feature(
            ee.Geometry.Point([60.25617137816404, 35.9244691562125]),
            {
              "LC": 4,
              "system:index": "345"
            }),
        ee.Feature(
            ee.Geometry.Point([60.241558703450906, 35.93315679538549]),
            {
              "LC": 4,
              "system:index": "346"
            }),
        ee.Feature(
            ee.Geometry.Point([60.24497047331785, 35.9339386360886]),
            {
              "LC": 4,
              "system:index": "347"
            }),
        ee.Feature(
            ee.Geometry.Point([60.24548545744871, 35.935067947897494]),
            {
              "LC": 4,
              "system:index": "348"
            }),
        ee.Feature(
            ee.Geometry.Point([60.24595752623533, 35.93619724357304]),
            {
              "LC": 4,
              "system:index": "349"
            }),
        ee.Feature(
            ee.Geometry.Point([60.246343764333474, 35.937065921575794]),
            {
              "LC": 4,
              "system:index": "350"
            }),
        ee.Feature(
            ee.Geometry.Point([60.25170818236326, 35.92650214932848]),
            {
              "LC": 4,
              "system:index": "351"
            }),
        ee.Feature(
            ee.Geometry.Point([60.250849875478494, 35.926867039996296]),
            {
              "LC": 4,
              "system:index": "352"
            }),
        ee.Feature(
            ee.Geometry.Point([60.25786653426145, 35.9236177162169]),
            {
              "LC": 4,
              "system:index": "353"
            }),
        ee.Feature(
            ee.Geometry.Point([60.259282740621316, 35.922835773451915]),
            {
              "LC": 4,
              "system:index": "354"
            }),
        ee.Feature(
            ee.Geometry.Point([60.244348200826394, 35.930863351382705]),
            {
              "LC": 4,
              "system:index": "355"
            }),
        ee.Feature(
            ee.Geometry.Point([60.245077761678445, 35.93039422964051]),
            {
              "LC": 4,
              "system:index": "356"
            }),
        ee.Feature(
            ee.Geometry.Point([60.24563566115354, 35.92985560494829]),
            {
              "LC": 4,
              "system:index": "357"
            }),
        ee.Feature(
            ee.Geometry.Point([60.246086272268045, 35.92952547832319]),
            {
              "LC": 4,
              "system:index": "358"
            }),
        ee.Feature(
            ee.Geometry.Point([60.24988428023313, 35.92735355826744]),
            {
              "LC": 4,
              "system:index": "359"
            }),
        ee.Feature(
            ee.Geometry.Point([60.25323167708372, 35.92578973888605]),
            {
              "LC": 4,
              "system:index": "360"
            }),
        ee.Feature(
            ee.Geometry.Point([60.24043217566465, 35.93756540710458]),
            {
              "LC": 4,
              "system:index": "361"
            }),
        ee.Feature(
            ee.Geometry.Point([60.22463423570069, 36.07103156323291]),
            {
              "LC": 4,
              "system:index": "362"
            }),
        ee.Feature(
            ee.Geometry.Point([60.224510854086006, 36.07093617132954]),
            {
              "LC": 4,
              "system:index": "363"
            }),
        ee.Feature(
            ee.Geometry.Point([60.22443575223359, 36.07085378731991]),
            {
              "LC": 4,
              "system:index": "364"
            }),
        ee.Feature(
            ee.Geometry.Point([60.22435528596314, 36.070810427280186]),
            {
              "LC": 4,
              "system:index": "365"
            }),
        ee.Feature(
            ee.Geometry.Point([60.22414070924195, 36.07069335505352]),
            {
              "LC": 4,
              "system:index": "366"
            }),
        ee.Feature(
            ee.Geometry.Point([60.22393686135682, 36.07052425041849]),
            {
              "LC": 4,
              "system:index": "367"
            }),
        ee.Feature(
            ee.Geometry.Point([60.22347015698823, 36.07017303193793]),
            {
              "LC": 4,
              "system:index": "368"
            }),
        ee.Feature(
            ee.Geometry.Point([60.22314829190644, 36.069925877252274]),
            {
              "LC": 4,
              "system:index": "369"
            }),
        ee.Feature(
            ee.Geometry.Point([60.223067825635994, 36.0698738445879]),
            {
              "LC": 4,
              "system:index": "370"
            }),
        ee.Feature(
            ee.Geometry.Point([60.224784439405525, 36.071126955020546]),
            {
              "LC": 4,
              "system:index": "371"
            }),
        ee.Feature(
            ee.Geometry.Point([60.22491854985627, 36.07124402660186]),
            {
              "LC": 4,
              "system:index": "372"
            }),
        ee.Feature(
            ee.Geometry.Point([60.22083086331757, 36.069457582033934]),
            {
              "LC": 4,
              "system:index": "373"
            }),
        ee.Feature(
            ee.Geometry.Point([60.22062165101441, 36.06929714691981]),
            {
              "LC": 4,
              "system:index": "374"
            }),
        ee.Feature(
            ee.Geometry.Point([60.22035343011292, 36.06912370318508]),
            {
              "LC": 4,
              "system:index": "375"
            }),
        ee.Feature(
            ee.Geometry.Point([60.220262235006416, 36.069006628447944]),
            {
              "LC": 4,
              "system:index": "376"
            }),
        ee.Feature(
            ee.Geometry.Point([60.22271913846406, 36.070901483336016]),
            {
              "LC": 4,
              "system:index": "377"
            }),
        ee.Feature(
            ee.Geometry.Point([60.22264940102967, 36.07080175526936]),
            {
              "LC": 4,
              "system:index": "378"
            }),
        ee.Feature(
            ee.Geometry.Point([60.22316974957856, 36.071126955020546]),
            {
              "LC": 4,
              "system:index": "379"
            }),
        ee.Feature(
            ee.Geometry.Point([60.22333604653748, 36.07132641020275]),
            {
              "LC": 4,
              "system:index": "380"
            }),
        ee.Feature(
            ee.Geometry.Point([60.22198957761201, 36.0687854868024]),
            {
              "LC": 4,
              "system:index": "381"
            }),
        ee.Feature(
            ee.Geometry.Point([60.221801822980964, 36.0686033696863]),
            {
              "LC": 4,
              "system:index": "382"
            }),
        ee.Feature(
            ee.Geometry.Point([60.22172135671052, 36.068490630307906]),
            {
              "LC": 4,
              "system:index": "383"
            }),
        ee.Feature(
            ee.Geometry.Point([60.22163016160401, 36.068403907599205]),
            {
              "LC": 4,
              "system:index": "384"
            }),
        ee.Feature(
            ee.Geometry.Point([60.221555059751594, 36.06827382335687]),
            {
              "LC": 4,
              "system:index": "385"
            }),
        ee.Feature(
            ee.Geometry.Point([60.22147995789918, 36.06811338582837]),
            {
              "LC": 4,
              "system:index": "386"
            }),
        ee.Feature(
            ee.Geometry.Point([60.221265381177986, 36.06788356933913]),
            {
              "LC": 4,
              "system:index": "387"
            }),
        ee.Feature(
            ee.Geometry.Point([60.22108299096497, 36.06768410542689]),
            {
              "LC": 4,
              "system:index": "388"
            }),
        ee.Feature(
            ee.Geometry.Point([60.22011739571961, 36.068885217425404]),
            {
              "LC": 4,
              "system:index": "389"
            }),
        ee.Feature(
            ee.Geometry.Point([60.21999937852296, 36.068755133978996]),
            {
              "LC": 4,
              "system:index": "390"
            }),
        ee.Feature(
            ee.Geometry.Point([60.219779437383735, 36.0686207141917]),
            {
              "LC": 4,
              "system:index": "391"
            }),
        ee.Feature(
            ee.Geometry.Point([60.219527309736335, 36.06842992442185]),
            {
              "LC": 4,
              "system:index": "392"
            }),
        ee.Feature(
            ee.Geometry.Point([60.222756689390266, 36.06952262320319]),
            {
              "LC": 4,
              "system:index": "393"
            }),
        ee.Feature(
            ee.Geometry.Point([60.222558205923164, 36.069357852136605]),
            {
              "LC": 4,
              "system:index": "394"
            }),
        ee.Feature(
            ee.Geometry.Point([60.22241873105439, 36.06920175291304]),
            {
              "LC": 4,
              "system:index": "395"
            }),
        ee.Feature(
            ee.Geometry.Point([60.21886748631867, 36.06797462878311]),
            {
              "LC": 4,
              "system:index": "396"
            }),
        ee.Feature(
            ee.Geometry.Point([60.21885139306458, 36.067961620297574]),
            {
              "LC": 4,
              "system:index": "397"
            }),
        ee.Feature(
            ee.Geometry.Point([60.21884066422852, 36.06790958633388]),
            {
              "LC": 4,
              "system:index": "398"
            }),
        ee.Feature(
            ee.Geometry.Point([60.219012325605476, 36.06803967117857]),
            {
              "LC": 4,
              "system:index": "399"
            }),
        ee.Feature(
            ee.Geometry.Point([60.21918935140046, 36.06816975580809]),
            {
              "LC": 4,
              "system:index": "400"
            }),
        ee.Feature(
            ee.Geometry.Point([60.219323461851204, 36.068295504078854]),
            {
              "LC": 4,
              "system:index": "401"
            }),
        ee.Feature(
            ee.Geometry.Point([60.21865290959748, 36.067744811888495]),
            {
              "LC": 4,
              "system:index": "402"
            }),
        ee.Feature(
            ee.Geometry.Point([60.05860088118278, 36.08618360126497]),
            {
              "LC": 4,
              "system:index": "403"
            }),
        ee.Feature(
            ee.Geometry.Point([60.059899070345985, 36.085359917015225]),
            {
              "LC": 4,
              "system:index": "404"
            }),
        ee.Feature(
            ee.Geometry.Point([60.0216210338802, 36.08695249022691]),
            {
              "LC": 4,
              "system:index": "405"
            }),
        ee.Feature(
            ee.Geometry.Point([60.021535203191725, 36.086744404424365]),
            {
              "LC": 4,
              "system:index": "406"
            }),
        ee.Feature(
            ee.Geometry.Point([60.02144937250325, 36.086605680249995]),
            {
              "LC": 4,
              "system:index": "407"
            }),
        ee.Feature(
            ee.Geometry.Point([60.02133135530659, 36.08644961526123]),
            {
              "LC": 4,
              "system:index": "408"
            }),
        ee.Feature(
            ee.Geometry.Point([60.02123479578206, 36.0862935499626]),
            {
              "LC": 4,
              "system:index": "409"
            }),
        ee.Feature(
            ee.Geometry.Point([60.02115969392964, 36.086163495310416]),
            {
              "LC": 4,
              "system:index": "410"
            }),
        ee.Feature(
            ee.Geometry.Point([60.02108459207722, 36.08595540741936]),
            {
              "LC": 4,
              "system:index": "411"
            }),
        ee.Feature(
            ee.Geometry.Point([60.021020219060865, 36.08577333006285]),
            {
              "LC": 4,
              "system:index": "412"
            }),
        ee.Feature(
            ee.Geometry.Point([60.02091293070027, 36.08560859304359]),
            {
              "LC": 4,
              "system:index": "413"
            }),
        ee.Feature(
            ee.Geometry.Point([60.02084855768391, 36.08539183328178]),
            {
              "LC": 4,
              "system:index": "414"
            }),
        ee.Feature(
            ee.Geometry.Point([60.020762726995436, 36.08519241377306]),
            {
              "LC": 4,
              "system:index": "415"
            }),
        ee.Feature(
            ee.Geometry.Point([60.02067689630696, 36.08507969817478]),
            {
              "LC": 4,
              "system:index": "416"
            }),
        ee.Feature(
            ee.Geometry.Point([60.02059106561848, 36.08487160741495]),
            {
              "LC": 4,
              "system:index": "417"
            }),
        ee.Feature(
            ee.Geometry.Point([60.02044086191365, 36.08454212925206]),
            {
              "LC": 4,
              "system:index": "418"
            }),
        ee.Feature(
            ee.Geometry.Point([60.02036576006123, 36.084264672886]),
            {
              "LC": 4,
              "system:index": "419"
            }),
        ee.Feature(
            ee.Geometry.Point([60.022790477010695, 36.08946681680117]),
            {
              "LC": 4,
              "system:index": "420"
            }),
        ee.Feature(
            ee.Geometry.Point([60.02306942674824, 36.089874303534614]),
            {
              "LC": 4,
              "system:index": "421"
            }),
        ee.Feature(
            ee.Geometry.Point([60.023273274633375, 36.090247108695614]),
            {
              "LC": 4,
              "system:index": "422"
            }),
        ee.Feature(
            ee.Geometry.Point([60.02346639368245, 36.09060257243489]),
            {
              "LC": 4,
              "system:index": "423"
            }),
        ee.Feature(
            ee.Geometry.Point([60.023530766698805, 36.090888676228104]),
            {
              "LC": 4,
              "system:index": "424"
            }),
        ee.Feature(
            ee.Geometry.Point([59.845665800793945, 36.025647287918986]),
            {
              "LC": 4,
              "system:index": "425"
            }),
        ee.Feature(
            ee.Geometry.Point([59.84555851243335, 36.0255258100078]),
            {
              "LC": 4,
              "system:index": "426"
            }),
        ee.Feature(
            ee.Geometry.Point([59.84532247804004, 36.02544771696599]),
            {
              "LC": 4,
              "system:index": "427"
            }),
        ee.Feature(
            ee.Geometry.Point([59.84511863015491, 36.02532623874708]),
            {
              "LC": 4,
              "system:index": "428"
            }),
        ee.Feature(
            ee.Geometry.Point([59.845386851056396, 36.0266451351012]),
            {
              "LC": 4,
              "system:index": "429"
            }),
        ee.Feature(
            ee.Geometry.Point([59.85052596352893, 36.02817225066475]),
            {
              "LC": 4,
              "system:index": "430"
            }),
        ee.Feature(
            ee.Geometry.Point([59.85335837624866, 36.02479693860732]),
            {
              "LC": 4,
              "system:index": "431"
            }),
        ee.Feature(
            ee.Geometry.Point([59.84730731271106, 36.023052826099445]),
            {
              "LC": 4,
              "system:index": "432"
            }),
        ee.Feature(
            ee.Geometry.Point([59.84570871613818, 36.02297473060649]),
            {
              "LC": 4,
              "system:index": "433"
            })]),
    W = 
    /* color: #bf04c2 */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([59.67682511996086, 36.3090783466012]),
            {
              "LC": 1,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([59.6768143911248, 36.309037279677305]),
            {
              "LC": 1,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([59.67678756903465, 36.309007019824804]),
            {
              "LC": 1,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([59.67649789046104, 36.308611479244206]),
            {
              "LC": 1,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([59.676428153026656, 36.30851637629172]),
            {
              "LC": 1,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([59.67641474198158, 36.30845585617067]),
            {
              "LC": 1,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([59.676559581268386, 36.308486116237056]),
            {
              "LC": 1,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([59.6765086192971, 36.30842343465792]),
            {
              "LC": 1,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([59.67669369171913, 36.30844937186919]),
            {
              "LC": 1,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([59.67662663649376, 36.30843856469887]),
            {
              "LC": 1,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([59.67685194205101, 36.30841046604905]),
            {
              "LC": 1,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([59.67678488682564, 36.308427757527056]),
            {
              "LC": 1,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([59.676916315067366, 36.30836291446473]),
            {
              "LC": 1,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([59.67698873471077, 36.30830887853824]),
            {
              "LC": 1,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([59.67701555680092, 36.308269972648006]),
            {
              "LC": 1,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([59.677079929817275, 36.30824835825615]),
            {
              "LC": 1,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([59.677184535968856, 36.308293748472124]),
            {
              "LC": 1,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([59.677163078296736, 36.30840614317894]),
            {
              "LC": 1,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([59.67710943411644, 36.3083866902605]),
            {
              "LC": 1,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([59.677096023071364, 36.30835426871899]),
            {
              "LC": 1,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([59.67701019238289, 36.30839749743802]),
            {
              "LC": 1,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([59.67656762789543, 36.308570412074396]),
            {
              "LC": 1,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([59.67651398371513, 36.30855312062802]),
            {
              "LC": 1,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([59.67639596651848, 36.308592026376985]),
            {
              "LC": 1,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([59.67634768675621, 36.308546636334626]),
            {
              "LC": 1,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([59.676345004547194, 36.30848395480413]),
            {
              "LC": 1,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([59.53920737580957, 36.17373609061386]),
            {
              "LC": 1,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([59.539057172104734, 36.173233771385625]),
            {
              "LC": 1,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([59.539808190628904, 36.172991271295366]),
            {
              "LC": 1,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([59.54170227056276, 36.17186068227276]),
            {
              "LC": 1,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([59.54170227056276, 36.17187800398258]),
            {
              "LC": 1,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([59.5432043076111, 36.171514247272526]),
            {
              "LC": 1,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([59.5420885086609, 36.17243229667493]),
            {
              "LC": 1,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([59.5406293869568, 36.172657476961284]),
            {
              "LC": 1,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([59.541058540399185, 36.17317712130639]),
            {
              "LC": 1,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([59.54133749013673, 36.172328367093755]),
            {
              "LC": 1,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([59.542796611840835, 36.172657476961284]),
            {
              "LC": 1,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([59.542303085382095, 36.17300390690757]),
            {
              "LC": 1,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([59.54397678380739, 36.17213782917029]),
            {
              "LC": 1,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([59.54341888433229, 36.17234568870019]),
            {
              "LC": 1,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([59.544019699151626, 36.17303854981795]),
            {
              "LC": 1,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([59.54470634465944, 36.17239765349651]),
            {
              "LC": 1,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([59.5441055298401, 36.17170478671217]),
            {
              "LC": 1,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([59.54524278646242, 36.1715315690589]),
            {
              "LC": 1,
              "system:index": "43"
            }),
        ee.Feature(
            ee.Geometry.Point([59.545800685937515, 36.1712717418611]),
            {
              "LC": 1,
              "system:index": "44"
            }),
        ee.Feature(
            ee.Geometry.Point([59.545800685937515, 36.1710638794826]),
            {
              "LC": 1,
              "system:index": "45"
            }),
        ee.Feature(
            ee.Geometry.Point([59.54442739492189, 36.17149692548231]),
            {
              "LC": 1,
              "system:index": "46"
            }),
        ee.Feature(
            ee.Geometry.Point([59.542775154168716, 36.171548890841464]),
            {
              "LC": 1,
              "system:index": "47"
            }),
        ee.Feature(
            ee.Geometry.Point([59.54721689229738, 36.1723630103028]),
            {
              "LC": 1,
              "system:index": "48"
            }),
        ee.Feature(
            ee.Geometry.Point([59.54721689229738, 36.171722108456436]),
            {
              "LC": 1,
              "system:index": "49"
            }),
        ee.Feature(
            ee.Geometry.Point([59.545822143609634, 36.17203389919857]),
            {
              "LC": 1,
              "system:index": "50"
            }),
        ee.Feature(
            ee.Geometry.Point([59.545521736199966, 36.1723630103028]),
            {
              "LC": 1,
              "system:index": "51"
            }),
        ee.Feature(
            ee.Geometry.Point([59.5452213287903, 36.172674798494974]),
            {
              "LC": 1,
              "system:index": "52"
            }),
        ee.Feature(
            ee.Geometry.Point([59.54316139226686, 36.17340229945244]),
            {
              "LC": 1,
              "system:index": "53"
            }),
        ee.Feature(
            ee.Geometry.Point([59.54661607747804, 36.17302122836467]),
            {
              "LC": 1,
              "system:index": "54"
            }),
        ee.Feature(
            ee.Geometry.Point([59.54710960393678, 36.173662119586155]),
            {
              "LC": 1,
              "system:index": "55"
            }),
        ee.Feature(
            ee.Geometry.Point([59.5472383499695, 36.17426836321458]),
            {
              "LC": 1,
              "system:index": "56"
            }),
        ee.Feature(
            ee.Geometry.Point([59.547796249444595, 36.174701391506105]),
            {
              "LC": 1,
              "system:index": "57"
            }),
        ee.Feature(
            ee.Geometry.Point([59.54773187642824, 36.17406050878464]),
            {
              "LC": 1,
              "system:index": "58"
            }),
        ee.Feature(
            ee.Geometry.Point([59.547753334100356, 36.174008545091006]),
            {
              "LC": 1,
              "system:index": "59"
            }),
        ee.Feature(
            ee.Geometry.Point([59.54788208013307, 36.17314247845725]),
            {
              "LC": 1,
              "system:index": "60"
            }),
        ee.Feature(
            ee.Geometry.Point([59.54798936849367, 36.17289997808448]),
            {
              "LC": 1,
              "system:index": "61"
            }),
        ee.Feature(
            ee.Geometry.Point([59.54839706426393, 36.172570869235415]),
            {
              "LC": 1,
              "system:index": "62"
            }),
        ee.Feature(
            ee.Geometry.Point([59.54919099813234, 36.17238033190158]),
            {
              "LC": 1,
              "system:index": "63"
            }),
        ee.Feature(
            ee.Geometry.Point([59.54886913305055, 36.17213782917029]),
            {
              "LC": 1,
              "system:index": "64"
            }),
        ee.Feature(
            ee.Geometry.Point([59.54891204839479, 36.17179139539523]),
            {
              "LC": 1,
              "system:index": "65"
            }),
        ee.Feature(
            ee.Geometry.Point([59.54916954046022, 36.171341029198075]),
            {
              "LC": 1,
              "system:index": "66"
            }),
        ee.Feature(
            ee.Geometry.Point([59.549276828820815, 36.17123709816965]),
            {
              "LC": 1,
              "system:index": "67"
            }),
        ee.Feature(
            ee.Geometry.Point([59.54966306691896, 36.17101191380185]),
            {
              "LC": 1,
              "system:index": "68"
            }),
        ee.Feature(
            ee.Geometry.Point([59.54972743993532, 36.17309051415483]),
            {
              "LC": 1,
              "system:index": "69"
            }),
        ee.Feature(
            ee.Geometry.Point([59.54916954046022, 36.17298658544662]),
            {
              "LC": 1,
              "system:index": "70"
            }),
        ee.Feature(
            ee.Geometry.Point([59.54916954046022, 36.17317712130639]),
            {
              "LC": 1,
              "system:index": "71"
            }),
        ee.Feature(
            ee.Geometry.Point([59.54874038701784, 36.174649428237494]),
            {
              "LC": 1,
              "system:index": "72"
            }),
        ee.Feature(
            ee.Geometry.Point([59.548311233575454, 36.17409515122792]),
            {
              "LC": 1,
              "system:index": "73"
            }),
        ee.Feature(
            ee.Geometry.Point([59.54816102987062, 36.17371408350952]),
            {
              "LC": 1,
              "system:index": "74"
            }),
        ee.Feature(
            ee.Geometry.Point([59.54863309865724, 36.17374872610595]),
            {
              "LC": 1,
              "system:index": "75"
            }),
        ee.Feature(
            ee.Geometry.Point([59.549255371148696, 36.17411247244383]),
            {
              "LC": 1,
              "system:index": "76"
            }),
        ee.Feature(
            ee.Geometry.Point([59.549791812951675, 36.17418175726911]),
            {
              "LC": 1,
              "system:index": "77"
            }),
        ee.Feature(
            ee.Geometry.Point([59.54940557485353, 36.17380068997188]),
            {
              "LC": 1,
              "system:index": "78"
            }),
        ee.Feature(
            ee.Geometry.Point([59.550564289147964, 36.17432032673591]),
            {
              "LC": 1,
              "system:index": "79"
            }),
        ee.Feature(
            ee.Geometry.Point([59.549555778558364, 36.1747533547403]),
            {
              "LC": 1,
              "system:index": "80"
            }),
        ee.Feature(
            ee.Geometry.Point([59.54893350606691, 36.17556744091003]),
            {
              "LC": 1,
              "system:index": "81"
            }),
        ee.Feature(
            ee.Geometry.Point([59.548504352624526, 36.175584761800486]),
            {
              "LC": 1,
              "system:index": "82"
            }),
        ee.Feature(
            ee.Geometry.Point([59.54843997960817, 36.175324948041826]),
            {
              "LC": 1,
              "system:index": "83"
            }),
        ee.Feature(
            ee.Geometry.Point([59.54934120183717, 36.17551547821575]),
            {
              "LC": 1,
              "system:index": "84"
            }),
        ee.Feature(
            ee.Geometry.Point([59.54987764364015, 36.17527298518671]),
            {
              "LC": 1,
              "system:index": "85"
            }),
        ee.Feature(
            ee.Geometry.Point([59.54992055898439, 36.17489192319626]),
            {
              "LC": 1,
              "system:index": "86"
            }),
        ee.Feature(
            ee.Geometry.Point([59.550542831475845, 36.175342268985865]),
            {
              "LC": 1,
              "system:index": "87"
            }),
        ee.Feature(
            ee.Geometry.Point([59.55148696904909, 36.175394231795025]),
            {
              "LC": 1,
              "system:index": "88"
            }),
        ee.Feature(
            ee.Geometry.Point([59.55193758016359, 36.17548083640039]),
            {
              "LC": 1,
              "system:index": "89"
            }),
        ee.Feature(
            ee.Geometry.Point([59.551315307672134, 36.175186380351604]),
            {
              "LC": 1,
              "system:index": "90"
            }),
        ee.Feature(
            ee.Geometry.Point([59.550757408197036, 36.17489192319626]),
            {
              "LC": 1,
              "system:index": "91"
            }),
        ee.Feature(
            ee.Geometry.Point([59.539062976892104, 36.17284801362128]),
            {
              "LC": 1,
              "system:index": "92"
            }),
        ee.Feature(
            ee.Geometry.Point([59.537324905450454, 36.17289997808448]),
            {
              "LC": 1,
              "system:index": "93"
            }),
        ee.Feature(
            ee.Geometry.Point([59.535822868402114, 36.17281337062665]),
            {
              "LC": 1,
              "system:index": "94"
            }),
        ee.Feature(
            ee.Geometry.Point([59.53444957738649, 36.17270944155085]),
            {
              "LC": 1,
              "system:index": "95"
            }),
        ee.Feature(
            ee.Geometry.Point([59.536037445123306, 36.17213782917029]),
            {
              "LC": 1,
              "system:index": "96"
            }),
        ee.Feature(
            ee.Geometry.Point([59.53571558004152, 36.17175675193349]),
            {
              "LC": 1,
              "system:index": "97"
            }),
        ee.Feature(
            ee.Geometry.Point([59.53616619115602, 36.17378336868706]),
            {
              "LC": 1,
              "system:index": "98"
            }),
        ee.Feature(
            ee.Geometry.Point([59.53646659856569, 36.173956581362916]),
            {
              "LC": 1,
              "system:index": "99"
            }),
        ee.Feature(
            ee.Geometry.Point([59.53839778905641, 36.17378336868706]),
            {
              "LC": 1,
              "system:index": "100"
            }),
        ee.Feature(
            ee.Geometry.Point([59.537796974237075, 36.17300390690757]),
            {
              "LC": 1,
              "system:index": "101"
            }),
        ee.Feature(
            ee.Geometry.Point([59.53788280492555, 36.172657476961284]),
            {
              "LC": 1,
              "system:index": "102"
            }),
        ee.Feature(
            ee.Geometry.Point([59.537603855188, 36.17367944089776]),
            {
              "LC": 1,
              "system:index": "103"
            }),
        ee.Feature(
            ee.Geometry.Point([59.55041408544313, 36.17622563205509]),
            {
              "LC": 1,
              "system:index": "104"
            }),
        ee.Feature(
            ee.Geometry.Point([59.55013513570558, 36.1767972146165]),
            {
              "LC": 1,
              "system:index": "105"
            }),
        ee.Feature(
            ee.Geometry.Point([59.54944849019777, 36.17752467730044]),
            {
              "LC": 1,
              "system:index": "106"
            }),
        ee.Feature(
            ee.Geometry.Point([59.550006389672866, 36.177749842952785]),
            {
              "LC": 1,
              "system:index": "107"
            }),
        ee.Feature(
            ee.Geometry.Point([59.61689088956195, 36.2412017874127]),
            {
              "LC": 1,
              "system:index": "108"
            }),
        ee.Feature(
            ee.Geometry.Point([59.616569024480164, 36.24101141708826]),
            {
              "LC": 1,
              "system:index": "109"
            }),
        ee.Feature(
            ee.Geometry.Point([59.617320043004334, 36.241426769925674]),
            {
              "LC": 1,
              "system:index": "110"
            }),
        ee.Feature(
            ee.Geometry.Point([59.616762143529236, 36.24102872350055]),
            {
              "LC": 1,
              "system:index": "111"
            }),
        ee.Feature(
            ee.Geometry.Point([59.6166119398244, 36.24083835275462]),
            {
              "LC": 1,
              "system:index": "112"
            }),
        ee.Feature(
            ee.Geometry.Point([59.61633299008685, 36.240942191400784]),
            {
              "LC": 1,
              "system:index": "113"
            }),
        ee.Feature(
            ee.Geometry.Point([59.61712692395526, 36.24118448103873]),
            {
              "LC": 1,
              "system:index": "114"
            }),
        ee.Feature(
            ee.Geometry.Point([59.87679349506155, 36.1089139490409]),
            {
              "LC": 1,
              "system:index": "115"
            }),
        ee.Feature(
            ee.Geometry.Point([59.8755060347344, 36.109845732812666]),
            {
              "LC": 1,
              "system:index": "116"
            }),
        ee.Feature(
            ee.Geometry.Point([59.875366559865626, 36.10931700105224]),
            {
              "LC": 1,
              "system:index": "117"
            }),
        ee.Feature(
            ee.Geometry.Point([59.87678813064352, 36.111466576849026]),
            {
              "LC": 1,
              "system:index": "118"
            }),
        ee.Feature(
            ee.Geometry.Point([59.876632562520655, 36.111297559915414]),
            {
              "LC": 1,
              "system:index": "119"
            }),
        ee.Feature(
            ee.Geometry.Point([59.87627314651266, 36.11118488175759]),
            {
              "LC": 1,
              "system:index": "120"
            }),
        ee.Feature(
            ee.Geometry.Point([59.875903001668604, 36.11092052082969]),
            {
              "LC": 1,
              "system:index": "121"
            }),
        ee.Feature(
            ee.Geometry.Point([59.875607958676966, 36.110708164685754]),
            {
              "LC": 1,
              "system:index": "122"
            }),
        ee.Feature(
            ee.Geometry.Point([59.87571524703756, 36.110430800694296]),
            {
              "LC": 1,
              "system:index": "123"
            }),
        ee.Feature(
            ee.Geometry.Point([59.87592982375875, 36.110261781531705]),
            {
              "LC": 1,
              "system:index": "124"
            }),
        ee.Feature(
            ee.Geometry.Point([59.8759566458489, 36.10956836577561]),
            {
              "LC": 1,
              "system:index": "125"
            }),
        ee.Feature(
            ee.Geometry.Point([59.876112213971766, 36.109234657261034]),
            {
              "LC": 1,
              "system:index": "126"
            }),
        ee.Feature(
            ee.Geometry.Point([59.87749086940542, 36.11035712571942]),
            {
              "LC": 1,
              "system:index": "127"
            }),
        ee.Feature(
            ee.Geometry.Point([59.87724410617605, 36.10997141442885]),
            {
              "LC": 1,
              "system:index": "128"
            }),
        ee.Feature(
            ee.Geometry.Point([59.87680958831564, 36.10989340517351]),
            {
              "LC": 1,
              "system:index": "129"
            }),
        ee.Feature(
            ee.Geometry.Point([59.876621833684595, 36.10986740207117]),
            {
              "LC": 1,
              "system:index": "130"
            }),
        ee.Feature(
            ee.Geometry.Point([59.87670229995504, 36.10949468999175]),
            {
              "LC": 1,
              "system:index": "131"
            }),
        ee.Feature(
            ee.Geometry.Point([59.87702416503683, 36.10941234638684]),
            {
              "LC": 1,
              "system:index": "132"
            }),
        ee.Feature(
            ee.Geometry.Point([59.87732993686453, 36.10934733821671]),
            {
              "LC": 1,
              "system:index": "133"
            }),
        ee.Feature(
            ee.Geometry.Point([59.877893200757654, 36.10977205728897]),
            {
              "LC": 1,
              "system:index": "134"
            }),
        ee.Feature(
            ee.Geometry.Point([59.87808631980673, 36.10995841289168]),
            {
              "LC": 1,
              "system:index": "135"
            }),
        ee.Feature(
            ee.Geometry.Point([59.878161421659144, 36.11029645215882]),
            {
              "LC": 1,
              "system:index": "136"
            }),
        ee.Feature(
            ee.Geometry.Point([59.87817751491323, 36.11090318565577]),
            {
              "LC": 1,
              "system:index": "137"
            }),
        ee.Feature(
            ee.Geometry.Point([59.877882471921595, 36.11112854261805]),
            {
              "LC": 1,
              "system:index": "138"
            }),
        ee.Feature(
            ee.Geometry.Point([59.877603522184046, 36.11108087100688]),
            {
              "LC": 1,
              "system:index": "139"
            }),
        ee.Feature(
            ee.Geometry.Point([59.87724947059408, 36.1109335222076]),
            {
              "LC": 1,
              "system:index": "140"
            }),
        ee.Feature(
            ee.Geometry.Point([59.87699734294668, 36.11078183933136]),
            {
              "LC": 1,
              "system:index": "141"
            }),
        ee.Feature(
            ee.Geometry.Point([59.87655209625021, 36.11054347993397]),
            {
              "LC": 1,
              "system:index": "142"
            }),
        ee.Feature(
            ee.Geometry.Point([59.87627851093069, 36.110105763520316]),
            {
              "LC": 1,
              "system:index": "143"
            }),
        ee.Feature(
            ee.Geometry.Point([59.87730847919241, 36.11064315758816]),
            {
              "LC": 1,
              "system:index": "144"
            }),
        ee.Feature(
            ee.Geometry.Point([59.876841774823816, 36.110335456596026]),
            {
              "LC": 1,
              "system:index": "145"
            }),
        ee.Feature(
            ee.Geometry.Point([59.87657355392233, 36.111028865579875]),
            {
              "LC": 1,
              "system:index": "146"
            }),
        ee.Feature(
            ee.Geometry.Point([59.58421577621851, 36.40760996660895]),
            {
              "LC": 1,
              "system:index": "147"
            }),
        ee.Feature(
            ee.Geometry.Point([59.58430160690698, 36.40704007247721]),
            {
              "LC": 1,
              "system:index": "148"
            }),
        ee.Feature(
            ee.Geometry.Point([59.585267202152345, 36.4073336548247]),
            {
              "LC": 1,
              "system:index": "149"
            }),
        ee.Feature(
            ee.Geometry.Point([59.58421577621851, 36.406435634739175]),
            {
              "LC": 1,
              "system:index": "150"
            }),
        ee.Feature(
            ee.Geometry.Point([59.58389391113672, 36.40503677508328]),
            {
              "LC": 1,
              "system:index": "151"
            }),
        ee.Feature(
            ee.Geometry.Point([59.58314289261255, 36.4052094751689]),
            {
              "LC": 1,
              "system:index": "152"
            }),
        ee.Feature(
            ee.Geometry.Point([59.58239187408838, 36.40529582506779]),
            {
              "LC": 1,
              "system:index": "153"
            }),
        ee.Feature(
            ee.Geometry.Point([59.581984178318116, 36.405054045109104]),
            {
              "LC": 1,
              "system:index": "154"
            }),
        ee.Feature(
            ee.Geometry.Point([59.582863942875, 36.40470864386303]),
            {
              "LC": 1,
              "system:index": "155"
            }),
        ee.Feature(
            ee.Geometry.Point([59.58314289261255, 36.40431143053189]),
            {
              "LC": 1,
              "system:index": "156"
            }),
        ee.Feature(
            ee.Geometry.Point([59.58056797195825, 36.405451254643935]),
            {
              "LC": 1,
              "system:index": "157"
            }),
        ee.Feature(
            ee.Geometry.Point([59.57990278412256, 36.40526128511974]),
            {
              "LC": 1,
              "system:index": "158"
            }),
        ee.Feature(
            ee.Geometry.Point([59.58080400635156, 36.40607296983928]),
            {
              "LC": 1,
              "system:index": "159"
            }),
        ee.Feature(
            ee.Geometry.Point([59.57917322327051, 36.40595208116315]),
            {
              "LC": 1,
              "system:index": "160"
            }),
        ee.Feature(
            ee.Geometry.Point([59.578765527500245, 36.406211128096004]),
            {
              "LC": 1,
              "system:index": "161"
            }),
        ee.Feature(
            ee.Geometry.Point([59.578786985172364, 36.406850106837666]),
            {
              "LC": 1,
              "system:index": "162"
            }),
        ee.Feature(
            ee.Geometry.Point([59.579044477237794, 36.40702280289279]),
            {
              "LC": 1,
              "system:index": "163"
            }),
        ee.Feature(
            ee.Geometry.Point([59.57947363068018, 36.406953724516804]),
            {
              "LC": 1,
              "system:index": "164"
            }),
        ee.Feature(
            ee.Geometry.Point([59.579731122745606, 36.406591062035226]),
            {
              "LC": 1,
              "system:index": "165"
            }),
        ee.Feature(
            ee.Geometry.Point([59.57917322327051, 36.40425961994769]),
            {
              "LC": 1,
              "system:index": "166"
            }),
        ee.Feature(
            ee.Geometry.Point([59.57831491638574, 36.4044841322297]),
            {
              "LC": 1,
              "system:index": "167"
            }),
        ee.Feature(
            ee.Geometry.Point([59.5774780671731, 36.40441505159664]),
            {
              "LC": 1,
              "system:index": "168"
            }),
        ee.Feature(
            ee.Geometry.Point([59.577799932254884, 36.40363789024268]),
            {
              "LC": 1,
              "system:index": "169"
            }),
        ee.Feature(
            ee.Geometry.Point([59.57867969681177, 36.403706971566685]),
            {
              "LC": 1,
              "system:index": "170"
            }),
        ee.Feature(
            ee.Geometry.Point([59.58080400635156, 36.40362061990208]),
            {
              "LC": 1,
              "system:index": "171"
            }),
        ee.Feature(
            ee.Geometry.Point([59.580482141269776, 36.40296434411514]),
            {
              "LC": 1,
              "system:index": "172"
            }),
        ee.Feature(
            ee.Geometry.Point([59.5803963105813, 36.40254985128862]),
            {
              "LC": 1,
              "system:index": "173"
            }),
        ee.Feature(
            ee.Geometry.Point([59.580997125400636, 36.40211808557662]),
            {
              "LC": 1,
              "system:index": "174"
            }),
        ee.Feature(
            ee.Geometry.Point([59.581018583072755, 36.402981614601586]),
            {
              "LC": 1,
              "system:index": "175"
            }),
        ee.Feature(
            ee.Geometry.Point([59.581962720646, 36.40251531011993]),
            {
              "LC": 1,
              "system:index": "176"
            }),
        ee.Feature(
            ee.Geometry.Point([59.58194126297388, 36.401945378620105]),
            {
              "LC": 1,
              "system:index": "177"
            })]);


var aoi = aoi.geometry();

// Create a styled outline by converting the geometry to an image
var outline = ee.Image().byte().paint({
  featureCollection: aoi,
  color: 1,
  width: 4
});


Map.centerObject(aoi);



var startDate = '2023-06-20';
var endDate = '2023-09-10';

// Function to filter clear sky pixels using the Sentinel-2 SCL band
function s2ClearSky(image) {
  var scl = image.select('SCL');
  var clear_sky_pixels = scl.eq(4).or(scl.eq(5)).or(scl.eq(6)).or(scl.eq(11));
  return image.updateMask(clear_sky_pixels).divide(10000)
      .select(["B.*"]) // select only main bands
      .copyProperties(image, ["system:time_start"]);
}

// Function to calculate spectral indices
function addIndices(image) {
  var ndvi = image.normalizedDifference(['B8', 'B4']).rename('NDVI');
  var savi = image.expression(
      '((NIR - RED) / (NIR + RED + L)) * (1 + L)', {
        'NIR': image.select('B8'),
        'RED': image.select('B4'),
        'L': 0.5
      }).rename('SAVI');
  var ndwi = image.normalizedDifference(['B3', 'B8']).rename('NDWI');
  var ndbi = image.normalizedDifference(['B11', 'B8']).rename('NDBI');
  var bsi = image.expression(
      '((SWIR + RED) - (NIR + BLUE)) / ((SWIR + RED) + (NIR + BLUE))', {
        'SWIR': image.select('B11'), 
        'RED': image.select('B4'),
        'NIR': image.select('B8'),
        'BLUE': image.select('B2')
      }).rename('BSI');

  return image.addBands(ndvi).addBands(savi).addBands(ndwi).addBands(ndbi).addBands(bsi);
}

// Function to filter clear sky pixels using the Sentinel-2 SCL band
function s2ClearSky(image) {
  var scl = image.select('SCL');
  var clear_sky_pixels = scl.eq(4).or(scl.eq(5)).or(scl.eq(6)).or(scl.eq(11));
  return image.updateMask(clear_sky_pixels).divide(10000)
      .select(["B.*"]) // select only main bands
      .copyProperties(image, ["system:time_start"]);
}

// Load Sentinel-2 surface reflectance data
var s2 = ee.ImageCollection('COPERNICUS/S2_SR_HARMONIZED')
          .filterDate(startDate, endDate)
          .filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE', 20))
          .filterBounds(aoi)
          .map(s2ClearSky)
          .map(addIndices)
          .mean()
          .clip(aoi);
print('Sentinel-2 with spectral indices:', s2);

/*
Map.addLayer(s2, {bands: ['B8', 'B4', 'B3'], min: 0.0681999996304512, max: 0.3659999966621399}, 'S2');
Map.addLayer(s2.select('NDVI'), {min: 0.020672578364610672, max: 0.5296816825866699}, 'NDVI');
Map.addLayer(s2.select('SAVI'), {min: 0.015363391670253291, max: 0.32977319455466275}, 'SAVI');
Map.addLayer(s2.select('NDWI'), {min: -0.5407500863075256, max: -0.09478603303432465}, 'NDWI');
Map.addLayer(s2.select('NDBI'), {min: -0.1585114747285843, max: 0.16634927690029144}, 'NDBI');
Map.addLayer(s2.select('BSI'), {min: -0.07068260759115219, max: 0.19632701575756073}, 'BSI');
*/

// Load Sentinel-1 GRD data
var s1 = ee.ImageCollection('COPERNICUS/S1_GRD')
          .filterDate(startDate, endDate)
          .filter(ee.Filter.listContains('transmitterReceiverPolarisation', 'VV'))
          .select(['VV','VH'])
          .filterBounds(aoi)
          .mean()
          .clip(aoi);
print('Sentinel-1:', s1);

//Map.addLayer(s1, {bands: ['VV'], min: -11.119417640429962, max: 4.727575342604149}, 'S1 - VV');
//Map.addLayer(s1, {bands: ['VH'], min: -17.1083812361278, max: 0.9835349810483683}, 'S1 - VH');



var landsat = ee.ImageCollection("LANDSAT/LC08/C02/T1_L2")
.filterDate(startDate, endDate)
.filterBounds(aoi)
.filter(ee.Filter.lt('CLOUD_COVER', 10))
.map(function(img){
  var tir = img.select('ST_B10') 
  var tir_gain = ee.Number(img.get('TEMPERATURE_MULT_BAND_ST_B10'))
  var tir_offset = ee.Number(img.get('TEMPERATURE_ADD_BAND_ST_B10'))
  var lst = tir.multiply(tir_gain).add(tir_offset)
  return lst.rename('landsat')
  .copyProperties(img, ['system:time_start','system:index'])
  })
print(landsat);

var modis = ee.ImageCollection("MODIS/061/MOD11A1") 
.filterDate(startDate, endDate)
.map(function(img){
  var lst = img.select('LST_Day_1km').multiply(0.02)
  return lst.rename('modis')
  .copyProperties(img, ['system:time_start', 'system:index'])
  })

var day = 2;
var mills = ee.Number(day).multiply(1000 * 3600 * 24)
var filter = ee.Filter.maxDifference({
  difference: mills, leftField: 'system:time_start', rightField: 'system:time_start'
  });
var join = ee.Join.saveAll('modis_temp');

var join_collections = ee.ImageCollection(join.apply(landsat, modis, filter))

var collection = join_collections.map(function(img){
  var modis = ee.ImageCollection.fromImages(img.get('modis_temp')).max();
  return img.addBands(modis)
  })  
  

var model = collection.map(function(img){
  var modis = img.select('modis')
  var landsat = img.select('landsat')
  var cons = ee.Image.constant(1)
  var indep = modis.addBands(cons)
  var dep = landsat
  return indep.addBands(dep)
  }).reduce(ee.Reducer.linearRegression(2, 1));
  
var model_gain = model.select('coefficients').arrayGet([0,0])
var model_offset = model.select('coefficients').arrayGet([1,0])

var modis100 = collection.map(function(img){
  var modis = img.select('modis');
  var modis_sharp = modis.multiply(model_gain).add(model_offset).rename('modis100');
  var modisCelsius = modis_sharp.subtract(273.15); // Convert Kelvin to Celsius
  return modis.addBands(modisCelsius)
    .copyProperties(img, img.propertyNames());
});
var modis100 = modis100
.select('modis100')
.mean()
.clip(aoi);
print (modis100)

var stacked =  s2.addBands(s1).addBands(modis100)
print (stacked, "Stacked")
/*
Map.addLayer(stacked.select('modis100'),
{
  min: 36.507085865854094,
  max: 52.991142908932716,
  palette: [
    '313695', '74add1', 'fed976', 'feb24c', 'fd8d3c', 'fc4e2a', 'e31a1c',
    'b10026'] 
},'modis upscaled')
*/

var training_data = V.merge(W).merge(S).merge(I).merge(I2);
print(training_data);

var training = stacked.sampleRegions({
  collection : training_data,
  properties : ['LC'],
  scale : 10,
  tileScale: 2 
});
print(training);

var classifier_23 = ee.Classifier.smileRandomForest(1500).train({
  features : training,
  classProperty : 'LC',
});

var classified_23 = stacked.classify(classifier_23);

Map.addLayer(classified_23,{
  min:0, max:4, palette:['green','blue','yellow','grey','black']},
  "LC 2023");

print('confusion matrix LC 2023',classifier_23.confusionMatrix());
print('overal accuracy LC 2023', classifier_23.confusionMatrix().accuracy());

Export.image.toDrive({
  image : classified_23,
  description : 'Mashhad_classified_2023',
  scale : 10,
  region : aoi,
  maxPixels:1e9
});

Export.image.toDrive({
  image : stacked.float(),
  description : 'Mashhad_stackedimage_2023',
  scale : 10,
  region : aoi,
  maxPixels:1e9
});

Map.addLayer(stacked,{},"stacked image for classification")












// Define time period for analysis 
var startDate = '2023-01-01';
var endDate = '2023-12-31';

// Load Sentinel-5P datasets (HCHO, NO2, CO, SO2)
var hcho = ee.ImageCollection("COPERNICUS/S5P/OFFL/L3_HCHO")
           .select('tropospheric_HCHO_column_number_density')
           .filterDate(startDate, endDate)
           .filterBounds(aoi)
           .mean()
           .clip(aoi);

var no2 = ee.ImageCollection("COPERNICUS/S5P/OFFL/L3_NO2")
          .select('tropospheric_NO2_column_number_density')
          .filterDate(startDate, endDate)
          .filterBounds(aoi)
          .mean()
          .clip(aoi);

var co = ee.ImageCollection("COPERNICUS/S5P/OFFL/L3_CO")
         .select('CO_column_number_density')
         .filterDate(startDate, endDate)
         .filterBounds(aoi)
         .mean()
         .clip(aoi);

var so2 = ee.ImageCollection("COPERNICUS/S5P/OFFL/L3_SO2")
          .select('SO2_column_number_density')
          .filterDate(startDate, endDate)
          .filterBounds(aoi)
          .mean()
          .clip(aoi);

// Load additional predictors
var elevation = ee.ImageCollection('JAXA/ALOS/AW3D30/V3_2')
                .select('DSM')
                .mean()
                .clip(aoi)
                .rename('elevation');
/*
var lst = ee.ImageCollection('MODIS/061/MOD11A2')
           .select('LST_Day_1km')
           .filterDate(startDate, endDate)
           .mean()
           .multiply(0.02)
           .subtract(273.15)
           .clip(aoi)
           .rename('lst');
*/
var windU = ee.ImageCollection('ECMWF/ERA5_LAND/DAILY_AGGR')
            .select('u_component_of_wind_10m')
            .filterDate(startDate, endDate)
            .mean()
            .clip(aoi);

var windV = ee.ImageCollection('ECMWF/ERA5_LAND/DAILY_AGGR')
            .select('v_component_of_wind_10m')
            .filterDate(startDate, endDate)
            .mean()
            .clip(aoi);

var wind = windU.hypot(windV).rename('wind');

var precipitation = ee.ImageCollection('ECMWF/ERA5_LAND/DAILY_AGGR')
                     .select('total_precipitation_sum')
                     .filterDate(startDate, endDate)
                     .mean()
                     .clip(aoi)
                     .rename('precipitation');
/*
var ndvi = ee.ImageCollection('MODIS/061/MOD13A1')
           .select('NDVI')
           .filterDate(startDate, endDate)
           .mean()
           .multiply(0.0001)
           .clip(aoi)
           .rename('ndvi');
*/
var population = ee.ImageCollection('WorldPop/GP/100m/pop')
                 .filterDate('2020-01-01', '2020-12-31')
                 .mean()
                 .clip(aoi)
                 .rename('population');

var industrialCenters = ee.FeatureCollection([
  table, table2, table3, table4, table5, 
  table6, table7, table8, table9, table10, 
  table11, table12, table13
]).flatten();

var industrialCentersDistance = industrialCenters
                                    .distance(1500)
                                    .rename('industrial_distance')
                                    .clip(aoi)
                                    .unmask(1500);

// Update NDVI calculation using Sentinel-2
var ndvi_s2 = ee.ImageCollection('COPERNICUS/S2_SR_HARMONIZED')
  .filterDate(startDate, endDate)
  .filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE', 20))
  .filterBounds(aoi)
  .map(s2ClearSky)
  .mean()
  .normalizedDifference(['B8', 'B4'])
  .rename('ndvi')
  .clip(aoi);

// Update LST calculation using Landsat 9
var lst_l9 = ee.ImageCollection("LANDSAT/LC09/C02/T1_L2")
  .filterDate(startDate, endDate)
  .filterBounds(aoi)
  .filter(ee.Filter.lt('CLOUD_COVER', 10))
  .map(function(img) {
    var tir = img.select('ST_B10');
    var tir_gain = ee.Number(img.get('TEMPERATURE_MULT_BAND_ST_B10'));
    var tir_offset = ee.Number(img.get('TEMPERATURE_ADD_BAND_ST_B10'));
    var lst = tir.multiply(tir_gain).add(tir_offset);
    return lst.rename('lst');
  })
  .mean()
  .subtract(273.15) // Convert Kelvin to Celsius
  .clip(aoi);

// Define visualization parameters for wind speed and precipitation
var windVisParams = {min: 0, max: 10, palette: ['blue', 'green', 'yellow', 'red']};
var precipitationVisParams = {min: 0, max: 1, palette: ['white', 'blue']};

// Add wind and precipitation layers to the map
Map.addLayer(wind, windVisParams, 'Wind Speed');
Map.addLayer(precipitation, precipitationVisParams, 'Precipitation');

// Add WorldCover 2020 as a predictor
var worldCover = ee.ImageCollection("ESA/WorldCover/v200")
  .first()
  .rename('worldCover')
  .clip(aoi);

// Combine predictors into a single image
var predictors = elevation
  .addBands(lst_l9)
  .addBands(wind)
  .addBands(precipitation)
  .addBands(ndvi_s2)
  .addBands(population)
  .addBands(industrialCentersDistance)
  .addBands(classified_23.rename('LC'))
  .addBands(worldCover);
  
 print(predictors);
 Map.addLayer(predictors, {}, 'predictors');
// Combine all pollutant datasets
var pollutants = hcho.rename('hcho')
                  .addBands(no2.rename('no2'))
                  .addBands(co.rename('co'))
                  .addBands(so2.rename('so2'));

// Prepare training data
var sample = predictors.addBands(pollutants).sample({
  region: aoi,
  scale: 1000,
  numPixels: 8000,
  seed: 42
}).randomColumn();

// Split into training and validation sets
var split = 0.7;
var trainingData = sample.filter(ee.Filter.lt('random', split));
var validationData = sample.filter(ee.Filter.gte('random', split));

// Train a separate Random Forest model for each pollutant
function trainAndPredict(pollutantName) {
  var regressor = ee.Classifier.smileRandomForest(50).setOutputMode('REGRESSION').train({
    features: trainingData,
    classProperty: pollutantName,
    inputProperties: predictors.bandNames()
  });

  var predicted = predictors.classify(regressor).rename('predicted_' + pollutantName);

  var validated = validationData.classify(regressor);
  var observed = validated.aggregate_array(pollutantName);
  var predictedVals = validated.aggregate_array('classification');

  var mae = ee.Array(observed).subtract(ee.Array(predictedVals)).abs().reduce('mean', [0]);
  var rmse = ee.Array(observed).subtract(ee.Array(predictedVals)).pow(2).reduce('mean', [0]).sqrt();
  var meanObs = ee.Number(ee.Array(observed).reduce('mean', [0]).get([0]));
  var ssTotal = ee.Array(observed).subtract(meanObs).pow(2).reduce('sum', [0]);
  var ssResidual = ee.Array(observed).subtract(ee.Array(predictedVals)).pow(2).reduce('sum', [0]);
  var r2 = ssTotal.subtract(ssResidual).divide(ssTotal);

  print(pollutantName + ' - Mean Absolute Error (MAE):', mae);
  print(pollutantName + ' - Root Mean Squared Error (RMSE):', rmse);
  print(pollutantName + ' - R-squared (R²):', r2);

  return predicted;
}

// Predict for each pollutant
var predictedHCHO = trainAndPredict('hcho');
var predictedNO2 = trainAndPredict('no2');
var predictedCO = trainAndPredict('co');
var predictedSO2 = trainAndPredict('so2');

// Combine predictions into a single image
var predictions = predictedHCHO
                  .addBands(predictedNO2)
                  .addBands(predictedCO)
                  .addBands(predictedSO2);

Map.addLayer(predictions, {}, 'Predicted Pollutants');

// Combine observed into a single image
var observedstack = hcho
                  .addBands(no2)
                  .addBands(co)
                  .addBands(so2);

Map.addLayer(observedstack, {}, 'observed Pollutants');

Map.addLayer(outline, {palette: 'blue'}, 'AOI Boundary');

// Export
Export.image.toDrive({
  image: predictions,
  description: 'Predicted_Pollutants',
  folder: 'EarthEngineExports',
  region: aoi,
 // scale: 1000,
  fileFormat: 'GeoTIFF'
});
 print(predictors)

 Export.image.toDrive({
  image: predictors.float(),
  description: 'Predictors',
  folder: 'EarthEngineExports',
  region: aoi,
  scale: 100,
  fileFormat: 'GeoTIFF'
});
 
 // Export NDVI, LST, wind, and precipitation
Export.image.toDrive({
  image: ndvi_s2,
  description: 'Sentinel2_NDVI',
  folder: 'EarthEngineExports',
  scale: 10,
  region: aoi,
  maxPixels: 1e9
});

Export.image.toDrive({
  image: lst_l9,
  description: 'Landsat9_LST',
  folder: 'EarthEngineExports',
  scale: 30,
  region: aoi,
  maxPixels: 1e9
});

Export.image.toDrive({
  image: wind,
  description: 'Wind_Speed',
  folder: 'EarthEngineExports',
  scale: 10000,
  region: aoi,
  maxPixels: 1e9
});

Export.image.toDrive({
  image: windV,
  description: 'Windv_Speed',
  folder: 'EarthEngineExports',
  scale: 10000,
  region: aoi,
  maxPixels: 1e9
});

Export.image.toDrive({
  image: windU,
  description: 'Windu_Speed',
  folder: 'EarthEngineExports',
  scale: 10000,
  region: aoi,
  maxPixels: 1e9
});

Export.image.toDrive({
  image: precipitation,
  description: 'Precipitation',
  folder: 'EarthEngineExports',
  scale: 10000 ,
  region: aoi,
  maxPixels: 1e9
});

Export.image.toDrive({
  image: population,
  description: 'population',
  folder: 'EarthEngineExports',
  scale: 100,
  region: aoi,
  maxPixels: 1e9
});
