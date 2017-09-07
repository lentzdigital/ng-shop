import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule }   from '@angular/forms';

import { ProductService } from './product.service';

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
import { SingleComponent } from './single/single.component';
import { PromotionBannerComponent } from './promotion-banner/promotion-banner.component';
import { TextIslandComponent } from './text-island/text-island.component';
import { ProductShowcaseComponent } from './product-showcase/product-showcase.component';
import { ProductImagesComponent } from './product-images/product-images.component';
import { FrontComponent } from './front/front.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { BigBannerComponent } from './big-banner/big-banner.component';
import { LogoSliderComponent } from './logo-slider/logo-slider.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { TabsComponent } from './tabs/tabs.component';
import { ShareButtonComponent } from './share-button/share-button.component';
import { OverviewComponent } from './overview/overview.component';
import { CoverOverviewComponent } from './cover-overview/cover-overview.component';
import { ProductListComponent } from './product-list/product-list.component';
import { FilterProductListComponent } from './filter-product-list/filter-product-list.component';
import { PaginationComponent } from './pagination/pagination.component';
import { NewsletterBannerComponent } from './newsletter-banner/newsletter-banner.component';
import { InputComponent } from './input/input.component';
import { PromotionCircleComponent } from './promotion-circle/promotion-circle.component';
import { IntroBannerComponent } from './intro-banner/intro-banner.component';
import { NewsletterBoxComponent } from './newsletter-box/newsletter-box.component';
import { MenuComponent } from './menu/menu.component';
import { ContactComponent } from './contact/contact.component';
import { ContactFormComponent } from './contact-form/contact-form.component';

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
    ButtonComponent,
    SingleComponent,
    PromotionBannerComponent,
    TextIslandComponent,
    ProductShowcaseComponent,
    ProductImagesComponent,
    FrontComponent,
    ProductDetailsComponent,
    BigBannerComponent,
    LogoSliderComponent,
    DropdownComponent,
    TabsComponent,
    ShareButtonComponent,
    OverviewComponent,
    CoverOverviewComponent,
    ProductListComponent,
    FilterProductListComponent,
    PaginationComponent,
    NewsletterBannerComponent,
    InputComponent,
    PromotionCircleComponent,
    IntroBannerComponent,
    NewsletterBoxComponent,
    MenuComponent,
    ContactComponent,
    ContactFormComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot([
            {
                path: '',
                component: FrontComponent,
                pathMatch: 'full'
            },
            {
                path: 'products',
                component: OverviewComponent
            },
            {
                path: 'product/:id',
                component: SingleComponent
            },
            {
                path: 'contact',
                component: ContactComponent
            }  
        ]),
        Ng2CarouselamosModule,
        BrowserAnimationsModule,
        FormsModule
    ],
    providers: [ProductService],
    bootstrap: [AppComponent]
})
export class AppModule { }
