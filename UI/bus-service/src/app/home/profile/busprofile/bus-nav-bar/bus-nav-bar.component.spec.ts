import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusNavBarComponent } from './bus-nav-bar.component';

describe('BusNavBarComponent', () => {
  let component: BusNavBarComponent;
  let fixture: ComponentFixture<BusNavBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusNavBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
