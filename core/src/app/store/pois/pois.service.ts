import {IGeojsonClusterApiResponse, IGeojsonFeature} from 'src/app/types/model';

import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PoisService {
  private _geohubAppId: number = environment.geohubId || 10;

  constructor(private _http: HttpClient) {
    const hostname: string = window.location.hostname;
    if (hostname.indexOf('localhost') < 0) {
      const newGeohubId = parseInt(hostname.split('.')[0], 10);
      if (!Number.isNaN(newGeohubId)) {
        this._geohubAppId = newGeohubId;
      }
    }
    if (hostname.indexOf('mobile') > 0) {
      const newGeohubId = parseInt(hostname.split('.')[0]);
      if (!Number.isNaN(newGeohubId)) {
        this._geohubAppId = newGeohubId;
      }
    }
  }

  public getPois(): Observable<any> {
    return this._http.get<any>(`${environment.api}/api/v1/app/${this._geohubAppId}/pois.geojson`);
  }
}
