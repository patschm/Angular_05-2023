import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductReviewComponent } from './product-review/product-review.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductReviewListComponent } from './product-review-list/product-review-list.component';
import { RouterModule } from '@angular/router';
import { NotSavedComponent } from './not-saved/not-saved.component';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    ProductReviewComponent,
    ProductReviewListComponent,
    NotSavedComponent
  ],
  exports: [
    ProductReviewComponent,
    ProductReviewListComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    NgbModalModule
  ]
})
export class ReviewModule { }
