import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BasicsComponent } from './basics.component';
import { CustomAttributeComponent } from './custom-attribute.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicsComponent,
    CustomAttributeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
