import { Injectable } from '@angular/core';
import { CartItems } from '../../models/cartItems';
import { CartItem } from '../../models/cartItem';

import { Car } from '../../models/car';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor() {}

  addToCart(car: Car) {
    let item = CartItems.find(c => c.car.id === car.id);
    if (item) {
      item.quantity += 1;
    } else {
      let cartItem = new CartItem();
      cartItem.car = car;
      cartItem.quantity = 1;
      CartItems.push(cartItem);
    }
  }
  
  list():CartItem[]{
    return CartItems;
  }

}
