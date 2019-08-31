import { Component } from '@angular/core';

import { AuthService } from './login/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hospital Badim';

  mostrarMenu: boolean = false;
  navbarOpen = false;

  constructor(private authService: AuthService) {

  }

  // tslint:disable-next-line: use-life-cycle-interface
  ngOnInit() {
    // quando a página inicial é carregada, verifica se o usuário está ou não logado para mostrar ou não os menus
    this.authService.mostrarMenuEmitter.subscribe(
      mostrar => this.mostrarMenu = mostrar
    );
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
}
