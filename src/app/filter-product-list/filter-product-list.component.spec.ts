import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterProductListComponent } from './filter-product-list.component';

describe('FilterProductListComponent', () => {
  let component: FilterProductListComponent;
  let fixture: ComponentFixture<FilterProductListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterProductListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
