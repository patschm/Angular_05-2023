import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Child2Component } from './child2/child2.component';
import { ParentComponent } from './parent/parent.component';
import { StateService } from './state.service';
import { Child1Component } from './child1/child1.component';

import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [Child1Component, Child2Component, ParentComponent],
  exports:[ParentComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  providers:[StateService]
})
export class ServiceModule { }
