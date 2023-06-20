import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestcallsComponent } from './restcalls.component';

@NgModule({
  declarations: [RestcallsComponent],
  exports:[RestcallsComponent],
  imports: [
    CommonModule
  ]
})
export class RestModule { }
