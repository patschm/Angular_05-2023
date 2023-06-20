import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { catchError, finalize, map } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-restcalls',
  templateUrl: './restcalls.component.html',
  styleUrls: ['./restcalls.component.css']
})
export class RestcallsComponent implements OnInit 
{
  public groups:any[] = [];

  constructor(private client:HttpClient) { }

  ngOnInit()
  {
    this.client.get<any[]>("https://localhost:5001/productgroups")
      .subscribe({
        next: data=>this.groups = data,
        error: respError=>console.log(respError.statusText),
        complete: ()=> console.log("Call completed")
      });

    this.client.get("https://localhost:5001/productgroups", { observe: 'response'})
      .pipe(
        map(resp=>{
            if (resp.ok) return <any[]>resp.body;
            return [];
          }),
          catchError(err=>{
            console.log(err);
            return throwError(()=>new Error(err));
          }),
          finalize(()=>console.log("Call Completed"))
        )
      .subscribe(data=>this.groups = data);

  }
}
