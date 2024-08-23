import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { ContainerComponent } from '../../componentes/container/container.component';
import { SeparadorComponent } from '../../componentes/separador/separador.component';
import { ContatoService } from '../../services/contato.service';
import { EditarContatoComponent } from '../editar-contato/editar-contato.component';
import { CabecalhoComponent } from '../../componentes/cabecalho/cabecalho.component';

@Component({
  selector: 'app-formulario-contato',
  standalone: true,
  imports: [
    CommonModule,
    ContainerComponent,
    SeparadorComponent,
    ReactiveFormsModule,
    RouterLink,
    EditarContatoComponent,
    CabecalhoComponent,
  ],
  templateUrl: './formulario-contato.component.html',
  styleUrl: './formulario-contato.component.css',
})
export class FormularioContatoComponent implements OnInit {
  //representa o formulario
  contatoForm!: FormGroup;

  constructor(private contatoService: ContatoService, private router: Router) {}

  ngOnInit() {
    this.inicializarFormulario();
  }
  //iniciando o formulario
  inicializarFormulario() {
    this.contatoForm = new FormGroup({//agrupamento de campos q forma o formulario
      nome: new FormControl('', Validators.required),//controlando todos os campos
      avatar: new FormControl('', Validators.required),
      telefone: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      aniversario: new FormControl(''),
      redes: new FormControl(''),
      observacoes: new FormControl(''),
    });
  }

  obterControle(nome: string): FormControl {
    const control = this.contatoForm.get(nome);
    if (!control) {
      throw new Error('Controle de formulário não encontrado:' + nome);
    }
    return control as FormControl;
  }

  // metodo para salvar os dados de contato
  salvarContato() {
    const novoContato = this.contatoForm.value;
    this.contatoService.salvarContato(novoContato).subscribe(() => {
      this.contatoForm.reset();
      this.router.navigateByUrl('/lista-contatos');
    });
  }

  aoSelecionarArquivo(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.LerArquivo(file);
    }
  }

  LerArquivo(file: File) {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.result) {
        this.contatoForm.get('avatar')?.setValue(reader.result);
      }
    };
    reader.readAsDataURL(file);
  }

  cancelar() {
    this.contatoForm.reset();
    this.router.navigateByUrl('/lista-contatos');
  }
}
