import {initializeBasketState} from './basket.state';
import * as BasketActions from './basket.action';

export type Action = BasketActions.All;

export function BasketReducer(state = initializeBasketState(), action: Action) {

  switch (action.type) {
    case BasketActions.GET_BASKET_LIST_SUCCESS: {
      const basketProducts = action.payload;
      return {
        ...state,
        basketProducts,
        loaded: true,
        isEmpty: basketProducts.length === 0,
        total: countTotal(basketProducts)
      };
    }

    case BasketActions.ADD_TO_BASKET_LIST_SUCCESS: {
      const itemId = action.payload.id;
      const basketList = state.basketProducts;
      let basketProducts;
      if (basketList.find(x => x.id === itemId)) {
        basketProducts = basketList.map(x => {
          if (x.id !== itemId) {
            return x
          }
          const newQuantity = x.quantity + 1;
          return {
            ...x,
            quantity: newQuantity,
            totalPrice: x.price * newQuantity
          }
        });
      } else {
        basketProducts = [...state.basketProducts, action.payload];
      }

      return {
        ...state,
        basketProducts,
        isEmpty: basketProducts.length === 0,
        total: countTotal(basketProducts)
      };
    }

    case BasketActions.UPDATE_BASKET_ITEM: {
      const basketProducts = state.basketProducts.map(t => (t.id === action.payload.id ? action.payload : t));

      return {
        ...state,
        basketProducts,
        isEmpty: basketProducts.length === 0,
        total: countTotal(basketProducts)
      }
    }
    case BasketActions.REMOVE_BASKET_ITEM: {
      const basketProducts = state.basketProducts.filter(t => t.id !== action.payload.id);
      return {
        ...state,
        basketProducts,
        isEmpty: basketProducts.length === 0,
        total: countTotal(basketProducts)
      };
    }


    case BasketActions.CHECKOUT_BASKET: {
      alert('CHECKOUT FAILED. Try again later.\n\nThank you in advance for your patience!');
      return state;
    }

    default: {
      return state;
    }
  }

  function countTotal(products) {
    return products.reduce((acc, product) => (acc + product.totalPrice), 0);
  }

}

