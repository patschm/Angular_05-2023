import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductReviewComponent } from './product-review/product-review.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductReviewListComponent } from './product-review-list/product-review-list.component';

@NgModule({
  declarations: [
    ProductReviewComponent,
    ProductReviewListComponent
  ],
  exports: [
    ProductReviewComponent,
    ProductReviewListComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class ReviewModule { }
