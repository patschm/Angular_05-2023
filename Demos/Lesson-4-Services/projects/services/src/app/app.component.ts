import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <app-parent *ngIf="isActive"></app-parent>
      <app-restcalls *ngIf="!isActive"></app-restcalls>
    </div>
    <br/>
    <hr/>
    <input type="checkbox" (click)="onclick()" /><span>Check to demo Rest Calls</span>
  `,
  styles: []
})
export class AppComponent {
  public title = 'Services';
  public isActive: boolean = true;

  public onclick() {
    this.isActive = !this.isActive;
  }
}
