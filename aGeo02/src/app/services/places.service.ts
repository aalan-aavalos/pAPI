import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  public useLocation?: [number, number];

  constructor() {
    this.getUserLocation();
  }
 
  public async getUserLocation(){
  
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        ({coords}) => {
          this.useLocation = [coords.longitude, coords.latitude];
          resolve(this.useLocation)
        },
        (err) => {
          alert('No se pudo')
          console.log(err);
          reject();
        }
      );
    });
  }
  
  /**
    navigator.geolocation.getCurrentPosition(
      ({coords})=>{
        this.useLocation = [coords.latitude, coords.longitude];
        
      }
    )
  }
  */
}