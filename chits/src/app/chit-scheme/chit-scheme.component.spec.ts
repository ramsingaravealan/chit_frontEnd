import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChitSchemeComponent } from './chit-scheme.component';

describe('ChitSchemeComponent', () => {
  let component: ChitSchemeComponent;
  let fixture: ComponentFixture<ChitSchemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChitSchemeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChitSchemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
