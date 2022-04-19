import { Component, OnInit, Input } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';
import { Fabricante } from './../model/fabricante';

@Component({
  selector: 'app-nova-marca',
  templateUrl: './nova-marca.component.html',
  styleUrls: ['./nova-marca.component.css']
})
export class NovaMarcaComponent implements OnInit {
  @Input()
  fabricante: any;
  @Input()
  caminhao:any;
  referenceTableFabricante: AngularFireList<Fabricante>;

  constructor(private banco: AngularFireDatabase) {
    this.referenceTableFabricante = banco.list('/fabricante');
  }

  ngOnInit(): void {
    this.fabricante = new Fabricante("")
  }

  incluirMarca():void{
    if (!this.fabricante.key) {
      this.banco.list('fabricante').push(this.fabricante)
      .then((resultado:any) => {
          console.log(resultado.key);
      })
      this.fabricante = new Fabricante('');
    }else{
      this.banco.object('/fabricante/' + this.fabricante.key).update(this.fabricante)
      this.fabricante = new Fabricante('');
    }
  }

}
