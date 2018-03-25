import { TransitionController, Transition, TransitionDirection } from 'ng2-semantic-ui';
import { ServicosService } from './../servicos.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-questao',
  templateUrl: './questao.component.html',
  styleUrls: ['./questao.component.scss']
})
export class QuestaoComponent implements OnInit {

  public transitionController = new TransitionController();
  transitionName:string = "fly left";


  qstPagina: any;

  constructor(
    private servicoService: ServicosService,
    private activeRoute: ActivatedRoute,
  ) { }

  // Função que envia o Id da pagina e posteriormente recebe os dados da pagina do ID enviado.
  ngOnInit() {
     this.qstPagina = this.servicoService.listarQuestoes(this.activeRoute.snapshot.params['id']);
     this.transitionController.animate(
      new Transition(this.transitionName, 500, TransitionDirection.In, () => console.log("Completed transition.")));
  }

}
