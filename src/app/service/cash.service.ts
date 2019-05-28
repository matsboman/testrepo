import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CashService {

  constructor(private _http: HttpClient) { }

  getCash() {
    let url = 'http://centoshost:8080/cash/';

    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.get(url, {headers})
      .pipe(map(result => result));
  }
}