import { Component, OnInit, Input } from '@angular/core';
import { Caminhoneiro } from '../model/caminhoneiro';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';
@Component({
  selector: 'app-novo-caminhoneiro',
  templateUrl: './novo-caminhoneiro.component.html',
  styleUrls: ['./novo-caminhoneiro.component.css']
})
export class NovoCaminhoneiroComponent implements OnInit {
  @Input()
  caminhoneiro: any;
  referenceTableCaminhoneiro: AngularFireList<Caminhoneiro>;

  constructor(private banco: AngularFireDatabase) {
    this.referenceTableCaminhoneiro = banco.list('/caminhoneiro');
  }

  ngOnInit(): void {
    this.caminhoneiro = new Caminhoneiro("","","","")
  }

  incluirCaminhoneiro():void{
    if (!this.caminhoneiro.key) {
      this.banco.list('caminhoneiro').push(this.caminhoneiro)
      .then((resultado:any) => {
          console.log(resultado.key);
      })
      this.caminhoneiro = new Caminhoneiro("","","","");
    }else{
      this.banco.object('/caminhoneiro/' + this.caminhoneiro.key).update(this.caminhoneiro)
      this.caminhoneiro = new Caminhoneiro("","","","");
    }
  }

}
