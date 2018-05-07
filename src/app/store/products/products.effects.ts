import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { ProductsItemState } from './products.state';
import { environment } from '../../../environments/environment';
import * as ProductsActions from './products.action';


@Injectable()
export class ProductsEffects {

  constructor(private http: HttpClient,
              private actions$: Actions) {
  }


  @Effect() GetProducts$: Observable<Action> = this.actions$
    .ofType<ProductsActions.GetProducts>(ProductsActions.GET_PRODUCTS)
    .mergeMap(action => {
      return this.http.get(environment.client.base_url + '/assets/mocks/products.json')
        .map((response: Response) => {
          return new ProductsActions.GetProductsSuccess(response["products"] as ProductsItemState[]);
        })
        .catch(() => of(new ProductsActions.GetProductsError()));
    })
}