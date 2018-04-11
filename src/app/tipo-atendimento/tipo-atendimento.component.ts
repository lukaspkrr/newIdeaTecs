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
  subscription: any;

  constructor(private servicosService: ServicosService) { }

  
    opcao(valorSelecionado) {
    this.seqSelecionada = this.servicosService.sequenciasServicos()[valorSelecionado];
    this.servicosService.selecionarSequencia(this.seqSelecionada);
    }
    
  
      ngOnInit() {
    this.servicosService.setTitulo('Tipo de atendimento');
    this.servicosService.setSubtitulo('');
    this.transitionController.animate(
      new Transition(this.transitionName, 500, TransitionDirection.In, () => console.log("Completed transition.")));
  }
}
