import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormularioConsultaService {

  //lista todos os formularios já enviados 
  getFormularios(){
    return [
      {id: 1, nome: 'Formulario 1'},
      {id: 2, nome: 'Formulario 2'}
    ];
  }

  //verifica se o id do formulario informado é igual a algum formulário que já foi salvo
  //se existir é mostrado o formulário, se não existir é retornado null pq o formulário não foi encontrado
  getFormulario(id: number)  {
    let formularios = this.getFormularios();
    for (let i = 0; i < formularios.length; i++){
      let formulario = formularios[i];
      if (formulario.id == id){
        return formulario;
      }
    }
    return null;
  }
  
  constructor() { }
}
