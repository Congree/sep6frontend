import { Component, OnInit } from '@angular/core';
import { WeatherModel } from 'src/app/models/weather-model';
import { HttpClient } from '@angular/common/http';
import { Chart } from 'chart.js';
import { environment } from '../../../environments/environment';
import { FlightsService } from 'src/app/services/flights.service';

@Component({
  selector: 'app-weather-data',
  templateUrl: './weather-data.component.html',
  styleUrls: ['./weather-data.component.scss'],
})
export class WeatherDataComponent implements OnInit {
  data: WeatherModel[];
  data2: FlightsService[];
  url1 = `${environment.API_HOST}/api/Weather/temperature?origin=JFK`;
  url2 = `${environment.API_HOST}/api/Weather/temperature/origins`;
  url3 = `${environment.API_HOST}/api/Weather/observations/origins`;

  TemperatureInCelsius = [];
  TemperatureInCelsiusJFK = [];
  TemperatureInCelsiusEWR = [];
  TemperatureInCelsiusLGA = [];
  DateTime = [];
  DateTimeOrigins = [];
  Origin = [];
  Observations = [];
  lineChart = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get(this.url1).subscribe((result: WeatherModel[]) => {
      result.forEach((x) => {
        this.DateTime.push(x.dateTime);
        this.TemperatureInCelsius.push(x.temperatureInCelsius);
      });
      this;
      new Chart('canvas', {
        type: 'line',
        data: {
          labels: this.DateTime,
          datasets: [
            {
              data: this.TemperatureInCelsius,
              borderColor: '#3cba9f',
              backgroundColor: [
                '#3cb371',
                '#0000FF',
                '#9966FF',
                '#4C4CFF',
                '#00FFFF',
                '#f990a7',
                '#aad2ed',
                '#FF00FF',
                'Blue',
                'Red',
                'Blue',
              ],
              fill: true,
              showLine: false,
            },
          ],
        },
        options: {
          events: [],
          tooltips: {
            enabled: false
          },
          legend: {
            display: false,
          },
          scales: {
            xAxes: [
              {
                display: true,
                type: 'time',
                time: {
                  unit: 'month',
                },
              },
            ],
            yAxes: [
              {
                display: true,
              },
            ],
          },
        },
      });
    });

    this.http.get(this.url3).subscribe((result: WeatherModel[]) => {
      result.forEach((x) => {
        this.Origin.push(x.origin);
        this.Observations.push(x.observations);
      });
      this;
      new Chart('canvas3', {
        type: 'bar',
        data: {
          labels: this.Origin,
          datasets: [
            {
              data: this.Observations,
              borderColor: '#3cba9f',
              backgroundColor: [
                '#3cb371',
                '#0000FF',
                '#9966FF',
                '#4C4CFF',
                '#00FFFF',
                '#f990a7',
                '#aad2ed',
                '#FF00FF',
                'Blue',
                'Red',
                'Blue',
              ],
              fill: true,
            },
          ],
        },
        options: {
          tooltips: {
            enabled: true
          },
          legend: {
            display: false,
          },
          scales: {
            xAxes: [
              {
                display: true,
              },
            ],
            yAxes: [
              {
                display: true,
                ticks: {
                  suggestedMin: 8700,
                  suggestedMax: 8715,
                }
              },
            ],
          },
        },
      });
    });

  this.http.get(this.url2).subscribe((result: WeatherModel[]) => {
      result.forEach((x) => {
        switch (x.origin) {
          case 'JFK':
            this.TemperatureInCelsiusJFK.push({
              x: x.dateTime,
              y: x.temperatureInCelsius,
            });
            break;
          case 'EWR':
            this.TemperatureInCelsiusEWR.push({
              x: x.dateTime,
              y: x.temperatureInCelsius,
            });
            break;
          case 'LGA':
            this.TemperatureInCelsiusLGA.push({
              x: x.dateTime,
              y: x.temperatureInCelsius,
            });
            break;
        }
        this.DateTimeOrigins.push(x.dateTime);
      });
      new Chart('canvas2', {
        type: 'line',
        data: {
          labels: this.DateTimeOrigins,
          datasets: [
            {
              data: this.TemperatureInCelsiusJFK,
              label: 'JFK',
              borderColor: '#3cba9f',
              fill: true,
              showLine: false,
            },
            {
              data: this.TemperatureInCelsiusEWR,
              label: 'EWR',
              borderColor: '#FFCB32',
              fill: true,
              showLine: false,
            },
            {
              data: this.TemperatureInCelsiusLGA,
              label: 'LGA',
              borderColor: '#CB32FF',
              fill: true,
              showLine: false,
            },
          ],
        },
        options: {
          events: [],
          tooltips: {
            enabled: false
          },
          legend: {
            display: true,
          },
          scales: {
            xAxes: [
              {
                display: true,
                type: 'time',
                time: {
                  unit: 'month',
                },
              },
            ],
            yAxes: [
              {
                display: true,
              },
            ],
          },
        },
      });
    });
  }
}
