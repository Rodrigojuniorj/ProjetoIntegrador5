import { Component } from '@angular/core';
import { ListagemCaminhaoComponent } from './rastreador/listagem-caminhao/listagem-caminhao.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public caminhao: ListagemCaminhaoComponent){

  }
  title = 'ProjetoIntegrador5';



}
