import { Injectable } from '@angular/core';
import { Message } from './basic-store/actions/message.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MessageService 
{
  // Emulates a remote service. Including a delay :)
  private messages: Message[] = [{index:0, text:"Hello"}, {index:1, text:"World"}];
  private subject: BehaviorSubject<Message[]> = new BehaviorSubject(this.messages);

  public saveMessage(msg:Message)
  {
    this.messages.push(msg);
    this.subject.next(this.messages);
  }
  public getAll() : Observable<Message[]>
  {
    return this.subject.pipe(delay(1000));
  }
  constructor() { }
}
