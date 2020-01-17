import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: '', component: HomeComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, {useHash: true}) // add only more one parameter using useHash with true
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}
