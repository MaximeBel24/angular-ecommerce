import { Component } from '@angular/core';
import { CommentsComponent } from '../../features/comments/comments.component';

@Component({
  selector: 'app-product',
  imports: [CommentsComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {

  areCommentsVisible = false;

  toggleCommentsVisibility() {
    this.areCommentsVisible = !this.areCommentsVisible;
  }
}
