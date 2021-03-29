import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusmaincomponentComponent } from './busmaincomponent.component';

describe('BusmaincomponentComponent', () => {
  let component: BusmaincomponentComponent;
  let fixture: ComponentFixture<BusmaincomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusmaincomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusmaincomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
