import { createReducer, on } from "@ngrx/store";
import { Product } from "src/app/entities"
import { IState } from "../root.state";
import { selectProduct } from "./product.actions";

export interface IProductState {
    currentProduct: Product
  }
  
  export const productSelect = (state: IState)=>state.product;
  
  export const initialState: IProductState = {
    currentProduct: new Product()
  }

  export const productReducer = createReducer(
    initialState,
    on(selectProduct, (state, action)=>({currentProduct:action}))
  );
  