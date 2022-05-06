import { Fabricante } from './../model/fabricante';
import { Caminhao } from './../model/caminhao';
import { Component, OnInit, Input, Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';
import { observable, map } from 'rxjs';

@Component({
  selector: 'app-listagem-caminhao',
  templateUrl: './listagem-caminhao.component.html',
  styleUrls: ['./listagem-caminhao.component.css']
})

@Injectable({ providedIn: 'root' })
export class ListagemCaminhaoComponent implements OnInit {
  caminhao: any;

  lat:any;
  long:any;
  zoom:any;
  fabricante: any;
  stringButton: any;
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
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
    this.caminhao = Object.assign({}, caminhao);
  }

  excluirCaminhao(caminhones: any): void {
    this.banco.object('/caminhao/' + caminhones.key).remove();
  }

  localizarCaminhao(caminhones: any): void {
    this.lat = Number(caminhones.coordenada.split(',')[0]);
    this.long = Number(caminhones.coordenada.split(',')[1]);
    this.zoom = 15;
    setTimeout(() => {
        document.getElementById('click'+caminhones.placa)?.click()
    }, 4000)
  }

  trancarCaminhao(caminhones: any): void {
    if(caminhones['trancado'] == 0){
      caminhones['trancado'] = 1;

    }else{
      caminhones['trancado'] = 0;
    }
    this.banco.object('/caminhao/' + caminhones.key).update(caminhones)
  }


  iniciarArrayTarefas(): void {
    this.referenceTableCaminhao.snapshotChanges().pipe(
      map(changes => changes.map(c => ({ key: c.payload.key, ...c.payload.val() })))
    ).subscribe(data => {
      this.listaCaminhao = data;
    });
  }

}
