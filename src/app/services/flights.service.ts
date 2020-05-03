import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class FlightsService {

  constructor(private _http: HttpClient) { }

  flightsPerMonth(){
    return this._http.get("http://nycflights-api-test.northeurope.azurecontainer.io/api/Flights/numberOfFlightsPerMonth")
    .pipe(map(result => {
      return result;
    }));
  }
}
