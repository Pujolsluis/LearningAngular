
import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appMyHighlight]'
})
export class HighlightDirective {

  constructor(private el: ElementRef) { }

  @Input('appMyHighLight') highlightColor: string;

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor || 'red');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
