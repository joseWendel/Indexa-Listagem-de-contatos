import { Routes } from '@angular/router';
import { FormularioContatoComponent } from './paginas/formulario-contato/formulario-contato.component';
import { ListaContatosComponent } from './paginas/lista-contatos/lista-contatos.component';
import { PerfilContatoComponent } from './paginas/perfil-contato/perfil-contato.component';
import { ExcluirContatoComponent } from './paginas/excluir-contato/excluir-contato.component';
import { EditarContatoComponent } from './paginas/editar-contato/editar-contato.component';

export const routes: Routes = [
  {
    path: 'formulario',
    component: FormularioContatoComponent
  },
  {
    path: 'formulario/:id',
    component: FormularioContatoComponent
  },
  {
    path: 'lista-contatos',
    component: ListaContatosComponent
  },
  {
    path: 'perfil-contato/:id',
    component: PerfilContatoComponent
  },
  {
    path: 'editar-contato/:id',
    component: EditarContatoComponent
  },
  {
    path: 'excluir-contato/:id',
    component: ExcluirContatoComponent
  },
  {
    path: '',
    redirectTo: '/lista-contatos',
    pathMatch: 'full'
  },
];
