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
    this.erro = '';
    if (this.form.invalid) return;

    this.carregando = true;

    this.http.post<any>('https://tempus-api-yuma.onrender.com/api/v1/user/login', this.form.value)
      .subscribe({
        next: (res) => {
          localStorage.setItem('token', res.token);
          this.router.navigate(['/empresa']); // ajuste a rota conforme seu layout
          this.carregando = false;
        },
        error: () => {
          this.erro = 'Credenciais inválidas ou erro no servidor.';
          this.carregando = false;
        }
      });
  }
}
