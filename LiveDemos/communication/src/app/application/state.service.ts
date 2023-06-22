import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable()
export class StateService {

  private state$:Subject<string> = new BehaviorSubject("");

  public setState(dt:string)
  {
    this.state$.next(dt);
  }
  public get State$()
  {
    return this.state$;
  }

  constructor() { }
}
