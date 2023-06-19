import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  public isLoggedIn: boolean = false;
  public requestedUrl?: string;

  public login(username:string = "", password:string = "")
  {
    if (username == "" || password == "")
    {
      return;
    }
    this.isLoggedIn = username == password;
  }
  constructor() { }
}
