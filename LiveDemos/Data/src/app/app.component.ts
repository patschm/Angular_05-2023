import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  template: `
    <h3 *ngFor="let b of data$ | async">{{b.name}}</h3>
  `,
  styles: []
})
export class AppComponent implements OnInit {
  public data$:Observable<any[]> = EMPTY;
  
  constructor(private http: HttpClient)
  {

  }
  ngOnInit(): void {
    this.data$ = this.http.get<any[]>("https://localhost:5001/brands");
  }
}
