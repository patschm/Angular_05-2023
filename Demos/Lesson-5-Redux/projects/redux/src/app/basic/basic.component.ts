import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic',
  template: `
     <app-basic-a></app-basic-a>
    <hr/>
    <app-basic-b></app-basic-b>
  `,
  styles: [
  ]
})
export class BasicComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
