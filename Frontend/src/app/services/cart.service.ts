import { Injectable } from '@angular/core';
import { CarDetail } from '../models/carDetail';
import { CartItems } from '../models/cartItems';
import { ToastrService } from 'ngx-toastr';
import { CartItem } from '../models/cartItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor( private toastrService:ToastrService) { }

  addToCart(carDetail: CarDetail) {
    if (CartItems.length === 1) {
      this.toastrService.error("Sepette zaten bir araba var. Lütfen önce mevcut arabayı kaldırın.");
    } else {
      let cartItem = new CartItem();
      cartItem.quuantity = 1;
      cartItem.carDetail = carDetail;
      CartItems.push(cartItem);
      this.toastrService.success("Sepete Eklendi", carDetail.carName);
    }
  }
  

  listToCart(){
    return CartItems;
  }

  deleteToCart(carId:number){
    let item = CartItems.find(c => c.carDetail?.carId === carId);
    if (item) {
        CartItems.splice(CartItems.indexOf(item), 1);
       this.toastrService.success("Sepete Silindi")
    }
  }

  calculateTotalAmount(cartItem: CartItem): number {
    if (cartItem.carDetail ) {
      return cartItem.carDetail.dailyPrice;
    } else {
      return 0;
    }
  }
}
