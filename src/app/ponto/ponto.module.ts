import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PontoRoutingModule } from './ponto-routing.module';
import { RegistroPontoComponent } from './registro-ponto/registro-ponto.component';
import { ListaPontosComponent } from './lista-pontos/lista-pontos.component';


@NgModule({
  declarations: [
    RegistroPontoComponent,
    ListaPontosComponent
  ],
  imports: [
    CommonModule,
    PontoRoutingModule
  ]
})
export class PontoModule { }
