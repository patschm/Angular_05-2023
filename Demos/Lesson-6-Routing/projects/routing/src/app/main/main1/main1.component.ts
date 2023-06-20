import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main1',
  template: `<h1>Main 1</h1>
      <button (click)="doSubs()">Subs</button>`,
  styles: []
})
export class Main1Component implements OnInit 
{
  public doSubs()
  {
      this.router.navigate(['/sub/sub1', {}]);
  }
  constructor(private router: Router) { }

  ngOnInit() {
  }

}
