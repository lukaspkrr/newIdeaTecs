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

  constructor(private servicosService: ServicosService) { }

    //Função para enviar a opção selecionada,envia para a função sequenciasService que esta no servicos.services.ts 
    //a variavel valorSelecionado, que depois irar retornar para o sequencia para a variavel local seqSelecionada.
    opcao(valorSelecionado) {
    this.seqSelecionada = this.servicosService.sequenciasServicos()[valorSelecionado];

    //Função para enviar o valor da sequencia selecionada para o service para ser acessado por outros componentes
    enviarSequencia() {
      this.servicosService.selecionarSequencia(this.seqSelecionada);
    }  
      ngOnInit() {
    this.servicosService.setTitulo('Tipo de atendimento');
    this.servicosService.setSubtitulo('');
    this.transitionController.animate(
      new Transition(this.transitionName, 500, TransitionDirection.In, () => console.log("Completed transition.")));

  }
}
