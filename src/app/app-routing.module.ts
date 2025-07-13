import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginUsuarioComponent } from './autenticacao/login-usuario/login-usuario.component';
import { RegistroUsuarioComponent } from './autenticacao/registro-usuario/registro-usuario.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },  
  { path: 'login', component: LoginUsuarioComponent },
  { path: 'registro', component: RegistroUsuarioComponent }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
