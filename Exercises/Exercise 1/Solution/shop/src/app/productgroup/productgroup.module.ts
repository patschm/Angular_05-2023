import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductgroupListComponent } from './productgroup-list/productgroup-list.component';


// TODO: 3
// Create an angular module named ProductgroupModule
// Import the CommonModule from @angular/common
// Register the ProductgroupListComponent in the ProductGroupModule and make it public
@NgModule({
  declarations: [ProductgroupListComponent],
  exports:[ProductgroupListComponent],
  imports: [
    CommonModule
  ]
})
export class ProductgroupModule { }
