import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit 
{
  @Input()
  public name:string = "";

  @Output()
  public modified: EventEmitter<string> = new EventEmitter();

  public onInput(arg:any)
  {
      this.name = arg.target.value;
      this.modified.emit(this.name);
  }
  constructor() { }

  ngOnInit() {
  }

}
