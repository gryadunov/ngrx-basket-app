import { Store } from '@ngrx/store';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { BasketListState } from '../../../store/basket/basket.state';
import { StoreState } from '../../../store/store.state';
import { StorageService } from '../../../services/storage.service'
import * as BasketAction from '../../../store/basket/basket.action';
import {STORAGE_BASKET_KEY} from "../../../store/basket/basket.constants";


@Component({
  selector: 'app-basket-list',
  templateUrl: './basket-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class BasketListComponent implements OnInit {
  private basketListState$: Store<BasketListState>;

  constructor(
    private store: Store<StoreState>,
    private StorageService: StorageService
) {}


  ngOnInit() {
    this.basketListState$ = this.store.select(state => state.basket);
    this.store.dispatch(new BasketAction.GetBasketList());


    this.store.subscribe(x => {
      if(x && x.basket && x.basket.basketProducts && Array.isArray(x.basket.basketProducts)) {
        this.StorageService.set(STORAGE_BASKET_KEY,  x.basket.basketProducts);
      }
    });
  }

  onUpdate(basketItem) {
    this.store.dispatch(new BasketAction.UpdateBasketItem(basketItem));
  }

  onRemove(basketItem) {
    this.store.dispatch(new BasketAction.RemoveBasketItem(basketItem));
  }

  checkout() {
    this.store.dispatch(new BasketAction.Checkout());
  }
}
