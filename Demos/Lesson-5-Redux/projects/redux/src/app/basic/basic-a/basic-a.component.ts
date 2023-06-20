import { Component, OnInit, OnDestroy } from '@angular/core';
import { Message} from '../basic-store/actions/message.model';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-basic-a',
  templateUrl: './basic-a.component.html',
  styleUrls: ['./basic-a.component.css']
})
export class BasicAComponent implements OnInit, OnDestroy 
{
  private storeSubscription?: Subscription;
  public messages: Message[] = [];
  public text:string = "";
  
  public onDelete(idx:number) : void
  {
    let delItem = this.messages.find(itm=>itm.index == idx);
    this.store.dispatch({ type:'delete', payload:delItem});
  }
  public onSend() : void
  {
    let max = Math.max(...this.messages.map(x=>x.index));
    this.store.dispatch({ type:'add', payload: { index: max+1, text:this.text}});
  }
  
  ngOnInit() 
  {
    this.storeSubscription = this.store.select(state=>state.messages).subscribe(msgs=>{
      this.messages = msgs;
    });
    this.service.getAll().subscribe(res=>{
      this.store.dispatch({ type:'loaded', payload:res });
    });
  }
  ngOnDestroy(): void 
  {
    this.storeSubscription?.unsubscribe();
  }

  constructor(private store:Store<any>, private service: MessageService) { 
  }
}
