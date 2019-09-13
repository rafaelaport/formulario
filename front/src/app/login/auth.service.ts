import { Injectable, EventEmitter  } from '@angular/core';
import { Router } from '@angular/router';

import { Usuario } from 'src/app/login/usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioAutenticado: boolean = false;

  mostrarMenuEmitter = new EventEmitter<boolean>();

  // criei a variable para saber se o login está certo ou não
  alertaLoginIncorreto: boolean;

  constructor(private router: Router) { }

  fazerLogin(usuario: Usuario) {

    // verifica se o usuário informado é o mesmo cadastrado
    if(usuario.nome === 'usuario@email.com' &&
      usuario.senha === '123456') {

        // se o usuário for o mesmo ele está autenticado
        this.usuarioAutenticado = true;
        // os menus do sistema são exibidos para que o usuário autenticado possa navegar
        this.mostrarMenuEmitter.emit(true);
        // é exibido a página principal, HomeComponent
        this.router.navigate(['/']);

      } else {

        // usuário não está autenticado
        this.usuarioAutenticado = false;
        // o menu não é exibido para que ele navegue
        this.mostrarMenuEmitter.emit(false);
        // faço o valor  ser possitivo caso o login e senha estejam incorretos
        this.alertaLoginIncorreto = true;
        console.log(this.alertaLoginIncorreto);

      }
  }

  //retorna se o usuário está autenticado ou não
  usuarioEstaAutenticado(){
    return this.usuarioAutenticado;
  }
}
