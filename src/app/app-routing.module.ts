import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListagemCaminhaoComponent } from './rastreador/listagem-caminhao/listagem-caminhao.component';
import { NovoCaminhaoComponent } from './rastreador/novo-caminhao/novo-caminhao.component';

const routes: Routes = [

  { path: 'listagemcaminhao', component: ListagemCaminhaoComponent },
  { path: 'cadastrarcaminhao', component: NovoCaminhaoComponent },
  { path: '', redirectTo: 'listagemcaminhao', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
