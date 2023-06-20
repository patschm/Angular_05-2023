import { Component, OnInit, OnDestroy } from '@angular/core';
import { Message } from '../latest-store/actions/message.model';
import { Store } from '@ngrx/store';
import { IState, messages } from '../latest-store';
import { deleteMessage, addMessage } from '../latest-store/actions/message.actions';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-latest-b',
  templateUrl: './latest-b.component.html',
  styleUrls: ['./latest-b.component.css']
})
export class LatestBComponent implements OnInit, OnDestroy 
{
  private storeSubscription?: Subscription;
  public messages?: Message[];
  public text?:string;
  
  public onDelete(idx:number) : void
  {
    this.store.dispatch(deleteMessage({payload:idx}));
  }
  public onSend() : void
  {
    this.store.dispatch(addMessage({ payload:this.text!}));
  }
  
  ngOnInit() 
  {
    this.storeSubscription = this.store.select(messages).subscribe(msgs=>this.messages = msgs);
  }
  ngOnDestroy(): void 
  {
    this.storeSubscription?.unsubscribe();
  }

  constructor(private store: Store<IState>) { }
}
