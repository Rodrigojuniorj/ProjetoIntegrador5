import { Component, OnInit } from '@angular/core';
import { Fabricante } from './../model/fabricante';
import { Caminhao } from './../model/caminhao';
import { Caminhoneiro } from '../model/caminhoneiro';
import { Garagem } from '../model/garagem';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';
import { observable, map } from 'rxjs';

@Component({
  selector: 'app-rastreio',
  templateUrl: './rastreio.component.html',
  styleUrls: ['./rastreio.component.css']
})
export class RastreioComponent implements OnInit {
  listaGaragem: any;
  garagem: any;
  referenceTableCaminhao: AngularFireList<Caminhao>;
  referenceTableMarca: AngularFireList<Fabricante>;
  referenceTableGaragem: AngularFireList<Garagem>;
  referenceTableCaminhoneiro: AngularFireList<Caminhoneiro>;

  constructor(private banco: AngularFireDatabase) {
    this.referenceTableCaminhao = banco.list('/caminhao');
    this.referenceTableCaminhoneiro = banco.list('/caminhoneiro');
    this.referenceTableGaragem = banco.list('/garagem');
    this.referenceTableMarca = banco.list('/fabricante');
  }

  ngOnInit(): void {
    this.iniciarArrayGaragem();
  }

  tamanho: any;
  items: any;
  localizarCaminhao(garagem: any): void{
    this.referenceTableCaminhao.snapshotChanges().pipe(
      map(changes => changes.map(c => ({ placa: 'DXX-6111' })))
    ).subscribe(data => {
      this.tamanho = data.length

    });

  }

  iniciarArrayGaragem(): void {
    this.referenceTableGaragem.snapshotChanges().pipe(
      map(changes => changes.map(c => ({ key: c.payload.key, ...c.payload.val() })))
    ).subscribe(data => {
      this.listaGaragem = data;
      console.log(this.listaGaragem)
    });
  }

}
