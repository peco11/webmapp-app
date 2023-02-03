/**
 * Config Service
 *
 * It makes the configuration accessible from all the app
 *
 * */

import * as CONFIG from '../../../config.json';

import {CommunicationService} from './base/communication.service';
import {DeviceService} from './base/device.service';
import {Injectable} from '@angular/core';
import {StorageService} from './base/storage.service';
import {environment} from 'src/environments/environment';
import pkg from 'package.json';
import {timeout} from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  private _config: IConfig;

  constructor(
    private _communicationService: CommunicationService,
    private _deviceService: DeviceService,
    private _storageService: StorageService,
  ) {
    console.log('Core v' + this.version);
  }

  get appId(): string {
    return this._config.APP.id ? this._config.APP.id : 'it.webmapp.webmapp';
  }

  get appName(): string {
    return this._config && this._config.APP && this._config.APP.name
      ? this._config.APP.name
      : 'Webmapp';
  }

  get availableLanguages(): Array<string> {
    return ['it'];
  }

  get defaultLanguage(): string {
    return 'it';
  }

  get project(): string {
    return this._config.PROJECT ? this._config.PROJECT.HTML : '';
  }

  get version(): string {
    return pkg.version;
  }

  /**
   * Function called during app initialization, to update the configuration
   */
  initialize(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      const isLocalServer: boolean = window.location.href.indexOf('localhost') !== -1;

      if (!this._deviceService.isBrowser || isLocalServer) {
        const tmp: any = CONFIG;
        this._config = tmp.default;

        this._storageService
          .getConfig()
          .then(
            value => {
              if (typeof value !== 'undefined' && value) {
                this._config = value;
              }
            },
            () => {},
          )
          .finally(() => {
            const url = `${environment.api}/api/app/webmapp/${
              this._config.APP.geohubId || environment.geohubId
            }/config.json`;

            this._communicationService
              .get(url + '?t=' + Date.now())
              .pipe(timeout(1500))
              .subscribe(
                response => {
                  this._config = response;

                  this._storageService.setConfig(this._config);
                  resolve();
                },
                err => {
                  if (isLocalServer) {
                    if (err.message.toLowerCase().indexOf('http failure during parsing') !== -1) {
                      console.warn('WARNING: Malformed config.json');
                    } else {
                      console.warn(err);
                    }
                  }
                  this._storageService.setConfig(this._config);
                  resolve();
                },
              );
          });
      } else {
        let url = '/config.json';
        if (this._deviceService.isBrowser) {
          const hostname: string = window.location.hostname;
          const geohubId = parseInt(hostname.split('.')[0], 10) || 4;
          environment.geohubId = geohubId;
          url = `${environment.api}/api/app/webmapp/${environment.geohubId}/config.json`;
        }
        this._communicationService.get(url + '?t=' + Date.now()).subscribe(
          response => {
            this._config = response;

            this._storageService.setConfig(this._config);
            resolve();
          },
          err => {
            console.error(err);
            resolve();
          },
        );
      }
    });
  }

  /**
   * @returns {boolean} true if the ugc records should be enabled
   */
  isRecordEnabled(): boolean {
    return this.appId === 'it.webmapp.webmapp' || !!this._config?.GEOLOCATION?.record?.enable;
  }
}
