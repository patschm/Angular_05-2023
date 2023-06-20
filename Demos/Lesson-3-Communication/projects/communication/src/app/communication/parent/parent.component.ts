import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit 
{
  public someName:string = "";
  public childName:string = "";

  public onChangeParent(arg:any)
  {
      this.someName = arg.target.value;
  }
  public onChildChange(arg:any)
  {
      this.childName = arg;
  }
  
  constructor() { }

  ngOnInit() {
  }

}
