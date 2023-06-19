import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductRoutingModule } from './product-routing.module';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductPriceComponent } from './product-price/product-price.component';
import { ProductGeneralComponent } from './product-general/product-general.component';

@NgModule({
  declarations: [ProductListComponent, ProductDetailComponent, ProductPriceComponent, ProductGeneralComponent],
  exports: [ProductListComponent],
  imports: [
    CommonModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
