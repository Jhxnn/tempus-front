import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html'
})
export class RegistroUsuarioComponent {
  form: FormGroup;
  enviado = false;
  sucesso = false;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient
  ) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      cep: ['', Validators.required]
    });
  }

  onSubmit() {
    this.enviado = true;
    if (this.form.invalid) return;

    this.http.post('https://tempus-api-yuma.onrender.com/api/v1/register', this.form.value)
      .subscribe({
        next: () => {
          this.sucesso = true;
          this.form.reset();
          this.enviado = false;
        },
        error: () => {
          this.sucesso = false;
          alert('Erro ao registrar. Verifique os dados.');
        }
      });
  }
}
