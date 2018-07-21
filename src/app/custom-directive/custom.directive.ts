import {
  Directive,
  ElementRef,
  OnInit,
  Renderer2,
  HostListener,
  HostBinding,
  Input
} from '../../../node_modules/@angular/core'

@Directive({
  selector: '[appCustomDirective]'
})
export class CustomDirective implements OnInit {
  // the ele red we specify is provided to our directive automatically by angular
  // constructor(public ele: ElementRef) {}
  @Input() hoverColor: String = 'blue'
  @Input() defaultColor: String = 'transparent'
  @Input() appCustomDirective: String = 'brown'
  @HostBinding('style.backgroundColor') bg: String

  @HostListener('mouseenter')
  mouseOver(e) {
    console.log(e)
    // this.renderer.setStyle(this.ele.nativeElement, 'background-color', 'red')
    this.bg = this.appCustomDirective
  }

  @HostListener('mouseleave')
  mouseOut(e: Event) {
    console.log(e)
    // this.renderer.setStyle(
    //   this.ele.nativeElement,
    //   'background-color',
    //   'transparent'
    // )
    this.bg = this.defaultColor
  }
  constructor(private ele: ElementRef, private renderer: Renderer2) {}
  ngOnInit() {
    // gotcha: not a good practise
    // this.ele.nativeElement.style.backgroundColor = ' red'
    // hack: usging the renderer is a good practise for this purpose
    // this.renderer.setStyle(this.ele.nativeElement, 'background-color', 'red')

    this.bg = this.defaultColor
  }
}
