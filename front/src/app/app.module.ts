import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from "src/app/app.routing.module";
import { ConsultaModule } from "src/app/consulta/consulta.module";
import { PainelModule } from "src/app/painel/painel.module";
import { AuthService } from './login/auth.service';
import { AuthGuard } from './guards/auth.guard';

@NgModule({

  imports: [
    FormsModule,
    BrowserModule,
    HttpModule,
    ConsultaModule,
    PainelModule,
    AppRoutingModule
  ],

  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent  
  ],

  providers: [
    AuthService,
    AuthGuard
  ],
  
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
