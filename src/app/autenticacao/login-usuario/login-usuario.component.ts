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

    this.http.post<any>('https://tempus-api-yuma.onrender.com/api/v1/login', this.form.value)
      .subscribe({
        next: (res) => {
          localStorage.setItem('token', res.token);
          this.router.navigate(['/empresa']); // ajuste o caminho após login
        },
        error: () => {
          this.erro = 'Credenciais inválidas ou erro no servidor.';
        }
      });
  }
}
