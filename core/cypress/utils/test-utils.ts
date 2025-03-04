import {environment} from 'src/environments/environment';
import {clearUgcData, removeAuth} from '@wm-core/utils/localForage';

/**
 * Clears the test state.
 * This function uses Cypress to clear cookies and local storage.
 * It is useful for resetting the application state between end-to-end tests.
 */
export function clearTestState(): void {
  cy.clearLocalStorage();
  cy.clearCookies();
  clearUgcData();
  removeAuth();
}

/**
 * Intercepts the configuration request and enables authentication.
 * @returns A Cypress chainable object.
 */
export function confWithAuthEnabled(): Cypress.Chainable {
  return cy.intercept('GET', confURL, req => {
    req.reply(res => {
      const newRes = {
        ...res.body,
        AUTH: {
          ...res.body.AUTH,
          enable: true,
          webappEnable: true,
        },
      };
      res.send(newRes);
    });
  });
}

/**
 * Logs into the application.
 * @param email - User's email address.
 * @param password - User's password.
 */
export function e2eLogin(
  email: string = Cypress.env('email'),
  password: string = Cypress.env('password'),
): Cypress.Chainable {
  const apiLogin = `${environment.api}/api/auth/login`;
  cy.intercept('POST', apiLogin).as('loginRequest');
  goProfile();
  cy.get('.wm-profile-logged-out-login-button').click();
  cy.get('ion-input[formcontrolname="email"] input')
    .focus()
    .clear()
    .should('have.focus')
    .type(email);
  cy.get('ion-input[formcontrolname="password"] input')
    .focus()
    .clear()
    .should('have.focus')
    .type(password);
  cy.get('.wm-login-submit-button').click();
  return cy.wait('@loginRequest').its('response.body');
}

/**
 * Navigates to the home page.
 * @param doubleClick if true, performs a double click; otherwise, performs a single click. Default is true.
 */
export function goHome(doubleClick = true) {
  if (doubleClick) {
    cy.get('#tab-button-home').dblclick();
  } else {
    cy.get('#tab-button-home').click();
  }
}

/**
 * Navigates to the map page.
 */
export function goMap() {
  cy.get('#tab-button-map').click();
}

/**
 * Navigates to the profile page.
 */
export function goProfile() {
  cy.get('#tab-button-profile').click();
}

/**
 * Mocks the get api ugc tracks request.
 * @param mockRes - The mock response.
 * @returns A Cypress chainable object.
 */
export function mockGetApiTracks(mockRes: any): Cypress.Chainable {
  return cy.intercept('GET', `${environment.api}/api/v2/ugc/track/index`, req => {
    req.reply(res => {
      res.send(mockRes);
    });
  });
}

/**
 * Mocks the save api ugc tracks request with a network error.
 * @returns A Cypress chainable object.
 */
export function mockSaveApiTracksOffline(): Cypress.Chainable {
  // forceNetworkError: true, correctly simulates the network error, but still sends the track to the backend
  return cy.intercept('POST', `${environment.api}/api/v2/ugc/track/store`, {
    statusCode: 500,
    body: {error: 'Simulated server error'},
  });
}

/**
 * Opens a layer by its title.
 * @param layerTitle the title of the layer to open.
 */
export function openLayer(layerTitle: string) {
  cy.get('wm-layer-box')
    .contains('div.wm-box-title', layerTitle)
    .then($box => {
      cy.wrap($box).click();
    });
}

/**
 * Opens a POI in a layer by its title.
 * @param poiTitle the title of the POI to open.
 */
export function openPoi(poiTitle: string) {
  cy.get('wm-poi-box').contains('.wm-box-name', poiTitle).as('poiBox');
  cy.get('@poiBox').then($poiBox => {
    cy.wrap($poiBox).click();
  });
}

/**
 * Opens a track in a layer by its title.
 * @param trackTitle the title of the track to open.
 */
export function openTrack(trackTitle: string) {
  cy.get('wm-search-box').contains('ion-card-title', trackTitle).as('searchBox');
  cy.get('@searchBox').then($searchBox => {
    cy.wrap($searchBox).click();
  });
}

const confURL = `${environment.awsApi}/conf/52.json`;
export const data = {
  layers: {
    ecTrack: 'Tracks test e2e',
    ecPoi: 'Poi test e2e',
  },
  tracks: {
    exampleOne: 'Track example one',
    exampleTwo: 'Track example two',
  },
  pois: {
    exampleOne: 'Poi example one',
    exampleTwo: 'Poi example two',
  },
};
