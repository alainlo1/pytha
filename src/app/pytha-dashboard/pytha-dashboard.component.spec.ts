import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PythaDashboardComponent } from './pytha-dashboard.component';

describe('PythaDashboardComponent', () => {
  let component: PythaDashboardComponent;
  let fixture: ComponentFixture<PythaDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PythaDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PythaDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
