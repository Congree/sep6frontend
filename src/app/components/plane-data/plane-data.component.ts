import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Chart } from 'chart.js';
import { PlanesModel } from 'src/app/models/planes-model';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-plane-data',
  templateUrl: './plane-data.component.html',
  styleUrls: ['./plane-data.component.scss'],
})
export class PlaneDataComponent implements OnInit {
  data: PlanesModel[];
  url1 = `${environment.API_HOST}/api/Planes/manufacturers`;
  url2 = `${environment.API_HOST}/api/Planes/model?manufacturer=AIRBUS`;
  url3 = `${environment.API_HOST}/api/Flights/manufacturers`; // number of flights each manufacturer with more than 200 planes is responsible for

  Planes = [];
  Manufacturer = [];

  NumberOfPlanes = [];
  Model = [];

  NumberOfFLights = [];
  ManufacturerFlights = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get(this.url1).subscribe((result: PlanesModel[]) => {
      result.forEach((x) => {
        this.Manufacturer.push(x.manufacturer);
        this.Planes.push(x.planes);
      });
      new Chart('canvas', {
        type: 'bar',
        data: {
          labels: this.Manufacturer,
          datasets: [
            {
              data: this.Planes,
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
              },
            ],
          },
        },
      });
    });

    this.http.get(this.url2).subscribe((result: PlanesModel[]) => {
      result.forEach((x) => {
        this.Model.push(x.model);
        this.NumberOfPlanes.push(x.numberOfPlanes);
      });
      new Chart('canvas2', {
        type: 'bar',
        data: {
          labels: this.Model,
          datasets: [
            {
              data: this.NumberOfPlanes,
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
                '#3cb371',
                '#0000FF',
                '#9966FF',
                '#4C4CFF',
                '#00FFFF',
                '#f990a7',
              ],
              fill: true,
            },
          ],
        },
        options: {
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
              },
            ],
          },
        },
      });
    });

    this.http.get(this.url3).subscribe((result: PlanesModel[]) => {
      result.forEach((x) => {
        this.ManufacturerFlights.push(x.manufacturer);
        this.NumberOfFLights.push(x.numberOfFlights);
      });
      new Chart('canvas3', {
        type: 'bar',
        data: {
          labels: this.ManufacturerFlights,
          datasets: [
            {
              data: this.NumberOfFLights,
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
              },
            ],
          },
        },
      });
    });
  }
}
