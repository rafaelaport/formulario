import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs";

import { FormularioConsultaService } from "src/app/consulta/formulario-consulta/formulario-consulta.service";

@Component({
  selector: 'app-formulario-consulta',
  templateUrl: './formulario-consulta.component.html',
  styleUrls: ['./formulario-consulta.component.css']
})
export class FormularioConsultaComponent implements OnInit {

  formularios: any[];
  pagina: number;
  inscricao: Subscription;

  constructor(
    private formularioConsultaService: FormularioConsultaService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit() {
    //mostra todos os formularios na tela de consulta
    this.formularios = this.formularioConsultaService.getFormularios();  

    //pega o número da página que está como parâmetro no link e coloca na variável página
    this.inscricao = this.route.queryParams.subscribe(
      (queryParams: any) => {
        this.pagina = queryParams['pagina'];
      }
    )
  }

  ngOnDestroy(){
    //se descrever é uma boa prática
    this.inscricao.unsubscribe();
  }

  //adiciona uma página na atual para redirecionar para a próxima 
  proximaPagina(){
    //this.pagina++;
    this.router.navigate(['/consulta'],
      {queryParams: {'pagina': ++this.pagina}});
  }
}
