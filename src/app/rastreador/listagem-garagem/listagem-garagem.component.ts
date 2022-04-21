import { Component, OnInit } from '@angular/core';
import { Fabricante } from './../model/fabricante';
import { Caminhao } from './../model/caminhao';
import { Caminhoneiro } from '../model/caminhoneiro';
import { Garagem } from '../model/garagem';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';
import { observable, map } from 'rxjs';

@Component({
  selector: 'app-listagem-garagem',
  templateUrl: './listagem-garagem.component.html',
  styleUrls: ['./listagem-garagem.component.css']
})
export class ListagemGaragemComponent implements OnInit {
  caminhao: any;
  fabricante: any;
  caminhoneiro: any;
  garagem: any;

  listaFabricante: any;
  listaCaminhao: any;
  listaCaminhoneiro: any;
  listaGaragem: any;
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

  editarGaragem(garagem: any) {
    this.garagem = Object.assign({}, garagem);
  }

  excluirGaragem(garagem: any): void {
    this.banco.object('/garagem/' + garagem.key).remove();
  }

  iniciarArrayGaragem(): void {
    this.referenceTableGaragem.snapshotChanges().pipe(
      map(changes => changes.map(c => ({ key: c.payload.key, ...c.payload.val() })))
    ).subscribe(data => {
      this.listaGaragem = data;
    });
  }

}
