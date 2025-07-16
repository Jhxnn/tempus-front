import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro-empresa',
  templateUrl: './registro-empresa.component.html'
})
export class RegistroEmpresaComponent {
  form: FormGroup;
  enviado = false;
  sucesso = false;
  erro = '';
  carregando = false;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {
    this.form = this.fb.group({
      nome: ['', Validators.required],
      cnpj: ['', [Validators.required, Validators.pattern(/^\d{14}$/)]],
      endereco: ['', Validators.required]
    });
  }

  onSubmit() {
    this.enviado = true;
    if (this.form.invalid) return;

    this.carregando = true;
    this.erro = '';
    const token = localStorage.getItem('token');

    this.http.post('https://tempus-api-yuma.onrender.com/api/v1/enterprise', this.form.value, {
      headers: { Authorization: `Bearer ${token}` }
    }).subscribe({
      next: () => {
        this.sucesso = true;
        this.carregando = false;
        setTimeout(() => this.router.navigate(['/empresas']), 2000);
      },
      error: (err) => {
        this.erro = err.error?.error || 'Erro ao registrar empresa.';
        this.carregando = false;
        setTimeout(() => this.erro = '', 8000);
      }
    });
  }
}
