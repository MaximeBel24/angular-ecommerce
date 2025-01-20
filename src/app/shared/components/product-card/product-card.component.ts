import { AfterContentInit, Component, ContentChild, ContentChildren, ElementRef, QueryList } from '@angular/core';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent implements AfterContentInit{
   // Récupère la référence à l'élément projeté avec la référence #name.
  @ContentChild('name') productName!: ElementRef;
  // Récupère la liste des éléments projetés avec la référence #productDescription.
  @ContentChildren('productDescription') productDescription!: QueryList<ElementRef>;

  ngAfterContentInit(): void {
    console.log(this.productName.nativeElement);
    console.log(this.productDescription.toArray());  
  }
}
