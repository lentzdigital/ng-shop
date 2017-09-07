import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoverOverviewComponent } from './cover-overview.component';

describe('CoverOverviewComponent', () => {
  let component: CoverOverviewComponent;
  let fixture: ComponentFixture<CoverOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoverOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoverOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
