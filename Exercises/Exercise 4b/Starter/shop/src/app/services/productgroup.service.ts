import { ProductGroup } from '../entities/entities';
import { APP_CONFIG, IAppConfig } from '../app.config';
import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class ProductgroupService {  // extends BaseService { DI through inheritance is broken since v8

     // Very annoying...
     protected config:IAppConfig;
     protected handleError<T>(result?: T) {
         return (error: any) : Observable<T> => {
           console.log(error);
           return of(result as T);
         }
     }
  public productgroups(): Observable<ProductGroup[]> {
    return this.http.get<ProductGroup[]>(this.config.apiEndpoint + 'productgroups')
      .pipe(retry(3), catchError(this.handleError([])));
  }
  constructor(@Inject(APP_CONFIG)config: IAppConfig, private http: HttpClient) {
    this.config = config;
    //super(config);
  }
}
