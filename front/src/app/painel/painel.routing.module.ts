import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormularioRecebimentoComponent } from "src/app/painel/formulario-recebimento/formulario.recebimento.component";
import { AuthGuard } from '../guards/auth.guard';

const painelRoutes: Routes = [
    {path: 'painel', component: FormularioRecebimentoComponent, 
        canActivate: [ AuthGuard ]},
];

@NgModule({
    imports: [
        RouterModule.forChild(painelRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class PainelRoutingModule {}