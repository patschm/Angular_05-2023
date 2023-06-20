import { Component, OnInit } from '@angular/core';
import { concatMap, delay, exhaustMap, interval, map, mergeMap, Observable, of, Subject, switchMap } from 'rxjs';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{this.nummer}}</h1>    
    <h1>{{this.data}}</h1>
  `,
  styles: []
})
export class AppComponent implements OnInit
{
  public data:string = "";
  public nummer: number = 0;

  private subject$: Observable<number> = interval(1000).pipe(map(n=>n++));

  ngOnInit(): void {
    this.subject$.subscribe(n=>this.nummer = n);
    // Anti pattern
    // this.subject$.subscribe(nr=>{
    //   this.emulateCall(nr).subscribe(dt=>this.data = dt);
    // });

    //this.subject$.pipe(concatMap(nr=>this.emulateCall(nr))).subscribe(dt=>this.data = dt);
    //this.subject$.pipe(mergeMap(nr=>this.emulateCall(nr))).subscribe(dt=>this.data = dt);
    //this.subject$.pipe(switchMap(nr=>this.emulateCall(nr))).subscribe(dt=>this.data = dt);
    this.subject$.pipe(exhaustMap(nr=>this.emulateCall(nr))).subscribe(dt=>this.data = dt);
  }
  emulateCall(nr:number) : Observable<string>
  {
    return of("From server: " + nr).pipe(delay(Math.random()*5000));
  }

}
