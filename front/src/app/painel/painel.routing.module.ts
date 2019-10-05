import { PainelComponent } from './painel.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormularioRecebimentoComponent } from 'src/app/painel/formulario-recebimento/formulario.recebimento.component';
import { AuthGuard } from '../guards/auth.guard';
import { FormularioDeactivateGuard } from '../guards/formulario.deactivate.guard';

const painelRoutes: Routes = [
    {path: 'painel', component: PainelComponent,
        canActivate: [ AuthGuard ]},
        
    {path: 'painel/formulario-recebimento', component: FormularioRecebimentoComponent, 
        canActivate: [ AuthGuard ],
        canDeactivate: [ FormularioDeactivateGuard ]},

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
