import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { FlightDataComponent } from './components/flight-data/flight-data.component';
import { pathToFileURL } from 'url';
import { WeatherDataComponent } from './components/weather-data/weather-data.component';
import { AppComponent } from './layout/app.component';
import { PlaneDataComponent } from './components/plane-data/plane-data.component';

const routes: Routes = [

  { path: '', component: FlightDataComponent},
  { path:'plane-data', component:PlaneDataComponent},
  { path:'flight-data', component:FlightDataComponent},
  { path:'weather-data', component:WeatherDataComponent}

];

@NgModule({

  imports: [ RouterModule.forRoot(routes) ],

  exports: [ RouterModule ]

})

export class AppRoutingModule {}