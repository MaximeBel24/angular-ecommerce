import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-categories-filter',
  imports: [FormsModule],
  templateUrl: './categories-filter.component.html',
  styleUrl: './categories-filter.component.scss'
})
export class CategoriesFilterComponent {

  propCategories: string[] = ['women\'s clothing', 'electronics', 'jewelery', 'men\'s clothing'];
  @Output() selectedCategorie: EventEmitter<string> = new EventEmitter(); 
  valueCategory = '';
}
