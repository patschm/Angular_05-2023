import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductgroupListComponent } from './productgroup-list/productgroup-list.component';


@NgModule({
  declarations: [ProductgroupListComponent],
  exports:[ProductgroupListComponent],
  imports: [
    CommonModule
  ]
})
export class ProductgroupModule { }
