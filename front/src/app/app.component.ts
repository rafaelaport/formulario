import { Component } from '@angular/core';

import { AuthService } from './login/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hospital01';

  mostrarMenu: boolean = false;

  constructor(private authService: AuthService){

  }

  ngOnInit(){
    //quando a página inicial é carregada, verifica se o usuário está ou não logado para mostrar ou não os menus
    this.authService.mostrarMenuEmitter.subscribe(
      mostrar => this.mostrarMenu = mostrar
    );
  }
}
