import { Routes, RouterModule } from '@angular/router'
import { ModuleWithProviders } from '@angular/core';

import { QuestaoComponent } from './questao/questao.component';
import { TipoAtendimentoComponent } from './tipo-atendimento/tipo-atendimento.component';
import { InstSaudeComponent } from './inst-saude/inst-saude.component';
import { DadosBasicosComponent } from './dados-basicos/dados-basicos.component';
import { InicioComponent } from './inicio/inicio.component';

const APP_ROUTES: Routes = [
    { path: '', component: InicioComponent },
    { path: 'dadosBasicos', component: DadosBasicosComponent },
    { path: 'instSaude', component: InstSaudeComponent },
    { path: 'tipoAtendimento', component: TipoAtendimentoComponent },
    { path: 'questao/:id', component: QuestaoComponent }
];

export const routing : ModuleWithProviders =  RouterModule.forRoot(APP_ROUTES);