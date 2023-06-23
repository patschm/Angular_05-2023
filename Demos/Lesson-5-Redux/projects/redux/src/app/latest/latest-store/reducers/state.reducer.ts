import { IMessageState, messageReducer } from './message.reducer';
import { ActionReducerMap } from '@ngrx/store';

export interface IProductState
{
  selectedProduct:any;
}

// Application state.
// See the state of an application as a tree of other state objects. In this example MessageState
export interface IState
{
  messageState: IMessageState;
  //productState:IProductState
}

// This one is convenient for registering the reducers
export const reducers: ActionReducerMap<IState> =
{
  messageState: messageReducer,
  //productState:productReducer
};
// selectors are also for convenience. Prevents nasty lambda's in select() function
export const messageSelector = (st:IState)=>st.messageState.messages;
