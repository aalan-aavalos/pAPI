import { Pipe, PipeTransform } from '@angular/core';
import { WeatherService } from '../service/weather.service';

@Pipe({
  name: 'fechaAnombreDia'
})
export class FechaAnombreDiaPipe implements PipeTransform {

  constructor(private weatherService:WeatherService){}

  transform(fechaComoCadena:string): string {
    fechaComoCadena = this.weatherService.parsearFecha(fechaComoCadena) + " 00:00:00";
    const dias = [
      'Domingo',
      'Lunes',
      'Martes',
      'Miercoles',
      'Jueves',
      'Viernes',
      'Sabado',
      'Domingo'
    ];

    const numeroDia = new Date(fechaComoCadena).getDate();
    const nombreDia = dias[numeroDia];
    return nombreDia;
  }

}
