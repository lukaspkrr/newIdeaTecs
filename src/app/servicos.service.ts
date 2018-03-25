import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class ServicosService {

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
      qstNumero: "Questão 01",
      qstPrincipal: "Em relação à HIGIENE E LIMPEZA desta unidade de saúde:",
      qstPrimaria: "Qual era sua expectativa?",
      qstSecundaria: "Qual a sua satisfação?"
    },
    {
      idQst: 2,
      qstNumero: "Questão 02",
      qstPrincipal: "Em relação à HIGIENE E LIMPEZA desta unidade de saúde:",
      qstPrimaria: "Qual era sua expectativa?",
      qstSecundaria: "Qual a sua satisfação?"
    }, {
      idQst: 3,
      qstNumero: "Questão 03",
      qstPrincipal: "Em relação à HIGIENE E LIMPEZA desta unidade de saúde:",
      qstPrimaria: "Qual era sua expectativa?",
      qstSecundaria: "Qual a sua satisfação?"
    }
  ]

  sequenciasServicos() {
    return this.sequencias
  }

  listarSequenciaSelecionada() {
    return this.seqSelecionada
  }

  selecionarSequencia(seq: any) {
    this.seqSelecionada = seq
  }

  // serviço de perguntas

  listarQuestoes(id: string) {
    for (let i = 0; i < this.questoes.length; i++) {

      console.log(id, this.questoes[i].idQst);

      if (id == this.questoes[i].idQst) {
        return this.questoes[i];
      }
    }
  }





  constructor() { }

}
