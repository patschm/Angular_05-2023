import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
    <div class="row">
        <div class="col-sm-4">
          <app-productgroup-list></app-productgroup-list>
        </div>
        <div class="col-sm-8">
          <app-product-list></app-product-list>
        </div>
    </div>
  </div>
  `,
  styles: []
})
export class AppComponent {
  title = 'shop';
}
