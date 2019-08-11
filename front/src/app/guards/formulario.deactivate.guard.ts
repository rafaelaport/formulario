import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';

import { FormularioRecebimentoComponent } from '../painel/formulario-recebimento/formulario.recebimento.component';

@Injectable()
export class FormularioDeactivateGuard implements CanDeactivate<FormularioRecebimentoComponent> {

    //canDeactivate: [ FormularioDeactivateGuard ] é usado quando deseja desativar uma rota
    //um exemplo quando o usuário muda de página acidentalmente, enquanto está registrando algo em um formulário
    
    canDeactivate(
        component: FormularioRecebimentoComponent,
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ) : Observable<boolean> | Promise<boolean> | boolean {
        
        //verificação se pode ou não mudar de página enquanto altera informações
        return component.podeMudarRota();
    }
}