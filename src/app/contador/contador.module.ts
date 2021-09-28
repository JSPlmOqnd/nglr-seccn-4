import { NgModule } from '@angular/core';
import { ContadorComponent } from './contador/contador.component';

@NgModule({
  declarations: [
    ContadorComponent
  ],
  // ahora definimos las cosas que deben ser visibles fuera del modulo
  exports: [
    ContadorComponent
  ],
})
export class ContadorModule{

}
