import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpresaRoutingModule } from './empresa-routing.module';
import { RegistroEmpresaComponent } from './registro-empresa/registro-empresa.component';
import { ListaEmpresaComponent } from './lista-empresas/lista-empresas.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    RegistroEmpresaComponent,
    ListaEmpresaComponent 
  ],
  imports: [
    CommonModule,
    EmpresaRoutingModule,
    ReactiveFormsModule 
  ]
})
export class EmpresaModule { }
