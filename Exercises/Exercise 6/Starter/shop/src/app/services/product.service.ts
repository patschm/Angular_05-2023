import { Injectable, Inject } from '@angular/core';
import { IENDPOINTS, IRestEndpoints } from '../app.config';
import { Review, Price, Specification, Product } from 'src/app/entities';
import { Observable, of } from 'rxjs';
import { catchError, filter, retry } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';

@Injectable({
    providedIn: 'root'
  })
export class ProductService extends BaseService
{
    public addReview(review: Review) {
        return this.http.post(this.config.apiEndpoint + 'products/reviews/', review)
            .pipe(retry(3), catchError(this.handleError(null)));
    }
    public reviews(pid: Number): Observable<Review[]> {
        return this.http.get<Review[]>(this.config.apiEndpoint + 'products/reviews/' + pid)
            .pipe(retry(3), catchError(this.handleError([])));
    }
    public prices(pid: Number): Observable<Price[]> {
        return this.http.get<Price[]>(this.config.apiEndpoint+ 'products/prices/' + pid)
            .pipe(retry(3), catchError(this.handleError([])));
    }
    public specifications(pid: Number): Observable<Specification[]> {
        return this.http.get<Specification[]>(this.config.apiEndpoint + 'products/specifications/' + pid)
            .pipe(retry(3), catchError(this.handleError([])));
    }
    public product(pid: Number): Observable<Product> {
        return this.http.get<Product>(this.config.apiEndpoint + 'products/' + pid)
            .pipe(
                retry(3), 
                catchError(this.handleError(null)),
                filter((p):p is Product=>!!p)
            );
    }
    public products(pgid: Number, page: Number= 0, count: Number= 10): Observable<Product[]> {
        return this.http.get<Product[]>(this.config.apiEndpoint + 'products/all/' + pgid + '/' + page + '/' + count)
          .pipe(retry(3), catchError(this.handleError([])));
    }

    constructor(@Inject(IENDPOINTS)config: IRestEndpoints,  private http: HttpClient) {
        super(config);
    }
}
