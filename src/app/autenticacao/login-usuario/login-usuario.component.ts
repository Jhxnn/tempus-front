import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-usuario',
  templateUrl: './login-usuario.component.html'
})
export class LoginUsuarioComponent {
  form: FormGroup;
  enviado = false;
  erro = '';
  carregando = false;
  mostrarSenha = false

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
  this.enviado = true;
  if (this.form.invalid) return;

  this.carregando = true;
  this.erro = '';

  this.http.post<any>('https://tempus-api-yuma.onrender.com/api/v1/user/login', this.form.value)
    .subscribe({
      next: (res) => {
        const token = res.token;
        if (token) {
          localStorage.setItem('token', token);
          this.router.navigate(['/empresa']);
        } else {
          this.erro = 'Token inválido recebido.';
        }
        this.carregando = false;
      },
      error: (err) => {
        this.erro = err.error?.error || 'Erro desconhecido';
        this.carregando = false;
      }
    });
}

}
