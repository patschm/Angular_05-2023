import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Message } from 'src/app/Message';
import { IState } from '../base.module';

@Component({
  selector: 'app-ontvanger',
  template: `
    <h1>Ontvanger</h1>
    <h3 *ngFor="let message of messages">[{{message.id}}] {{message.bericht}}</h3>
  `,
  styles: [
  ]
})
export class OntvangerComponent implements OnInit {
  public messages: Message[] = [];

  ngOnInit(): void {
    this.storage.select(st=>st.messages).subscribe(data=>this.messages = data);
  }

  constructor(private storage:Store<IState>){}
  
}
