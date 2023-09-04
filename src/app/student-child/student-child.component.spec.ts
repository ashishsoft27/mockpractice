import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentChildComponent } from './student-child.component';

describe('StudentChildComponent', () => {
  let component: StudentChildComponent;
  let fixture: ComponentFixture<StudentChildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentChildComponent]
    });
    fixture = TestBed.createComponent(StudentChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
