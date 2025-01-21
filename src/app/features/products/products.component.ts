import { Component, inject, OnInit } from '@angular/core';
import { CardComponent } from "./card/card.component";
import { ProductService } from '../../core/services/product.service';
import { Product } from '../../core/interfaces/product.interface';

@Component({
  selector: 'app-products',
  imports: [CardComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit{

  private productService = inject(ProductService);

  products: Product[] = [];

  ngOnInit(): void {
    this.products = this.productService.getAll();
  }

  removeProduct(id: number) {
    this.products = this.products.filter(product => product.id !== id)
  }
}
