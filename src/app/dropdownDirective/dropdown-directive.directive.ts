import { Directive, HostListener, ElementRef, Renderer2 } from '@angular/core'

@Directive({
  selector: '[appDropdownDirective]'
})
export class DropdownDirective {
  open: Boolean = false
  constructor(private ele: ElementRef, private renderer: Renderer2) {}
  @HostListener('click')
  handleClick(e: Event) {
    if (!this.open) {
      this.renderer.addClass(this.ele.nativeElement, 'open')
    } else {
      this.renderer.removeClass(this.ele.nativeElement, 'open')
    }
    this.open = !this.open
  }
}
