import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductReviewComponent } from './product-review/product-review.component';
import { FormsModule } from '@angular/forms';

// TODO: 1 Import the module(s) needed for reactive forms
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ProductReviewComponent
  ],
  exports: [
    ProductReviewComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class ReviewModule { }
