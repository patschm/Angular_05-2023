import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { MessageService } from '../../message.service';
import { loadedMessages, addMessage, deleteMessage } from '../actions/message.actions';
import { map, concatMap, catchError, switchMap } from 'rxjs/operators';
import { empty, EMPTY, Observable, of } from 'rxjs';
import { EMPTY_OBSERVER } from 'rxjs/internal/Subscriber';

@Injectable()
export class MessageEffects {

  loadMessages$ = createEffect(()=> this.actions$.pipe(
        ofType(loadedMessages),
        concatMap(()=>this.msgService.getAll()),
        map(msgs => loadedMessages({payload: msgs}))
      )
    );
  saveMessage$ = createEffect(()=>this.actions$.pipe(
    ofType(addMessage),
    map(action=> {
        this.msgService.saveMessage({index:0, text:action.payload});
        return action;
      })
    ), 
    {dispatch:false});
  deleteMessage$ = createEffect(()=>this.actions$.pipe(
      ofType(deleteMessage),
      map(action => {
        this.msgService.deleteMessage(action.payload);
        return action;
      })
    ),
    {dispatch:false}
  );
  
  constructor(private actions$: Actions, private msgService:MessageService)
  {}
}
