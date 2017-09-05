import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CarouselComponent } from './carousel/carousel.component';
import { LookbookComponent } from './lookbook/lookbook.component';
import { FooterComponent } from './footer/footer.component';
import { SocialMediaBannerComponent } from './social-media-banner/social-media-banner.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { FeaturedProductsComponent } from './featured-products/featured-products.component';
import { FilterFeaturedProductsComponent } from './filter-featured-products/filter-featured-products.component';
import { ProductComponent } from './product/product.component';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
import { TextImageComponent } from './text-image/text-image.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarouselComponent,
    LookbookComponent,
    FooterComponent,
    SocialMediaBannerComponent,
    TestimonialsComponent,
    FeaturedProductsComponent,
    FilterFeaturedProductsComponent,
    ProductComponent,
    AddToCartComponent,
    TextImageComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
