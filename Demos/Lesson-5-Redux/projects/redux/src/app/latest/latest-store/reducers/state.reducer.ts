import { IMessageState, messageReducer } from './message.reducer';
import { ActionReducerMap } from '@ngrx/store';

// Application state.
// See the state of an application as a tree of other state objects. In this example MessageState
export interface IState 
{
  messageState: IMessageState;
}

// This one is convenient for registering the reducers
export const reducers: ActionReducerMap<IState> = 
{
  messageState: messageReducer
};
// selectors are also for convenience. Prevents nasty lambda's in select() function
export const messages = (st:IState)=>st.messageState.messages;