import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs";
import { Http } from '@angular/http';

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
  ) { }

  ngOnInit() {
    //pega o id do formulário informado e que se encontra como parâmetro na url e passa para a variável id
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        this.id = params['id'];

        //consulta se o formulário existe ou não e o guarda o valor retornado em getFormulario na variável formulario
        this.http.get("consulta/" + this.id).subscribe(t => {
          this.formulario = t.json();
        })
      }
    );
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe();  
  }

}
