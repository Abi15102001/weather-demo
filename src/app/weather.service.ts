import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from '../environment'
@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  
  // private apiKey ='2fce85d12eec67e870cd6ce6464a5865';
  // private apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}';
  constructor(private http :HttpClient){}

  searchWeather(city:string):Observable <any> {
return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${environment.apiKey}`)
  }
}

