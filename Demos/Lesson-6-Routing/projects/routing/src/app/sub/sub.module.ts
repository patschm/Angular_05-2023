import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubComponent } from './sub/sub.component';
import { Sub1Component } from './sub1/sub1.component';
import { Sub2Component } from './sub2/sub2.component';

import { RouterModule, Routes} from '@angular/router';

const route: Routes = [
  {
    path: '', component:SubComponent,
    children:[
      { path:"sub1", component:Sub1Component},
      { path:"sub2", component:Sub2Component},
      { path: '', redirectTo:'sub1', pathMatch:'full' }
    ]
  }
];
@NgModule({
  declarations: [SubComponent, Sub1Component, Sub2Component],
  exports:[SubComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(route)
  ]
})
export class SubModule { }
