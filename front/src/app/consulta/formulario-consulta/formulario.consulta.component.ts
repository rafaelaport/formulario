import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Http } from '@angular/http';
import { FormularioRecebimento } from './formulario.recebimento';

@Component({
  selector: 'app-formulario.consulta',
  templateUrl: './formulario.consulta.component.html',
  styleUrls: ['./formulario.consulta.component.css']
})
export class FormularioConsultaComponent implements OnInit {

  items = [];
  arrayFormularios: any[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: Http
    ) { }

  ngOnInit() {
    //mostra todos os formularios na tela de consulta
    this.http.get('consulta').subscribe(t => {
      this.items = t.json();
    });
  }

  //passa para próxima página
  proximaPagina(arrayFormularios: Array<FormularioRecebimento>){
     this.arrayFormularios = arrayFormularios;

  }

}
