import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartWidget } from '../../models/cart-widget';
import { CoreCartService } from '../../services/core-cart.service';

@Component({
  selector: 'app-cart-widget',
  templateUrl: './cart-widget.component.html',
  styleUrls: ['./cart-widget.component.scss']
})
export class CartWidgetComponent implements OnInit {

  model!: CartWidget;

  constructor(private cartService: CoreCartService,
    private  router:Router
    ) {

  }


  ngOnInit(): void {
    this.cartService
      .fetchCartWidget()
      .subscribe(widgetModel => this.model = widgetModel)
  }


  navigateToCart(){
    this.router.navigateByUrl('/cart/details')

  }
}
