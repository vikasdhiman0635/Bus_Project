import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyBusSeatsComponent } from './verify-bus-seats.component';

describe('VerifyBusSeatsComponent', () => {
  let component: VerifyBusSeatsComponent;
  let fixture: ComponentFixture<VerifyBusSeatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerifyBusSeatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifyBusSeatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
