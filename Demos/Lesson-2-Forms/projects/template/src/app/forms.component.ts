import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit 
{
  public name: string = "Joan";
  public age:number = 34;

  public submit()
  {
      console.log(this.name + " " + this.age);
  }
  
  constructor() { }

  ngOnInit() {
  }

}
