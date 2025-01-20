import { CommonModule} from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  isActive = false;

  toggleActive() {
    this.isActive = !this.isActive;
  }

  today: Date = new Date();

}
