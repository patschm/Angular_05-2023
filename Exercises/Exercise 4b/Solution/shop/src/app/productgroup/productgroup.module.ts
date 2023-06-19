import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductgroupListComponent } from './productgroup-list/productgroup-list.component';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [ProductgroupListComponent],
  exports:[ProductgroupListComponent],
  imports: [
    CommonModule,
    NgbCarouselModule
  ]
})
export class ProductgroupModule { }
