import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListagemCaminhaoComponent } from './rastreador/listagem-caminhao/listagem-caminhao.component';
import { NovoCaminhaoComponent } from './rastreador/novo-caminhao/novo-caminhao.component';
import { NovaMarcaComponent } from './rastreador/nova-marca/nova-marca.component';

const routes: Routes = [

  { path: 'listagemcaminhao', component: ListagemCaminhaoComponent },
  { path: 'cadastrarmarca', component: NovaMarcaComponent },
  { path: '', redirectTo: 'listagemcaminhao', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
