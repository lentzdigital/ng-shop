import { Component, OnInit } from '@angular/core';

import { LookbookComponent } from '../lookbook/lookbook.component';
import { NewsletterBoxComponent } from '../newsletter-box/newsletter-box.component';

@Component({
  selector: 'app-intro-banner',
  templateUrl: './intro-banner.component.html',
  styleUrls: ['./intro-banner.component.scss']
})
export class IntroBannerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
