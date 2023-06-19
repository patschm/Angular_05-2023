import { ProductGroup } from '../entities';
import { IENDPOINTS, IRestEndpoints } from '../app.config';

// TODO: 1
// import the following components
//  - Injectable (from @angular/core)
//  - HttpClient (from @angular/common/http)
//  - Observable, of (from rxjs)
//  - retry, catchError (from rxjs/operators)


// TODO: 2
// Make this class a service

export class ProductgroupService {

  protected handleError<T>(result?: T) {
    return (error: any) : Observable<T> => {
      console.error(error);
      return of(result as T);
    }
  }

  // TODO: 4
  // Make this property return an Observable object for ProductGroup[]
  public get productgroups$(): ProductGroup[] {
    // TODO: 5
    // Retrieve the productgroups from http://localhost:5000/productgroups
    // retry 3 times and handle errors (handleError Method)
    // and return the observable
    return [];
  }
  // TODO: 3
  // Inject the HttpClient service here
  constructor(@Inject(IENDPOINTS)private config: IRestEndpoints) {
  }
}

