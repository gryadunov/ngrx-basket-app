import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { BasketListComponent } from './components/basket/basket-list/basket-list.component';
import { BasketListItemComponent } from './components/basket/basket-list-item/basket-list-item.component';
import { BasketEffects } from './store/basket/basket.effects';
import { ProductsEffects } from './store/products/products.effects';
import { StorageService } from './services/storage.service';
import { ProductsListComponent } from './components/products/products-list/products-list.component';
import { ProductsListItemComponent } from './components/products/products-list-item/products-list-item.component';
import { CustomFormatPipeClass } from './pipes/customFormat.pipe';
import { StoreDevtoolsModule } from '@ngrx/store-devtools/';
import * as BasketReducer from './store/basket/basket.reducer';
import * as ProductsReducer from './store/products/products.reducer';

@NgModule({
  declarations: [
    AppComponent,
    BasketListComponent,
    BasketListItemComponent,
    ProductsListComponent,
    ProductsListItemComponent,
    CustomFormatPipeClass
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgbModule.forRoot(),
    StoreModule.forRoot({basket: BasketReducer.BasketReducer, products: ProductsReducer.ProductsReducer}),
    EffectsModule.forRoot([BasketEffects, ProductsEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 5
    })
  ],
  providers: [
    StorageService
  ],
  exports: [
    CustomFormatPipeClass
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
