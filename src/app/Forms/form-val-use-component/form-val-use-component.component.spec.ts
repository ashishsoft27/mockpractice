import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormValUseComponentComponent } from './form-val-use-component.component';

describe('FormValUseComponentComponent', () => {
  let component: FormValUseComponentComponent;
  let fixture: ComponentFixture<FormValUseComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormValUseComponentComponent]
    });
    fixture = TestBed.createComponent(FormValUseComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
