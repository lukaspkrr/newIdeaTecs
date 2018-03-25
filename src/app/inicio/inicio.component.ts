import { Component, OnInit } from '@angular/core';

import { TransitionController, Transition, TransitionDirection } from 'ng2-semantic-ui';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {
  public transitionController = new TransitionController();
  transitionName:string = "fly left"

  constructor() { }

  ngOnInit() {
      this.transitionController.animate(
          new Transition(this.transitionName, 500, TransitionDirection.In, () => console.log("Completed transition.")));
  }

}
