import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductGeneralComponent } from './product-general/product-general.component';
import { ProductPriceComponent } from './product-price/product-price.component';
import { ProductReviewListComponent } from '../review/product-review-list/product-review-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';


// TODO: 7 Lazy Loading
// Examine the routes below
// This route is exclusive for the ProductModule
// We will try to lazy load this module
// Mind that these routes are relative to the name specified
// in the root routes (app-routing.module.ts)
//
// Remove products/ from the entry products/:pgid
// products will be specified in the root route as a trigger for lazy loading
const routes: Routes = [
  {path: ':pgid', component: ProductListComponent},
  {path: 'product/:id', component: ProductDetailComponent, children: [
      {path: 'general', component: ProductGeneralComponent},
      {path: 'prices', component: ProductPriceComponent},
      {path: 'reviews', component: ProductReviewListComponent},
      {path: '', redirectTo: 'general', pathMatch: 'full'}]
    }
  ];


// TODO: 8
// Change forRoot into forChild
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
