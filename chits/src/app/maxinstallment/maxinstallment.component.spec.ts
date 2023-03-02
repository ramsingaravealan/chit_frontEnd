import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaxinstallmentComponent } from './maxinstallment.component';

describe('MaxinstallmentComponent', () => {
  let component: MaxinstallmentComponent;
  let fixture: ComponentFixture<MaxinstallmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaxinstallmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaxinstallmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
