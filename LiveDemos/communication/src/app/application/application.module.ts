import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { XComponent } from './x/x.component';
import { YComponent } from './y/y.component';
import { StateService } from './state.service';



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
  ],
  providers:[StateService]
})
export class ApplicationModule { }
