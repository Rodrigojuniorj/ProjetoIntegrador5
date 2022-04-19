import { Component, OnInit } from '@angular/core';
import { Caminhoneiro } from '../model/caminhoneiro';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';
import { observable, map } from 'rxjs';

@Component({
  selector: 'app-listagem-caminhoneiro',
  templateUrl: './listagem-caminhoneiro.component.html',
  styleUrls: ['./listagem-caminhoneiro.component.css']
})
export class ListagemCaminhoneiroComponent implements OnInit {
  listaCaminhoneiro: any;
  caminhoneiro: any;
  referenceTableCaminhoneiro: AngularFireList<Caminhoneiro>;

  constructor(private banco: AngularFireDatabase) {
    this.referenceTableCaminhoneiro = banco.list('/caminhoneiro');
  }

  ngOnInit(): void {
    this.iniciarArrayCaminhoneiro();
  }

  editarCaminhoneiro(caminhoneiro: any) {
    this.caminhoneiro = Object.assign({}, caminhoneiro);
  }

  excluirCaminhoneiro(caminhoneiros: any): void {
    this.banco.object('/caminhoneiro/' + caminhoneiros.key).remove();
  }

  iniciarArrayCaminhoneiro(): void {
    this.referenceTableCaminhoneiro.snapshotChanges().pipe(
      map(changes => changes.map(c => ({ key: c.payload.key, ...c.payload.val() })))
    ).subscribe(data => {
      this.listaCaminhoneiro = data;
    });
  }

}
