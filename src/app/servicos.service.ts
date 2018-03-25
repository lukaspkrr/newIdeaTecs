import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class ServicosService {

  emitirTitulosComponent = new EventEmitter<string>();
  private tituloComponent: string = "";
  private subtituloComponent: string = "";

  // serviço de sequencia de questões 6 a 10 
  private seqSelecionada: any;
  private sequencias: any = [
    { idSeq: 1, seq: [6, 7] },
    { idSeq: 2, seq: [6, 7] },
    { idSeq: 3, seq: [6, 7, 9] },
    { idSeq: 4, seq: [6, 7, 9] },
    { idSeq: 5, seq: [6, 7, 9] },
    { idSeq: 6, seq: [6, 7] },
    { idSeq: 7, seq: [6, 7, 8, 9] }
  ];

  private questoes: any = [
    {
      idQst: 1,
      qstNumero: 'Questão 01',
      qstPrincipal: 'Em relação à HIGIENE E LIMPEZA desta unidade de saúde:',
      qstPrimaria: 'Qual era sua expectativa?',
      qstSecundaria: 'Qual a sua satisfação?'
    },
    {
      idQst: 2,
      qstNumero: 'Questão 02',
      qstPrincipal: 'Em relação à ESTRUTURA FÍSICA e instalações desta unidade de saúde:',
      qstPrimaria: 'Qual era sua expectativa?',
      qstSecundaria: 'Qual a sua satisfação?'
    }, {
      idQst: 3,
      qstNumero: 'Questão 03',
      qstPrincipal: 'Em relação ao TEMPO DE ESPERA PARA ATENDIMENTO nesta unidade de saúde:',
      qstPrimaria: 'Qual era sua expectativa?',
      qstSecundaria: 'Qual a sua satisfação?'
    }
  ];

  getTitulo(){
    return this.tituloComponent;
  }

  getSubtitulo(){
    return this.subtituloComponent;
}
  setTitulo(titulo: string){
    this.tituloComponent = titulo;
    this.emitirTitulosComponent.emit(this.tituloComponent);
  }

  setSubtitulo(subtitulo: string){
    this.subtituloComponent = subtitulo;
    this.emitirTitulosComponent.emit(this.subtituloComponent);
  }

  sequenciasServicos() {
    return this.sequencias;
  }

  listarSequenciaSelecionada() {
    return this.seqSelecionada;
  }

  selecionarSequencia(seq: any) {
    this.seqSelecionada = seq;
  }

  // serviço de perguntas

  listarQuestoes() {
    return this.questoes;
  }

  constructor() { }

}
