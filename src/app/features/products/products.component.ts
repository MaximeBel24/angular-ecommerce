import { Component, effect, inject, OnInit } from '@angular/core';
import { ProductService } from '../../core/services/product/product.service';
import { ProductFilterPipe } from '../../shared/pipes/product-filter.pipe';
import { CardComponent } from './card/card.component';
import { CategoriesFilterComponent } from "./categories-filter/categories-filter.component";

@Component({
  selector: 'app-products',
  imports: [CardComponent, ProductFilterPipe, CategoriesFilterComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent implements OnInit {
  productService = inject(ProductService);
  products = this.productService.productsSearched;

  filterCategorie = '';

  constructor() {
    effect(() => {
      console.log('Produit recherché : ', this.productService.searchProduct());
    });
  }

  ngOnInit() {
    this.productService.getAll().subscribe();
  }

  removeProduct(id: number) {
    this.productService.delete(id).subscribe({
      error: (err) => {
        console.error(err);
      },
    });
  }
}
