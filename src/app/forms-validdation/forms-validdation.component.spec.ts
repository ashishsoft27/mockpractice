import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsValiddationComponent } from './forms-validdation.component';

describe('FormsValiddationComponent', () => {
  let component: FormsValiddationComponent;
  let fixture: ComponentFixture<FormsValiddationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormsValiddationComponent]
    });
    fixture = TestBed.createComponent(FormsValiddationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
