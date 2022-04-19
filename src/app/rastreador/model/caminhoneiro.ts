export class Caminhoneiro {
  constructor(
    public cpf: string,
    public nome: string,
    public celular: String,
    public senha: String,
   ) {
  }

  public criarCaminhoneiro(caminhoneiro:Caminhoneiro) {
      return '{ "cpf": ' + caminhoneiro.cpf + ',"nome"' + caminhoneiro.nome + ',"celular":' + caminhoneiro.celular + ',"senha":' + caminhoneiro.senha + ' }'
  }
}
