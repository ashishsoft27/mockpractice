import { Directive ,HostListener} from '@angular/core';

@Directive({
  selector: '[appMobValidation]'
})
export class MobValidationDirective {

  constructor() { }
  @HostListener("keypress",["$event"])
  allowNumber(e:any){
    if(e.which < 48 || e.which > 57){
      e.preventDefault();
    }
  }
}
