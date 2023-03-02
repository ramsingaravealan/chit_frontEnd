import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChitvalueComponent } from './chitvalue.component';

describe('ChitvalueComponent', () => {
  let component: ChitvalueComponent;
  let fixture: ComponentFixture<ChitvalueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChitvalueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChitvalueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
