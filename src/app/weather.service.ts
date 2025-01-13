// weather.service.ts
import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { weather } from '../model/weather.type';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  http = inject(HttpClient);
  apiUrl = `https://api.data.gov.sg/v1/environment/4-day-weather-forecast?date=2019-12-24`;

  // constructor(private http: HttpClient) { }

  // Method to fetch weather data
  getWeatherForecast() {
    return this.http.get<weather>(this.apiUrl);
  }
}
