import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit 
{
  public price: number = 123.456789;
  public today: Date = new Date();
  public text: string = "some text";
  
  constructor() { }

  ngOnInit() {
  }

}
