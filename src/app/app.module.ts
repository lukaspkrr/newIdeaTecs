import { ServicosService } from './servicos.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SuiModule } from 'ng2-semantic-ui';

import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { DadosBasicosComponent } from './dados-basicos/dados-basicos.component';
import { InstSaudeComponent } from './inst-saude/inst-saude.component';
import { routing } from './app.routing';
import { TipoAtendimentoModule } from './tipo-atendimento/tipo-atendimento.module';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    DadosBasicosComponent,
    InstSaudeComponent
  ],
  imports: [
    BrowserModule,
    routing,
    SuiModule,
    TipoAtendimentoModule
  ],
  providers: [ServicosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
