import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListagemCaminhaoComponent } from './rastreador/listagem-caminhao/listagem-caminhao.component';
import { ListarMarcaComponent } from './rastreador/listar-marca/listar-marca.component';

const routes: Routes = [

  { path: 'listagemcaminhao', component: ListagemCaminhaoComponent },
  { path: 'listarmarca', component: ListarMarcaComponent },
  { path: '', redirectTo: 'listagemcaminhao', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
