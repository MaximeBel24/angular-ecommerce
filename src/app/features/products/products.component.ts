import { Component, effect, inject, OnInit } from '@angular/core';
import { CardComponent } from "./card/card.component";
import { ProductService } from '../../core/services/product.service';

@Component({
  selector: 'app-products',
  imports: [CardComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit{

  productService = inject(ProductService);
  products = this.productService.productsSearched;

  constructor() {
    effect(() => {
      console.log('Produit recherché : ', this.productService.searchProduct());
    })
  }

  ngOnInit() {
    this.productService.getAll();
  }

  removeProduct(id: number) {
    this.productService.delete(id);
  }
}
