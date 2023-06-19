import { createReducer, on } from '@ngrx/store';
import { selectProductgroup } from './productgroup.actions';
import { ProductGroup } from 'src/app/entities';
import { IState } from '../root.state';

export interface IProductgroupState {
    currentProductgroup: ProductGroup;
}

export const productgroupSelect = (state: IState)=>state.productgroup;

export const initialState: IProductgroupState = {
    currentProductgroup: new ProductGroup()
}

export const productgroupReducer = createReducer(
  initialState,
  on(selectProductgroup, (state, action)=>({currentProductgroup:action}))
);




