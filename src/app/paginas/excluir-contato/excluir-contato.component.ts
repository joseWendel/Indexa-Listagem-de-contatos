import { Contato } from '../../componentes/contato/contato';
import { ContatoService } from './../../services/contato.service';
import { Component, OnInit,} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from '../../componentes/container/container.component';

import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-excluir-contato',
  standalone: true,
  imports: [
    ContainerComponent,
    RouterLink,
    CommonModule,
  ],
  templateUrl: './excluir-contato.component.html',
  styleUrl: './excluir-contato.component.css',
})
export class ExcluirContatoComponent implements OnInit {
  contato: Contato = {
    id: 0,
    nome: '',
    telefone: '',
    email: '',
    aniversario: '',
    redes: '',
    avatar: '',
  };

  constructor(
    private activatedRoute: ActivatedRoute,
    private contatoService: ContatoService,
    private router: Router
  ) {}

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.contatoService.buscarPorId(parseInt(id)).subscribe((contato: Contato) => {
          this.contato = contato;
      });
    }
  }

  excluir() {
    if (this.contato.id) {
      this.contatoService.excluirContato(this.contato.id).subscribe(() => {
        this.router.navigateByUrl('/lista-contatos');
      });
    }
  }
}
