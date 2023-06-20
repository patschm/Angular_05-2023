import { createReducer, on } from '@ngrx/store';
import * as messageActions from '../actions/message.actions';
import { Message } from '../actions/message.model';



export interface IMessageState {
  messages: Message[];
}

export const initialMessageState: IMessageState = {
  messages: []
};

export const messageReducer = createReducer(
  initialMessageState,
  on(messageActions.addMessage, (state, action )=>{
    let max = Math.max(...state.messages.filter(m=>m != null).map(x=>x.index));
    let msg = {index:max + 1, text:action.payload};
    return {messages: [...state.messages, msg]};
  }),
  on(messageActions.deleteMessage, (state, action)=>{
    let newArr = state.messages.filter((item:Message)=>item.index != action.payload);
      return { messages: newArr};
  }),
  on(messageActions.loadedMessages, (state, action)=>{
    return { messages: action.payload };
  }),
);
