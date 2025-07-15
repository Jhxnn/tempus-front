import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginUsuarioComponent } from './autenticacao/login-usuario/login-usuario.component';
import { RegistroUsuarioComponent } from './autenticacao/registro-usuario/registro-usuario.component';
import { ListaEmpresaComponent } from './empresa/lista-empresas/lista-empresas.component';
import { RegistroEmpresaComponent } from './empresa/registro-empresa/registro-empresa.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  // Autenticação
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginUsuarioComponent },
  { path: 'registro', component: RegistroUsuarioComponent },

  // Empresas (rotas protegidas)
  { path: 'empresas', component: ListaEmpresaComponent, canActivate: [AuthGuard] },
  { path: 'cadastrar-empresa', component: RegistroEmpresaComponent, canActivate: [AuthGuard] }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
