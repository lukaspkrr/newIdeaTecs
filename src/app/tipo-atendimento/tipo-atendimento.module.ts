import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { SuiModule } from 'ng2-semantic-ui';

import { QuestaoComponent } from './../questao/questao.component';
import { TipoAtendimentoComponent } from './tipo-atendimento.component';
import { routing } from '../app.routing';
import { ServicosService } from '../servicos.service';


@NgModule({
    declarations: [
        TipoAtendimentoComponent,
        QuestaoComponent
    ],
    imports: [
        BrowserModule,
        routing,
        SuiModule,
        CommonModule
    ],
    exports: [TipoAtendimentoComponent],
    providers: [],

})
export class TipoAtendimentoModule { }