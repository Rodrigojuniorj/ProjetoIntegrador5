import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListagemCaminhaoComponent } from './listagem-caminhao/listagem-caminhao.component';
import { NovoCaminhaoComponent } from './novo-caminhao/novo-caminhao.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NovaMarcaComponent } from './nova-marca/nova-marca.component';



@NgModule({
  declarations: [
    ListagemCaminhaoComponent,
    NovoCaminhaoComponent,
    NovaMarcaComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ListagemCaminhaoComponent,
    NovoCaminhaoComponent,
    NovaMarcaComponent
  ]
})
export class RastreadorModule { }
