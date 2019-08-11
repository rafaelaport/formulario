import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { IFormularioCanDeactivate } from 'src/app/guards/iformulario.candeactivate';

@Component({
  selector: 'app-formulario.recebimento',
  templateUrl: './formulario.recebimento.component.html',
  styleUrls: ['./formulario.recebimento.component.css']
})
export class FormularioRecebimentoComponent implements OnInit, IFormularioCanDeactivate {

  mostraMensagemSucesso: boolean;
  mostraMensagemErro: boolean;
  private formularioMudou: boolean = false;

  constructor(private http: Http) { }

  ngOnInit() {
    
   }

   enviar(formulario){

    //envia pelo método post um json com os valores informado nos campos do formulário
      this.http.post('painel', formulario.value)
      .subscribe(dados => {
        //apaga as informações dos campos do formulário quando o mesmo é enviado com sucesso
        formulario.reset();
        this.mostraMensagemSucesso = true;
        //mensagem de sucesso é exibida por 5 segundos
        setTimeout(() => this.mostraMensagemSucesso = false, 5000);
      },

      (error: any) => (this.mostraMensagemErro = true)
      
      );

      //mensagem de erro por qualquer motivo é exibida por 5 segundos
      setTimeout(() => this.mostraMensagemErro = false, 5000);
    }


    //verifica se ouve alguma mudança em algum campo do formulário
    onInput(){

      this.formularioMudou = true;

    }

    //verificação se pode ou não mudar de página enquanto altera informações
    podeMudarRota() {
      
      //se o formulário sofreu alguma altração nos campos e o usuário tenta mudar de página
      if (this.formularioMudou){

        //é mostrada um aviso se deseja continuar ou cancelar
        var caixaDialogo = confirm("Tem certeza que deseja sair dessa página? " + 
          "As modificações não serão salvas!");
      
        //se o usuário clicar em ok, é perdido as informações alteradas e redecionado para nova página
        if(caixaDialogo == true) return true;
        //se o usuário clicar em cancelar, as informações não são perdidas e o usuário continua na mesma página
        else return false ;
  
      }

      return true;

    }

}
