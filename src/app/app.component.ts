import { Component } from '@angular/core';
import { NavbarComponent } from "./features/navbar/navbar.component";
import { ProductCardComponent } from "./shared/components/product-card/product-card.component";
import { ProductComponent } from "./pages/product/product.component";

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, ProductCardComponent, ProductComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ecommerce';

}
