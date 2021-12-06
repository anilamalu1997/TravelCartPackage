import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { CartItem } from 'src/app/core/models/cart-item';
import { CoreCartService } from 'src/app/core/services/core-cart.service';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.scss']
})
export class CartDetailsComponent implements OnInit {

  cartItems: any[] = [];
  totalPrice: any;



  constructor(private CartService: CoreCartService) { }

  ngOnInit(): void {
    this.CartService
      .fetchCartDetails()
      .pipe(
        map(cartItems => summarizeCartItems(cartItems))
      )
      .subscribe(cartItems => {
        this.cartItems = cartItems;
        this.totalPrice = this.cartItems
          .map(item => item.totalPrice)
          .reduce((acc, price) => acc + price, 0);
      });
  }

  removeItem(item: any, event: any) {
    event.preventDefault();
    this.CartService.removeItemFromCart(item);

  }

  removeAllItems(item: any, event: any) {
    event.preventDefault();
    this.CartService.removeAllItemsFromCart(item);
  }

  emptyCart(event:any) {
    event.preventDefault();
    this.CartService.emptyCart();

  }

}
function summarizeCartItems(cartItems: CartItem[]): any[] {
  const result: any[] = [];

  cartItems
    .forEach(cartItem => {
      const found = result.find(resultEntry => resultEntry.id === cartItem.id);
      if (found == null) {
        result.push({ ...cartItem, qty: 1, totalPrice: cartItem.unitPrice });
      } else {
        found.qty++;
        found.totalPrice += cartItem.unitPrice;
      }
    });

  return result;
}

