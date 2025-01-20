import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../../core/interfaces/product.interface';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-card',
  imports: [CurrencyPipe],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  userIsAdmin = true;
  quantity = 1;

  @Input() product: Product = {} as Product;
  @Output() deleteProduct = new EventEmitter<number>()

  handleDeleteProduct(): void{
    this.deleteProduct.emit(this.product.id);
  }
}
