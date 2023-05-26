import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environment/environment';
import { WeatherData } from '../models/weather.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private apiUrl: string = 'http://api.weatherapi.com/v1/forecast.json';
  private apiKey: string = 'fda8ef3a5ae747a3be091227232305';

  constructor(private http:HttpClient) { }

  getWeatherData(CityName:string):Observable<WeatherData>{
    const url = `${this.apiUrl}?key=${this.apiKey}&q=${CityName}&days=1&aqi=no&alerts=no`;
    return this.http.get<WeatherData>(url, {
      headers: new HttpHeaders()
        .set(environment.XRapidAPIHostHeaderName, environment.XRapidAPIHostHeaderValue)
        .set(environment.XRapidAPIKeyHeaderName, environment.XRapidAPIKeyHeaderValue),
      params: new HttpParams()
        .set('units', 'metric')
        .set('mode', 'json')
    });
  }
}
