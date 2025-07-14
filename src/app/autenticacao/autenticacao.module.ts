import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutenticacaoRoutingModule } from './autenticacao-routing.module';
import { LoginUsuarioComponent } from './login-usuario/login-usuario.component';
import { RegistroUsuarioComponent } from './registro-usuario/registro-usuario.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskDirective } from 'ngx-mask';


@NgModule({
  declarations: [
    LoginUsuarioComponent,
    RegistroUsuarioComponent
  ],
  imports: [
    CommonModule,
    AutenticacaoRoutingModule,
    ReactiveFormsModule,
    NgxMaskDirective
  ]
})
export class AutenticacaoModule { }
