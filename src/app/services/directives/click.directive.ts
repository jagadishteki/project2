import { Directive, ElementRef, HostBinding, HostListener, Renderer2, ViewChild } from '@angular/core';

@Directive({
  selector: '[appClick]'
})
export class ClickDirective {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  @HostBinding('style.backgroundColor') background!: string;

  @HostListener('mousemove') mouseMove() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'green');
    // this.background = 'green';
  }

  @HostListener('mouseout') mouseOut() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'orange');
    // this.background = 'orange';
  }

}
