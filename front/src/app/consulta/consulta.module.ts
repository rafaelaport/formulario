import{ NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { FormularioConsultaComponent } from "src/app/consulta/formulario-consulta/formulario.consulta.component";
import { FormularioNaoEncontradoComponent } from "src/app/consulta/formulario-nao-encontrado/formulario.nao.encontrado.component";
import { FormularioConsultaService } from "src/app/consulta/formulario-consulta/formulario.consulta.service";
import { ConsultaRoutingModule } from "src/app/consulta/consulta.routing.module";
import { FormularioConsultaDetalheComponent } from "src/app/consulta/formulario-consulta-detalhe/formulario.consulta.detalhe.component";

@NgModule({

    imports: [
        CommonModule,
        ConsultaRoutingModule
    ],

    declarations: [
        FormularioConsultaDetalheComponent,
        FormularioConsultaComponent,
        FormularioNaoEncontradoComponent 
    ],

    providers: [
        FormularioConsultaService
    ]

})

export class ConsultaModule {}