import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetail } from '../../../models/carDetail';
import { CarService } from '../../../services/car.service';
import { CartItem } from '../../../models/cartItem';
import { CartService } from '../../../services/cart.service';
import { CartItems } from '../../../models/cartItems';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit{

  cartItems:CartItem[] = [];

  totalFilter: number = 0;

  baseUrl = 'https://localhost:7138/Uploads/Images/';
  
  constructor(
    private carService: CarService,
    private activatedRoute: ActivatedRoute,
    private cartService: CartService,
  ) {}
  
  ngOnInit(): void {
    this.cartToList();
  }

  cartToList(): void {
    this.cartItems =  this.cartService.listToCart();
    this.cartItems.forEach(item => {
      item.totalamount = this.cartService.calculateTotalAmount(item);
      this.totalFilter += item.totalamount; 
    });
  }
  

  cartToDelete(carId: number): void {
    let item = this.cartItems.find(c => c.carDetail?.carId === carId);
    if (item && item.carDetail) {
      this.cartService.deleteToCart(carId);
      this.totalFilter -= item.carDetail.dailyPrice;
    }
  }
  

}
