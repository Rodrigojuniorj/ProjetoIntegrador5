import { Fabricante } from './../model/fabricante';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';
import { Component, OnInit } from '@angular/core';
import { Caminhao } from '../model/caminhao';
import { observable, map } from 'rxjs';

@Component({
  selector: 'app-novo-caminhao',
  templateUrl: './novo-caminhao.component.html',
  styleUrls: ['./novo-caminhao.component.css']
})
export class NovoCaminhaoComponent implements OnInit {
  caminhao:any;
  fabricante:any;
  listaFabricante: any;
  referenceTableCaminhao: AngularFireList<Caminhao>;
  referenceTableMarca: AngularFireList<Fabricante>;

  constructor(private banco: AngularFireDatabase) {
    this.referenceTableCaminhao = banco.list('/caminhao');
    this.referenceTableMarca = banco.list('/fabricante');
  }

  ngOnInit(): void {
    this.iniciarArrayFabricante();
    this.fabricante = new Fabricante('')
    this.caminhao = new Caminhao("","","","","",this.fabricante);
  }

  iniciarArrayFabricante(): void {
    this.referenceTableMarca.snapshotChanges().pipe(
      map(changes => changes.map(c => ({ key: c.payload.key, ...c.payload.val() })))
    ).subscribe(data => {
      this.listaFabricante = data;
    });
  }

  incluirCaminhao():void{
    this.banco.list('caminhao').push(this.caminhao)
    .then((resultado:any) => {
        console.log(resultado.key);
    })
  }

}
