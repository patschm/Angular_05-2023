import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main1',
  template: `<h1>Main 1</h1>
  <h1>{{data}}</h1>`,
  styles: []
})
export class Main1Component implements OnInit 
{
  public data:string = "";

  constructor( private route: ActivatedRoute) { }

  ngOnInit()
  {
    this.route.data.subscribe((x:any)=>{
      this.data = x.someData;
    });
  }
}
