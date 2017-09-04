import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CarouselComponent } from './carousel/carousel.component';
import { LookbookComponent } from './lookbook/lookbook.component';
import { FooterComponent } from './footer/footer.component';
import { SocialMediaBannerComponent } from './social-media-banner/social-media-banner.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarouselComponent,
    LookbookComponent,
    FooterComponent,
    SocialMediaBannerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
