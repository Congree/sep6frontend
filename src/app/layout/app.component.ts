import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
  
})

export class AppComponent {
  title = 'United Airplanes Association';

  public constructor(private titleService: Title ) { 
    titleService.setTitle("United Airplanes Association")
  }

  
}