import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductgroupModule } from './productgroup/productgroup.module';
import { ReviewModule } from './review/review.module';
import { ENDPOINTS, IENDPOINTS } from './app.config';
import { HttpClientModule } from '@angular/common/http';
import { ServicesModule } from './services/services.module';
import { RootStoreModule } from './root-store/root-store.module';
import { ProductModule } from './product/product.module';
import { AboutModule } from './about/about.module';
import { HomeModule } from './home/home.module';
import { MiscModule } from './misc/misc.module';

// TODO: 4
// Import AppRoutingModule

// TODO: 11 Lazy Loading (Do not do this before TODO 7)
    // Remove ProductModule (also the import above)
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ProductModule,
    BrowserModule,
    NgbModule,
    AboutModule,
    HomeModule,
    MiscModule,
    ProductgroupModule,
    ReviewModule,
    HttpClientModule,
    ServicesModule,
    RootStoreModule
  ],
  providers: [{ provide: IENDPOINTS, useValue: ENDPOINTS }],
  bootstrap: [AppComponent]
})
export class AppModule { }
