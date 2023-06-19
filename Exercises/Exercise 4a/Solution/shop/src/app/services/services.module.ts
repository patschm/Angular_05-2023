import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// TODO: 6
// Register the ProductgroupService here
import { ProductgroupService } from './product-group.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[ProductgroupService]
})
export class ServicesModule { }
