import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <nav class="navbar  navbar-expand-lg  navbar-dark bg-dark" role="navigation">
      <!--TODO: 5
          Assign the home, productgroups and about routes to the links.
          Assign the active style to the class when the route is active
      -->
      <ul class="navbar-nav mr-auto">
        <li class="nav-item" routerLinkActive="active">
          <a class="nav-link" routerLink="/home" >Home</a>
        </li>
        <li class="nav-item" routerLinkActive="active">
          <a class="nav-link" routerLink="/productgroups">Product groups</a>
        </li>
        <li class="nav-item" routerLinkActive="active">
          <a class="nav-link" routerLink="/about">About</a>
        </li>
      </ul>
    </nav>
    <!--TODO: 6
      Define the router placeholder

      Test the application
    -->
    <router-outlet></router-outlet>
  </div>
  `,
  styles: []
})
export class AppComponent {
  title = 'shop';
}