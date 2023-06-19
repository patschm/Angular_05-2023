import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { ProductgroupModule } from './productgroup/productgroup.module';
import { ReviewModule } from './review/review.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    ProductgroupModule,
    ReviewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
