import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrabomComponent } from './trabom.component';

describe('TrabomComponent', () => {
  let component: TrabomComponent;
  let fixture: ComponentFixture<TrabomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrabomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrabomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
