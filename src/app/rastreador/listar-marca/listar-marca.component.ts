import { Fabricante } from './../model/fabricante';
import { Caminhao } from './../model/caminhao';
import { Component, OnInit } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';
import { observable, map } from 'rxjs';


@Component({
  selector: 'app-listar-marca',
  templateUrl: './listar-marca.component.html',
  styleUrls: ['./listar-marca.component.css']
})
export class ListarMarcaComponent implements OnInit {
  listaFabricante: any;
  referenceTableMarca: AngularFireList<Fabricante>;

  constructor(private banco: AngularFireDatabase) {
    this.referenceTableMarca = banco.list('/fabricante');
  }

  ngOnInit(): void {
    this.iniciarArrayMarca();
  }
  iniciarArrayMarca(): void {
    this.referenceTableMarca.snapshotChanges().pipe(
      map(changes => changes.map(c => ({ key: c.payload.key, ...c.payload.val() })))
    ).subscribe(data => {
      this.listaFabricante = data;
    });
  }

}
