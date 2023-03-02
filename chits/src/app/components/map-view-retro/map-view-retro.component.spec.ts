import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapViewRetroComponent } from './map-view-retro.component';

describe('MapViewRetroComponent', () => {
  let component: MapViewRetroComponent;
  let fixture: ComponentFixture<MapViewRetroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapViewRetroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapViewRetroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
