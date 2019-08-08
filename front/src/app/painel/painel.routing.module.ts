import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { FormularioRecebimentoComponent } from "src/app/painel/formulario-recebimento/formulario-recebimento.component";

const painelRoutes: Routes = [
    {path: 'painel', component: FormularioRecebimentoComponent},
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