import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-footer',
	templateUrl: './footer.component.html',
	styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
	menus: object;
	payment: string;
	logoPaths: object;

	constructor() { }

	ngOnInit() {
		this.menus = [
			{
				title: 'Questions?',
				items: [
					'Help',
					'Track Order',
					'Returns'
				]
			},
			{
				title: 'Where to buy',
				items: [
					'Store Locator',
					'Wishlist',
					'Gift Cards'
				]
			},
			{
				title: 'About us',
				items: [
					'Our Story',
					'Careers',
					'Affiliates'
				]
			}
		];

		this.payment = '/assets/img/icons/payment.png';
		
		this.logoPaths = {
			x1 : '/assets/img/general/logo.png',
			x2 : '/assets/img/general/logo@2x.png',
			x3 : '/assets/img/general/logo@3x.png'
		}; 
	}

}
