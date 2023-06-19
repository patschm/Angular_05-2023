import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductGeneralComponent } from './product-general/product-general.component';
import { ProductPriceComponent } from './product-price/product-price.component';
import { ProductReviewListComponent } from '../review/product-review-list/product-review-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductReviewComponent } from '../review/product-review/product-review.component';

// TODO: 2
// Use the guard from TODO 1 to block the creation of reviews by unauthorized users.
// Test the application by adding a new review. (user is authenticated if username and password are the same)

// TODO: 4
// Use the guard from TODO 3 to block navigating away from the ProductReviewComponent if the
// form was not saved.
// Test the guard.
const routes: Routes = [
  {path: ':pgid', component: ProductListComponent},
  {path: 'product/:id', component: ProductDetailComponent, children: [
      {path: 'general', component: ProductGeneralComponent},
      {path: 'prices', component: ProductPriceComponent},
      {path: 'reviews', component: ProductReviewListComponent},
      {path: 'review', component: ProductReviewComponent},
      {path: '', redirectTo: 'general', pathMatch: 'full'}]
    }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
