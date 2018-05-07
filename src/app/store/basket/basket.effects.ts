import {BasketListItemState} from './basket.state';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Action} from '@ngrx/store';
import {Actions, Effect} from '@ngrx/effects';
import {of} from 'rxjs/observable/of';
import {StorageService} from '../../services/storage.service'
import * as BasketActions from './basket.action';
import {STORAGE_BASKET_KEY} from './basket.constants';

@Injectable()
export class BasketEffects {

  constructor(private StorageService: StorageService,
              private actions$: Actions) {
  }

  @Effect()
  GetBasket$: Observable<Action> = this.actions$.ofType<BasketActions.GetBasketList>(BasketActions.GET_BASKET_LIST)
    .mergeMap(action => {
      // I already know that this code must be inside "effects", but I'm not sure how to make it right
      const storageBasketItems = this.StorageService.get(STORAGE_BASKET_KEY, []);
      return of(new BasketActions.GetBasketListSuccess(storageBasketItems as BasketListItemState[]));
    });

  @Effect() // looks like this a part that can be refactored and simplified
  addToBasket$: Observable<Action> = this.actions$.ofType<BasketActions.AddToBasketList>(BasketActions.ADD_TO_BASKET_LIST)
    .mergeMap(action => {
      return of(new BasketActions.AddToBasketListSuccess({
        ...action.payload,
        quantity: 1,
        totalPrice: action.payload.price
      }));
    });
}
