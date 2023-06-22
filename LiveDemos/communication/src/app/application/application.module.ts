import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { XComponent } from './x/x.component';
import { YComponent } from './y/y.component';



@NgModule({
  declarations: [
    XComponent,
    YComponent
  ],
  exports: [
    XComponent,
    YComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ApplicationModule { }
