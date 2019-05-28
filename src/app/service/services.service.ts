import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  private services = [
    {
      name: 'Daily History'
    },
    {
      name: 'Monthly History'
    },
    {
      name: 'Utilities'
    },
    {
      name: 'Cash Projection'
    }
  ];

  constructor() { }

  public getServices(): Observable<any[]> {
    return of(this.services);
  }
}
