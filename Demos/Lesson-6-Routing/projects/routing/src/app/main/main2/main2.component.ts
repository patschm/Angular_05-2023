import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main2',
  template: `<h1>Main 2: nr={{someNr}}</h1>
  <h2 (click)="navigate(1)">One</h2>
  <h2 (click)="navigate(2)">Two</h2>
  <h2 (click)="navigate(3)">Three</h2>
  <h2 (click)="navigate(4)">Four</h2>
`,
  styles: []
})
export class Main2Component implements OnInit 
{
  public someNr:number = 0;
  public navigate(nr:number)
  {
    this.router.navigate(['main2', nr]);
  }
  constructor(private router: Router, private routersnap:ActivatedRoute) { }

  ngOnInit()
  {
    this.routersnap.params.subscribe(bag=>{
      this.someNr = bag['id'];
    });
  }
}
