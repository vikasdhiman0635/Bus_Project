import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchWhereComponent } from './search-where.component';

describe('SearchWhereComponent', () => {
  let component: SearchWhereComponent;
  let fixture: ComponentFixture<SearchWhereComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchWhereComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchWhereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
