import { Fabricante } from './../model/fabricante';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';
import { Component, OnInit, Input } from '@angular/core';
import { Caminhao } from '../model/caminhao';
import { observable, map } from 'rxjs';

@Component({
  selector: 'app-novo-caminhao',
  templateUrl: './novo-caminhao.component.html',
  styleUrls: ['./novo-caminhao.component.css']
})
export class NovoCaminhaoComponent implements OnInit {
  @Input()
  caminhao: any;
  @Input()
  fabricante: any;
  listaFabricante: any;
  referenceTableCaminhao: AngularFireList<Caminhao>;
  referenceTableMarca: AngularFireList<Fabricante>;

  constructor(private banco: AngularFireDatabase) {
    this.referenceTableCaminhao = banco.list('/caminhao');
    this.referenceTableMarca = banco.list('/fabricante');
  }

  ngOnInit(): void {
    this.iniciarArrayFabricante();
    this.fabricante = new Fabricante('');
    this.caminhao = new Caminhao("", "", "", "", "", this.fabricante, "", "");
  }

  iniciarArrayFabricante(): void {
    this.referenceTableMarca.snapshotChanges().pipe(
      map(changes => changes.map(c => ({ key: c.payload.key, ...c.payload.val() })))
    ).subscribe(data => {
      this.listaFabricante = data;
    });
  }

  incluirCaminhao(): void {
    if (!this.caminhao.key){
      this.caminhao['trancado'] = 0;
      this.banco.list('caminhao').push(this.caminhao)
        .then((resultado: any) => {
          console.log(resultado.key);
        })
      this.fabricante = new Fabricante('');
      this.caminhao = new Caminhao("", "", "", "", "", this.fabricante, "", "");
    } else {
      this.banco.object('/caminhao/' + this.caminhao.key).update(this.caminhao)
      this.caminhao = new Caminhao("", "", "", "", "", this.fabricante, "", "");
      this.fabricante = new Fabricante('');
    }
    //console.log(this.caminhao.key);
  }
}
