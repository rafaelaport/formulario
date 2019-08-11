import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormularioConsultaComponent } from "src/app/consulta/formulario-consulta/formulario.consulta.component";
import { FormularioNaoEncontradoComponent } from "src/app/consulta/formulario-nao-encontrado/formulario.nao.encontrado.component";
import { FormularioConsultaDetalheComponent } from "src/app/consulta/formulario-consulta-detalhe/formulario.consulta.detalhe.component";
import { AuthGuard } from '../guards/auth.guard';

const consultaRoutes: Routes = [
    {path: 'consulta', component: FormularioConsultaComponent,
        canActivate: [ AuthGuard ]},
        
    {path: 'consulta/:id', component: FormularioConsultaDetalheComponent, 
        canActivate: [ AuthGuard ]},

    {path: 'nao-encontrado', component: FormularioNaoEncontradoComponent, 
        canActivate: [ AuthGuard ]}
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