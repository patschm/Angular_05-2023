import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AuthenticateModule } from './authenticate/authenticate.module';
import { DataModule } from './data/data.module';
import { MainModule } from './main/main.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MainModule,
    DataModule,
    AuthenticateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
