import { Fabricante } from './../model/fabricante';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';
import { Component, OnInit } from '@angular/core';
import { Caminhao } from '../model/caminhao';

@Component({
  selector: 'app-novo-caminhao',
  templateUrl: './novo-caminhao.component.html',
  styleUrls: ['./novo-caminhao.component.css']
})
export class NovoCaminhaoComponent implements OnInit {
  caminhao:any;
  fabricante:any;
  referenceTableCaminhao: AngularFireList<Caminhao>;

  constructor(private banco: AngularFireDatabase) {
    this.referenceTableCaminhao = banco.list('/caminhao');
  }

  ngOnInit(): void {
    this.fabricante = new Fabricante(1, '')
    this.caminhao = new Caminhao("","","","","",this.fabricante);
  }

  incluirTarefa():void{
    this.banco.list('caminhao').push(this.caminhao)
    .then((resultado:any) => {
        console.log(resultado.key);
    })
  }

}
