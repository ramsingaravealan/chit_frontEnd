import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaxcollectionComponent } from './maxcollection.component';

describe('MaxcollectionComponent', () => {
  let component: MaxcollectionComponent;
  let fixture: ComponentFixture<MaxcollectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaxcollectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaxcollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
