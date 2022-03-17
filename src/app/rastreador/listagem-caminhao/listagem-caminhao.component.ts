import { Fabricante } from './../model/fabricante';
import { Caminhao } from './../model/caminhao';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listagem-caminhao',
  templateUrl: './listagem-caminhao.component.html',
  styleUrls: ['./listagem-caminhao.component.css']
})
export class ListagemCaminhaoComponent implements OnInit {
  listaCaminhao: Caminhao[] = []
  listaFabricante: Fabricante[] = []

  constructor() { }

  ngOnInit(): void {
    this.iniciarArrayFabricante();
    this.iniciarArrayCaminhao();
  }

  iniciarArrayCaminhao():void{
    this.listaCaminhao = [
      new Caminhao(1, 'CM Constellation 17.190 ', '1949', 'BYX1241', 'AWW66914', 'REOAMN20', this.listaFabricante[0]),
    ]
  }

  iniciarArrayFabricante():void{
    this.listaFabricante = [
      new Fabricante(1, 'Volkswagen'),
      new Fabricante(2, 'Mercedes Benz'),
      new Fabricante(3, 'Volvo'),
    ]
  }

}
