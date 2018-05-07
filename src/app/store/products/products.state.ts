import Products from '../../models/products.model';

export interface ProductsItemState extends Products {
  quantity: number;
}

export interface ProductsListState{
  products: ProductsItemState[];
  loading: boolean;
  loaded: boolean;
}

export const initializeProductsListState = function() {
  return {
    loading: false,
    loaded: false
  }
}
