import { Component, EventEmitter, Input, Output, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';

import { BasketListState } from '../../../store/basket/basket.state';


@Component({
  selector: 'app-products-list-item',
  templateUrl: './products-list-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ProductsListItemComponent {

  @Input() product;
  @Output() addToBasket = new EventEmitter<any>();


  constructor(
    private store: Store<BasketListState>
  ) { }


  getImageUrl(product) {
    return `url('${product.image}')`;
  }

  addProductToBasket(product) {
    this.addToBasket.emit(product)
  }

}
