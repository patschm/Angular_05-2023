import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DutchPipe } from './dutch.pipe';
import { PipesComponent } from './pipes.component';

@NgModule({
  declarations: [
    AppComponent,
    PipesComponent,
    DutchPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
