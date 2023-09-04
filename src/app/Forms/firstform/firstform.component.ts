import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-firstform',
  templateUrl: './firstform.component.html',
  styleUrls: ['./firstform.component.css']
})
export class FirstformComponent {
  save(form:NgForm){
    console.log(form);
    console.log(form.value);
    console.log(form.dirty);
    console.log(form.pristine);
  }
}
