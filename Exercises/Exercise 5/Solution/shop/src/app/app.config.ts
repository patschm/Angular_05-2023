import { InjectionToken } from '@angular/core';

export const IENDPOINTS = new InjectionToken<IRestEndpoints>('app.config.endpoints');

export interface IRestEndpoints {
  apiEndpoint: string;
}

export const ENDPOINTS: IRestEndpoints = {
    apiEndpoint: 'https://localhost:5001/'
  };