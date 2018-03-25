import { ServicosService } from './servicos.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SuiModule } from 'ng2-semantic-ui';

import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { DadosBasicosComponent } from './dados-basicos/dados-basicos.component';
import { InstSaudeComponent } from './inst-saude/inst-saude.component';
import { TipoAtendimentoComponent } from './tipo-atendimento/tipo-atendimento.component';
import { QuestaoComponent } from './questao/questao.component';
import { routing } from './app.routing';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    DadosBasicosComponent,
    InstSaudeComponent,
    TipoAtendimentoComponent,
    QuestaoComponent
  ],
  imports: [
    BrowserModule,
    routing,
    SuiModule
  ],
  providers: [ServicosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
