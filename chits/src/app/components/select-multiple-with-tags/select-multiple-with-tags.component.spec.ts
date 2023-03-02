import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectMultipleWithTagsComponent } from './select-multiple-with-tags.component';

describe('SelectMultipleWithTagsComponent', () => {
  let component: SelectMultipleWithTagsComponent;
  let fixture: ComponentFixture<SelectMultipleWithTagsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectMultipleWithTagsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectMultipleWithTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
