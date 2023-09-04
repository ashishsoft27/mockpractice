import { Component } from '@angular/core';
import { NgForm, PatternValidator } from '@angular/forms';

@Component({
  selector: 'app-form-val-use-component',
  templateUrl: './form-val-use-component.component.html',
  styleUrls: ['./form-val-use-component.component.css']
})
export class FormValUseComponentComponent {

  save(form: NgForm) {
    console.log(form.invalid)
    console.log(this.obj.fname)
    
  }
  obj:valForm=new valForm();
}
 class valForm{
  fname!:any;
  lname!:any;
   mobno!:any;
 }
