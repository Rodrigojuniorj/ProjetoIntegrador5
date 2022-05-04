import { Component, OnInit, Input } from '@angular/core';
import { Garagem } from '../model/garagem';
import { Caminhao } from '../model/caminhao';
import { Caminhoneiro } from '../model/caminhoneiro';
import { observable, map } from 'rxjs';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';
import { Fabricante } from './../model/fabricante';


@Component({
  selector: 'app-nova-garagem',
  templateUrl: './nova-garagem.component.html',
  styleUrls: ['./nova-garagem.component.css']
})
export class NovaGaragemComponent implements OnInit {
  @Input()
  caminhao: any;
  @Input()
  caminhoneiro: any;
  @Input()
  fabricante: any;
  @Input()
  garagem: any;

  listaCaminhao: any;
  listaCaminhoneiro: any;
  listaFabricante: any;
  referenceTableCaminhao: AngularFireList<Caminhao>;
  referenceTableCaminhoneiro: AngularFireList<Caminhoneiro>;
  referenceTableMarca: AngularFireList<Fabricante>;
  referenceTableGaragem: AngularFireList<Garagem>;

  constructor(private banco: AngularFireDatabase) {
    this.referenceTableCaminhao = banco.list('/caminhao');
    this.referenceTableCaminhoneiro = banco.list('/caminhoneiro');
    this.referenceTableGaragem = banco.list('/garagem');
    this.referenceTableMarca = banco.list('/fabricante');
  }

  ngOnInit(): void {
    this.iniciarArrayCaminhao();
    this.iniciarArrayCaminhoneiro();
    this.iniciarArrayFabricante();
    this.fabricante = new Fabricante('');
    this.caminhao = new Caminhao("", "", "", "", "", this.fabricante, "", "");
    this.caminhoneiro = new Caminhoneiro("","","","")
    this.garagem = new Garagem(this.caminhoneiro, this.caminhao)
  }

  iniciarArrayFabricante(): void {
    this.referenceTableMarca.snapshotChanges().pipe(
      map(changes => changes.map(c => ({ key: c.payload.key, ...c.payload.val() })))
    ).subscribe(data => {
      this.listaFabricante = data;
    });
  }

  iniciarArrayCaminhao(): void {
    this.referenceTableCaminhao.snapshotChanges().pipe(
      map(changes => changes.map(c => ({ key: c.payload.key, ...c.payload.val() })))
    ).subscribe(data => {
      this.listaCaminhao = data;
    });
  }

  iniciarArrayCaminhoneiro(): void {
    this.referenceTableCaminhoneiro.snapshotChanges().pipe(
      map(changes => changes.map(c => ({ key: c.payload.key, ...c.payload.val() })))
    ).subscribe(data => {
      this.listaCaminhoneiro = data;
    });
  }

  incluirGaragem(): void {
    if (!this.garagem.key){
      this.banco.list('garagem').push(this.garagem)
        .then((resultado: any) => {
          console.log(resultado.key);
        })
      this.fabricante = new Fabricante('');
      this.caminhao = new Caminhao("", "", "", "", "", this.fabricante, "", "");
      this.caminhoneiro = new Caminhoneiro("","","","")
      this.garagem = new Garagem(this.caminhoneiro, this.caminhao)
    } else {
      this.banco.object('/garagem/' + this.garagem.key).update(this.garagem)
      this.caminhao = new Caminhao("", "", "", "", "", this.fabricante, "", "");
      this.fabricante = new Fabricante('');
      this.caminhoneiro = new Caminhoneiro("","","","")
      this.garagem = new Garagem(this.caminhoneiro, this.caminhao)
    }
    //console.log(this.caminhao.key);
  }

}
