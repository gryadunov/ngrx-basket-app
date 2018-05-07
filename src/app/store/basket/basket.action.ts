import { Action } from '@ngrx/store'
import { BasketListItemState }  from './basket.state'
import Basket from '../../models/basket.model'


export const GET_BASKET_LIST = '[BASKET] GET_BASKET_LIST'
export const GET_BASKET_LIST_SUCCESS = '[BASKET] GET_BASKET_LIST_SUCCESS'
export const GET_BASKET_LIST_ERROR = '[BASKET] GET_BASKET_LIST_ERROR'

export const ADD_TO_BASKET_LIST = '[BASKET] ADD_TO_BASKET_LIST'
export const ADD_TO_BASKET_LIST_SUCCESS = '[BASKET] ADD_TO_BASKET_LIST_SUCCESS'
export const ADD_TO_BASKET_LIST_ERROR = '[BASKET] ADD_TO_BASKET_LIST_ERROR'

export const UPDATE_BASKET_ITEM = '[BASKET] UPDATE_BASKET_ITEM'
export const UPDATE_BASKET_ITEM_SUCCESS = '[BASKET] UPDATE_BASKET_ITEM_SUCCESS'
export const UPDATE_BASKET_ITEM_ERROR = '[BASKET] UPDATE_BASKET_ITEM_ERROR'

export const REMOVE_BASKET_ITEM = '[BASKET] REMOVE_BASKET_ITEM'
export const CHECKOUT_BASKET = '[BASKET] CHECKOUT'

export class GetBasketList implements Action {
  readonly type = GET_BASKET_LIST
}

export class GetBasketListSuccess implements Action {
  readonly type = GET_BASKET_LIST_SUCCESS

  constructor(public payload: BasketListItemState[]){}

}
export class GetBasketListError implements Action {
  readonly type = GET_BASKET_LIST_ERROR
}

export class AddToBasketList implements Action {
  readonly type = ADD_TO_BASKET_LIST

  constructor(public payload: Basket){}
}
export class AddToBasketListSuccess implements Action {
  readonly type = ADD_TO_BASKET_LIST_SUCCESS

  constructor(public payload: BasketListItemState){}
}
export class AddToBasketListError implements Action {
  readonly type = ADD_TO_BASKET_LIST_ERROR
}

export class UpdateBasketItem implements Action {
  readonly type = UPDATE_BASKET_ITEM

  constructor(public payload: Basket){}
}
export class UpdateBasketItemSuccess implements Action {
  readonly type = UPDATE_BASKET_ITEM_SUCCESS

  constructor(public payload: BasketListItemState){}
}
export class UpdateBasketError implements Action {
  readonly type = UPDATE_BASKET_ITEM_ERROR
}

export class RemoveBasketItem implements Action {
  readonly type = REMOVE_BASKET_ITEM

  constructor(public payload: BasketListItemState) {}
}

export class Checkout implements Action {
  readonly type = CHECKOUT_BASKET
}

export type All = GetBasketList | GetBasketListSuccess | GetBasketListError |
  AddToBasketList | AddToBasketListSuccess | AddToBasketListError |
  UpdateBasketItem | UpdateBasketItemSuccess | UpdateBasketError |
  RemoveBasketItem | Checkout;
