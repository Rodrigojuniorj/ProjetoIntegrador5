import { Fabricante } from './../model/fabricante';
import { Caminhao } from './../model/caminhao';
import { Component, OnInit, Input } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';
import { observable, map } from 'rxjs';


@Component({
  selector: 'app-listagem-caminhao',
  templateUrl: './listagem-caminhao.component.html',
  styleUrls: ['./listagem-caminhao.component.css']
})

export class ListagemCaminhaoComponent implements OnInit {
  caminhao: any;

  @Input()
  coordenada: any;
  listaFabricante: any;
  listaCaminhao: any;
  referenceTableCaminhao: AngularFireList<Caminhao>;
  referenceTableMarca: AngularFireList<Fabricante>;


  constructor(private banco: AngularFireDatabase) {
    this.referenceTableCaminhao = banco.list('/caminhao');
    this.referenceTableMarca = banco.list('/fabricante');
  }

  ngOnInit(): void {
    this.iniciarArrayTarefas();
  }

  editarCaminhao(caminhao: any) {
    this.caminhao = Object.assign({}, caminhao);
  }

  excluirCaminhao(caminhones: any): void {
    this.banco.object('/caminhao/' + caminhones.key).remove();
  }

  localizarCaminhao(caminhones: any): void {
    this.coordenada = caminhones.coordenada
    // this.banco.object('/caminhao/' + caminhones.placa);
  }
  iniciarArrayTarefas(): void {
    this.referenceTableCaminhao.snapshotChanges().pipe(
      map(changes => changes.map(c => ({ key: c.payload.key, ...c.payload.val() })))
    ).subscribe(data => {
      this.listaCaminhao = data;
    });
  }

}
