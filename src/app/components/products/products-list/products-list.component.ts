import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Store } from '@ngrx/store';
import { ProductsItemState, ProductsListState } from '../../../store/products/products.state';
import * as ProductsAction from '../../../store/products/products.action';
import * as BasketAction from '../../../store/basket/basket.action';


@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush

})

export class ProductsListComponent implements OnInit {
  private productsListState$: Observable<ProductsItemState[]>;

  constructor(
    private store: Store<ProductsListState>
  ) {}

  ngOnInit() {
    this.productsListState$ = this.store.select(state => state.products);
    this.store.dispatch(new ProductsAction.GetProducts());
  }

  onAddToBasket(product) {
    this.store.dispatch(new BasketAction.AddToBasketList(product));
  }
}
