import { ProductsListState } from './products/products.state';
import { BasketListState } from './basket/basket.state';

export interface StoreState {
  products: ProductsListState;
  basket: BasketListState;
}