import { Component,EventEmitter,Input, Output } from '@angular/core';

@Component({
  selector: 'app-student-child',
  templateUrl: './student-child.component.html',
  styleUrls: ['./student-child.component.css']
})
export class StudentChildComponent {

  @Input()
   data!:number[];
   res!:number;

   @Output()
   sendData:EventEmitter<number>=new EventEmitter<number>();
  send(){
    this.res=this.data.reduce((acc:number,el:number)=>el+acc,0);
    this.sendData.emit(this.res);
  }
   
    
}
