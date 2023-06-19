import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductgroupModule } from './productgroup/productgroup.module';
import { ReviewModule } from './review/review.module';
import { ENDPOINTS, IENDPOINTS } from './app.config';

// TODO: 7
// Import the HttpClientModule (from @angular/common/http)
// Import the ServicesModule


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
  providers: [{ provide: IENDPOINTS, useValue: ENDPOINTS }],
  bootstrap: [AppComponent]
})
export class AppModule { }
