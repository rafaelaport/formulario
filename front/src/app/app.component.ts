import { Component } from '@angular/core';

import { AutenticacaoService } from "src/app/login/autenticacao.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hospital01';

  mostrarMenu: boolean = false;

  constructor(private autenticacaoService: AutenticacaoService){

  }

  ngOnInit(){
    this.autenticacaoService.mostrarMenuEmitter.subscribe(
      mostrar => this.mostrarMenu = mostrar
    );
  }
}
