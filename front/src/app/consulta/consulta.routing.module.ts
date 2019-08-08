import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { FormularioConsultaComponent } from "src/app/consulta/formulario-consulta/formulario-consulta.component";
import { FormularioNaoEncontradoComponent } from "src/app/consulta/formulario-nao-encontrado/formulario-nao-encontrado.component";
import { FormularioConsultaDetalheComponent } from "src/app/consulta/formulario-consulta-detalhe/formulario-consulta-detalhe.component";

const consultaRoutes: Routes = [
    {path: 'consulta', component: FormularioConsultaComponent},
    {path: 'consulta/:id', component: FormularioConsultaDetalheComponent},
    {path: 'nao-encontrado', component: FormularioNaoEncontradoComponent}
];

@NgModule({
    imports: [
        RouterModule.forChild(consultaRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class ConsultaRoutingModule {}