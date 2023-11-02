import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherDetailComponent } from './components/weather-detail/weather-detail.component';
import { FechaAnombreDiaPipe } from './pipes/fecha-anombre-dia.pipe';
import { FormatearFechaPipe } from './pipes/formatear-fecha.pipe';

@NgModule({
  declarations: [
    AppComponent,
    WeatherDetailComponent,
    FechaAnombreDiaPipe,
    FormatearFechaPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
