import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Person } from './person';

@Injectable()
export class StateService 
{
  private _person: Subject<Person> = new Subject();

  public get person(): Observable<Person>
  {
    return this._person;
  }
  public setPerson(value:Person)
  {
    this._person.next(value);
  }
  constructor() { }
}
