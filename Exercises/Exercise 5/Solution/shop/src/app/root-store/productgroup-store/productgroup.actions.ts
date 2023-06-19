import { createAction, props, Action } from '@ngrx/store';
import { ActionTypes } from './action.types';
import { ProductGroup } from 'src/app/entities';

export const selectProductgroup = createAction(
  ActionTypes.SelectProductgroup, props<ProductGroup>()
);






