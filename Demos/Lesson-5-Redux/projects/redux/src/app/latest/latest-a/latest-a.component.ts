import { Component, OnInit, OnDestroy } from '@angular/core';
import { props, Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { MessageService } from '../message.service';
import { Message, IState, messageSelector, deleteMessage, addMessage, loadedMessages } from '../latest-store';

@Component({
  selector: 'app-latest-a',
  templateUrl: './latest-a.component.html',
  styleUrls: ['./latest-a.component.css']
})
export class LatestAComponent implements OnInit, OnDestroy
{
  private storeSubscription?: Subscription;
  public messages?: Message[];
  public text?:string;

  public onDelete(idx: number) : void
  {
    this.store.dispatch(deleteMessage({payload:idx}));
  }
  public onSend() : void
  {
    this.store.dispatch(addMessage({payload:this.text!}));
  }

  ngOnInit()
  {
    this.storeSubscription = this.store.select(messageSelector)
      .subscribe(msgs=>this.messages = msgs);
    // this.msgService.getAll().subscribe(msg=>{
    //   this.store.dispatch(loadedMessages({ payload: msg }));
    // });
    // With effects
    this.store.dispatch(loadedMessages(null!));
  }
  ngOnDestroy(): void
  {
    this.storeSubscription?.unsubscribe();
  }

  constructor(private store:Store<IState>, private msgService: MessageService) { }
}
