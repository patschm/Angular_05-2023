import { Component, OnDestroy, OnInit } from '@angular/core';
import { StateService } from '../state.service';
import { Subscriber, Subscription } from 'rxjs';

@Component({
  selector: 'app-x',
  templateUrl: './x.component.html',
  styleUrls: ['./x.component.css']
})
export class XComponent implements OnInit, OnDestroy {
  public data: string = "Component X";
  public counter : number = 0;
  public childData: string = "";
  private subsct: Subscription = new Subscription();

  public clickMe()
  {
    this.data = `Component X ${++this.counter}`;
    this.state.State$.subscribe(dt=>this.childData = dt);
  }

  public onIncrement(val:string)
  {
    this.childData = val;
  }
  constructor(public state: StateService){

  }
  ngOnDestroy(): void {
   this.subsct.unsubscribe();
  }
  ngOnInit(): void {
    this.subsct = this.state.State$.subscribe(dt=>this.childData = dt);
  }
}
