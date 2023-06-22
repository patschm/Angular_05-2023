import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelloComponent } from './hello/hello.component';
import { MyAttrDirective } from './my-attr.directive';
import { MyPipePipe } from './my-pipe.pipe';



@NgModule({
  declarations: [
    HelloComponent,
    MyAttrDirective,
    MyPipePipe
  ],
  exports:[HelloComponent, MyAttrDirective, MyPipePipe],
  imports: [
    CommonModule
  ]
})
export class Mod1Module { }
