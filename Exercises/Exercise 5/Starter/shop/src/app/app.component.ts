import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <nav class="navbar  navbar-expand-lg  navbar-dark bg-dark" role="navigation">
      <!--TODO: 5
          Assign the home, productgroups and about routes to the links (a).
          Assign the active style to the class when the route is active (li)
      -->
      <ul class="navbar-nav mr-auto">
        <li class="nav-item" >
          <a class="nav-link">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link">Product groups</a>
        </li>
        <li class="nav-item">
          <a class="nav-link">About</a>
        </li>
      </ul>
    </nav>
    <!--TODO: 6
      Define the router placeholder
      Test the application
    -->
  </div>
  `,
  styles: []
})
export class AppComponent {
  title = 'shop';
}