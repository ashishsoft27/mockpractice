import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appDirective1]'
})
export class Directive1Directive {

  constructor(private el:ElementRef) {
    this.el.nativeElement.innerHTML="HI Developers";

   }
      
}
