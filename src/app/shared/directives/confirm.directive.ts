import { Directive, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Directive({
  selector: '[confirm]'
})
export class ConfirmDirective {

  @Input('confirm') message: string = '';
  @Output() confirmDelete: EventEmitter<void> = new EventEmitter();

  @HostListener('click')
  openDialog(): void {
    const bool = window.confirm(this.message);
    if (bool) this.confirmDelete.emit();
  }

}
