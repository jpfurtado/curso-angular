import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeiroComponenteComponent } from './componentes/primeiro-componente/primeiro-componente.component';
import { DadosPaiComponent } from './componentes/dados-pai/dados-pai.component';
import { DiretivasComponent } from './componentes/diretivas/diretivas.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimeiroComponenteComponent,
    DadosPaiComponent,
    DiretivasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
