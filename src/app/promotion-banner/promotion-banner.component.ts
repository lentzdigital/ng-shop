import { Component, OnInit, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
	selector: 'app-promotion-banner',
	templateUrl: './promotion-banner.component.html',
	styleUrls: ['./promotion-banner.component.scss']
})
export class PromotionBannerComponent implements OnInit {
	@Input() type: string;

	text: string;
	image: string;

	constructor() { }

	ngOnInit() {
		this.text = 'Big discounts';
		this.image = 'assets/img/general/promotion1.jpg';
	}

	getType(type) {
		if(type === 'small') {
			return 'promotion-banner--small'
		}
	}
}
