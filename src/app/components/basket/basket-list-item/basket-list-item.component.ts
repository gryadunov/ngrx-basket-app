import { Component, EventEmitter, Input, Output, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-basket-list-item',
  templateUrl: './basket-list-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BasketListItemComponent {

  @Input() basketItem;
  @Output() removed = new EventEmitter<any>();
  @Output() updated = new EventEmitter<any>();

  constructor() { }

  changeQuantity(basketItem, delta){
    if(this.basketItem.quantity <= 1 && delta < 1) return;

    const quantity = basketItem.quantity + delta;
    this.updated.emit({
      ...basketItem,
      quantity,
      totalPrice: quantity * basketItem.price
    });
  }

  remove(basketItem) {
    this.removed.emit(basketItem);
  }

  getImageUrl(basketItem) {
    return `url('${basketItem.image}')`;
  }


}