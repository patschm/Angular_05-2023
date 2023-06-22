import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit
{
  public numb: number = 10;
  public name:string = "John Doe";
  public hidden:boolean = false;
  public type:string="checkbox";
  public color:string="blue";

  public toggle()
  {
    this.hidden = !this.hidden;
  }

  constructor() { }
  ngOnInit() {
  }

}
