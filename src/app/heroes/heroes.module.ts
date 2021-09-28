import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
  declarations: [
    HeroeComponent,
    ListadoComponent
  ],
  // ahora definimos las cosas que deben ser visibles fuera del modulo
  exports: [
    ListadoComponent
  ],
  // aqui van los modulos
  imports: [
    // CommonModule
    // en la version de Angular CLI 12.2.4 parece que no es necesario el ComonModule
    //  version de TypeScript 4.3.5
  ]
})
export class HeroesModule{

}
