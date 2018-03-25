import { TransitionController, Transition, TransitionDirection } from 'ng2-semantic-ui';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inst-saude',
  templateUrl: './inst-saude.component.html',
  styleUrls: ['./inst-saude.component.scss']
})
export class InstSaudeComponent implements OnInit {
  public transitionController = new TransitionController();
  transitionName:string = "fly left";

  constructor() { }

  ngOnInit() {
      this.transitionController.animate(
          new Transition(this.transitionName, 500, TransitionDirection.In, () => console.log("Completed transition.")));
  }

}
