import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductgroupStoreModule } from './productgroup-store/productgroup-store.module';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ProductStoreModule } from './product-store';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ProductgroupStoreModule,
    ProductStoreModule,
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({
      maxAge: 25
    }),
  ]
})
export class RootStoreModule { }
