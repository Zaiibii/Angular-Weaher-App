import { Component } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { WeatherData } from './models/weather.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyWeatherapp';
  arr = Array<WeatherData>
  constructor(private weatherService:WeatherService){}

  CityName:string='Wellington';
  weatherData?: WeatherData;  

  ngOnInit(){
    this.getWeatherData(this.CityName);
  }

  onSubmit(){
    this.getWeatherData(this.CityName);
    this.CityName='';
    console.log('Form submitted');
  }

  private getWeatherData(CityName:string){
    console.log(CityName)
    this.weatherService.getWeatherData(CityName).subscribe({
      next:(response)=>{
        this.weatherData = response;
        console.log(response);
      }
    })
  }
}
