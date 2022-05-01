import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListagemCaminhaoComponent } from './rastreador/listagem-caminhao/listagem-caminhao.component';
import { ListarMarcaComponent } from './rastreador/listar-marca/listar-marca.component';
import { ListagemCaminhoneiroComponent } from './rastreador/listagem-caminhoneiro/listagem-caminhoneiro.component';
import { ListagemGaragemComponent } from './rastreador/listagem-garagem/listagem-garagem.component';
import { RastreioComponent } from './rastreador/rastreio/rastreio.component';

const routes: Routes = [

  { path: 'listagemcaminhao', component: ListagemCaminhaoComponent },
  { path: 'listarmarca', component: ListarMarcaComponent },
  { path: 'listagemcaminhoneiro', component: ListagemCaminhoneiroComponent },
  { path: 'listagemgaragem', component: ListagemGaragemComponent },
  { path: 'rastreio', component: RastreioComponent },
  { path: '', redirectTo: 'listagemcaminhao', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
