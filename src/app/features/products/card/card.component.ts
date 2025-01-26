import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { Product } from '../../../core/interfaces/product.interface';
import { ConfirmDirective } from '../../../shared/directives/confirm.directive';

@Component({
  selector: 'app-card',
  imports: [CurrencyPipe, ConfirmDirective],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  quantity = 1;
  
  @Input() userIsAdmin: boolean = true;
  @Input() product: Product = {} as Product;
  @Output() deleteProduct = new EventEmitter<number>();

  handleDeleteProduct(id: number): void {
    this.deleteProduct.emit(id);
  }
}
