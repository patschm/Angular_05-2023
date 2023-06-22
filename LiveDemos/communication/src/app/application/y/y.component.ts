import { Component, EventEmitter, Input, Output } from '@angular/core';
import { StateService } from '../state.service';

@Component({
  selector: 'app-y',
  templateUrl: './y.component.html',
  styleUrls: ['./y.component.css']
})
export class YComponent {
  @Input("prefix-text")
  public prefix: string = 'Default';
  @Output()
  public increment: EventEmitter<string> = new EventEmitter();

  public data: string = this.prefix;
  public counter : number = 0;

  public clickMe()
  {
    this.data = `${this.prefix} ${++this.counter}`;
    this.increment.emit(this.data);
    this.state.setState(this.data);
  }

  constructor(private state: StateService){

  }
}
