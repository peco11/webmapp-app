import {iLocalString} from './model';

interface IGEOLOCATION {
  record: {
    enable: boolean;
  };
}

interface IAPP {
  name: string;
  geohubId: number;
  id: string;
  customerName?: string;
  appStoreUrl?: string;
  googlePlayUrl?: string;
}

interface IConfig {
  APP: IAPP;
  GEOLOCATION?: IGEOLOCATION;
}
interface ITHEME {
  primary?: string;
  secondary?: string;
  tertiary?: string;
  select?: string;
  success?: string;
  warning?: string;
  danger?: string;
  dark?: string;
  medium?: string;
  light?: string;
  fontXxxlg?: string;
  fontXxlg?: string;
  fontXlg?: string;
  fontLg?: string;
  fontMd?: string;
  fontSm?: string;
  fontXsm?: string;
  fontFamilyHeader?: string;
  fontFamilyContent?: string;
  defaultFeatureColor?: string;
  theme?: string;
}
interface ILANGUAGES {
  default?: string;
  available?: string[];
}

interface IHOMEOLD {
  view: string;
  title?: string;
  subtitle?: string;
  taxonomy?: string;
  types?: string[];
  terms?: any[];
  features?: string[];
  url?: string;
  color?: string;
  noElements?: string;
}

type IBOX = {
  box_type: 'title' | 'layer' | 'base' | 'external_url' | 'slug';
  title: iLocalString | string;
};
type ITITLEBOX = IBOX & {
  box_type: 'title';
};
type ILAYERBOX = IBOX & {
  box_type: 'layer';
  layer: number | ILAYER;
};
type IHOMEBASEITEM = {
  title: iLocalString | string;
  image_url: string;
};
type IEXTERNALURLBOX = IHOMEBASEITEM & {
  box_type: 'external_url';
  url: string;
};

type IHOMEITEMTRACK = IHOMEBASEITEM & {
  track_id: number;
  taxonomy_activities: string[];
  taaxonomy_where: string[];
  distance: string;
  cai_scale: string;
};
type IHOMEITEMURL = IHOMEBASEITEM & {
  url: string;
};
type IHOMEITEM = IHOMEITEMTRACK | IHOMEITEMURL;
type IBASEBOX = IBOX & {
  box_type: 'base';
  items: IHOMEITEM[];
};
type IHOME = ITITLEBOX | ILAYERBOX | IBASEBOX | IEXTERNALURLBOX;
interface IOPTIONS {
  trackRefLabelZoom: number;
  caiScaleStyleZoom: number;
  poiSelectedRadius: number;
  poiMaxRadius: number;
  poiMinZoom: number;
  poiIconRadius: number;
  poiIconZoom: number;
  poiMinRadius: number;
  poiLabelMinZoom: number;
  minDynamicOverlayLayersZoom: number;
  baseUrl: string;
  startUrl: string;
  privacyUrl: string;
  passwordRecoveryUrl: string;
  hideGlobalMap: boolean;
  addArrowsOverTracks: boolean;
  showTrackRefLabel: boolean;
  useCaiScaleStyle: boolean;
  forceDefaultFeatureColor: boolean;
  useFeatureClassicSelectionStyle: boolean;
  downloadRoutesInWebapp: boolean;
  showPoiListOffline: boolean;
  showHelp: boolean;
  hideDisclaimer: boolean;
  showDifficultyLegend: boolean;
  showEditLink: boolean;
  hideSearch: boolean;
  hideFilters: boolean;
  startFiltersDisabled: boolean;
  resetFiltersAtStartup: boolean;
  showMapViewfinder: boolean;
  highlightMapButton: boolean;
  hideNewsletterInSignup: boolean;
  forceWelcomePagePopup: boolean;
  skipRouteIndexDownload: boolean;
  downloadFullGemoetryRouteIndex: boolean;
  enableTrackAdoption: boolean;
  highlightReadMoreButton: boolean;
  clustering: ICLUSTERING;
  showAppDownloadButtons: IAPPDOWNLOADBUTTONS;
  maxFitZoom?: number;
  detailsMapBehaviour?: IDETAILSMAPBEHAVIOUR;
  beBaseUrl?: string;
  termsAndConditionsUrl?: string;
  voucherUrl?: string;
  customBackgroundImageUrl?: string;
  trackAdoptionUrl?: string;
  trackReconnaissanceUrl?: string;
  galleryAnimationType?: string;
  mapAttributions?: IMAPATTRIBUTION[];
}
interface IAUTH {
  enable?: boolean;
  showAtStartup?: boolean;
  loginToGeohub?: boolean;
  force?: boolean;
  skipToDownloadPublicRoute?: boolean;
  hideCountry?: boolean;
  customCreatePostRoles?: boolean;
  facebook?: IFACEBOOK;
  google?: IGOOGLE;
}

interface IMAP {
  maxZoom: number;
  minZoom: number;
  defZoom: number;
  bbox: [number, number, number, number];
  center?: [number, number];
  layers?: ILAYER[];
}
interface ILAYER {
  id: string;
  name: string;
  title: string;
  subtitle: string;
  description: string;
  icon?: any;
  params?: {[id: string]: string};
  data_use_bbox: boolean;
  data_use_only_my_data: boolean;
  style: {[name: string]: string};
  behaviour: {[name: string]: string};
  tracks?: {[name: string]: IHIT[]};
}
interface IOVERLAYERS {
  id: string;
  type: string;
  tilesUrl: string;
  minZoom?: number;
  maxZoom?: number;
  fill_opacity?: number;
  stroke_width?: number;
  stroke_opacity?: number;
  line_dash?: number[];
  zindex?: number;
  icon?: string;
  name?: string;
  description?: string;
  color?: string;
  fill_color?: string;
  geojsonUrl?: string;
  noDetails?: boolean;
  noInteraction?: boolean;
  preventFilter?: boolean;
  invertPolygons?: boolean;
  alert?: boolean;
  show_label?: boolean;
  createTaxonomy?: ITAXONOMY;
  params?: {[id: string]: string};
}

type IDETAILSMAPBEHAVIOUR = 'all' | 'track' | 'poi' | 'route';
type ITAXONOMY = 'activity' | 'theme' | 'when' | 'where' | 'who' | 'webmapp_category';

interface IFACEBOOK {
  id: string;
  name: string;
}
interface IGOOGLE {
  id: string;
  iosId: string;
  name: string;
}
interface ICLUSTERING {
  enable: boolean;
  radius: number;
  highZoomRadius: number;
  highZoom?: number;
}
interface IMAPATTRIBUTION {
  label?: string;
  url?: string;
}
interface IAPPDOWNLOADBUTTONS {
  track: boolean;
  poi: boolean;
  route: boolean;
  all: boolean;
}
interface ICONF {
  APP: IAPP;
  OPTIONS: IOPTIONS;
  MAP?: IMAP;
  AUTH?: IAUTH;
  LANGUAGES?: ILANGUAGES;
  THEME?: ITHEME;
  HOME?: IHOME[];
}
