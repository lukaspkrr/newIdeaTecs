import { Component, OnInit } from '@angular/core';

import { ServicosService } from './../servicos.service';
import { TransitionController, Transition, TransitionDirection } from 'ng2-semantic-ui';

@Component({
  selector: 'app-inst-saude',
  templateUrl: './inst-saude.component.html',
  styleUrls: ['./inst-saude.component.scss']
})
export class InstSaudeComponent implements OnInit {
  public transitionController = new TransitionController();
  transitionName:string = "fly left";

  constructor(private servicosService :ServicosService) { }

  ngOnInit() {
    this.servicosService.setTitulo('Instituição de saúde');
    this.servicosService.setSubtitulo('');
      this.transitionController.animate(
          new Transition(this.transitionName, 500, TransitionDirection.In, () => console.log("Completed transition.")));
  }

}
