import { Component, OnInit, OnDestroy } from '@angular/core';
import { Message } from '../basic-store/actions/message.model';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-basic-b',
  templateUrl: './basic-b.component.html',
  styleUrls: ['./basic-b.component.css']
})
export class BasicBComponent implements OnInit, OnDestroy 
{
  private storeSubscription?: Subscription;
  public messages: Message[] = [];
  public text?:string;
  
  public onDelete(idx:number) : void
  {
    let delItem = this.messages.find(itm=>itm.index == idx);
    this.store.dispatch({type:'delete', payload:delItem});
  }
  public onSend() : void
  {
    let max = Math.max(...this.messages.map(m=>m.index));
    this.store.dispatch({ type:'add', payload: { index: max+1, text:this.text}});
  }
  
  ngOnInit() 
  {
    this.storeSubscription = this.store.select(state=>state.messages).subscribe(msgs=>this.messages = msgs);
  }
  ngOnDestroy(): void 
  {
    this.storeSubscription?.unsubscribe();
  }

  constructor(private store: Store<any>) { }
}
