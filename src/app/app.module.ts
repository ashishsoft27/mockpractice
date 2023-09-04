import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Directive1Directive } from './Directive-Folder/directive-1.directive';
import { StudentParentComponent } from './student-parent/student-parent.component';
import { StudentChildComponent } from './student-child/student-child.component';
import { FirstformComponent } from './Forms/firstform/firstform.component';
import { MobValidationDirective } from './Forms/mob-validation.directive';
import { SecondFormComponent } from './Forms/second-form/second-form.component';
import { ThirdFormComponent } from './Forms/third-form/third-form.component';
import { FormsValiddationComponent } from './forms-validdation/forms-validdation.component';
import { FormValUseComponentComponent } from './Forms/form-val-use-component/form-val-use-component.component';
import { ReactiveDrivenFormComponent } from './reactive-driven-form/reactive-driven-form.component';


@NgModule({
  declarations: [
    AppComponent,
    Directive1Directive,
    StudentParentComponent,
    StudentChildComponent,
    FirstformComponent,
    MobValidationDirective,
    SecondFormComponent,
    ThirdFormComponent,
    FormsValiddationComponent,
    FormValUseComponentComponent,
    ReactiveDrivenFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
