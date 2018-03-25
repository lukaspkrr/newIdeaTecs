import { ServicosService } from './../servicos.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-questao',
  templateUrl: './questao.component.html',
  styleUrls: ['./questao.component.scss']
})
export class QuestaoComponent implements OnInit {

  qstPagina: any;

  constructor(
    private servicoService: ServicosService,
    private activeRoute: ActivatedRoute,
  ) { }

  // Função que envia o Id da pagina e posteriormente recebe os dados da pagina do ID enviado.
  ngOnInit() {
     this.qstPagina = this.servicoService.listarQuestoes(this.activeRoute.snapshot.params['id']);
     
  }

}
