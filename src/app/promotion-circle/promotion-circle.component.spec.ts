import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotionCircleComponent } from './promotion-circle.component';

describe('PromotionCircleComponent', () => {
  let component: PromotionCircleComponent;
  let fixture: ComponentFixture<PromotionCircleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromotionCircleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromotionCircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
