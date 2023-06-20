import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { Main1Component } from './main1/main1.component';
import { Main2Component } from './main2/main2.component';
import { Main3Component } from './main3/main3.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticateModule } from '../authenticate/authenticate.module';
import { LoginComponent } from '../authenticate/login/login.component';
import { authGuard } from '../authenticate/auth.guard';
import { dataGuard } from '../data/data.guard';

const routes: Routes = [
  { path:'main1', component:Main1Component, resolve:{someData:dataGuard} },
  { path:'main2', component:Main2Component },
  { path:'main3', component:Main3Component, canActivate:[authGuard] },
  { path:'login', component:LoginComponent},
  { path: '', redirectTo: '/main1', pathMatch:'full' },
  { path: '**', component:NotfoundComponent}
];

@NgModule({
  declarations: [MainComponent, Main1Component, Main2Component, Main3Component, NotfoundComponent],
  exports:[MainComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    AuthenticateModule
  ]
})
export class MainModule { }
