import { PainelComponent } from './painel.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FormularioRecebimentoComponent } from 'src/app/painel/formulario-recebimento/formulario.recebimento.component';
import { PainelRoutingModule } from 'src/app/painel/painel.routing.module';
import { FormularioDeactivateGuard } from '../guards/formulario.deactivate.guard';

@NgModule({

    imports: [
        CommonModule,
        FormsModule,
        PainelRoutingModule
    ],

    declarations: [
        FormularioRecebimentoComponent,
        PainelComponent,
    ],

    providers: [
        FormularioDeactivateGuard
    ]

})

export class PainelModule {}
