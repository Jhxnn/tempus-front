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
  mostrarSenha = false;

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
  const nome = res.name
  if (token) {
    localStorage.setItem('token', token);
    if (nome) {
      localStorage.setItem('nome', nome);
    }
    this.router.navigate(['/empresas']);
  } else {
    this.exibirErro('Token inválido recebido.');
  }
  this.carregando = false;
}
,
        error: (err) => {
          this.exibirErro(err.error?.error || 'Erro ao fazer login');
          this.carregando = false;
        }
      });
  }

  exibirErro(mensagem: string) {
    this.erro = mensagem;
    setTimeout(() => {
      this.erro = '';
    }, 8000); // 8 segundos
  }
}
