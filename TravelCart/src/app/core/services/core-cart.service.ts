import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CartItem } from '../models/cart-item';
import { CartWidget } from '../models/cart-widget';



@Injectable({
  providedIn: 'root'
})
export class CoreCartService {


  cart$ = new BehaviorSubject<CartItem[]>([]);
  cartItems: CartItem[] = [];



  constructor() {

  }



  addItemToCart(cartItem: CartItem) {
    this.cartItems.push(cartItem);
    this.cart$.next(this.cartItems);
  }



  removeItemFromCart(id: string) {

    const index = this.cartItems.findIndex(item => item.id === id);
    if (index > -1) { 
      this.cartItems = this.cartItems.filter((item, itemIndex) =>itemIndex !== index);
      this.cart$.next(this.cartItems);
    }

  }



  removeAllItemsFromCart(id: string) {

    this.cartItems = this.cartItems.filter(item => item.id !== id);
    this.cart$.next(this.cartItems);
  }



  emptyCart() {
    this.cartItems = [];
    this.cart$.next(this.cartItems);
  }



  fetchCartDetails(): Observable<CartItem[]> {
    return this.cart$.asObservable();
  }


  fetchCartWidget(): Observable<CartWidget> {
    return this.fetchCartDetails()
      .pipe(
        map(cartItems => {
          const widgetModel = cartItems
            .reduce((acc, item) => {
              acc.currency = 'INR';
              acc.amount += item.unitPrice;
              return acc;
            }, new CartWidget());

          widgetModel.count = cartItems
            .map(item => item.id)
            .filter((id, index) => cartItems.findIndex((item, index) => item.id === id))
            .length;
          return widgetModel;
        }))
  }


}


