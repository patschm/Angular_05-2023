import { IProductState } from './product-store/product.store';
import { IProductgroupState } from './productgroup-store/productgroup.store';

export interface IState {
    productgroup:  IProductgroupState,
    product: IProductState
}

