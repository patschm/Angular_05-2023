import { OnInit, Input, HostListener, Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustomAttribute]'
})
export class CustomAttributeComponent implements OnInit {

  @Input('appCustomAttribute')
  public color: string = 'blue';

  @HostListener('mouseover')
  onMouseOver()
  {
    this.el.nativeElement.style.backgroundColor = 'yellow';
  }
  @HostListener('mouseleave')
  onMouseLeave()
  {
    this.el.nativeElement.style.backgroundColor = this.color;
  }

  ngOnInit() {
    this.el.nativeElement.style.backgroundColor = this.color;
  }
  constructor(private el: ElementRef) {

  }
}
