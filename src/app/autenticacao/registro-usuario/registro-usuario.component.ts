import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.scss']
})
export class RegistroUsuarioComponent {
  form: FormGroup;
  enviado = false;
  sucesso = false;
  mostrarSenha: boolean = false;
  erro = '';
  carregando: boolean = false;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {
    this.form = this.fb.group({
  name: ['', Validators.required],
  email: ['', [Validators.required, Validators.email]],
  password: ['', [
    Validators.required,
    Validators.minLength(8),
    Validators.pattern(/^(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/)
  ]],
  cep: ['', Validators.required]
});

  }

  onSubmit() {
    this.enviado = true;

    if (this.form.invalid) return;

    this.carregando = true;
    this.erro = '';
    this.sucesso = false;

    const usuario = this.form.value;

    this.http.post('https://tempus-api-yuma.onrender.com/api/v1/user/register', usuario)
      .subscribe({
        next: () => {
          this.sucesso = true;
          this.carregando = false;
          this.form.reset();
          this.enviado = false;

          setTimeout(() => {
            this.router.navigate(['/login']);
          }, 2000);
        },
      error: (err) => {
  this.erro = err.error?.error || 'Erro ao registrar';
  this.carregando = false;

  setTimeout(() => {
    this.erro = '';
  }, 8000); // ← agora o erro ficará visível por 5 segundos
}
      });
  }
}
