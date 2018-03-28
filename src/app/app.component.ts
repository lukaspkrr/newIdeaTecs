import { Component, OnInit } from '@angular/core';

import { ServicosService } from './servicos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  titulo: string = '';
  subtitulo:string = '';

  constructor(private servicosService: ServicosService) { }

  ngOnInit() {
    this.servicosService.emitirTitulosComponent.subscribe(
      () => {
        this.titulo = this.servicosService.getTitulo();
        this.subtitulo = this.servicosService.getSubtitulo();
      }
    );
  }
}
