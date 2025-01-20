import { Component } from '@angular/core';
import { NavbarComponent } from "./features/navbar/navbar.component";
import { TestComponent } from "./pages/test/test.component";
import { ProductCardComponent } from "./shared/components/product-card/product-card.component";

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, TestComponent, ProductCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ecommerce';

}
