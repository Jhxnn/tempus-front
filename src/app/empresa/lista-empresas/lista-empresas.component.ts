import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-empresa',
  templateUrl: './lista-empresas.component.html'
})
export class ListaEmpresaComponent implements OnInit {
  empresas: any[] = [];
  carregando = false;

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.buscarEmpresas();
  }

  buscarEmpresas() {
    this.carregando = true;
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({ Authorization: `Bearer ${token}` });

    this.http.get<any[]>('https://tempus-api-yuma.onrender.com/api/v1/enterprise', { headers })
      .subscribe({
        next: (res) => {
          this.empresas = res;
          this.carregando = false;
        },
        error: () => {
          this.carregando = false;
        }
      });
  }

  irParaCadastro() {
    this.router.navigate(['/cadastrar-empresa']);
  }
}
