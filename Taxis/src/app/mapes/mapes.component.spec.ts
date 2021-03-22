import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapesComponent } from './mapes.component';

describe('MapesComponent', () => {
  let component: MapesComponent;
  let fixture: ComponentFixture<MapesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
