import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpresaRoutingModule } from './empresa-routing.module';
import { RegistroEmpresaComponent } from './registro-empresa/registro-empresa.component';
import { ListaEmpresasComponent } from './lista-empresas/lista-empresas.component';


@NgModule({
  declarations: [
    RegistroEmpresaComponent,
    ListaEmpresasComponent
  ],
  imports: [
    CommonModule,
    EmpresaRoutingModule
  ]
})
export class EmpresaModule { }
