import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectMulitpleComponent } from './select-mulitple.component';

describe('SelectMulitpleComponent', () => {
  let component: SelectMulitpleComponent;
  let fixture: ComponentFixture<SelectMulitpleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectMulitpleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectMulitpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
