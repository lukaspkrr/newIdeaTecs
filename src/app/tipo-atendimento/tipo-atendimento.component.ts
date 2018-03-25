import { ServicosService } from './../servicos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tipo-atendimento',
  templateUrl: './tipo-atendimento.component.html',
  styleUrls: ['./tipo-atendimento.component.scss']
})
export class TipoAtendimentoComponent implements OnInit {

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
  }

  enviarSequencia() {
    this.servicosService.selecionarSequencia(this.seqSelecionada);
  }

}
