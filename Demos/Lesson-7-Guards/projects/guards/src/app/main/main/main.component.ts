import { Component, OnInit } from '@angular/core';
import { RouterEvent, NavigationStart, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styles: []
})
export class MainComponent implements OnInit 
{
  public loading:boolean = false;

  private onNavigate(evt:RouterEvent)
  {
    if (evt instanceof NavigationStart) this.loading = true;
    if (evt instanceof NavigationEnd) this.loading = false;
  }
  constructor(private router:Router) { }

  ngOnInit()
  {
    this.router.events.subscribe(evt=>this.onNavigate(<RouterEvent>evt));
  }
}
