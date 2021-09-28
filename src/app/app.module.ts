import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContadorComponent } from './contador/contador/contador.component';
import { HeroesModule } from './heroes/heroes.module';
import { ContadorModule } from './contador/contador.module';

/* Tarea:
Crear un modúlo llamado ContadorModule
declaraciones y exportaciones */

@NgModule({
  declarations: [
    AppComponent,
    // ContadorComponent
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    ContadorModule
    // importar aquí
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
