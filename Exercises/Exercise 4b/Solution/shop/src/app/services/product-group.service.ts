import { HttpClient } from '@angular/common/http';
import { ProductGroup } from '../entities';
import { IENDPOINTS, IRestEndpoints } from '../app.config';
import { Injectable, Inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { BaseService } from './base.service';

@Injectable()
export class ProductgroupService extends BaseService
{
  public get productgroups$(): Observable<ProductGroup[]> {
    return this.http.get<ProductGroup[]>(this.config.apiEndpoint + 'productgroups')
      .pipe(retry(3), catchError(this.handleError([])));
  }

  constructor(@Inject(IENDPOINTS)config: IRestEndpoints, private http: HttpClient) {
    super(config);
  }
}

