import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddChComponent } from './add-ch.component';

describe('AddChComponent', () => {
  let component: AddChComponent;
  let fixture: ComponentFixture<AddChComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddChComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddChComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
