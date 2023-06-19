import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductgroupListComponent } from './productgroup-list/productgroup-list.component';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ProductgroupListComponent],
  exports:[ProductgroupListComponent],
  imports: [
    CommonModule,
    NgbCarouselModule,
    RouterModule
  ]
})
export class ProductgroupModule { }
