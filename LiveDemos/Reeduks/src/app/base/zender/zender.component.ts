import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Message } from 'src/app/Message';
import { IState, MessageAddAction } from '../base.module';

@Component({
  selector: 'app-zender',
  template: `
   <h1>Zender</h1>
   <input type="text" [(ngModel)] = "message" />
   <br/>
   <button (click)="onClick()">Zend</button>
  `,
  styles: [
  ]
})
export class ZenderComponent {
  public message: string = "";
  

  public onClick()
  {
    let msg = new Message()
    msg.bericht=this.message;
    msg.id=(Math.random()*1000).toString();
    let action = new MessageAddAction();
    action.payload = msg;
    
    this.storage.dispatch(action);
  }

  constructor(private storage:Store<IState>){}
}
