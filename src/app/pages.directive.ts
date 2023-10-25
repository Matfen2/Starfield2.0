import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appPages]'
})
export class PagesDirective {
  constructor(private el: ElementRef ) {
    this.backgroundOpacity("1.0");
   }

   private backgroundOpacity(opacity: string) {
    this.el.nativeElement.style.opacity = opacity;
   }

   @HostListener ('mouseenter') onMouseEnter () {
    this.backgroundOpacity('0.7');
   }

   @HostListener ('mouseleave') onMouseLeave () {
    this.backgroundOpacity('1.0')
   }
}
