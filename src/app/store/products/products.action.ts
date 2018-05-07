import { ProductsItemState }  from './products.state'

import {Action} from '@ngrx/store'

export const GET_PRODUCTS = '[Products] GET_PRODUCTS'
export const GET_PRODUCTS_SUCCESS = '[Products] GET_PRODUCTS_SUCCESS'
export const GET_PRODUCTS_ERROR = '[Products] GET_PRODUCTS_ERROR'

export class GetProducts implements Action {
  readonly type = GET_PRODUCTS
}

export class GetProductsSuccess implements Action {
  readonly type = GET_PRODUCTS_SUCCESS
  constructor(public payload: ProductsItemState[]) {}

}

export class GetProductsError implements Action {
  readonly type = GET_PRODUCTS_ERROR
}

export type All = GetProducts | GetProductsSuccess | GetProductsError