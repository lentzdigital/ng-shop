import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-logo-slider',
	templateUrl: './logo-slider.component.html',
	styleUrls: ['./logo-slider.component.scss']
})
export class LogoSliderComponent implements OnInit {
	items: Array<any> = [];


	constructor() { 
		this.items = [
			{ logo: 'assets/img/brands/logo1.png' },
			{ logo: 'assets/img/brands/logo2.png' },
			{ logo: 'assets/img/brands/logo3.png' },
			{ logo: 'assets/img/brands/logo4.png' },
			{ logo: 'assets/img/brands/logo5.png' },
			{ logo: 'assets/img/brands/logo1.png' },
			{ logo: 'assets/img/brands/logo2.png' },
			{ logo: 'assets/img/brands/logo3.png' },
			{ logo: 'assets/img/brands/logo4.png' },
			{ logo: 'assets/img/brands/logo5.png' }
		];
	}

	ngOnInit() {
	}
}
