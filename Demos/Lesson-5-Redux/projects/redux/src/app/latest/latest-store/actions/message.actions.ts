import { createAction, props } from '@ngrx/store';
import { Message } from './message.model';

export enum MessageActionTypes {
    AddMessage = '[Message] Add Message',
    DeleteMessage = '[Message] Delete Message',
    LoadedMessages = '[Message] Loaded Message'
  }

export const addMessage = createAction(MessageActionTypes.AddMessage, props<{payload:string}>());
export const deleteMessage = createAction(MessageActionTypes.DeleteMessage, props<{payload:number}>());
export const loadedMessages = createAction( MessageActionTypes.LoadedMessages, props<{payload:Message[]}>());

