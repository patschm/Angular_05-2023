import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZenderComponent } from './zender/zender.component';
import { OntvangerComponent } from './ontvanger/ontvanger.component';
import { FormsModule } from '@angular/forms';
import { Action, StoreModule } from '@ngrx/store';
import { Message } from '../Message';

export interface IState
{
  messages:Message[];
}

export class MessageAddAction implements Action
{
  public type: string = "AddMessage";
  public payload?: Message
}

export class MessageDeleteAction implements Action
{
  public type: string = "DeleteMessage";
  public payload?: Message
}

export function messageReducer(state:Message[] = [], action:any)
{
  if (action.type == "AddMessage")
  {
    return [...state, action.payload];
  }
  if (action.type == "DeleteMessage")
  {
    return [...state.filter(inp=>inp.id != action.payload.id)]
  }
  return state;
}

@NgModule({
  declarations: [
    ZenderComponent,
    OntvangerComponent
  ],
  exports: [
    ZenderComponent,
    OntvangerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    StoreModule.forRoot({ 
      messages: messageReducer 
    }),

  ]
})
export class BaseModule { }
