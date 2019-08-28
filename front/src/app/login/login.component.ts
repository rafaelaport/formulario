import { Component, OnInit } from '@angular/core';

import { Usuario } from "src/app/login/usuario";
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private usuario: Usuario = new Usuario();

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  //é chamado quando o usuário se loga
  fazerLogin(){
    
    //envia para o service o usuário informado na tela de login para autenticação
    this.authService.fazerLogin(this.usuario);
    
  }
}

