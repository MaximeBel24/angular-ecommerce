import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  getAll(): Product[] {
    return [
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
  }

  // constructor() { }
}
