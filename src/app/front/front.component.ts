import { Component, OnInit } from '@angular/core';

import { FeaturedProductsComponent } from '../featured-products/featured-products.component';
import { TestimonialsComponent } from '../testimonials/testimonials.component';
import { BigBannerComponent } from '../big-banner/big-banner.component';
import { LogoSliderComponent } from '../logo-slider/logo-slider.component';
import { PromotionCircleComponent } from '../promotion-circle/promotion-circle.component';
import { IntroBannerComponent } from '../intro-banner/intro-banner.component'; 
 
@Component({
  selector: 'app-front',
  templateUrl: './front.component.html',
  styleUrls: ['./front.component.scss']
})
export class FrontComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
