import { computed, inject, Injectable, signal } from '@angular/core';
import { Product } from '../../interfaces/product.interface';
import { catchError, Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ToastService } from '../toast/toast.service';

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  private http = inject(HttpClient);
  private toast = inject(ToastService);
  private readonly apiUrl = 'https://fakestoreapi.com';

  products = signal<Product[]>([]);
  searchProduct = signal<string>('');
  productsSearched = computed(() => {
    const str = this.searchProduct().toLowerCase();
    if (str == '') {
      return this.products();
    }
    return this.products().filter((product) =>
      product.title.toLowerCase().includes(str)
    );
  });

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl + '/products')
      .pipe(
        tap((products) => {
          this.products.set(products);
        })
      )
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/products/${id}`)
      .pipe(
        tap(() => {
          const newProducts = this.products().filter((product) => product.id !== id);
          this.products.set(newProducts);
          this.toast.success('Produit supprimé');
        }),
        catchError((error) => {
          this.toast.error('Impossible de supprimer le produit');
          throw error;
        })
      )
  }
}
