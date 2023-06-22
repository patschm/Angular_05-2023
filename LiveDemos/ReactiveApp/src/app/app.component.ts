import { Component, OnDestroy, OnInit } from '@angular/core';
import { EMPTY, Observable, Subject, Subscription, concatMap, debounce, delay, empty, exhaustMap, filter, interval, map, mergeMap, of, switchMap, tap, timer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  public showdata:string = "";
  public subject$:Subject<number> = new Subject();
  public numGen$: Observable<number> = interval(1000);
  private numb : number = 0;
  private numbers: number[] = [];
  public subjectPipe$: Observable<any> = EMPTY;
  private sunscr: Subscription = new Subscription();

  public onClick()
  {
    this.numbers.push(++this.numb);
    this.subject$.next(this.numb);
  }

  public doRestCall(nr: number)
  {
    return of("From back: " + nr).pipe(delay(5000));
  }
  ngOnInit(): void {

    //this.numGen$.subscribe(data=>this.showdata = "New number: " + data)
    this.subjectPipe$ =  this.subject$
        .pipe(
          tap(d=>console.log(d)),
          //concatMap(dt=>this.doRestCall(dt))
          //mergeMap(dt=>this.doRestCall(dt))
          //exhaustMap(dt=>this.doRestCall(dt))
          switchMap(dt=>this.doRestCall(dt))
          //filter(d=>d%2 == 0),
          //debounce(_=>timer(1000)),
          //map(d=> "From back: " + d),
        );

    this.sunscr = this.subjectPipe$.subscribe(data=>this.showdata = data);
  }
  ngOnDestroy(): void
  {
    this.sunscr.unsubscribe();
  }
}
