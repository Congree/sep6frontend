import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Chart } from 'chart.js';
import { PlanesModel } from 'src/app/models/planes-model';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-plane-data',
  templateUrl: './plane-data.component.html',
  styleUrls: ['./plane-data.component.scss']
})
export class PlaneDataComponent implements OnInit {
  data: PlanesModel[];  
  url1 = `${ environment.API_HOST }/api/Planes/manufacturers`;  
  Planes = [];
  Manufacturer = []; 
  barchart = [];  
  constructor(private http: HttpClient) { }  
  ngOnInit() {  
    this.http.get(this.url1).subscribe((result: PlanesModel[]) => {  
      result.forEach(x => {  
        this.Manufacturer.push(x.manufacturer);  
        this.Planes.push(x.planes);  
      });  
      this  
      this.barchart = new Chart('canvas', {  
        type: 'bar',  
        data: {  
          labels: this.Manufacturer,  
          datasets: [  
            {  
              data: this.Planes,  
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
  }
}
