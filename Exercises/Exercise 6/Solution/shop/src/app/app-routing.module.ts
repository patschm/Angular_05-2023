import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home/home.component';
import { AboutComponent } from './about/about/about.component';
import { NotFoundComponent } from './misc/not-found/not-found.component';
import { ProductgroupListComponent } from './productgroup/productgroup-list/productgroup-list.component';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';

const routes: Routes = [
    {path: 'home', component: HomeComponent },
    {path: 'productgroups', component: ProductgroupListComponent},    
    {path: 'products', loadChildren: () => import('./product/product.module').then(x=>x.ProductModule) },
    {path: 'about', component: AboutComponent },
    {path: 'login', component: LoginComponent },
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: '**', component: NotFoundComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing:false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
