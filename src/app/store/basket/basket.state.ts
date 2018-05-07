import Products from '../../models/products.model';

export interface BasketListItemState extends Products {
  quantity: number;
  totalPrice: number;
}

export interface BasketListState {
  loaded: boolean;
  isEmpty: boolean;
  total: number;
  basketProducts: BasketListItemState[];
}

export const initializeBasketState = function(){
  return {
    loaded: false,
    isEmpty: true,
    total: 0,
    basketProducts: []
  }
}
