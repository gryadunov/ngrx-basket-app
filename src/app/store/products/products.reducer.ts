import { initializeProductsListState, ProductsListState, ProductsItemState } from './products.state';
import * as ProductsActions from './products.action';
export type Action = ProductsActions.All;

const defaultProductsStates: ProductsItemState[] = []
const defaultState: ProductsListState = {
  ...initializeProductsListState(),
  products: defaultProductsStates
};

export function ProductsReducer(state = defaultState, action: Action) {
  switch (action.type) {
    case ProductsActions.GET_PRODUCTS: {
      return {...state, loaded: false, loading: true};
    }
    case ProductsActions.GET_PRODUCTS_SUCCESS: {
      return {
        ...state,
        products: [...action.payload],
        loading: false,
        loaded: true
      };
    }
    default: {
      return state;
    }
  }
}
