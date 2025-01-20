import { Component } from '@angular/core';
import { CardComponent } from "./card/card.component";

@Component({
  selector: 'app-products',
  imports: [CardComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {

  products = [
    {
      id: 1,
      title: 'Product 1',
      price: 100,
      image: '',
      rating: {
        rate: 0,
        count: 0
      },
      description: 'Description 1',
      category: 'Category 1'
    },
    {
      id: 2,
      title: 'Product 2',
      price: 200,
      image: '',
      rating: {
        rate: 0,
        count: 0
      },
      description: 'Description 2',
      category: 'Category 2'
    },
    {
      id: 3,
      title: 'Product 3',
      price: 300,
      image: '',
      rating: {
        rate: 0,
        count: 0
      },
      description: 'Description 3',
      category: 'Category 3'
    }
  ]

  removeProduct(id: number) {
    this.products = this.products.filter(product => product.id !== id)
  }
}
