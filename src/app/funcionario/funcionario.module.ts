import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FuncionarioRoutingModule } from './funcionario-routing.module';
import { RegistroFuncionarioComponent } from './registro-funcionario/registro-funcionario.component';
import { LoginFuncionarioComponent } from './login-funcionario/login-funcionario.component';
import { ListaFuncionariosComponent } from './lista-funcionarios/lista-funcionarios.component';


@NgModule({
  declarations: [
    RegistroFuncionarioComponent,
    LoginFuncionarioComponent,
    ListaFuncionariosComponent
  ],
  imports: [
    CommonModule,
    FuncionarioRoutingModule
  ]
})
export class FuncionarioModule { }
