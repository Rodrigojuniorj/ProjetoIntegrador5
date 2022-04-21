import { Caminhao } from './caminhao';
import { Caminhoneiro } from './caminhoneiro';

export class Garagem {
  constructor(
    public caminhoneiro: Caminhoneiro,
    public caminhao: Caminhao,) {
  }

  public criarGaragem(garagem:Garagem) {
      return '{ "caminhoneiro": ' + garagem.caminhoneiro + ',"caminhao"' + garagem.caminhao + '}'
  }
}
