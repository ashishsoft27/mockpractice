import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-third-form',
  templateUrl: './third-form.component.html',
  styleUrls: ['./third-form.component.css']
})
export class ThirdFormComponent {

  obj:student=new student();

save(form:NgForm){
  
  console.log(this.obj);

}
}
class student{
  fname!:string
  lname!:string
  mobno!:number
}
