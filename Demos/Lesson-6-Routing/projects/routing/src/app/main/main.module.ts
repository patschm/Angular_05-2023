import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { Main1Component } from './main1/main1.component';
import { Main2Component } from './main2/main2.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { Main3Component } from './main3/main3.component';
import { Routes, RouterModule } from '@angular/router';
import { SubModule } from '../sub/sub.module';

const routes: Routes = [
  
  { path:'main1', component:Main1Component },
  { path:'main2/:id', component:Main2Component },
  { path:'main3', component:Main3Component },
  { path: 'sub', loadChildren: ()=> import('../sub/sub.module').then(m=>m.SubModule) },
  { path: '', redirectTo: '/main3', pathMatch:'full' },
  { path: '**', component:NotfoundComponent}
];
@NgModule({
  declarations: [MainComponent, Main1Component, Main2Component, NotfoundComponent, Main3Component],
  exports:[MainComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    SubModule
  ]
})
export class MainModule { }
