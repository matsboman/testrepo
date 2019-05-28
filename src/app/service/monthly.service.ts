import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MonthlyService {

  constructor(private _http: HttpClient) { }

  getMonthlyHistory() {
    let url = 'http://centoshost:8080/monthly/';

    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    //.set('Authorization', 'Basic ' + btoa('m12061@taportal.att.com:8l00dMoon19'));

    return this._http.get(url, {headers})
      .pipe(map(result => result));
  }
}