import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UtilitiesService {

  constructor(private _http: HttpClient) { }

  getUtilities() {
    let url = 'http://centoshost:8080/utilities/';

    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.get(url, {headers})
      .pipe(map(result => result));
  }
}