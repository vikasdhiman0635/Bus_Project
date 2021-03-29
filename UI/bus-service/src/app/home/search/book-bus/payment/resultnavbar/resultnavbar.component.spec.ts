import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultnavbarComponent } from './resultnavbar.component';

describe('ResultnavbarComponent', () => {
  let component: ResultnavbarComponent;
  let fixture: ComponentFixture<ResultnavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultnavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultnavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
