import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialMediaBannerComponent } from './social-media-banner.component';

describe('SocialMediaBannerComponent', () => {
  let component: SocialMediaBannerComponent;
  let fixture: ComponentFixture<SocialMediaBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialMediaBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialMediaBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
