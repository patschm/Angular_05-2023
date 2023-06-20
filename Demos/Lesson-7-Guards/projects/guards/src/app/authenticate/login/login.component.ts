import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

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
    this.auth.login(this.username, this.password)
    if (this.auth.isLoggedIn)
    {
      this.router.navigate([this.auth.requestedUrl]);
    }
    else
    {
      this.message = "Invalid username or password";
    }
  }

  constructor(private auth: AuthService, private router: Router) { }
  ngOnInit() {
  }

}
