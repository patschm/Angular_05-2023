import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
      <!-- Make sure BasicModule is imported and LatestModule disabled -->
      <!-- <app-basic></app-basic> -->

      <!-- Make sure LatestModule is imported and BasicModule disabled -->
      <app-latest></app-latest>
  `,
  styles: []
})
export class AppComponent {
  title = 'Redux';
}
