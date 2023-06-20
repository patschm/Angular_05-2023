import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-latest',
  template: `
     <app-latest-a></app-latest-a>
    <hr/>
    <app-latest-b></app-latest-b>
  `,
  styles: [
  ]
})
export class LatestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
