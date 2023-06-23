import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-zender></app-zender>
    <hr/>
    <app-ontvanger></app-ontvanger>
  `,
  styles: []
})
export class AppComponent {
  title = 'Reeduks';
}
