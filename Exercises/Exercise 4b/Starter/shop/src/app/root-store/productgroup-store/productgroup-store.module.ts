import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';


// TODO: 7 Wire up the store
// Register the productgroupReducer for slice 'productgroup' using StoreModule.forFeature (root already defined)
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature("productgroup")
  ]
})
export class ProductgroupStoreModule { }
