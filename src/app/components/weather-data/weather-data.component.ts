import { Component, OnInit } from '@angular/core';
import { WeatherModel } from 'src/app/models/weather-model';
import { HttpClient } from '@angular/common/http';
import { Chart } from 'chart.js';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-weather-data',
  templateUrl: './weather-data.component.html',
  styleUrls: ['./weather-data.component.scss']
})
export class WeatherDataComponent implements OnInit {

  data: WeatherModel[];  
  url1 = `${ environment.API_HOST }/api/Weather/temperature?origin=JFK`;  
  TemperatureInCelsius = [];
  DateTime = []; 
  lineChart = [];  
  constructor(private http: HttpClient) { }  
  ngOnInit() {  
    this.http.get(this.url1).subscribe((result: WeatherModel[]) => {  
      result.forEach(x => {  
        this.DateTime.push(x.dateTime);  
        this.TemperatureInCelsius.push(x.temperatureInCelsius);  
      });  
      this  
      this.lineChart = new Chart('canvas', {  
        type: 'line',  
        data: {  
          labels: this.DateTime,  
          datasets: [  
            {  
              data: this.TemperatureInCelsius,  
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
              fill: true,
              showLine: false,
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
              type: 'time',
              time: {
                unit: 'month'
              } 
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
