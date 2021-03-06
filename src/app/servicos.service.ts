import { Injectable, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ServicosService {

  emitirTitulosComponent = new EventEmitter<string>();


  private tituloComponent: string = "";
  private subtituloComponent: string = "";

  // serviço de sequencia de questões 6 a 10 
  public seqSelecionada: any;
  private sequencias: any = [
    { idSeq: 1, seq: [6, 7] , opcional: 'MÉDICO(A)' },
    { idSeq: 2, seq: [6, 7] , opcional: 'ENFERMEIRO(A)' },
    { idSeq: 3, seq: [6, 7, 9] , opcional: 'DENTISTA' },
    { idSeq: 4, seq: [6, 7, 9] , opcional: 'no SETOR DE EXAMES ou LABORATÓRIO' },
    { idSeq: 5, seq: [6, 7, 9] , opcional: 'FISIOTERAPEUTA' },
    { idSeq: 6, seq: [6, 7] , opcional: 'FARMÁCIA' },
    { idSeq: 7, seq: [6, 7, 8, 9] , opcional: 'NUTRICIONISTA' }
  ];

  public questoes: any = [
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

    },
    {

      idQst: 3,
      qstNumero: 'Questão 03',
      qstPrincipal: 'Em relação ao TEMPO DE ESPERA PARA ATENDIMENTO nesta unidade de saúde:',
      qstPrimaria: 'Qual era sua expectativa?',
      qstSecundaria: 'Qual a sua satisfação?'
    },
    {
      idQst: 4,
      qstNumero: 'Questão 04',
      qstPrincipal: 'Em relação à DISPONIBILIDADE e VONTADE PARA AJUDAR da equipe desta unidade de saúde:',
      qstPrimaria: 'Qual era sua expectativa?',
      qstSecundaria: 'Qual a sua satisfação?'
    }, 
    {
      idQst: 5,
      qstNumero: 'Questão 05',
      qstPrincipal: 'Em relação ao ACOLHIMENTO, GENTILEZA e SIMPATIA da equipe desta unidade de saúde:',
      qstPrimaria: 'Qual era sua expectativa?',
      qstSecundaria: 'Qual a sua satisfação?'
    }, 
    {
      idQst: 6,
      qstNumero: 'Questão 06',
      qstPrincipal1: 'Em relação à ATUAÇÃO do(a) ',
      qstPrincipal2: ' para a RESOLUÇÃO do seu problema de saúde:',
      qstPrimaria: 'Qual era sua expectativa?',
      qstSecundaria: 'Qual a sua satisfação?'
    },
    {
      idQst: 7,
      qstNumero: 'Questão 07',
      qstPrincipal1: 'Qual sua satisfação com o ATENDIMENTO do(a) ',
      qstPrincipal2: ' recebido nesta unidade de saúde?',
      qstPrimaria: 'Qual era sua expectativa?',
      qstSecundaria: 'Qual a sua satisfação?'
    },
    {
      idQst: 8,
      qstNumero: 'Questão 08',
      qstPrincipal1: 'Qual sua satisfação com o ATENDIMENTO ',
      qstPrincipal2: ' desta unidade de saúde?',
      qstPrimaria: 'Qual era sua expectativa?',
      qstSecundaria: 'Qual a sua satisfação?'
    },
    {
      idQst: 9,
      qstNumero: 'Questão 09',
      qstPrincipal1: 'Em relação à ATUAÇÃO do(a) ',
      qstPrincipal2: ' para a RESOLUÇÃO do seu problema de saúde:',
      qstPrimaria: 'Qual era sua expectativa?',
      qstSecundaria: 'Qual a sua satisfação?'
    },
    {
      idQst: 10,
      qstNumero: 'Questão 10',
      qstPrincipal: 'Em relação à CONFIANÇA NO ATENDIMENTO e à COMPETÊNCIA e CAPACITAÇÃO da equipe desta unidade:',
      qstPrimaria: 'Qual era sua expectativa?',
      qstSecundaria: 'Qual a sua satisfação?'
    },
    {
      idQst: 11,
      qstNumero: 'Questão 11',
      qstPrincipal: 'Em relação ao TEMPO NA FILA de AGENDAMENTO para MARCAR VAGA de atendimento nesta unidade de saúde:',
      qstPrimaria: 'Qual era sua expectativa?',
      qstSecundaria: 'Qual a sua satisfação?'
    },
    {
      idQst: 12,
      qstNumero: 'Questão 12',
      qstPrincipal: 'Em relação à sua SATISFAÇÃO GERAL com o ATENDIMENTO nesta unidade de saúde e à AVALIAÇÃO FINAL de seu atendimento:',
      qstPrimaria: 'Qual era sua expectativa?',
      qstSecundaria: 'Qual a sua satisfação?'
    }
  ];

      // serviço de Titulo

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

    // serviço de perguntas

  sequenciasServicos() {
    return this.sequencias;
  }

  listarSequenciaSelecionada() {
   return this.seqSelecionada;
  }

  selecionarSequencia(seq: any) {
    this.seqSelecionada = seq;
  }

  listarQuestoes() {
    return this.questoes;
  }

  constructor() { 
  }

}
