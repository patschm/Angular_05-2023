import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit
{
  public username?: string;
  public password?: string;
  public isAuthenticated: boolean = false;
  public message?: string;

  public onSubmit()
  {
    this.authSvc.login(this.username, this.password)
    if (this.authSvc.isLoggedIn)
    {
      this.router.navigate([this.authSvc.requestedUrl]);
    }
    else
    {
      this.message = "Invalid username or password";
    }
  }

  constructor(private authSvc: AuthenticationService, private router: Router) { }
  
  ngOnInit() {
  }

}
