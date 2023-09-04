import { Component } from '@angular/core';

@Component({
  selector: 'app-student-parent',
  templateUrl: './student-parent.component.html',
  styleUrls: ['./student-parent.component.css']
})
export class StudentParentComponent {
    numArray:number[]=[10,20,30,40,50];
    num2!:number
    
    num1:number[]=this.numArray.filter((el:number)=>el>30);
    receive(el:any){
      this.num2=el;
      console.log(this.num2);
    }
}
