import { Observable, of } from 'rxjs';
import { IRestEndpoints } from '../app.config';

export class BaseService {
    protected config:IRestEndpoints;

    constructor(config: IRestEndpoints) {
        this.config = config;
    }

    protected handleError<T>(result?: T) {
        return (error: any) : Observable<T> => {
          console.log(error);
          return of(result as T);
        }
    }
}
