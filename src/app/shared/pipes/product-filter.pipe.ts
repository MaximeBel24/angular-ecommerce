import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../../core/interfaces/product.interface';

@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

  transform(products: Product[], category: string): Product[]  {
    if (!category) return products;
    return products.filter((product) => product.category === category);
  }

}
