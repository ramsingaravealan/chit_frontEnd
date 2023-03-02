import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddChitsComponent } from './add-chits.component';

describe('AddChitsComponent', () => {
  let component: AddChitsComponent;
  let fixture: ComponentFixture<AddChitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddChitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddChitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
