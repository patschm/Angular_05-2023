import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { productgroupReducer } from './productgroup.store'


// TODO: 7 Wire up the store
// Register the productgroupReducer using StoreModule.forFeature (root already defined)
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature("productgroup", productgroupReducer)
  ]
})
export class ProductgroupStoreModule { }
