import { Component } from '@angular/core';
import { PlacesService } from 'src/app/services/places.service';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent {
  constructor (private placeSvc:PlacesService) {}

  ngOnInit(){
    console.log(this.placeSvc.getUserLocation)
  }
}
