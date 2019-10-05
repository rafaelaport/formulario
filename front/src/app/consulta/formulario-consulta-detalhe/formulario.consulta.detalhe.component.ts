import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs";
import { Http } from '@angular/http';

import { FormularioConsultaService } from '../formulario-consulta/formulario.consulta.service';
//import { FormularioRecebimento } from '../formulario-consulta/formulario.recebimento';

@Component({
  selector: 'app-formulario.consulta.detalhe',
  templateUrl: './formulario.consulta.detalhe.component.html',
  styleUrls: ['./formulario.consulta.detalhe.component.css']
})
export class FormularioConsultaDetalheComponent implements OnInit {

  @Input() arrayFormularios;
  
  id: number;
  inscricao: Subscription;
  formulario: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: Http,
    private formularioConsultaService: FormularioConsultaService
  ) {
    //this.id = this.route.snapshot.params['id']; //não troca id se alterado no campo, somente se carregar a página novamente
   }

  ngOnInit() {
    //pega o id do formulário informado e que se encontra como parâmetro na url e passa para a variável id
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        this.id = params['id'];

        //consulta se o formulário existe ou não e o guarda o valor retornado em getFormulario na variável formulario
        this.http.get("consulta/" + this.id).subscribe(t => {
          this.formulario = t.json();
        })
        //this.formulario = this.formularioConsultaService.getFormulario(this.id);
        
        //se o formulário não existir é redirecionado para o componente formulario-nao-encontrado
        /*if(this.formularioRecebimento == null){
          this.router.navigate(['/nao-encontrado']);
        }*/
      }
    );
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe();  
  }

}
