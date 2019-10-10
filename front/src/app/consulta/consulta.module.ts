import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JwPaginationComponent } from 'jw-angular-pagination';
import { FilterPipe } from './formulario-consulta/filter.pipe';
import { FormsModule } from '@angular/forms';

import { FormularioConsultaComponent } from 'src/app/consulta/formulario-consulta/formulario.consulta.component';
import { FormularioNaoEncontradoComponent } from 'src/app/consulta/formulario-nao-encontrado/formulario.nao.encontrado.component';
import { ConsultaRoutingModule } from 'src/app/consulta/consulta.routing.module';
import { FormularioConsultaDetalheComponent } from 'src/app/consulta/formulario-consulta-detalhe/formulario.consulta.detalhe.component';

@NgModule({

    imports: [
        CommonModule,
        ConsultaRoutingModule,
        FormsModule
    ],

    declarations: [
        FormularioConsultaDetalheComponent,
        FormularioConsultaComponent,
        FormularioNaoEncontradoComponent,
        JwPaginationComponent,
        FilterPipe
    ],

    providers: [

    ]

})

export class ConsultaModule {}
