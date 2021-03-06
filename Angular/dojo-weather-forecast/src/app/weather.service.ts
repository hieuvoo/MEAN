import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';

@Injectable()
export class WeatherService {
    cities = {
        dc: 4140963,
        burbank: 4885983,
        chicago: 4887398,
        dallas: 4190598,
        sanjose: 5392171,
        seattle: 5809844,
    }
  constructor(private _http: Http) { }

  getWeather(city: string){
      return this._http.get(`http://api.openweathermap.org/data/2.5/weather?id=${this.cities[city]}&units=imperial&appid=b44ef9af5b8813c78971c1f7882def29`)
      .map(data => data.json())
      .toPromise();
  }
}
