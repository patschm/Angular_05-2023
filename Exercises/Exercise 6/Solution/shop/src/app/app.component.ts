import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <nav class="navbar  navbar-expand-lg  navbar-dark bg-dark" role="navigation">
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
        <li class="nav-item" routerLinkActive="active">
          <a class="nav-link" routerLink="/login">Login</a>
        </li>
      </ul>
    </nav>
    <router-outlet></router-outlet>
  </div>
  `,
  styles: []
})
export class AppComponent {
  title = 'shop';
}