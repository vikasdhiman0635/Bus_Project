import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowMainBusComponent } from './show-main-bus.component';

describe('ShowMainBusComponent', () => {
  let component: ShowMainBusComponent;
  let fixture: ComponentFixture<ShowMainBusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowMainBusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowMainBusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
