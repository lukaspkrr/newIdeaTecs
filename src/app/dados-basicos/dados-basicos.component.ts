import { Component, OnInit } from '@angular/core';

import { TransitionController, Transition, TransitionDirection } from 'ng2-semantic-ui';

@Component({
  selector: 'app-dados-basicos',
  templateUrl: './dados-basicos.component.html',
  styleUrls: ['./dados-basicos.component.scss']
})
export class DadosBasicosComponent implements OnInit {

  public transitionController = new TransitionController();
  transitionName:string = "fly left"

  constructor() { }

  ngOnInit() {
      this.transitionController.animate(
          new Transition(this.transitionName, 500, TransitionDirection.In, () => console.log("Completed transition.")));
  }

}
