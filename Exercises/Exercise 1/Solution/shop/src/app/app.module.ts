import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { ProductgroupModule } from './productgroup/productgroup.module';

// TODO: 4
// Import the ProductgroupModule in AppModule
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    ProductgroupModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
