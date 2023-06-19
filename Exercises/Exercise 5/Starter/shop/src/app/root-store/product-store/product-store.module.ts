import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { productReducer } from './product.store';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature("product", productReducer)
  ]
})
export class ProductStoreModule { }
