import { Component, OnInit } from '@angular/core';
import { FlighsModel } from 'src/app/models/flighs-model';
import { HttpClient } from '@angular/common/http';
import { Chart } from 'chart.js';
import { PlanesModel } from 'src/app/models/planes-model';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-flight-data',
  templateUrl: './flight-data.component.html',
  styleUrls: ['./flight-data.component.scss']
})
export class FlightDataComponent implements OnInit {
  data: FlighsModel[];  
  url1 = `${ environment.API_HOST }/api/Flights/months`;  // number of flights per month
  url2 = `${ environment.API_HOST }/api/Flights/destinations?origin=JFK`; //JFK
  url3 = `${ environment.API_HOST }/api/Flights/destinations?origin=EWR`; //EWR
  url4 = `${ environment.API_HOST }/api/Flights/destinations?origin=LGA`; //LGA
 
  Month = [];  
  Flight = [];  
  NumberOfFlights = [];
  DestinationJFK = [];
  DestinationEWR = [];
  DestinationLGA = [];
  barchart = [];  
  constructor(private http: HttpClient) { }  
  ngOnInit() {  
    this.http.get(this.url1).subscribe((result: FlighsModel[]) => {  
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

    this.http.get(this.url2).subscribe((result: FlighsModel[]) => {  
      result.forEach(x => {  
        this.DestinationJFK.push(x.destination);  
        this.NumberOfFlights.push(x.numberOfFlights);  
      });  
      this  
      this.barchart = new Chart('canvas2', {  
        type: 'bar',  
        data: {  
          labels: this.DestinationJFK,  
          datasets: [  
            {  
              data: this.NumberOfFlights,  
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

    this.http.get(this.url3).subscribe((result: FlighsModel[]) => {  
      result.forEach(x => {  
        this.DestinationEWR.push(x.destination);  
        this.NumberOfFlights.push(x.numberOfFlights);  
      });  
      this  
      this.barchart = new Chart('canvas3', {  
        type: 'bar',  
        data: {  
          labels: this.DestinationEWR,  
          datasets: [  
            {  
              data: this.NumberOfFlights,  
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

    this.http.get(this.url4).subscribe((result: FlighsModel[]) => {  
      result.forEach(x => {  
        this.DestinationLGA.push(x.destination);  
        this.NumberOfFlights.push(x.numberOfFlights);  
      });  
      this  
      this.barchart = new Chart('canvas4', {  
        type: 'bar',  
        data: {  
          labels: this.DestinationLGA,  
          datasets: [  
            {  
              data: this.NumberOfFlights,  
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
              display: true,
              plugins: {
                sort:
                {
                  enable: false,
                  mode: 'function',
                  reference: [],
                  sortBy: 'label',
                  order: 'asc',
                }
              },
            }],  
            yAxes: [{  
              display: true  
            }],  
          }  
        }  
      });  
    });  
  }  
}
