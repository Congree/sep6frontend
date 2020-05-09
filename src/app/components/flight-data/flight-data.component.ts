import { Component, OnInit } from '@angular/core';
import { FlighsPerMonthModel } from 'src/app/models/flighs-per-month-model';
import { HttpClient } from '@angular/common/http';
import { Chart } from 'chart.js';
import { PlanesModel } from 'src/app/models/planes-model';


@Component({
  selector: 'app-flight-data',
  templateUrl: './flight-data.component.html',
  styleUrls: ['./flight-data.component.scss']
})
export class FlightDataComponent implements OnInit {
  data: FlighsPerMonthModel[];  
  url1 = 'https://test-nycflights13-api.azurewebsites.net/api/Flights/numberOfFlightsPerMonths';  
  //url2 = 'https://test-nycflights13-api.azurewebsites.net/api/Planes';
  Model = [];
  Seats = []
  Month = [];  
  Flight = [];  
  barchart = [];  
  constructor(private http: HttpClient) { }  
  ngOnInit() {  
    this.http.get(this.url1).subscribe((result: FlighsPerMonthModel[]) => {  
      result.forEach(x => {  
        this.Month.push(x.month);  
        this.Flight.push(x.flights);  
      });  
      this  
      this.barchart = new Chart('canvas', {  
        type: 'bar',  
        data: {  
          labels: this.Month,  
          datasets: [  
            {  
              data: this.Flight,  
              borderColor: '#3cba9f',  
              backgroundColor: [  
                "#3cb371",  
                "#0000FF",  
                "#9966FF",  
                "#4C4CFF",  
                "#00FFFF",  
                "#f990a7",  
                "#aad2ed",  
                "#FF00FF",  
                "Blue",  
                "Red",  
                "Blue"  
              ],  
              fill: true  
            }  
          ]  
        },  
        options: {  
          legend: {  
            display: false  
          },  
          scales: {  
            xAxes: [{  
              display: true  
            }],  
            yAxes: [{  
              display: true  
            }],  
          }  
        }  
      });  
    });  
    // this.http.get(this.url2).subscribe((result: PlanesModel[]) => {  
    //   result.forEach(x => {  
    //     this.Model.push(x.model);  
    //     this.Seats.push(x.seats);  
    //   });  
    //   this  
    //   this.barchart = new Chart('canvas2', {  
    //     type: 'bar',  
    //     data: {  
    //       labels: this.Model,  
    //       datasets: [  
    //         {  
    //           data: this.Seats,  
    //           borderColor: '#3cba9f',  
    //           backgroundColor: [  
    //             "#3cb371",  
    //             "#0000FF",  
    //             "#9966FF",  
    //             "#4C4CFF",  
    //             "#00FFFF",  
    //             "#f990a7",  
    //             "#aad2ed",  
    //             "#FF00FF",  
    //             "Blue",  
    //             "Red",  
    //             "Blue"  
    //           ],  
    //           fill: true  
    //         }  
    //       ]  
    //     },  
    //     options: {  
    //       legend: {  
    //         display: false  
    //       },  
    //       scales: {  
    //         xAxes: [{  
    //           display: true  
    //         }],  
    //         yAxes: [{  
    //           display: true  
    //         }],  
    //       }  
    //     }  
    //   });  
    // });  
  }  
}
