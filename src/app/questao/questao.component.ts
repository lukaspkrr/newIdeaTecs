import { Component, OnInit, OnDestroy } from '@angular/core';
import { PlatformLocation } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

import { Subscription } from 'rxjs/Subscription';
import { TransitionController, Transition, TransitionDirection } from 'ng2-semantic-ui';

import { ServicosService } from './../servicos.service';

@Component({
  selector: 'app-questao',
  templateUrl: './questao.component.html',
  styleUrls: ['./questao.component.scss'],
})
export class QuestaoComponent implements OnInit {


  incricao: Subscription;
  id: any;
  servicePaginas: any;
  pagina: number = this.activeRoute.snapshot.params['id'];
  qstPagina: any;
  sequencia: any;
  cont: number = -1;

  public transitionController = new TransitionController();
  transitionName: string = "fly left";

  constructor(
    private servicosService: ServicosService,
    private activeRoute: ActivatedRoute,
    private router: Router,
    private platformLocation: PlatformLocation,
  ) {

  }

  // Função para comparar o id da pagina com o service das questões
  reload() {
    for (let i = 0; i < this.servicePaginas.length; i++) {
      if (this.servicePaginas[i].idQst == this.id) {
        this.qstPagina = this.servicePaginas[i];
        this.servicosService.setTitulo(this.qstPagina.qstNumero);

        //Animação da pagina
        this.transitionController.animate(
          new Transition(this.transitionName, 500, TransitionDirection.In));
        break;
      }
    }
  }

 // Função para avançar para a proxima página
  proxPagina() {
    if (this.id >= 5 && this.id <= 9 && (this.sequencia.seq.length - 1) > this.cont) {
      this.cont++
      this.id = this.sequencia.seq[this.cont]
      this.router.navigate([`/questao/${this.sequencia.seq[this.cont]}`]);
    } else {
      this.id++;
      this.router.navigate([`/questao/${this.id}`]);
    }
    this.reload();
  }

  // Função para retroceder para a página anterior
  paginaAnte() {
    if (this.id > 1) {
      if (this.id > 6 && this.id <= 9) {
        this.cont--
        this.id = this.sequencia.seq[this.cont]
        this.router.navigate([`/questao/${this.sequencia.seq[this.cont]}`]);
      } else {
        this.id--;
        this.router.navigate([`/questao/${this.id}`]);
      }
      this.reload();
    } else {
      this.router.navigate(['/tipoAtendimento']);
    }
  }

  ngOnInit() {
    this.sequencia = this.servicosService.listarSequenciaSelecionada();
    if (this.sequencia == undefined || this.sequencia == '') {
      this.router.navigate(['/tipoAtendimento']);
    }

    this.servicePaginas = this.servicosService.listarQuestoes();
    this.qstPagina = this.servicosService.listarQuestoes();

    this.incricao = this.activeRoute.params.subscribe(
      (params: any) => {
        this.id = params['id'];
      }
    );

    setTimeout(() => {
      this.reload();
    }, 20);

    setTimeout(() => {
      this.servicosService.setTitulo(this.qstPagina.qstNumero);
      this.servicosService.setSubtitulo('');
    }, 200);

    this.platformLocation.onPopState(() => {
      setTimeout(() => {
        this.reload();
        this.router.navigate([`/questao/${this.id}`])
      }, 20);
    });
  }

  ngOnDestroy() {
    this.incricao.unsubscribe();
  }
}
