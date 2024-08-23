import { Contato } from './../componentes/contato/contato';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContatoService {
  private readonly API = 'http://localhost:300/contatos';

  constructor(private http: HttpClient) {}

  //recebendo da api listando
  obterContatos(): Observable<Contato[]> {
    return this.http.get<Contato[]>(this.API);
  }

  //enviando para api
  salvarContato(contato: Contato): Observable<Contato> {
    return this.http.post<Contato>(this.API, contato);
  }

  buscarPorId(id: number): Observable<Contato> {
    const url = `${this.API}/${id}`;// precisa buscar a url e tambem o id
    return this.http.get<Contato>(url);
  }

  excluirContato(id: number): Observable<Contato> {
    const url = `${this.API}/${id}`;
    return this.http.delete<Contato>(url);
  }

  editarContato(contato: Contato): Observable<Contato> {
    const url = `${this.API}/${contato.id}`;
    return this.http.put<Contato>(url, contato);
  }

  editarOuSalvarContato(contato: Contato): Observable<Contato> {
    if (contato.id) {
      return this.editarContato(contato);
    } else {
      return this.salvarContato(contato);
    }
  }
}
