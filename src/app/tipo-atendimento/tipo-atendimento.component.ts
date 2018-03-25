import { TransitionController, Transition, TransitionDirection } from 'ng2-semantic-ui';
import { ServicosService } from './../servicos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tipo-atendimento',
  templateUrl: './tipo-atendimento.component.html',
  styleUrls: ['./tipo-atendimento.component.scss']
})
export class TipoAtendimentoComponent implements OnInit {
  public transitionController = new TransitionController();
  transitionName:string = "fly left"

  sequencias: any;
  seqSelecionada: any;

  constructor(private servicosService: ServicosService) {
    this.sequencias = servicosService.sequenciasServicos();
  }

  opcao(valorSelecionada) {
    this.seqSelecionada = this.sequencias[valorSelecionada];
    console.log(this.seqSelecionada);
  } 

  ngOnInit() {
    this.transitionController.animate(
      new Transition(this.transitionName, 500, TransitionDirection.In, () => console.log("Completed transition.")));
  }

  enviarSequencia() {
    this.servicosService.selecionarSequencia(this.seqSelecionada);
  }

}
