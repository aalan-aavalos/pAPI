import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Location{
  latitude: String;
  longitude: String;
}

@Injectable({
  providedIn: 'root'
})
export class GeoService {

  constructor(private http:HttpClient) { }

  getLocation(){
    return this.http.get<Location>('http://api.ipapi.com/api/check?access_key=');
  }
}
