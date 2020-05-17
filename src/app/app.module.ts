import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatInputModule} from '@angular/material/input';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatSidenavModule} from '@angular/material/sidenav';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './layout/app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { FlightDataComponent } from './components/flight-data/flight-data.component';
import { WeatherDataComponent } from './components/weather-data/weather-data.component';
import { FlightsService } from './services/flights.service';
import { HttpClientModule } from '@angular/common/http';
import { PlaneDataComponent } from './components/plane-data/plane-data.component';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    FlightDataComponent,
    WeatherDataComponent,
    PlaneDataComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatInputModule,
    MatFormFieldModule,
    MatSidenavModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    NgxChartsModule,
    HttpClientModule
  ],
  providers: [FlightsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
