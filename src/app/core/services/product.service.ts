import { computed, Injectable, signal } from '@angular/core';
import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products = signal<Product[]>([]);
  searchProduct = signal<string>('');
  productsSearched = computed(() => {
    const str = this.searchProduct().toLowerCase();
    if ( str == '') {
      return this.products();
    }
    return this.products().filter((product) => product.title.toLowerCase().includes(str));
  })

  getAll(): void {
    this.products.set([
      {
        id: 1,
        title: 'Ordinateur portable',
        price: 200000,
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
        title: 'IPhone 16 Pro',
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
        title: 'Ecran 24 pouces',
        price: 300,
        image: '',
        rating: {
          rate: 0,
          count: 0
        },
        description: 'Description 3',
        category: 'Category 3'
      }
    ])
  }
  
  delete(id: number) {
    const newProducts = this.products().filter(product => product.id !== id);
    this.products.set(newProducts);
  }
}
