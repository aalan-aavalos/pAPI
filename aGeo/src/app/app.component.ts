import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'aGeo';

  position = {
    lat: 21.168616391601283,
    lng: -100.93140713476811
  };

  label = {
    color: 'white',
    text: 'Auditorio UTNG'
  };
}
