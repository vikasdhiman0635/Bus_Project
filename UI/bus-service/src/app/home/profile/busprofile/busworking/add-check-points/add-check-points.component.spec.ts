import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCheckPointsComponent } from './add-check-points.component';

describe('AddCheckPointsComponent', () => {
  let component: AddCheckPointsComponent;
  let fixture: ComponentFixture<AddCheckPointsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCheckPointsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCheckPointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
