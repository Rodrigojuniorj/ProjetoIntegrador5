import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListagemCaminhaoComponent } from './listagem-caminhao/listagem-caminhao.component';
import { NovoCaminhaoComponent } from './novo-caminhao/novo-caminhao.component';



@NgModule({
  declarations: [
    ListagemCaminhaoComponent,
    NovoCaminhaoComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ListagemCaminhaoComponent,
    NovoCaminhaoComponent
  ]
})
export class RastreadorModule { }
