import { Injectable } from '@angular/core';
import { Subject, Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService 
{
  private data:Subject<string> = new Subject();

  public get text(): Observable<string>
  {
    return of("Hello").pipe(delay(2000));
  }

}
