import { createAction, props } from "@ngrx/store";
import { Product } from "src/app/entities";
import { ActionTypes } from "./action.types";

export const selectProduct = createAction(
    ActionTypes.SelectProduct, props<Product>()
  );