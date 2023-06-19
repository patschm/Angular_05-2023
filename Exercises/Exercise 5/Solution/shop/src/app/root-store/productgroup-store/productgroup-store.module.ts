import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { productgroupReducer } from './productgroup.store'


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature("productgroup", productgroupReducer)
  ]
})
export class ProductgroupStoreModule { }
