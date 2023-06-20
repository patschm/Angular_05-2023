import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { CommunicationComponent } from './communication/communication.component';

@NgModule({
  declarations: [ChildComponent, ParentComponent, CommunicationComponent],
  exports:[CommunicationComponent],
  imports: [
    CommonModule
  ]
})
export class CommunicationModule { }
