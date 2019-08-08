import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-formulario-recebimento',
  templateUrl: './formulario-recebimento.component.html',
  styleUrls: ['./formulario-recebimento.component.css']
})
export class FormularioRecebimentoComponent implements OnInit {

  mostraMensagemSucesso: boolean;
  mostraMensagemErro: boolean;

  enviar(formulario){

    //envia pelo método post um json com os valores informado nos campos do formulário
      this.http.post('formulario-recebimento', formulario.value)
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

  constructor(private http: Http) { }

  ngOnInit() {
    
   }

}
