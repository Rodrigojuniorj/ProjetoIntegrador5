import { Fabricante } from './fabricante';

export class Caminhao {
  constructor(
    public id: number,
    public modelo: string,
    public anoFabricacao: string,
    public placa: String,
    public chassi: String,
    public renavam: String,
    public marca: Fabricante) {
  }
}
