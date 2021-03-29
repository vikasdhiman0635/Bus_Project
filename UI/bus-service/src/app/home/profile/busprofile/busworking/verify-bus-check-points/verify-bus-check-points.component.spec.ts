import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyBusCheckPointsComponent } from './verify-bus-check-points.component';

describe('VerifyBusCheckPointsComponent', () => {
  let component: VerifyBusCheckPointsComponent;
  let fixture: ComponentFixture<VerifyBusCheckPointsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerifyBusCheckPointsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifyBusCheckPointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
