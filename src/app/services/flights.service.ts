import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class FlightsService {

  constructor(private _http: HttpClient) { }

  flightsPerMonth(){
    return this._http.get("${ environment.API_HOST }/api/Flights/months")
    .pipe(map(result => {
      return result;
    }));
  }
}
