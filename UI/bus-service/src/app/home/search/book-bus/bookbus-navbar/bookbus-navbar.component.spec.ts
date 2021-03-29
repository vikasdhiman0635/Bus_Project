import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookbusNavbarComponent } from './bookbus-navbar.component';

describe('BookbusNavbarComponent', () => {
  let component: BookbusNavbarComponent;
  let fixture: ComponentFixture<BookbusNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookbusNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookbusNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
