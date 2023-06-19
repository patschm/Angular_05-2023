import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductReviewComponent } from './product-review/product-review.component';

// TODO: 1 
// Import the module(s) needed for forms
@NgModule({
  declarations: [
    ProductReviewComponent
  ],
  exports: [
    ProductReviewComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ReviewModule { }
