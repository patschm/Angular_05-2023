import { Component } from '@angular/core';

@Component({
  selector: 'app-x',
  templateUrl: './x.component.html',
  styleUrls: ['./x.component.css']
})
export class XComponent {
  public data: string = "Component X";
  public counter : number = 0;
  public childData: string = "";

  public clickMe()
  {
    this.data = `Component X ${++this.counter}`;
  }

  public onIncrement(val:string)
  {
    this.childData = val;
  }
}
