import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DailyService {

  constructor(private _http: HttpClient) { }

  getDailyHistory() {
    let url = 'http://centoshost:8080/daily/';

    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.get(url, {headers})
      .pipe(map(result => result));
  }
}
