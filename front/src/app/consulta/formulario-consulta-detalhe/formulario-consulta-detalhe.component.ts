import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs";

import { FormularioConsultaService } from "src/app/consulta/formulario-consulta/formulario-consulta.service";


@Component({
  selector: 'app-formulario-consulta-detalhe',
  templateUrl: './formulario-consulta-detalhe.component.html',
  styleUrls: ['./formulario-consulta-detalhe.component.css']
})
export class FormularioConsultaDetalheComponent implements OnInit {

  id: number;
  inscricao: Subscription;
  formulario: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
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
        this.formulario = this.formularioConsultaService.getFormulario(this.id);

        //se o formulário não existir é redirecionado para o componente formulario-nao-encontrado
        if(this.formulario == null){
          this.router.navigate(['/nao-encontrado']);
        }
      }
    );
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe();  
  }

}
