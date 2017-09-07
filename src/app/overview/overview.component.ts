import { Component, OnInit } from '@angular/core';

import { CoverOverviewComponent } from '../cover-overview/cover-overview.component';
import { FilterProductListComponent } from '../filter-product-list/filter-product-list.component';
import { ProductListComponent } from '../product-list/product-list.component';
import { PaginationComponent } from '../pagination/pagination.component';
import { NewsletterBannerComponent } from '../newsletter-banner/newsletter-banner.component';

@Component({
	selector: 'app-overview',
	templateUrl: './overview.component.html',
	styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

	constructor() { }

	ngOnInit() {
	}

}
