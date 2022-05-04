import { Fabricante } from './fabricante';

export class Caminhao {
  constructor(
    public modelo: string,
    public anoFabricacao: string,
    public placa: String,
    public chassi: String,
    public renavam: String,
    public marca: Fabricante,
    public coordenada: any,
    public trancado: any) {
  }

  public criarCaminhao(caminhao:Caminhao) {
      return '{ "modelo": ' + caminhao.modelo + ',"anoFabricacao"' + caminhao.anoFabricacao + ',"placa":' + caminhao.placa + ',"chassi":' + caminhao.chassi + ',"renavam":' + caminhao.renavam + ',"marca":' + caminhao.marca + ', "coordenada":'+ caminhao.coordenada +', "trancado":'+ caminhao.trancado +' }'
  }
}
