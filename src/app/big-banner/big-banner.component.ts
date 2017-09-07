import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-big-banner',
	templateUrl: './big-banner.component.html',
	styleUrls: ['./big-banner.component.scss']
})
export class BigBannerComponent implements OnInit {
	banners: object;

	constructor() { }

	ngOnInit() {
		this.banners = [
			'assets/img/general/banner1.jpg',
			'assets/img/general/banner2.jpg',
			'assets/img/general/banner3.jpg'
		];
	}

}
