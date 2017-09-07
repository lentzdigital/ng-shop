import { Component, OnInit } from '@angular/core';

import { TextImageComponent } from '../text-image/text-image.component';
import { PromotionBannerComponent } from '../promotion-banner/promotion-banner.component';
import { TextIslandComponent } from '../text-island/text-island.component';
import { ProductShowcaseComponent } from '../product-showcase/product-showcase.component';


@Component({
	selector: 'app-single',
	templateUrl: './single.component.html',
	styleUrls: ['./single.component.scss']
})
export class SingleComponent implements OnInit {

	constructor() { }

	ngOnInit() {
	}

}
