import { Component, inject } from '@angular/core';
import { CartService } from '../../../core/services/cart.service';

@Component({
  selector: 'app-cart',
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {

  private cartService = inject(CartService);

  constructor() {
    const cart = this.cartService.cartItems();
    localStorage.setItem('cart', JSON.stringify(cart));
  }

}
