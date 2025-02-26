# Changelog

## [3.0.0](https://github.com/peco11/webmapp-app/compare/v2.12.18...v3.0.0) (2025-02-26)


### ⚠ BREAKING CHANGES

* **config:** The private variable _geohubAppId has been added to store the selected geohubAppId value.

### Features

* Add popup functionality to map page ([38b999e](https://github.com/peco11/webmapp-app/commit/38b999efed09cd3e0cf1005e48564b5880491e8e))
* Add release automation workflow ([004bc16](https://github.com/peco11/webmapp-app/commit/004bc16781f50387128c0308fb1fd8df30dec87e))
* Add support for exporting tracks to GeoJSON, KML, and GPX formats id:2214 ([04bf899](https://github.com/peco11/webmapp-app/commit/04bf899d8bf060b049bd8ba17801a414181387fb))
* **config:** add dynamic geohubAppId selection ([f4054da](https://github.com/peco11/webmapp-app/commit/f4054da50b9fa48c85c8cf13e53950b9e2ed1166))
* Enable fullscreen mode for maps in track and waypoint detail pages ([a3a61a3](https://github.com/peco11/webmapp-app/commit/a3a61a3c29bf13d07a4dcbacad0a213f970d996f))
* Enhance settings component with memory reset functionality ([694aa22](https://github.com/peco11/webmapp-app/commit/694aa22185b667244addf47a9c147c60f4595636))
* **home:** add home layer ([5e485df](https://github.com/peco11/webmapp-app/commit/5e485df7bb6082d84dbb4676e47a25893913324e))
* **i18n:** Add download options for GPX, KML, and GEOJSON tracks ([8484473](https://github.com/peco11/webmapp-app/commit/848447346d807d80f5c9bc48200c42470b2749fa))
* **i18n:** Add Italian translation for new waypoint message ([afc9e6d](https://github.com/peco11/webmapp-app/commit/afc9e6d44301f78abf05f40469f01222ac762516))
* **i18n:** Add translations for new points of interest ([d3a9b09](https://github.com/peco11/webmapp-app/commit/d3a9b09cdbd7c1eb492824070ef0dff6449958eb))
* **map:** add support for multiple POI types in info header oc:2583 ([4b2a95b](https://github.com/peco11/webmapp-app/commit/4b2a95b57391f21e52932016d88b5b40a980db4d))
* **overlay:** ui deadline:82 ([9251930](https://github.com/peco11/webmapp-app/commit/9251930e99040be43af23f72d2b10174e72e216b))
* Refactored download service and map components.  oc: 3685 ([f576e33](https://github.com/peco11/webmapp-app/commit/f576e33bdd428a2765260f12dca0f549697a7cc2))
* **register:** add waypoint button  id:2226 ([34dfade](https://github.com/peco11/webmapp-app/commit/34dfade5d58398ff854d2da061b1c0eb455879b9))
* Replace confPOIFORMS with acquisitionFORM in waypoint modal id:2641 ([dc92106](https://github.com/peco11/webmapp-app/commit/dc92106b6410fd6de6d9f70a744fa61b1f828046))
* **save.service:** remove console.log statement ([43a29c7](https://github.com/peco11/webmapp-app/commit/43a29c74d2a31c0866ef8e0ba5c1bd59d2030099))
* **social-share:** add configurable text ([7544147](https://github.com/peco11/webmapp-app/commit/75441472c46df96cca8536352b5aa81d2b290054))
* update ([6d55ba5](https://github.com/peco11/webmapp-app/commit/6d55ba58244485a1bf59b1d12a7f6f20b89fe76f))
* Update  to new geoserver ([396ccc2](https://github.com/peco11/webmapp-app/commit/396ccc2f4f0d699e665c8b6fa77c56ead9febe7f))


### Bug Fixes

* add 'parcapuane' map to ConfigService ([3c4bb72](https://github.com/peco11/webmapp-app/commit/3c4bb7275423421177ec29f30a91155940074844))
* add condition to onlyTitle method in navigation oc: 4211 ([37ddb19](https://github.com/peco11/webmapp-app/commit/37ddb19f1ebe69cbf0ba46194df6fd6dcbc98e0c))
* Add gulp-through2 package ([a971689](https://github.com/peco11/webmapp-app/commit/a9716894c7179a731b363bb4fab4d72bb5c241c0))
* Add permissions to AndroidManifest.xml ([e961164](https://github.com/peco11/webmapp-app/commit/e961164108ccd0a8b2963a9978eb5b75d550e17d))
* Add share button for points of interest oc: 3789 ([8b11848](https://github.com/peco11/webmapp-app/commit/8b11848967926cf66c5f5b83a71e059c014692a1))
* Add take(1) operator to app.component.ts oc:3023 ([a30d3ab](https://github.com/peco11/webmapp-app/commit/a30d3abe28ec95a81186eedcb54d1da36e1ca052))
* Change directory for writing file in TrackdetailPage oc:3422 ([63b6b22](https://github.com/peco11/webmapp-app/commit/63b6b228ca33d338898baf39dd710dfe6dcfb579))
* check if conf exists before accessing flow_line_quote_show property ([3c25dd3](https://github.com/peco11/webmapp-app/commit/3c25dd322382df35fd089668b82a9db62846925a))
* css ion-select oc: 3522 ([b1a13eb](https://github.com/peco11/webmapp-app/commit/b1a13eb52bbcdf8c994544617af185f9fb4232e7))
* **downloadoffline_has_some_problem:** story 1641 ([89b0c6e](https://github.com/peco11/webmapp-app/commit/89b0c6e97c371004e2d3ef48c0242559dfc95322))
* Fix error handling in app.component.ts ([99d2e90](https://github.com/peco11/webmapp-app/commit/99d2e90fc976f2b292d7574b81eddac2ff226d5a))
* gestion sync ugc OC: 3717 ([f2cdd81](https://github.com/peco11/webmapp-app/commit/f2cdd810b56fc2287c868d7f20de6cbacf9dd1bd))
* **image-gallery.component:** scrolling fixed ([ae46a2d](https://github.com/peco11/webmapp-app/commit/ae46a2d9f9efc7c6471dfebd3d62c94c98508493))
* **map:** add current track to record ([fc431f0](https://github.com/peco11/webmapp-app/commit/fc431f0066ad8fa53b848242ed0c7b4d8f38f685))
* **map:** add logic to control layer opacity and open track details ([d33f275](https://github.com/peco11/webmapp-app/commit/d33f275e98aee01a1f650de08460e4e07ed2495f))
* **map:** missed icons ([424c59a](https://github.com/peco11/webmapp-app/commit/424c59a6a09ae712cc55f638dc30d86c694b5749))
* **page/home:** remove handling set filter ([cf4a1dc](https://github.com/peco11/webmapp-app/commit/cf4a1dce372c1a38212d779125bd7f4f8b45c8a2))
* **profile_shift:** implements ([#1](https://github.com/peco11/webmapp-app/issues/1)) ([7d55c66](https://github.com/peco11/webmapp-app/commit/7d55c6664d48ab12a4e734aa787b1aa7e5095217))
* Refactor object merging in SaveService oc:3418 ([79b3e73](https://github.com/peco11/webmapp-app/commit/79b3e7300ee0950ad03073d4a7ced6285a4db3de))
* Register page privacy link modal  oc:3568 ([ed9e5aa](https://github.com/peco11/webmapp-app/commit/ed9e5aa7c925b9945d0077c308f9c0db4c9d77b0))
* Remove duplicate elasticApi URL ([013cd07](https://github.com/peco11/webmapp-app/commit/013cd07999cf871d72c8bae95732cc49e3efac1d))
* **save.service:** fix null check for track coordinates ([10b4f68](https://github.com/peco11/webmapp-app/commit/10b4f68567ad12258a03308641dc1c5ddd2d2cd7))
* **sunc/offline:** fix media sync ([bdc9c40](https://github.com/peco11/webmapp-app/commit/bdc9c40a73df0b984a92bab48713947b8c268cca))
* **sync/offline:** fix tracks&pois sync ([f651b49](https://github.com/peco11/webmapp-app/commit/f651b4970f8b42fe8d46f7e976ade0381010d8b2))
* **track-properties.component:** activity tab fixed ([ae46a2d](https://github.com/peco11/webmapp-app/commit/ae46a2d9f9efc7c6471dfebd3d62c94c98508493))
* Update map.page.ts ([b631756](https://github.com/peco11/webmapp-app/commit/b6317563234041bbf7ee4c5a111796af173cc883))
* waypoint button ([c8b19f6](https://github.com/peco11/webmapp-app/commit/c8b19f603e9c040e66e8cf82ee2edb5fb0e9ec6d))


### Miscellaneous

* Add 'cai_scale' translation to Italian language file oc: 4097 ([221acd9](https://github.com/peco11/webmapp-app/commit/221acd97ab02b14c8bd2e85363fdc1c0056d3ea5))
* add @capacitor-community/keep-awake package ([9b7931c](https://github.com/peco11/webmapp-app/commit/9b7931c67db6352fea938a1c5dd60f59de875609))
* Add API endpoint for OSM2CAI ([f3579b2](https://github.com/peco11/webmapp-app/commit/f3579b21db0f2fc8bb65b0fcb5934803792a056c))
* Add deploy command for motomappa ([0475fc2](https://github.com/peco11/webmapp-app/commit/0475fc20986c1e634d6132daea9e99e639748a9a))
* Add file saving functionality and permission handling ([b3ba923](https://github.com/peco11/webmapp-app/commit/b3ba923a609e6c900954e427aebacb431df21452))
* Add geolocation service to home and map pages oc: 4113 ([37903a7](https://github.com/peco11/webmapp-app/commit/37903a78f46f1a95f9ddccc1d370615609f11ab7))
* Add new deployment command for caiparma project ([73728cc](https://github.com/peco11/webmapp-app/commit/73728cc4db10656206c49a549e05fa3b8b69527b))
* Add null check before resetting rotation in goToTrack method ([b0350f8](https://github.com/peco11/webmapp-app/commit/b0350f8293ad13538a00f22a1ee26a5ee314fcd7))
* add privacy link to settings component ([#24](https://github.com/peco11/webmapp-app/issues/24)) ([d6f4d00](https://github.com/peco11/webmapp-app/commit/d6f4d00a7860e7556e1cab2a41dde3e21eff57c7))
* Add referrer field to login request ([e953006](https://github.com/peco11/webmapp-app/commit/e95300641080b3e61a44c61373503ebd4844f971))
* Add release-please configuration file ([8cf2be7](https://github.com/peco11/webmapp-app/commit/8cf2be7edd248735ff1947c1f988a06848432788))
* Add subproject commit 493779ecb1d24800a5ba0016a89d20ea5b9c82aa to wm-types ([dbcd331](https://github.com/peco11/webmapp-app/commit/dbcd3317f7386613c4b92fa5b7feea9532cbe956))
* Add surge-osm2cai script to deploy the project to OSM2CAI domain ([ea9c699](https://github.com/peco11/webmapp-app/commit/ea9c69953b8dad3258d32011567de0249ff7863d))
* Add unique photos to waypoint and track detail pages oc:4433 ([1e9d598](https://github.com/peco11/webmapp-app/commit/1e9d5988d825ecc60142761051971977f1142b93))
* change environment ([42fcb8b](https://github.com/peco11/webmapp-app/commit/42fcb8b5645fc686197197a81fa580fd9ea2c3db))
* Comment out console.log statements and unused code ([88c6830](https://github.com/peco11/webmapp-app/commit/88c683017ac3076fb1419c0271084f297f29e25d))
* **deploy-commands:** updated ([6278031](https://github.com/peco11/webmapp-app/commit/627803168adc54acb2132c1fe25d7008f4b57831))
* **dotenv:** add dotenv ([abba2d1](https://github.com/peco11/webmapp-app/commit/abba2d1661f7f1bc1f999011e4045a0950798e07))
* enable save to gallery ([a946677](https://github.com/peco11/webmapp-app/commit/a94667780865bc8e6a4f6f8b3ad996785611fab9))
* **gulpfile:** updated ([5388bab](https://github.com/peco11/webmapp-app/commit/5388babd4ef55ea31c4167408a8c8db5b265f92f))
* **i18n:** Remove unused translation key "cai_scale" ([127ba20](https://github.com/peco11/webmapp-app/commit/127ba20c21da694c651506d16e907333cbb9116c))
* **inner-component:** add wm core inner components remove useless code ([cacb6e9](https://github.com/peco11/webmapp-app/commit/cacb6e96493554af9f987b33ddd776cae3dffcb9))
* make release ([808ee25](https://github.com/peco11/webmapp-app/commit/808ee257c904af326fb38dc69a532fcbd8fb5527))
* **map:** add track property to wm-track-download-urls component ([be32e9d](https://github.com/peco11/webmapp-app/commit/be32e9d8fb01bd7c71cdcbd535f6fb4a69ea84ed))
* **modal-success:** Update waypoint success message ([13d68ba](https://github.com/peco11/webmapp-app/commit/13d68bae1667a26aff3b52b93f56520a7f966261))
* **offline:** OFFLINE TRACK oc:2698 ([4b6062d](https://github.com/peco11/webmapp-app/commit/4b6062d8e475cf9526427202212c6045824201c8))
* **poi-properties:** add excerpt display to properties oc: 4183 ([#66](https://github.com/peco11/webmapp-app/issues/66)) ([d5a9e47](https://github.com/peco11/webmapp-app/commit/d5a9e47af5d59467a2eeffd6d40881c0306da72a))
* **profile:** add app version ([5f6eea1](https://github.com/peco11/webmapp-app/commit/5f6eea1144821494266eba1c7d767ff62bcb39ed))
* Refactor cgeojson-feature.ts ([46f48d4](https://github.com/peco11/webmapp-app/commit/46f48d41434f9bb3556d5a13d4e4bdad9c749486))
* Refactor photo handling in trackdetail and waypointdetail pages ([3a6bf14](https://github.com/peco11/webmapp-app/commit/3a6bf142e4a666cd8ab17d4ad4f36e7340519493))
* Refactor SaveService to improve code readability oc: 3418 ([8a37315](https://github.com/peco11/webmapp-app/commit/8a37315cf68d6b56e3d3dd7a6547b93e3ea239ed))
* Refactor shareTrackByID method in ShareService oc: 3850 ([#36](https://github.com/peco11/webmapp-app/issues/36)) ([6a060df](https://github.com/peco11/webmapp-app/commit/6a060df97401f53b9ee63cd261af0da3733a4aa7))
* Remove android.permission.MANAGE_EXTERNAL_STORAGE from permissions array ([786cfec](https://github.com/peco11/webmapp-app/commit/786cfec343d07a51ac123b647e91359ff995a5ea))
* Remove home module and component ([c06592b](https://github.com/peco11/webmapp-app/commit/c06592be228463a113f6eddb91a4b801522d20e3))
* Remove LangService provider from settings and profile components ([1b4b278](https://github.com/peco11/webmapp-app/commit/1b4b278f5d20cb649d183f0de64b0f3e71af1bf2))
* Remove login component ([6b13542](https://github.com/peco11/webmapp-app/commit/6b13542ed1e18fbbcf6652ae1a6172be8d1df44f))
* Remove registeruser page and related components ([0171acf](https://github.com/peco11/webmapp-app/commit/0171acfd1d8c8fb687c793373050d7a3bdd69d0c))
* Remove unnecessary code and fix condition in MapPage ([db89915](https://github.com/peco11/webmapp-app/commit/db899154bf3c0e1a67b753d3da9cf8242079b599))
* Remove unnecessary code and fix formatting in modal-success component ([546a2b2](https://github.com/peco11/webmapp-app/commit/546a2b20a6b94835a5765aff9584125bb0984122))
* Remove unnecessary code for handling location permission denial ([479d5a5](https://github.com/peco11/webmapp-app/commit/479d5a50953903333106b167a06e02499dca8a1b))
* Remove unnecessary code for overlay URL and reorganize lifecyc… ([#49](https://github.com/peco11/webmapp-app/issues/49)) ([c9d25f5](https://github.com/peco11/webmapp-app/commit/c9d25f54c1cfa5216ca8687e11a7bbcdd798dbe8))
* Remove unnecessary code in release_please.yml ([aff70fc](https://github.com/peco11/webmapp-app/commit/aff70fc4b7a92208092fc06b6e8d1c452b82ad7b))
* Remove unnecessary code in setPhotoData method ([95be7fa](https://github.com/peco11/webmapp-app/commit/95be7fa3514c2a59cec046c76b1602cf5a88f833))
* Remove unnecessary import in home.module.ts ([f92e770](https://github.com/peco11/webmapp-app/commit/f92e7706b8a7565cb4a24846e9cdb67fd37658c4))
* Remove unnecessary imports and code ([977de12](https://github.com/peco11/webmapp-app/commit/977de12967921df96119b984013c46f50276a3ac))
* Remove unnecessary ngIf condition in map.page.html id: 2227 ([7251398](https://github.com/peco11/webmapp-app/commit/725139820fbcdda1e74c7daa46c87f30c024f9b7))
* Remove unused code and dependencies in search-bar and home.page components ([c3a2bed](https://github.com/peco11/webmapp-app/commit/c3a2beda6a33089ac1b2bb3d4ca981aa42b085f4))
* remove unused code files (move to wm-core) oc: 3864 ([d1b5710](https://github.com/peco11/webmapp-app/commit/d1b5710e5c48da8d17bc8772d87f0822fb7e3235))
* Remove unused code in GeohubService ([ea9fc65](https://github.com/peco11/webmapp-app/commit/ea9fc655f6d02d53ed477560b637e5b9d7972350))
* Remove unused code in home page ([94834da](https://github.com/peco11/webmapp-app/commit/94834daf3a2c52b2519ceb9ef6466d3bc7fb9292))
* Remove unused imports and variables in downloaded-tracks-box.component.ts ([2ce5a7d](https://github.com/peco11/webmapp-app/commit/2ce5a7d4fe0813a16567580cea3ff0a1878e3443))
* Remove unused saveFileCallback method ([2683dd3](https://github.com/peco11/webmapp-app/commit/2683dd38097b41809216e936ee8faa3cb973b94b))
* remove useless file ([d74087e](https://github.com/peco11/webmapp-app/commit/d74087e2ba27c6e97217c46da841a8db9dafdb7d))
* Update @dwayneparton/geojson-to-gpx version to ^0.0.30 in package-lock.json ([6c29832](https://github.com/peco11/webmapp-app/commit/6c29832834a9d2146f92a565eac479a73669b8d9))
* Update Android platform and remove storage permission request oc:3969 ([7e3845f](https://github.com/peco11/webmapp-app/commit/7e3845f4f7824ff2759f119e9be368368a82b0f8))
* Update Android platform versions in gulpfile.js ([51f230e](https://github.com/peco11/webmapp-app/commit/51f230e475755b9759fea53b7158a18bc38e3c84))
* Update app.component.ts and tabs-routing.module.ts ([d97e02a](https://github.com/peco11/webmapp-app/commit/d97e02a1500fd761f3e1e284c52fca338c99e465))
* Update app.module.ts ([dfa20a3](https://github.com/peco11/webmapp-app/commit/dfa20a3f91afe54d1c5bf8769b51a1b65b054efa))
* Update app.module.ts ([2aae140](https://github.com/peco11/webmapp-app/commit/2aae1400043b3eb7e72fb85df12db8ca03ae5f12))
* Update app.module.ts and settings.component.html/ts ([00614b5](https://github.com/peco11/webmapp-app/commit/00614b59331dd548b52d71987900b5f9bea2962b))
* Update dependencies and Android platform versions ([6c29832](https://github.com/peco11/webmapp-app/commit/6c29832834a9d2146f92a565eac479a73669b8d9))
* Update dependencies and build configuration ([1292745](https://github.com/peco11/webmapp-app/commit/12927457694258da5d887f49506c6169dd67b19d))
* update deploy commands ([7858417](https://github.com/peco11/webmapp-app/commit/78584174c9545cc3e399522cf430147f78684589))
* Update deploy-messages.txt ([1f39225](https://github.com/peco11/webmapp-app/commit/1f392255ecd82065970c35eab8ccca131be14e3f))
* Update deploy-messages.txt and gulpfile.js ([c858d6c](https://github.com/peco11/webmapp-app/commit/c858d6c494125930b38df407f6879c7414763b20))
* Update deploy-to-web paths in package.json ([ec49915](https://github.com/peco11/webmapp-app/commit/ec49915a15da0f110c32e0686d286779cf309be7))
* Update downloaded-tracks-box.component.scss, home.page.ts, network.service.ts, and netwotk.reducer.ts ([99261d9](https://github.com/peco11/webmapp-app/commit/99261d911f521dc4f784bd5379f676ba945b8726))
* Update environment configuration ([d281e89](https://github.com/peco11/webmapp-app/commit/d281e89afd6f1434654cd94242d8bdaa6d484bbb))
* Update environment configuration ([d0caed0](https://github.com/peco11/webmapp-app/commit/d0caed00aee781d84d05dc87e06ae9597d0afb38))
* Update environment configuration ([b49a8dc](https://github.com/peco11/webmapp-app/commit/b49a8dc00e0dbf189fcc6490b49a9698de1e2151))
* Update environment variables in gulpfile.js ([aaf7884](https://github.com/peco11/webmapp-app/commit/aaf7884ad73674644d4154f282d1bfe28be48a1a))
* Update form component and save service oc: 3025 ([8b10d36](https://github.com/peco11/webmapp-app/commit/8b10d368098f6f91bff4e31f94013d5cf01cb0d7))
* Update form component and waypoint detail page styles id: 2213 ([c6985b6](https://github.com/peco11/webmapp-app/commit/c6985b674bd8d63820e60a660ae59cb2166a7421))
* Update form component template ([7f08637](https://github.com/peco11/webmapp-app/commit/7f086370a2a1acc24bf6a72dd0efcfd2c4e90529))
* Update form component template and styles id:2141 ([33fd91b](https://github.com/peco11/webmapp-app/commit/33fd91bc12339b8171e9ff8beae12c726b974949))
* Update form.component.html id: 2142 ([627b820](https://github.com/peco11/webmapp-app/commit/627b820cc4601f34dfbee9bd34f2c55af286d923))
* Update form.component.ts and save.service.ts ([e6c803c](https://github.com/peco11/webmapp-app/commit/e6c803cc60d2d3270799799666c8f0226bc62428))
* Update form.component.ts and waypointdetail.page.html ([9bdca7a](https://github.com/peco11/webmapp-app/commit/9bdca7a5cec308476f388f48beddbbfca584d236))
* Update geohubId and apiCarg in environment.ts ([227e24d](https://github.com/peco11/webmapp-app/commit/227e24d1958250bf29f116137e59b4d061169782))
* Update geohubId in environment.ts ([884e8bf](https://github.com/peco11/webmapp-app/commit/884e8bfba7607463103d580afa8c31a34328ee82))
* Update geolocation and geoutils services ([044745a](https://github.com/peco11/webmapp-app/commit/044745add6f104e3cb18050a8750b553caca66b7))
* Update geolocation.ts ([ae181cf](https://github.com/peco11/webmapp-app/commit/ae181cfae5a8e1b95eb42478d62c865cce96b09a))
* Update global.scss ([d52a5c2](https://github.com/peco11/webmapp-app/commit/d52a5c2762e9f0e192be9b7f2db0477eb0da92a4))
* Update home page styling and deployment commands ([7c925ae](https://github.com/peco11/webmapp-app/commit/7c925aeae05c42bf3c2c39bff890dffa3be5c61f))
* Update home page styling st:2242 ([c5c2129](https://github.com/peco11/webmapp-app/commit/c5c21291f077eab1903be3b9aeb2b27e65ceaaa2))
* Update home.page.ts oc:2579 ([a3f36bb](https://github.com/peco11/webmapp-app/commit/a3f36bbd4c6b294b45bbf42c559e621f7ce55051))
* Update imports in ConfigService ([525d4d3](https://github.com/peco11/webmapp-app/commit/525d4d3c32fddad647bb6efaffb34a30682822d2))
* Update localization files for English, French, and Italian with new translations and additions. Fix typo in "Salking" to "Walking". Add new terms like "Asphalt", "Bitumenduro", "Onoff", "Real dirt", and "Bar". ([#21](https://github.com/peco11/webmapp-app/issues/21)) ([daccd32](https://github.com/peco11/webmapp-app/commit/daccd3273c5f187d042e681ecaf9a3c5f292f6f3))
* Update map page HTML and TypeScript files oc:1932,1925 ([5f6716b](https://github.com/peco11/webmapp-app/commit/5f6716bc35f5a6ab919af9cbe5107733537bf79a))
* Update map page template and component oc:3636 ([ec64917](https://github.com/peco11/webmapp-app/commit/ec64917012fa5cdc33fc7ab845f8c6c76675dfff))
* Update map.effects.ts ([51f5b9d](https://github.com/peco11/webmapp-app/commit/51f5b9d6927138b423aaed346bb082c34ac90682))
* Update map.page.html ([3444622](https://github.com/peco11/webmapp-app/commit/3444622d2c97920938314555826aa32ed70a7746))
* Update map.page.html oc:2835 ([c7de296](https://github.com/peco11/webmapp-app/commit/c7de2968dcad27fe32ceb36f392738debc7dc521))
* update min sdk ([84de014](https://github.com/peco11/webmapp-app/commit/84de0147c564e0acb38e048f11146efe9088f07b))
* Update minSdkVersion in Android platform ([59ab2b5](https://github.com/peco11/webmapp-app/commit/59ab2b5ee8f1127ab1e28f411e0483ad75fc7b6d))
* Update modal-save.component.html oc: 3043 ([fc1d0cc](https://github.com/peco11/webmapp-app/commit/fc1d0cc334e641b2a4cb15e9c974228e8ae12342))
* Update modal-waypoint-save.component.html oc: 3938 ([#54](https://github.com/peco11/webmapp-app/issues/54)) ([df305e5](https://github.com/peco11/webmapp-app/commit/df305e5494dae42e4e169431d13c2c0c7f1c4720))
* Update package version during instance creation and build ([9d32a37](https://github.com/peco11/webmapp-app/commit/9d32a3727b4881c8b1d5d8a778acb5761c4a4dad))
* Update package version to 2.1.51 ([c2f8753](https://github.com/peco11/webmapp-app/commit/c2f8753f1a4073d4e7f18e9582fe94ea097cff65))
* Update photo handling in trackdetail and waypointdetail pages ([e52109f](https://github.com/peco11/webmapp-app/commit/e52109f9a5677ad382341a201c19145e8e676126))
* Update profile page ([086ec4a](https://github.com/peco11/webmapp-app/commit/086ec4adc23f484c537a0a98c5254c950c34856f))
* Update profile page with delete account functionality oc: 4117 ([#55](https://github.com/peco11/webmapp-app/issues/55)) ([2e04e76](https://github.com/peco11/webmapp-app/commit/2e04e767964e14ad331c32814aa1b2bcd054a74d))
* Update profile routing and module ([9a17ccc](https://github.com/peco11/webmapp-app/commit/9a17cccfaad17606c794b8d3f777d0cc78b0a624))
* Update register page and save service ([2f4b180](https://github.com/peco11/webmapp-app/commit/2f4b180000a382ecab1e6613331849c4febdee97))
* Update register page UI oc: 4103 ([#53](https://github.com/peco11/webmapp-app/issues/53)) ([72f16d8](https://github.com/peco11/webmapp-app/commit/72f16d847d63bb77618483188972c3d6832d4e57))
* Update RegisterPage component ([5adfee4](https://github.com/peco11/webmapp-app/commit/5adfee40f3844088841c6a066c2d0479c1a5454f))
* Update release_please.yml workflow ([aea66d5](https://github.com/peco11/webmapp-app/commit/aea66d5d00442ff82fe01f325d50968332174c21))
* Update release_please.yml workflow ([76af493](https://github.com/peco11/webmapp-app/commit/76af493db8d7159c357a1a8c4edf9826cf1d0ac1))
* Update submodules in .gitmodules file ([5fe1d74](https://github.com/peco11/webmapp-app/commit/5fe1d74fa4723b595b8623efb5ac52cf1d6c0777))
* Update subproject ([74b7a5a](https://github.com/peco11/webmapp-app/commit/74b7a5a89acd495d2f1071d1c9eb69643ec60044))
* Update subproject ([24e4ce6](https://github.com/peco11/webmapp-app/commit/24e4ce67785dbc9935394d3e410d4c484e2c9ec0))
* Update subproject ([90f54ea](https://github.com/peco11/webmapp-app/commit/90f54ea75312b3766cbc6bd320f4b3ce40f4c2d8))
* Update subproject commit reference ([b631756](https://github.com/peco11/webmapp-app/commit/b6317563234041bbf7ee4c5a111796af173cc883))
* Update subproject commit reference ([e8fee34](https://github.com/peco11/webmapp-app/commit/e8fee34a17816d326531734c4f0d2fe66ec0828c))
* Update subproject dependencies ([4a40266](https://github.com/peco11/webmapp-app/commit/4a402660745b47f4405f0c058f39e606cf6ec68e))
* Update subproject with changes to use SKU instead of ID in app configuration. Fix issues related to missing app ID oc: 4170 ([#51](https://github.com/peco11/webmapp-app/issues/51)) ([c03b4c5](https://github.com/peco11/webmapp-app/commit/c03b4c5f98ffa0c3b866376bc28acb3e0a461625))
* Update track-properties and map.page.html ([97dc1d6](https://github.com/peco11/webmapp-app/commit/97dc1d6542f7c91d32e9e0a87188492843ea0283))
* Update trackdetail page template and component ([4ff483f](https://github.com/peco11/webmapp-app/commit/4ff483ff526874813bc3c7a4851b70a0b82996fe))
* Update trackdetail.page.ts to fix photo URLs and descriptions ([08ca4b1](https://github.com/peco11/webmapp-app/commit/08ca4b10207f678934fb74a3ac7e6d6c58ed99a8))
* Update version object in gulpfile.js ([d865f5d](https://github.com/peco11/webmapp-app/commit/d865f5d6b10697e698268b50f212d4d70f2ead3a))

## [2.12.18](https://github.com/webmappsrl/webmapp-app/compare/v2.12.17...v2.12.18) (2024-12-12)


### Miscellaneous

* Refactor photo handling in trackdetail and waypointdetail pages ([3a6bf14](https://github.com/webmappsrl/webmapp-app/commit/3a6bf142e4a666cd8ab17d4ad4f36e7340519493))
* Update photo handling in trackdetail and waypointdetail pages ([e52109f](https://github.com/webmappsrl/webmapp-app/commit/e52109f9a5677ad382341a201c19145e8e676126))
* Update trackdetail.page.ts to fix photo URLs and descriptions ([08ca4b1](https://github.com/webmappsrl/webmapp-app/commit/08ca4b10207f678934fb74a3ac7e6d6c58ed99a8))

## [2.12.17](https://github.com/webmappsrl/webmapp-app/compare/v2.12.16...v2.12.17) (2024-12-06)


### Miscellaneous

* Add subproject commit 493779ecb1d24800a5ba0016a89d20ea5b9c82aa to wm-types ([dbcd331](https://github.com/webmappsrl/webmapp-app/commit/dbcd3317f7386613c4b92fa5b7feea9532cbe956))
* Add unique photos to waypoint and track detail pages oc:4433 ([1e9d598](https://github.com/webmappsrl/webmapp-app/commit/1e9d5988d825ecc60142761051971977f1142b93))
* **poi-properties:** add excerpt display to properties oc: 4183 ([#66](https://github.com/webmappsrl/webmapp-app/issues/66)) ([d5a9e47](https://github.com/webmappsrl/webmapp-app/commit/d5a9e47af5d59467a2eeffd6d40881c0306da72a))
* Update form.component.ts and waypointdetail.page.html ([9bdca7a](https://github.com/webmappsrl/webmapp-app/commit/9bdca7a5cec308476f388f48beddbbfca584d236))
* Update release_please.yml workflow ([aea66d5](https://github.com/webmappsrl/webmapp-app/commit/aea66d5d00442ff82fe01f325d50968332174c21))
* Update release_please.yml workflow ([76af493](https://github.com/webmappsrl/webmapp-app/commit/76af493db8d7159c357a1a8c4edf9826cf1d0ac1))
* Update submodules in .gitmodules file ([5fe1d74](https://github.com/webmappsrl/webmapp-app/commit/5fe1d74fa4723b595b8623efb5ac52cf1d6c0777))

## [2.12.16](https://github.com/webmappsrl/webmapp-app/compare/v2.12.15...v2.12.16) (2024-11-01)


### Miscellaneous

* make release ([808ee25](https://github.com/webmappsrl/webmapp-app/commit/808ee257c904af326fb38dc69a532fcbd8fb5527))

## [2.12.15](https://github.com/webmappsrl/webmapp-app/compare/v2.12.14...v2.12.15) (2024-10-31)


### Bug Fixes

* add condition to onlyTitle method in navigation oc: 4211 ([37ddb19](https://github.com/webmappsrl/webmapp-app/commit/37ddb19f1ebe69cbf0ba46194df6fd6dcbc98e0c))


### Miscellaneous

* Update modal-waypoint-save.component.html oc: 3938 ([#54](https://github.com/webmappsrl/webmapp-app/issues/54)) ([df305e5](https://github.com/webmappsrl/webmapp-app/commit/df305e5494dae42e4e169431d13c2c0c7f1c4720))
* Update profile page with delete account functionality oc: 4117 ([#55](https://github.com/webmappsrl/webmapp-app/issues/55)) ([2e04e76](https://github.com/webmappsrl/webmapp-app/commit/2e04e767964e14ad331c32814aa1b2bcd054a74d))
* Update register page UI oc: 4103 ([#53](https://github.com/webmappsrl/webmapp-app/issues/53)) ([72f16d8](https://github.com/webmappsrl/webmapp-app/commit/72f16d847d63bb77618483188972c3d6832d4e57))

## [2.12.14](https://github.com/webmappsrl/webmapp-app/compare/v2.12.13...v2.12.14) (2024-10-25)


### Miscellaneous

* Add geolocation service to home and map pages oc: 4113 ([37903a7](https://github.com/webmappsrl/webmapp-app/commit/37903a78f46f1a95f9ddccc1d370615609f11ab7))

## [2.12.13](https://github.com/webmappsrl/webmapp-app/compare/v2.12.12...v2.12.13) (2024-10-25)


### Miscellaneous

* Add 'cai_scale' translation to Italian language file oc: 4097 ([221acd9](https://github.com/webmappsrl/webmapp-app/commit/221acd97ab02b14c8bd2e85363fdc1c0056d3ea5))
* **i18n:** Remove unused translation key "cai_scale" ([127ba20](https://github.com/webmappsrl/webmapp-app/commit/127ba20c21da694c651506d16e907333cbb9116c))
* Remove unnecessary code for overlay URL and reorganize lifecyc… ([#49](https://github.com/webmappsrl/webmapp-app/issues/49)) ([c9d25f5](https://github.com/webmappsrl/webmapp-app/commit/c9d25f54c1cfa5216ca8687e11a7bbcdd798dbe8))
* Update subproject with changes to use SKU instead of ID in app configuration. Fix issues related to missing app ID oc: 4170 ([#51](https://github.com/webmappsrl/webmapp-app/issues/51)) ([c03b4c5](https://github.com/webmappsrl/webmapp-app/commit/c03b4c5f98ffa0c3b866376bc28acb3e0a461625))

## [2.12.12](https://github.com/webmappsrl/webmapp-app/compare/v2.12.11...v2.12.12) (2024-09-27)


### Miscellaneous

* change environment ([42fcb8b](https://github.com/webmappsrl/webmapp-app/commit/42fcb8b5645fc686197197a81fa580fd9ea2c3db))

## [2.12.11](https://github.com/webmappsrl/webmapp-app/compare/v2.12.10...v2.12.11) (2024-09-19)


### Miscellaneous

* Comment out console.log statements and unused code ([88c6830](https://github.com/webmappsrl/webmapp-app/commit/88c683017ac3076fb1419c0271084f297f29e25d))
* Remove android.permission.MANAGE_EXTERNAL_STORAGE from permissions array ([786cfec](https://github.com/webmappsrl/webmapp-app/commit/786cfec343d07a51ac123b647e91359ff995a5ea))
* Remove unnecessary code and fix condition in MapPage ([db89915](https://github.com/webmappsrl/webmapp-app/commit/db899154bf3c0e1a67b753d3da9cf8242079b599))

## [2.12.10](https://github.com/webmappsrl/webmapp-app/compare/v2.12.9...v2.12.10) (2024-09-17)


### Miscellaneous

* Update Android platform and remove storage permission request oc:3969 ([7e3845f](https://github.com/webmappsrl/webmapp-app/commit/7e3845f4f7824ff2759f119e9be368368a82b0f8))
* Update dependencies and build configuration ([1292745](https://github.com/webmappsrl/webmapp-app/commit/12927457694258da5d887f49506c6169dd67b19d))

## [2.12.9](https://github.com/webmappsrl/webmapp-app/compare/v2.12.8...v2.12.9) (2024-09-13)


### Miscellaneous

* Update Android platform versions in gulpfile.js ([51f230e](https://github.com/webmappsrl/webmapp-app/commit/51f230e475755b9759fea53b7158a18bc38e3c84))

## [2.12.8](https://github.com/webmappsrl/webmapp-app/compare/v2.12.7...v2.12.8) (2024-09-13)


### Miscellaneous

* Add API endpoint for OSM2CAI ([f3579b2](https://github.com/webmappsrl/webmapp-app/commit/f3579b21db0f2fc8bb65b0fcb5934803792a056c))
* Remove unused saveFileCallback method ([2683dd3](https://github.com/webmappsrl/webmapp-app/commit/2683dd38097b41809216e936ee8faa3cb973b94b))

## [2.12.7](https://github.com/webmappsrl/webmapp-app/compare/v2.12.6...v2.12.7) (2024-09-13)


### Miscellaneous

* Add file saving functionality and permission handling ([b3ba923](https://github.com/webmappsrl/webmapp-app/commit/b3ba923a609e6c900954e427aebacb431df21452))
* Add new deployment command for caiparma project ([73728cc](https://github.com/webmappsrl/webmapp-app/commit/73728cc4db10656206c49a549e05fa3b8b69527b))
* Add surge-osm2cai script to deploy the project to OSM2CAI domain ([ea9c699](https://github.com/webmappsrl/webmapp-app/commit/ea9c69953b8dad3258d32011567de0249ff7863d))
* **map:** add track property to wm-track-download-urls component ([be32e9d](https://github.com/webmappsrl/webmapp-app/commit/be32e9d8fb01bd7c71cdcbd535f6fb4a69ea84ed))

## [2.12.6](https://github.com/webmappsrl/webmapp-app/compare/v2.12.5...v2.12.6) (2024-09-12)


### Miscellaneous

* Update app.module.ts and settings.component.html/ts ([00614b5](https://github.com/webmappsrl/webmapp-app/commit/00614b59331dd548b52d71987900b5f9bea2962b))
* Update environment configuration ([d281e89](https://github.com/webmappsrl/webmapp-app/commit/d281e89afd6f1434654cd94242d8bdaa6d484bbb))
* Update environment variables in gulpfile.js ([aaf7884](https://github.com/webmappsrl/webmapp-app/commit/aaf7884ad73674644d4154f282d1bfe28be48a1a))
* Update geohubId in environment.ts ([884e8bf](https://github.com/webmappsrl/webmapp-app/commit/884e8bfba7607463103d580afa8c31a34328ee82))
* Update map.effects.ts ([51f5b9d](https://github.com/webmappsrl/webmapp-app/commit/51f5b9d6927138b423aaed346bb082c34ac90682))
* Update package version during instance creation and build ([9d32a37](https://github.com/webmappsrl/webmapp-app/commit/9d32a3727b4881c8b1d5d8a778acb5761c4a4dad))
* Update subproject dependencies ([4a40266](https://github.com/webmappsrl/webmapp-app/commit/4a402660745b47f4405f0c058f39e606cf6ec68e))

## [2.12.5](https://github.com/webmappsrl/webmapp-app/compare/v2.12.4...v2.12.5) (2024-09-09)


### Bug Fixes

* Fix error handling in app.component.ts ([99d2e90](https://github.com/webmappsrl/webmapp-app/commit/99d2e90fc976f2b292d7574b81eddac2ff226d5a))
* Remove duplicate elasticApi URL ([013cd07](https://github.com/webmappsrl/webmapp-app/commit/013cd07999cf871d72c8bae95732cc49e3efac1d))


### Miscellaneous

* Remove login component ([6b13542](https://github.com/webmappsrl/webmapp-app/commit/6b13542ed1e18fbbcf6652ae1a6172be8d1df44f))
* Remove registeruser page and related components ([0171acf](https://github.com/webmappsrl/webmapp-app/commit/0171acfd1d8c8fb687c793373050d7a3bdd69d0c))
* Remove unnecessary imports and code ([977de12](https://github.com/webmappsrl/webmapp-app/commit/977de12967921df96119b984013c46f50276a3ac))
* remove unused code files (move to wm-core) oc: 3864 ([d1b5710](https://github.com/webmappsrl/webmapp-app/commit/d1b5710e5c48da8d17bc8772d87f0822fb7e3235))
* Remove unused code in GeohubService ([ea9fc65](https://github.com/webmappsrl/webmapp-app/commit/ea9fc655f6d02d53ed477560b637e5b9d7972350))
* Update app.module.ts ([dfa20a3](https://github.com/webmappsrl/webmapp-app/commit/dfa20a3f91afe54d1c5bf8769b51a1b65b054efa))
* Update app.module.ts ([2aae140](https://github.com/webmappsrl/webmapp-app/commit/2aae1400043b3eb7e72fb85df12db8ca03ae5f12))
* Update environment configuration ([d0caed0](https://github.com/webmappsrl/webmapp-app/commit/d0caed00aee781d84d05dc87e06ae9597d0afb38))
* Update environment configuration ([b49a8dc](https://github.com/webmappsrl/webmapp-app/commit/b49a8dc00e0dbf189fcc6490b49a9698de1e2151))
* Update imports in ConfigService ([525d4d3](https://github.com/webmappsrl/webmapp-app/commit/525d4d3c32fddad647bb6efaffb34a30682822d2))
* Update profile page ([086ec4a](https://github.com/webmappsrl/webmapp-app/commit/086ec4adc23f484c537a0a98c5254c950c34856f))
* Update profile routing and module ([9a17ccc](https://github.com/webmappsrl/webmapp-app/commit/9a17cccfaad17606c794b8d3f777d0cc78b0a624))
* Update subproject ([74b7a5a](https://github.com/webmappsrl/webmapp-app/commit/74b7a5a89acd495d2f1071d1c9eb69643ec60044))

## [2.12.4](https://github.com/webmappsrl/webmapp-app/compare/v2.12.3...v2.12.4) (2024-08-28)


### Miscellaneous

* Refactor shareTrackByID method in ShareService oc: 3850 ([#36](https://github.com/webmappsrl/webmapp-app/issues/36)) ([6a060df](https://github.com/webmappsrl/webmapp-app/commit/6a060df97401f53b9ee63cd261af0da3733a4aa7))

## [2.12.3](https://github.com/webmappsrl/webmapp-app/compare/v2.12.2...v2.12.3) (2024-08-26)


### Bug Fixes

* Add share button for points of interest oc: 3789 ([8b11848](https://github.com/webmappsrl/webmapp-app/commit/8b11848967926cf66c5f5b83a71e059c014692a1))
* Update map.page.ts ([b631756](https://github.com/webmappsrl/webmapp-app/commit/b6317563234041bbf7ee4c5a111796af173cc883))


### Miscellaneous

* Update deploy-to-web paths in package.json ([ec49915](https://github.com/webmappsrl/webmapp-app/commit/ec49915a15da0f110c32e0686d286779cf309be7))
* Update subproject commit reference ([b631756](https://github.com/webmappsrl/webmapp-app/commit/b6317563234041bbf7ee4c5a111796af173cc883))

## [2.12.2](https://github.com/webmappsrl/webmapp-app/compare/v2.12.1...v2.12.2) (2024-08-09)


### Miscellaneous

* Add referrer field to login request ([e953006](https://github.com/webmappsrl/webmapp-app/commit/e95300641080b3e61a44c61373503ebd4844f971))
* Update geohubId and apiCarg in environment.ts ([227e24d](https://github.com/webmappsrl/webmapp-app/commit/227e24d1958250bf29f116137e59b4d061169782))
* Update map page template and component oc:3636 ([ec64917](https://github.com/webmappsrl/webmapp-app/commit/ec64917012fa5cdc33fc7ab845f8c6c76675dfff))

## [2.12.1](https://github.com/webmappsrl/webmapp-app/compare/v2.12.0...v2.12.1) (2024-08-01)


### Bug Fixes

* add 'parcapuane' map to ConfigService ([3c4bb72](https://github.com/webmappsrl/webmapp-app/commit/3c4bb7275423421177ec29f30a91155940074844))
* gestion sync ugc OC: 3717 ([f2cdd81](https://github.com/webmappsrl/webmapp-app/commit/f2cdd810b56fc2287c868d7f20de6cbacf9dd1bd))


### Miscellaneous

* **offline:** OFFLINE TRACK oc:2698 ([4b6062d](https://github.com/webmappsrl/webmapp-app/commit/4b6062d8e475cf9526427202212c6045824201c8))

## [2.12.0](https://github.com/webmappsrl/webmapp-app/compare/v2.11.5...v2.12.0) (2024-07-25)


### Features

* Enhance settings component with memory reset functionality ([694aa22](https://github.com/webmappsrl/webmapp-app/commit/694aa22185b667244addf47a9c147c60f4595636))
* Refactored download service and map components.  oc: 3685 ([f576e33](https://github.com/webmappsrl/webmapp-app/commit/f576e33bdd428a2765260f12dca0f549697a7cc2))

## [2.11.5](https://github.com/webmappsrl/webmapp-app/compare/v2.11.4...v2.11.5) (2024-07-01)


### Bug Fixes

* Register page privacy link modal  oc:3568 ([ed9e5aa](https://github.com/webmappsrl/webmapp-app/commit/ed9e5aa7c925b9945d0077c308f9c0db4c9d77b0))

## [2.11.4](https://github.com/webmappsrl/webmapp-app/compare/v2.11.3...v2.11.4) (2024-06-24)


### Bug Fixes

* css ion-select oc: 3522 ([b1a13eb](https://github.com/webmappsrl/webmapp-app/commit/b1a13eb52bbcdf8c994544617af185f9fb4232e7))

## [2.11.3](https://github.com/webmappsrl/webmapp-app/compare/v2.11.2...v2.11.3) (2024-06-17)


### Bug Fixes

* Change directory for writing file in TrackdetailPage oc:3422 ([63b6b22](https://github.com/webmappsrl/webmapp-app/commit/63b6b228ca33d338898baf39dd710dfe6dcfb579))
* Refactor object merging in SaveService oc:3418 ([79b3e73](https://github.com/webmappsrl/webmapp-app/commit/79b3e7300ee0950ad03073d4a7ced6285a4db3de))


### Miscellaneous

* Remove unnecessary code for handling location permission denial ([479d5a5](https://github.com/webmappsrl/webmapp-app/commit/479d5a50953903333106b167a06e02499dca8a1b))

## [2.11.2](https://github.com/webmappsrl/webmapp-app/compare/v2.11.1...v2.11.2) (2024-05-31)


### Miscellaneous

* add privacy link to settings component ([#24](https://github.com/webmappsrl/webmapp-app/issues/24)) ([d6f4d00](https://github.com/webmappsrl/webmapp-app/commit/d6f4d00a7860e7556e1cab2a41dde3e21eff57c7))
* Refactor SaveService to improve code readability oc: 3418 ([8a37315](https://github.com/webmappsrl/webmapp-app/commit/8a37315cf68d6b56e3d3dd7a6547b93e3ea239ed))
* Remove unused imports and variables in downloaded-tracks-box.component.ts ([2ce5a7d](https://github.com/webmappsrl/webmapp-app/commit/2ce5a7d4fe0813a16567580cea3ff0a1878e3443))
* Update geolocation.ts ([ae181cf](https://github.com/webmappsrl/webmapp-app/commit/ae181cfae5a8e1b95eb42478d62c865cce96b09a))
* Update map.page.html oc:2835 ([c7de296](https://github.com/webmappsrl/webmapp-app/commit/c7de2968dcad27fe32ceb36f392738debc7dc521))

## [2.11.1](https://github.com/webmappsrl/webmapp-app/compare/v2.11.0...v2.11.1) (2024-05-15)


### Miscellaneous

* Update localization files for English, French, and Italian with new translations and additions. Fix typo in "Salking" to "Walking". Add new terms like "Asphalt", "Bitumenduro", "Onoff", "Real dirt", and "Bar". ([#21](https://github.com/webmappsrl/webmapp-app/issues/21)) ([daccd32](https://github.com/webmappsrl/webmapp-app/commit/daccd3273c5f187d042e681ecaf9a3c5f292f6f3))

## [2.11.0](https://github.com/webmappsrl/webmapp-app/compare/v2.10.0...v2.11.0) (2024-05-06)


### Features

* **i18n:** Add Italian translation for new waypoint message ([afc9e6d](https://github.com/webmappsrl/webmapp-app/commit/afc9e6d44301f78abf05f40469f01222ac762516))
* **save.service:** remove console.log statement ([43a29c7](https://github.com/webmappsrl/webmapp-app/commit/43a29c74d2a31c0866ef8e0ba5c1bd59d2030099))
* Update  to new geoserver ([396ccc2](https://github.com/webmappsrl/webmapp-app/commit/396ccc2f4f0d699e665c8b6fa77c56ead9febe7f))


### Bug Fixes

* Add take(1) operator to app.component.ts oc:3023 ([a30d3ab](https://github.com/webmappsrl/webmapp-app/commit/a30d3abe28ec95a81186eedcb54d1da36e1ca052))
* check if conf exists before accessing flow_line_quote_show property ([3c25dd3](https://github.com/webmappsrl/webmapp-app/commit/3c25dd322382df35fd089668b82a9db62846925a))
* **save.service:** fix null check for track coordinates ([10b4f68](https://github.com/webmappsrl/webmapp-app/commit/10b4f68567ad12258a03308641dc1c5ddd2d2cd7))


### Miscellaneous

* Remove unnecessary code in setPhotoData method ([95be7fa](https://github.com/webmappsrl/webmapp-app/commit/95be7fa3514c2a59cec046c76b1602cf5a88f833))
* Update form component and save service oc: 3025 ([8b10d36](https://github.com/webmappsrl/webmapp-app/commit/8b10d368098f6f91bff4e31f94013d5cf01cb0d7))
* Update modal-save.component.html oc: 3043 ([fc1d0cc](https://github.com/webmappsrl/webmapp-app/commit/fc1d0cc334e641b2a4cb15e9c974228e8ae12342))
* Update subproject ([24e4ce6](https://github.com/webmappsrl/webmapp-app/commit/24e4ce67785dbc9935394d3e410d4c484e2c9ec0))

## [2.10.0](https://github.com/webmappsrl/webmapp-app/compare/v2.9.2...v3.0.0) (2024-04-23)


### ⚠ BREAKING CHANGES

* **config:** The private variable _geohubAppId has been added to store the selected geohubAppId value.

### Features

* **config:** add dynamic geohubAppId selection ([f4054da](https://github.com/webmappsrl/webmapp-app/commit/f4054da50b9fa48c85c8cf13e53950b9e2ed1166))
* **i18n:** Add download options for GPX, KML, and GEOJSON tracks ([8484473](https://github.com/webmappsrl/webmapp-app/commit/848447346d807d80f5c9bc48200c42470b2749fa))


### Miscellaneous

* Add null check before resetting rotation in goToTrack method ([b0350f8](https://github.com/webmappsrl/webmapp-app/commit/b0350f8293ad13538a00f22a1ee26a5ee314fcd7))
* **modal-success:** Update waypoint success message ([13d68ba](https://github.com/webmappsrl/webmapp-app/commit/13d68bae1667a26aff3b52b93f56520a7f966261))
* Update app.component.ts and tabs-routing.module.ts ([d97e02a](https://github.com/webmappsrl/webmapp-app/commit/d97e02a1500fd761f3e1e284c52fca338c99e465))
* Update track-properties and map.page.html ([97dc1d6](https://github.com/webmappsrl/webmapp-app/commit/97dc1d6542f7c91d32e9e0a87188492843ea0283))

## [2.9.2](https://github.com/webmappsrl/webmapp-app/compare/v2.9.1...v2.9.2) (2024-03-12)


### Bug Fixes

* Add gulp-through2 package ([a971689](https://github.com/webmappsrl/webmapp-app/commit/a9716894c7179a731b363bb4fab4d72bb5c241c0))
* Add permissions to AndroidManifest.xml ([e961164](https://github.com/webmappsrl/webmapp-app/commit/e961164108ccd0a8b2963a9978eb5b75d550e17d))
* **image-gallery.component:** scrolling fixed ([ae46a2d](https://github.com/webmappsrl/webmapp-app/commit/ae46a2d9f9efc7c6471dfebd3d62c94c98508493))
* **track-properties.component:** activity tab fixed ([ae46a2d](https://github.com/webmappsrl/webmapp-app/commit/ae46a2d9f9efc7c6471dfebd3d62c94c98508493))


### Miscellaneous

* Update map.page.html ([3444622](https://github.com/webmappsrl/webmapp-app/commit/3444622d2c97920938314555826aa32ed70a7746))
* Update subproject ([90f54ea](https://github.com/webmappsrl/webmapp-app/commit/90f54ea75312b3766cbc6bd320f4b3ce40f4c2d8))

## [2.9.1](https://github.com/webmappsrl/webmapp-app/compare/v2.9.0...v2.9.1) (2024-02-29)


### Miscellaneous

* Remove unnecessary code and fix formatting in modal-success component ([546a2b2](https://github.com/webmappsrl/webmapp-app/commit/546a2b20a6b94835a5765aff9584125bb0984122))
* Update geolocation and geoutils services ([044745a](https://github.com/webmappsrl/webmapp-app/commit/044745add6f104e3cb18050a8750b553caca66b7))
* Update register page and save service ([2f4b180](https://github.com/webmappsrl/webmapp-app/commit/2f4b180000a382ecab1e6613331849c4febdee97))
* Update trackdetail page template and component ([4ff483f](https://github.com/webmappsrl/webmapp-app/commit/4ff483ff526874813bc3c7a4851b70a0b82996fe))

## [2.9.0](https://github.com/webmappsrl/webmapp-app/compare/v2.8.1...v2.9.0) (2024-02-27)


### Features

* **i18n:** Add translations for new points of interest ([d3a9b09](https://github.com/webmappsrl/webmapp-app/commit/d3a9b09cdbd7c1eb492824070ef0dff6449958eb))
* **map:** add support for multiple POI types in info header oc:2583 ([4b2a95b](https://github.com/webmappsrl/webmapp-app/commit/4b2a95b57391f21e52932016d88b5b40a980db4d))


### Miscellaneous

* Update form component template ([7f08637](https://github.com/webmappsrl/webmapp-app/commit/7f086370a2a1acc24bf6a72dd0efcfd2c4e90529))
* Update form.component.ts and save.service.ts ([e6c803c](https://github.com/webmappsrl/webmapp-app/commit/e6c803cc60d2d3270799799666c8f0226bc62428))
* Update home.page.ts oc:2579 ([a3f36bb](https://github.com/webmappsrl/webmapp-app/commit/a3f36bbd4c6b294b45bbf42c559e621f7ce55051))
* Update RegisterPage component ([5adfee4](https://github.com/webmappsrl/webmapp-app/commit/5adfee40f3844088841c6a066c2d0479c1a5454f))

## [2.8.1](https://github.com/webmappsrl/webmapp-app/compare/v2.8.0...v2.8.1) (2024-02-20)


### Miscellaneous

* **deploy-commands:** updated ([6278031](https://github.com/webmappsrl/webmapp-app/commit/627803168adc54acb2132c1fe25d7008f4b57831))
* enable save to gallery ([a946677](https://github.com/webmappsrl/webmapp-app/commit/a94667780865bc8e6a4f6f8b3ad996785611fab9))
* **gulpfile:** updated ([5388bab](https://github.com/webmappsrl/webmapp-app/commit/5388babd4ef55ea31c4167408a8c8db5b265f92f))
* Refactor cgeojson-feature.ts ([46f48d4](https://github.com/webmappsrl/webmapp-app/commit/46f48d41434f9bb3556d5a13d4e4bdad9c749486))
* Remove LangService provider from settings and profile components ([1b4b278](https://github.com/webmappsrl/webmapp-app/commit/1b4b278f5d20cb649d183f0de64b0f3e71af1bf2))

## [2.8.0](https://github.com/webmappsrl/webmapp-app/compare/v2.7.0...v2.8.0) (2024-02-12)


### Features

* Replace confPOIFORMS with acquisitionFORM in waypoint modal id:2641 ([dc92106](https://github.com/webmappsrl/webmapp-app/commit/dc92106b6410fd6de6d9f70a744fa61b1f828046))


### Miscellaneous

* add @capacitor-community/keep-awake package ([9b7931c](https://github.com/webmappsrl/webmapp-app/commit/9b7931c67db6352fea938a1c5dd60f59de875609))

## [2.7.0](https://github.com/webmappsrl/webmapp-app/compare/v2.6.1...v2.7.0) (2024-02-07)


### Features

* Add popup functionality to map page ([38b999e](https://github.com/webmappsrl/webmapp-app/commit/38b999efed09cd3e0cf1005e48564b5880491e8e))
* Add release automation workflow ([004bc16](https://github.com/webmappsrl/webmapp-app/commit/004bc16781f50387128c0308fb1fd8df30dec87e))
* Add support for exporting tracks to GeoJSON, KML, and GPX formats id:2214 ([04bf899](https://github.com/webmappsrl/webmapp-app/commit/04bf899d8bf060b049bd8ba17801a414181387fb))
* Enable fullscreen mode for maps in track and waypoint detail pages ([a3a61a3](https://github.com/webmappsrl/webmapp-app/commit/a3a61a3c29bf13d07a4dcbacad0a213f970d996f))
* **home:** add home layer ([5e485df](https://github.com/webmappsrl/webmapp-app/commit/5e485df7bb6082d84dbb4676e47a25893913324e))
* **overlay:** ui deadline:82 ([9251930](https://github.com/webmappsrl/webmapp-app/commit/9251930e99040be43af23f72d2b10174e72e216b))
* **register:** add waypoint button  id:2226 ([34dfade](https://github.com/webmappsrl/webmapp-app/commit/34dfade5d58398ff854d2da061b1c0eb455879b9))
* **social-share:** add configurable text ([7544147](https://github.com/webmappsrl/webmapp-app/commit/75441472c46df96cca8536352b5aa81d2b290054))
* update ([6d55ba5](https://github.com/webmappsrl/webmapp-app/commit/6d55ba58244485a1bf59b1d12a7f6f20b89fe76f))


### Bug Fixes

* **details:** close ([84c088d](https://github.com/webmappsrl/webmapp-app/commit/84c088dcb5d5001a79b1a848181117b9d3ea5969))
* **downloadoffline_has_some_problem:** story 1641 ([89b0c6e](https://github.com/webmappsrl/webmapp-app/commit/89b0c6e97c371004e2d3ef48c0242559dfc95322))
* **geolocation:** fix background geolocation ([52ebf01](https://github.com/webmappsrl/webmapp-app/commit/52ebf0144d3bd8e0a132ba20eafb75bed4b81c86))
* **langs:** now set default langs ([d2cf1c9](https://github.com/webmappsrl/webmapp-app/commit/d2cf1c95575e8fde82c535a993417fa539eafdf8))
* **map:** add current track to record ([fc431f0](https://github.com/webmappsrl/webmapp-app/commit/fc431f0066ad8fa53b848242ed0c7b4d8f38f685))
* **map:** add logic to control layer opacity and open track details ([d33f275](https://github.com/webmappsrl/webmapp-app/commit/d33f275e98aee01a1f650de08460e4e07ed2495f))
* **map:** missed icons ([424c59a](https://github.com/webmappsrl/webmapp-app/commit/424c59a6a09ae712cc55f638dc30d86c694b5749))
* **modal-success:** navigate forward by key ([4ffb840](https://github.com/webmappsrl/webmapp-app/commit/4ffb8409c81d243ce9972cadd43b3d03b152c927))
* **page/home:** remove handling set filter ([cf4a1dc](https://github.com/webmappsrl/webmapp-app/commit/cf4a1dce372c1a38212d779125bd7f4f8b45c8a2))
* **profile_shift:** implements ([#1](https://github.com/webmappsrl/webmapp-app/issues/1)) ([7d55c66](https://github.com/webmappsrl/webmapp-app/commit/7d55c6664d48ab12a4e734aa787b1aa7e5095217))
* **sunc/offline:** fix media sync ([bdc9c40](https://github.com/webmappsrl/webmapp-app/commit/bdc9c40a73df0b984a92bab48713947b8c268cca))
* **sync/offline:** fix tracks&pois sync ([f651b49](https://github.com/webmappsrl/webmapp-app/commit/f651b4970f8b42fe8d46f7e976ade0381010d8b2))
* waypoint button ([c8b19f6](https://github.com/webmappsrl/webmapp-app/commit/c8b19f603e9c040e66e8cf82ee2edb5fb0e9ec6d))


### Miscellaneous

* Add deploy command for motomappa ([0475fc2](https://github.com/webmappsrl/webmapp-app/commit/0475fc20986c1e634d6132daea9e99e639748a9a))
* Add release-please configuration file ([8cf2be7](https://github.com/webmappsrl/webmapp-app/commit/8cf2be7edd248735ff1947c1f988a06848432788))
* **dotenv:** add dotenv ([abba2d1](https://github.com/webmappsrl/webmapp-app/commit/abba2d1661f7f1bc1f999011e4045a0950798e07))
* **inner-component:** add wm core inner components remove useless code ([cacb6e9](https://github.com/webmappsrl/webmapp-app/commit/cacb6e96493554af9f987b33ddd776cae3dffcb9))
* **profile:** add app version ([5f6eea1](https://github.com/webmappsrl/webmapp-app/commit/5f6eea1144821494266eba1c7d767ff62bcb39ed))
* Remove home module and component ([c06592b](https://github.com/webmappsrl/webmapp-app/commit/c06592be228463a113f6eddb91a4b801522d20e3))
* Remove unnecessary code in release_please.yml ([aff70fc](https://github.com/webmappsrl/webmapp-app/commit/aff70fc4b7a92208092fc06b6e8d1c452b82ad7b))
* Remove unnecessary import in home.module.ts ([f92e770](https://github.com/webmappsrl/webmapp-app/commit/f92e7706b8a7565cb4a24846e9cdb67fd37658c4))
* Remove unnecessary ngIf condition in map.page.html id: 2227 ([7251398](https://github.com/webmappsrl/webmapp-app/commit/725139820fbcdda1e74c7daa46c87f30c024f9b7))
* Remove unused code and dependencies in search-bar and home.page components ([c3a2bed](https://github.com/webmappsrl/webmapp-app/commit/c3a2beda6a33089ac1b2bb3d4ca981aa42b085f4))
* Remove unused code in home page ([94834da](https://github.com/webmappsrl/webmapp-app/commit/94834daf3a2c52b2519ceb9ef6466d3bc7fb9292))
* remove useless file ([d74087e](https://github.com/webmappsrl/webmapp-app/commit/d74087e2ba27c6e97217c46da841a8db9dafdb7d))
* Update @dwayneparton/geojson-to-gpx version to ^0.0.30 in package-lock.json ([6c29832](https://github.com/webmappsrl/webmapp-app/commit/6c29832834a9d2146f92a565eac479a73669b8d9))
* Update dependencies and Android platform versions ([6c29832](https://github.com/webmappsrl/webmapp-app/commit/6c29832834a9d2146f92a565eac479a73669b8d9))
* update deploy commands ([7858417](https://github.com/webmappsrl/webmapp-app/commit/78584174c9545cc3e399522cf430147f78684589))
* Update deploy-messages.txt ([1f39225](https://github.com/webmappsrl/webmapp-app/commit/1f392255ecd82065970c35eab8ccca131be14e3f))
* Update deploy-messages.txt and gulpfile.js ([c858d6c](https://github.com/webmappsrl/webmapp-app/commit/c858d6c494125930b38df407f6879c7414763b20))
* Update downloaded-tracks-box.component.scss, home.page.ts, network.service.ts, and netwotk.reducer.ts ([99261d9](https://github.com/webmappsrl/webmapp-app/commit/99261d911f521dc4f784bd5379f676ba945b8726))
* Update form component and waypoint detail page styles id: 2213 ([c6985b6](https://github.com/webmappsrl/webmapp-app/commit/c6985b674bd8d63820e60a660ae59cb2166a7421))
* Update form component template and styles id:2141 ([33fd91b](https://github.com/webmappsrl/webmapp-app/commit/33fd91bc12339b8171e9ff8beae12c726b974949))
* Update form.component.html id: 2142 ([627b820](https://github.com/webmappsrl/webmapp-app/commit/627b820cc4601f34dfbee9bd34f2c55af286d923))
* Update global.scss ([d52a5c2](https://github.com/webmappsrl/webmapp-app/commit/d52a5c2762e9f0e192be9b7f2db0477eb0da92a4))
* Update home page styling and deployment commands ([7c925ae](https://github.com/webmappsrl/webmapp-app/commit/7c925aeae05c42bf3c2c39bff890dffa3be5c61f))
* Update home page styling st:2242 ([c5c2129](https://github.com/webmappsrl/webmapp-app/commit/c5c21291f077eab1903be3b9aeb2b27e65ceaaa2))
* Update map page HTML and TypeScript files oc:1932,1925 ([5f6716b](https://github.com/webmappsrl/webmapp-app/commit/5f6716bc35f5a6ab919af9cbe5107733537bf79a))
* update min sdk ([84de014](https://github.com/webmappsrl/webmapp-app/commit/84de0147c564e0acb38e048f11146efe9088f07b))
* Update minSdkVersion in Android platform ([59ab2b5](https://github.com/webmappsrl/webmapp-app/commit/59ab2b5ee8f1127ab1e28f411e0483ad75fc7b6d))
* Update package version to 2.1.51 ([c2f8753](https://github.com/webmappsrl/webmapp-app/commit/c2f8753f1a4073d4e7f18e9582fe94ea097cff65))
* Update subproject commit reference ([e8fee34](https://github.com/webmappsrl/webmapp-app/commit/e8fee34a17816d326531734c4f0d2fe66ec0828c))
* Update version object in gulpfile.js ([d865f5d](https://github.com/webmappsrl/webmapp-app/commit/d865f5d6b10697e698268b50f212d4d70f2ead3a))

## [2.6.1](https://github.com/webmappsrl/webmapp-app/compare/v2.6.0...v2.6.1) (2024-02-05)


### Miscellaneous

* Add deploy command for motomappa ([0475fc2](https://github.com/webmappsrl/webmapp-app/commit/0475fc20986c1e634d6132daea9e99e639748a9a))
* Remove unused code in home page ([94834da](https://github.com/webmappsrl/webmapp-app/commit/94834daf3a2c52b2519ceb9ef6466d3bc7fb9292))
* Update @dwayneparton/geojson-to-gpx version to ^0.0.30 in package-lock.json ([6c29832](https://github.com/webmappsrl/webmapp-app/commit/6c29832834a9d2146f92a565eac479a73669b8d9))
* Update dependencies and Android platform versions ([6c29832](https://github.com/webmappsrl/webmapp-app/commit/6c29832834a9d2146f92a565eac479a73669b8d9))
* Update downloaded-tracks-box.component.scss, home.page.ts, network.service.ts, and netwotk.reducer.ts ([99261d9](https://github.com/webmappsrl/webmapp-app/commit/99261d911f521dc4f784bd5379f676ba945b8726))
* Update global.scss ([d52a5c2](https://github.com/webmappsrl/webmapp-app/commit/d52a5c2762e9f0e192be9b7f2db0477eb0da92a4))
* Update home page styling and deployment commands ([7c925ae](https://github.com/webmappsrl/webmapp-app/commit/7c925aeae05c42bf3c2c39bff890dffa3be5c61f))
* Update home page styling st:2242 ([c5c2129](https://github.com/webmappsrl/webmapp-app/commit/c5c21291f077eab1903be3b9aeb2b27e65ceaaa2))

## [2.6.1](https://github.com/webmappsrl/webmapp-app/compare/v2.6.0...v2.6.1) (2024-01-11)


### Miscellaneous

* Add deploy command for motomappa ([0475fc2](https://github.com/webmappsrl/webmapp-app/commit/0475fc20986c1e634d6132daea9e99e639748a9a))
* Remove unused code in home page ([94834da](https://github.com/webmappsrl/webmapp-app/commit/94834daf3a2c52b2519ceb9ef6466d3bc7fb9292))
* Update @dwayneparton/geojson-to-gpx version to ^0.0.30 in package-lock.json ([6c29832](https://github.com/webmappsrl/webmapp-app/commit/6c29832834a9d2146f92a565eac479a73669b8d9))
* Update dependencies and Android platform versions ([6c29832](https://github.com/webmappsrl/webmapp-app/commit/6c29832834a9d2146f92a565eac479a73669b8d9))
* Update downloaded-tracks-box.component.scss, home.page.ts, network.service.ts, and netwotk.reducer.ts ([99261d9](https://github.com/webmappsrl/webmapp-app/commit/99261d911f521dc4f784bd5379f676ba945b8726))
* Update global.scss ([d52a5c2](https://github.com/webmappsrl/webmapp-app/commit/d52a5c2762e9f0e192be9b7f2db0477eb0da92a4))
* Update home page styling and deployment commands ([7c925ae](https://github.com/webmappsrl/webmapp-app/commit/7c925aeae05c42bf3c2c39bff890dffa3be5c61f))
* Update home page styling st:2242 ([c5c2129](https://github.com/webmappsrl/webmapp-app/commit/c5c21291f077eab1903be3b9aeb2b27e65ceaaa2))

## [2.6.0](https://github.com/webmappsrl/webmapp-app/compare/v2.5.0...v2.6.0) (2023-12-07)


### Features

* Add popup functionality to map page ([38b999e](https://github.com/webmappsrl/webmapp-app/commit/38b999efed09cd3e0cf1005e48564b5880491e8e))
* Add support for exporting tracks to GeoJSON, KML, and GPX formats id:2214 ([04bf899](https://github.com/webmappsrl/webmapp-app/commit/04bf899d8bf060b049bd8ba17801a414181387fb))
* **register:** add waypoint button  id:2226 ([34dfade](https://github.com/webmappsrl/webmapp-app/commit/34dfade5d58398ff854d2da061b1c0eb455879b9))


### Miscellaneous

* Remove unnecessary ngIf condition in map.page.html id: 2227 ([7251398](https://github.com/webmappsrl/webmapp-app/commit/725139820fbcdda1e74c7daa46c87f30c024f9b7))
* Update form component and waypoint detail page styles id: 2213 ([c6985b6](https://github.com/webmappsrl/webmapp-app/commit/c6985b674bd8d63820e60a660ae59cb2166a7421))
* Update form component template and styles id:2141 ([33fd91b](https://github.com/webmappsrl/webmapp-app/commit/33fd91bc12339b8171e9ff8beae12c726b974949))
* Update form.component.html id: 2142 ([627b820](https://github.com/webmappsrl/webmapp-app/commit/627b820cc4601f34dfbee9bd34f2c55af286d923))

## [2.5.0](https://github.com/webmappsrl/webmapp-app/compare/v2.4.0...v2.5.0) (2023-11-30)


### Features

* **home:** add home layer ([5e485df](https://github.com/webmappsrl/webmapp-app/commit/5e485df7bb6082d84dbb4676e47a25893913324e))


### Miscellaneous

* **profile:** add app version ([5f6eea1](https://github.com/webmappsrl/webmapp-app/commit/5f6eea1144821494266eba1c7d767ff62bcb39ed))
* Remove home module and component ([c06592b](https://github.com/webmappsrl/webmapp-app/commit/c06592be228463a113f6eddb91a4b801522d20e3))
* Remove unnecessary import in home.module.ts ([f92e770](https://github.com/webmappsrl/webmapp-app/commit/f92e7706b8a7565cb4a24846e9cdb67fd37658c4))
* Remove unused code and dependencies in search-bar and home.page components ([c3a2bed](https://github.com/webmappsrl/webmapp-app/commit/c3a2beda6a33089ac1b2bb3d4ca981aa42b085f4))
* Update minSdkVersion in Android platform ([59ab2b5](https://github.com/webmappsrl/webmapp-app/commit/59ab2b5ee8f1127ab1e28f411e0483ad75fc7b6d))

## [2.4.0](https://github.com/webmappsrl/webmapp-app/compare/v2.3.0...v2.4.0) (2023-11-24)


### Features

* **social-share:** add configurable text ([7544147](https://github.com/webmappsrl/webmapp-app/commit/75441472c46df96cca8536352b5aa81d2b290054))


### Miscellaneous

* **dotenv:** add dotenv ([abba2d1](https://github.com/webmappsrl/webmapp-app/commit/abba2d1661f7f1bc1f999011e4045a0950798e07))
* **inner-component:** add wm core inner components remove useless code ([cacb6e9](https://github.com/webmappsrl/webmapp-app/commit/cacb6e96493554af9f987b33ddd776cae3dffcb9))
* update deploy commands ([7858417](https://github.com/webmappsrl/webmapp-app/commit/78584174c9545cc3e399522cf430147f78684589))
* update min sdk ([84de014](https://github.com/webmappsrl/webmapp-app/commit/84de0147c564e0acb38e048f11146efe9088f07b))

## [2.3.0](https://github.com/webmappsrl/webmapp-app/compare/v2.2.4...v2.3.0) (2023-10-31)


### Features

* update ([6d55ba5](https://github.com/webmappsrl/webmapp-app/commit/6d55ba58244485a1bf59b1d12a7f6f20b89fe76f))

## [2.2.4](https://github.com/webmappsrl/webmapp-app/compare/v2.2.3...v2.2.4) (2023-10-27)


### Miscellaneous

* Update map page HTML and TypeScript files oc:1932,1925 ([5f6716b](https://github.com/webmappsrl/webmapp-app/commit/5f6716bc35f5a6ab919af9cbe5107733537bf79a))

## [2.2.3](https://github.com/webmappsrl/webmapp-app/compare/v2.2.2...v2.2.3) (2023-10-06)


### Miscellaneous

* Update deploy-messages.txt ([1f39225](https://github.com/webmappsrl/webmapp-app/commit/1f392255ecd82065970c35eab8ccca131be14e3f))

## [2.2.2](https://github.com/webmappsrl/webmapp-app/compare/v2.2.1...v2.2.2) (2023-10-06)


### Bug Fixes

* **map:** add logic to control layer opacity and open track details ([d33f275](https://github.com/webmappsrl/webmapp-app/commit/d33f275e98aee01a1f650de08460e4e07ed2495f))

## [2.2.1](https://github.com/webmappsrl/webmapp-app/compare/v2.2.0...v2.2.1) (2023-10-06)


### Miscellaneous

* Add release-please configuration file ([8cf2be7](https://github.com/webmappsrl/webmapp-app/commit/8cf2be7edd248735ff1947c1f988a06848432788))
* Remove unnecessary code in release_please.yml ([aff70fc](https://github.com/webmappsrl/webmapp-app/commit/aff70fc4b7a92208092fc06b6e8d1c452b82ad7b))
* remove useless file ([d74087e](https://github.com/webmappsrl/webmapp-app/commit/d74087e2ba27c6e97217c46da841a8db9dafdb7d))
* Update deploy-messages.txt and gulpfile.js ([c858d6c](https://github.com/webmappsrl/webmapp-app/commit/c858d6c494125930b38df407f6879c7414763b20))
* Update subproject commit reference ([e8fee34](https://github.com/webmappsrl/webmapp-app/commit/e8fee34a17816d326531734c4f0d2fe66ec0828c))
* Update version object in gulpfile.js ([d865f5d](https://github.com/webmappsrl/webmapp-app/commit/d865f5d6b10697e698268b50f212d4d70f2ead3a))

## [2.2.0](https://github.com/webmappsrl/webmapp-app/compare/v2.1.50...v2.2.0) (2023-10-03)


### Features

* Add release automation workflow ([004bc16](https://github.com/webmappsrl/webmapp-app/commit/004bc16781f50387128c0308fb1fd8df30dec87e))


### Bug Fixes

* **conf:** auth ([c164e1c](https://github.com/webmappsrl/webmapp-app/commit/c164e1c38b8c3501d629aa4dae2b5d2191cdd338))
* **details:** close ([84c088d](https://github.com/webmappsrl/webmapp-app/commit/84c088dcb5d5001a79b1a848181117b9d3ea5969))
* **downloadoffline_has_some_problem:** story 1641 ([89b0c6e](https://github.com/webmappsrl/webmapp-app/commit/89b0c6e97c371004e2d3ef48c0242559dfc95322))
* **geolocation:** fix background geolocation ([52ebf01](https://github.com/webmappsrl/webmapp-app/commit/52ebf0144d3bd8e0a132ba20eafb75bed4b81c86))
* **itinerary:** remove option menu ([e9f20bc](https://github.com/webmappsrl/webmapp-app/commit/e9f20bc29d57ad2fe828f33b02ee22d237532333))
* **langs:** now set default langs ([d2cf1c9](https://github.com/webmappsrl/webmapp-app/commit/d2cf1c95575e8fde82c535a993417fa539eafdf8))
* **map:** add current track to record ([fc431f0](https://github.com/webmappsrl/webmapp-app/commit/fc431f0066ad8fa53b848242ed0c7b4d8f38f685))
* **map:** missed icons ([424c59a](https://github.com/webmappsrl/webmapp-app/commit/424c59a6a09ae712cc55f638dc30d86c694b5749))
* **modal-success:** navigate forward by key ([4ffb840](https://github.com/webmappsrl/webmapp-app/commit/4ffb8409c81d243ce9972cadd43b3d03b152c927))
* **page/home:** remove handling set filter ([cf4a1dc](https://github.com/webmappsrl/webmapp-app/commit/cf4a1dce372c1a38212d779125bd7f4f8b45c8a2))
* **profile_shift:** implements ([#1](https://github.com/webmappsrl/webmapp-app/issues/1)) ([7d55c66](https://github.com/webmappsrl/webmapp-app/commit/7d55c6664d48ab12a4e734aa787b1aa7e5095217))
* **profile:** fix page ([568d759](https://github.com/webmappsrl/webmapp-app/commit/568d7597258e408257cadbfb4286088e503e9c1a))
* **profile:** visualizzazione i miei downloads ([93b26ce](https://github.com/webmappsrl/webmapp-app/commit/93b26ceb3881bd090153992440ff5d322b788e54))
* **sunc/offline:** fix media sync ([bdc9c40](https://github.com/webmappsrl/webmapp-app/commit/bdc9c40a73df0b984a92bab48713947b8c268cca))
* **sync/offline:** fix tracks&pois sync ([f651b49](https://github.com/webmappsrl/webmapp-app/commit/f651b4970f8b42fe8d46f7e976ade0381010d8b2))


### Miscellaneous

* Update package version to 2.1.51 ([c2f8753](https://github.com/webmappsrl/webmapp-app/commit/c2f8753f1a4073d4e7f18e9582fe94ea097cff65))

## changelog webmapp APP

**APP VERSION:**

- PEC: **12.1.15**

- SICAI: **12.1.17**

- UCVS: **12.1.28**

- FUMAIOLOSENTIERI: **12.1.28**

- GAVORRANO:**12.1.15**

- CAMMINI: **12.1.17**

- IR: **2.1.21**

---

**2.1.23**

- [1F]()(fix):fix grafici sul componente poi

---

**2.1.22**

- [1F]()(feature): aggiunta la traduzione francese della app

---

**2.1.21**

- [1F]()(feature): aggiunta flow line quote
- [1F]()(feature): aggiunta colorazione alle descrizioni
- [1F]()(improve): migliorato il caricamento delle tracks, inserendo livelli diversi di dettaglio in base allo zoom

---

**12.1.20**

- [1F]()(fix/track): eliminato il menu opzioni (tre puntini)
- [2F]()(fix/track/download): aggiunta possibilità di interrompere download
- [3F]()(fix/track/share): fixato bug condivisione su nuove versioni di android [fixx](https://docs.google.com/document/d/1CrE5wY48apcjg6jT-kz-mIE73JzPv3XtLRrxO8fhXCA/edit#heading=h.baz7r5xjckfp)
- [4F]()(fix/preferiti): i preferiti ora sono visualizzati correttamente quando l'utente è loggato
- [5F]()(fix/settings): aggiunta la sezione settings all'interno del profilo che comprende il logout e la scelta lingua
- [6F]()(fix/login): la pagina profilo visualizza correttamente il contenuto in base allo stato di autenticazione
- [7F]()(fix/donwload_preferiti): l'icona che invita al click ora è cliccabile
- [3F]()(feature/tiles): aggiunto switch tiles webmapp/satellitare
- ***

  **12.1.19**

- [1R]()(refactoring): creato un componente per la visualizzazione delle gallery presenti in dettagli mappa e track

---

**12.1.18**

|                  | [1F]() | [2F]() | [3F]() | [4F]() | [5F]() | [6F]() | [7F]() | [8F]() | [9F]() |
| ---------------- | ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------ |
| PEC              |        |        |        |        |        |        |        |        |        |
| SICAI            |        |        |        |        |        |        |        |        |        |
| UCVS             |        |        |        |        |        |        |        |        |        |
| FUMAIOLOSENTIERI |        | X      | X      | X      | X      | X      |        | X      | X      |
| GAVORRANO        |        |        |        |        |        |        |        |        |        |

- [1F]()(feature): aggiunto nella home il box_type track

- [2F]()(feature): abilitata la registrazione percorso

- [3F]()(feature): abilitata l'autenticazione

- [4F]()(feature): abilitata la sezione preferiti

- [5F]()(feature): inseriti filtri sui punti di interesse

- [6F]()(feature): aggiunta clusterizzazione sui punti di interesse

- [7F]()(feature): aggiunto il componente audio nei dettagli del percorso e del punti di interess

- [8F]()(feature): aggiunta la traduzione inglese della UI

- [9F]()(feature): aggiunto un alert di prossimita per i punti di interesse vicini alla posizione dell' utente

- [1R]()(refactoring): ora i poi hanno come categoria le tassonomie a loro associate e il marker ha una image predefinita legata alla categoria

---

**12.1.17**

-[FIX]()(fix):risolto bug inerente ad alcune vecchie versioni di android/ios che non permetteva la corretta visualizzazione della mappa

---

**12.1.16**

- (fine tuning): stroke width delle tracks ora il minimo è rappresentato da 1 e il massimo da 8

- (fix): aggiunto l'attribution sulla mappa generale e su quella percorso

- (fix): aggiunto lo scale sulla mappa generale e su quella percorso

- (fix): aggiunto un alert di conferma sull' eliminazione delle tracce scaricate

---

**12.1.15**

- (fine tuning): REF

- (fix): visualizzazione FLAGS

---

**12.1.14**

- (feature): aggiunti start e end flags sulla mappa layers/generale.

- (feature): aggiunta ref sulla mappa layers/generale.

- (feature): aggiunta bussola sulla pagina itinerario

- (feature): aggiunta pagina di progetto

- (feature): aggiunta localizzazione

- (feature): migliorato il sistema di navigazione ora integrato nella pagina itinerario

- (fix): aggiunti start e end nei dettagli tecnici di una app, allineati i dettagli tecnici con la webapp

---
