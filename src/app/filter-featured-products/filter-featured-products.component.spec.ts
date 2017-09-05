import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterFeaturedProductsComponent } from './filter-featured-products.component';

describe('FilterFeaturedProductsComponent', () => {
  let component: FilterFeaturedProductsComponent;
  let fixture: ComponentFixture<FilterFeaturedProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterFeaturedProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterFeaturedProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
