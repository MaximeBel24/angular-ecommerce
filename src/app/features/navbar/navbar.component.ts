import { Component, inject, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ProductService } from '../../core/services/product.service';

@Component({
  selector: 'app-navbar',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit{

  searchInput: FormControl = new FormControl('');
  private productService = inject(ProductService);

  ngOnInit(): void {
    this.searchInput.valueChanges.subscribe((value) => {
      this.productService.searchProduct.set(value as string);
    })
  }
}
