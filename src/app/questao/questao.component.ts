import { TransitionController, Transition, TransitionDirection } from 'ng2-semantic-ui';
import { ServicosService } from './../servicos.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-questao',
  templateUrl: './questao.component.html',
  styleUrls: ['./questao.component.scss']
})
export class QuestaoComponent implements OnInit{


  servicePaginas: any;
  pagina: number = 1;

  public transitionController = new TransitionController();
  transitionName:string = "fly left";

  qstPagina: any;


  constructor(
    private servicoService: ServicosService,
    private activeRoute: ActivatedRoute,
    private router: Router
  ) { }

  
  reload() {
    for (let i = 0; i < this.servicePaginas.length; i++) {
      console.log(this.servicePaginas[i].idQst == this.pagina);
      
      if(this.servicePaginas[i].idQst == this.pagina){
        this.qstPagina = this.servicePaginas[i]
        console.log(this.qstPagina);
        break;
      }
    }
  }
  
  proxPagina() {
    this.pagina++;
    this.router.navigate([`/questao/${this.pagina}`]);

    this.reload();
  }


 
  ngOnInit() {

    this.servicePaginas = this.servicoService.listarQuestoes();
  this.reload();


     this.qstPagina = this.servicoService.listarQuestoes(this.activeRoute.snapshot.params['id']);
     this.transitionController.animate(
      new Transition(this.transitionName, 500, TransitionDirection.In, () => console.log("Completed transition.")));

  }


 


}
