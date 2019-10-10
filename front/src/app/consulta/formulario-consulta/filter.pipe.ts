import { Pipe, PipeTransform } from '@angular/core';

import { FormularioRecebimento } from './formulario.recebimento';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: FormularioRecebimento[], campo: string, textoPesquisado: string): any[] {
    
    if(!items) return [];

    if(!textoPesquisado) return items;

    textoPesquisado = textoPesquisado.toLowerCase();

    return items.filter( x => {
      return x[campo].toLowerCase().includes(textoPesquisado);
    });
   }

}
