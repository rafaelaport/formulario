import { Component, OnInit } from '@angular/core';

import { AutenticacaoService } from "src/app/login/autenticacao.service";
import { Usuario } from "src/app/login/usuario";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private usuario: Usuario = new Usuario();

  constructor(private autenticacaoService: AutenticacaoService) { }

  ngOnInit() {
  }

  fazerLogin(){

    this.autenticacaoService.fazerLogin(this.usuario);
    
  }
}

