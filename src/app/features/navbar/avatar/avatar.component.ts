import { Component, Input } from '@angular/core';
import { AvatarPipe } from '../../../shared/pipes/avatar.pipe';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-avatar',
  imports: [AvatarPipe, NgStyle],
  templateUrl: './avatar.component.html',
  styleUrl: './avatar.component.scss'
})
export class AvatarComponent {
  openMenu: boolean = false;
  @Input() imageUrl: string = '';
}
