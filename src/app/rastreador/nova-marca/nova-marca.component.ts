import { Component, OnInit } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';
import { Fabricante } from './../model/fabricante';
import { Caminhao } from '../model/caminhao';

@Component({
  selector: 'app-nova-marca',
  templateUrl: './nova-marca.component.html',
  styleUrls: ['./nova-marca.component.css']
})
export class NovaMarcaComponent implements OnInit {
  caminhao:any;
  fabricante:any;
  referenceTableFabricante: AngularFireList<Fabricante>;

  constructor(private banco: AngularFireDatabase) {
    this.referenceTableFabricante = banco.list('/fabricante');
  }

  ngOnInit(): void {
    this.fabricante = new Fabricante("")
  }

  incluirMarca():void{
    this.banco.list('fabricante').push(this.fabricante)
    .then((resultado:any) => {
        console.log(resultado.key);
    })
  }

}
