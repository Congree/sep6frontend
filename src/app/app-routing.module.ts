import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { FlightDataComponent } from './components/flight-data/flight-data.component';
import { pathToFileURL } from 'url';
import { WeatherDataComponent } from './components/weather-data/weather-data.component';
import { OverviewPageComponent } from './components/overview-page/overview-page.component';
import { AirportDataComponent } from './components/airport-data/airport-data.component';
import { AppComponent } from './layout/app.component';

const routes: Routes = [

  { path: '', component: OverviewPageComponent},
  { path:'overview-page', component: OverviewPageComponent,},
  { path:'airport-data', component:AirportDataComponent},
  { path:'flight-data', component:FlightDataComponent},
  { path:'weather-data', component:WeatherDataComponent}

];

@NgModule({

  imports: [ RouterModule.forRoot(routes) ],

  exports: [ RouterModule ]

})

export class AppRoutingModule {}