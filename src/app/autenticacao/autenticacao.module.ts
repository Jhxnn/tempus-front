import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutenticacaoRoutingModule } from './autenticacao-routing.module';
import { LoginUsuarioComponent } from './login-usuario/login-usuario.component';
import { RegistroUsuarioComponent } from './registro-usuario/registro-usuario.component';


@NgModule({
  declarations: [
    LoginUsuarioComponent,
    RegistroUsuarioComponent
  ],
  imports: [
    CommonModule,
    AutenticacaoRoutingModule
  ]
})
export class AutenticacaoModule { }
