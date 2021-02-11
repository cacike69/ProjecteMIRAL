import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyiaComponent } from './companyia.component';

describe('CompanyiaComponent', () => {
  let component: CompanyiaComponent;
  let fixture: ComponentFixture<CompanyiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
