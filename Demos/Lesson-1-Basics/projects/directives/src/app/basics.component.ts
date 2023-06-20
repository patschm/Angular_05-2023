import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styleUrls: ['./basics.component.css']
})
export class BasicsComponent implements OnInit 
{
  public number: number = 4;
  public name:string = "John Doe";
  public numbers:number[] = [100,200,300,400,500, 500,600,700,800,900];
  public hidden:boolean = true;

  public toggle()
  {
      this.hidden = !this.hidden;
  }
  
  constructor() { }

  ngOnInit() {
  }

}
