import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductgroupStoreModule } from './productgroup-store/productgroup-store.module';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

// TODO: 8 Wire up the store
// Register ProductgroupStoreModule here
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({
      maxAge: 25
    }),
  ]
})
export class RootStoreModule { }
