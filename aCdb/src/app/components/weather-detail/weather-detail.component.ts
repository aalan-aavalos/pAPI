import { Component, OnInit, Input } from '@angular/core';
import { NgModule } from '@angular/core';

import { FechaAnombreDiaPipe } from '../../pipes/fecha-anombre-dia.pipe';
import { FormatearFechaPipe } from '../../pipes/formatear-fecha.pipe';

@Component({
  selector: 'app-weather-detail',
  templateUrl: './weather-detail.component.html',
  styleUrls: ['./weather-detail.component.css']
})
export class WeatherDetailComponent implements OnInit{
  @Input() detalles: any

  constructor() { }

  resolverImagen() {
    return `assets/${this.detalles.weather}.png`;
  }

  ngOnInit(): void {
  }
}