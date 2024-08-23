import { Contato } from './../../componentes/contato/contato';
import { ContatoService } from './../../services/contato.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Route, Router, RouterLink } from '@angular/router';
import { ContainerComponent } from '../../componentes/container/container.component';
import { SeparadorComponent } from '../../componentes/separador/separador.component';
import { EditarContatoComponent } from '../editar-contato/editar-contato.component';
import { CabecalhoComponent } from '../../componentes/cabecalho/cabecalho.component';

@Component({
  selector: 'app-perfil-contato',
  standalone: true,
  imports: [
    CommonModule,
    ContainerComponent,
    RouterLink,
    SeparadorComponent,
    EditarContatoComponent,
    CabecalhoComponent,
  ],
  templateUrl: './perfil-contato.component.html',
  styleUrl: './perfil-contato.component.css',
})
export class PerfilContatoComponent implements OnInit {
  contato: Contato = {
    id: 0,
    nome: '',
    avatar: '',
    telefone: '',
    email: '',
    aniversario: '',
    redes: '',
  };

  constructor(
    private activatedRoute: ActivatedRoute,
    private contatoService: ContatoService,
    private router: Router
  ) {}
  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');// snapshot - caprtura dos dados e paraMap está acessando a rota desta captura
    if (id) {
      this.contatoService.buscarPorId(parseInt(id)).subscribe((contato: Contato) => {
          this.contato = contato;
        });
    }
  }
}
