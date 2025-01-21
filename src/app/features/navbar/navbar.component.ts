import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AvatarComponent } from "./avatar/avatar.component";

@Component({
  selector: 'app-navbar',
  imports: [FormsModule, AvatarComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  textInput = 'Rechercher'
  searchInput = '';

  search() {
    console.log(this.searchInput);
  }
}
