import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';

import { IFormularioCanDeactivate } from './iformulario.candeactivate';

@Injectable()
export class FormularioDeactivateGuard implements CanDeactivate<IFormularioCanDeactivate> {

    //canDeactivate: [ FormularioDeactivateGuard ] é usado quando deseja desativar uma rota
    //um exemplo quando o usuário muda de página acidentalmente, enquanto está registrando algo em um formulário
    
    canDeactivate(
        component: IFormularioCanDeactivate
    ) : Observable<boolean> | Promise<boolean> | boolean {
        
        //verificação se pode ou não mudar de página enquanto altera informações
        return component.podeMudarRota();
    }
}