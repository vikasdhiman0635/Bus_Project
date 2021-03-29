import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsetComponent } from './resultset.component';

describe('ResultsetComponent', () => {
  let component: ResultsetComponent;
  let fixture: ComponentFixture<ResultsetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultsetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
