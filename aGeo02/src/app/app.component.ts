import { Component, OnInit } from '@angular/core';
import { PlacesService } from './services/places.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'aGeo02';

  constructor (private placeSvc:PlacesService) {}

  ngOnInit():void{
    console.log(this.placeSvc.getUserLocation());
  }

}
