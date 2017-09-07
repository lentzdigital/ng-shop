import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsletterBannerComponent } from './newsletter-banner.component';

describe('NewsletterBannerComponent', () => {
  let component: NewsletterBannerComponent;
  let fixture: ComponentFixture<NewsletterBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsletterBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsletterBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
