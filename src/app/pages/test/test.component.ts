import { AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-test',
  imports: [],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss'
})
export class TestComponent implements AfterViewInit{
  
  @ViewChild("zoubi") zouba!: ElementRef
  @ViewChildren("tik") tok!: QueryList<ElementRef>;

  ngAfterViewInit(): void {
    console.log(this.zouba.nativeElement.textContent);
    this.tok.forEach(div => console.log(div.nativeElement.textContent));  
  }


}
