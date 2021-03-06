import { Component, OnInit, Input } from '@angular/core';

import { DropdownComponent } from '../dropdown/dropdown.component';
import { AddToCartComponent } from '../add-to-cart/add-to-cart.component';
import { ButtonComponent } from '../button/button.component';
import { TabsComponent } from '../tabs/tabs.component';
import { ShareButtonComponent } from '../share-button/share-button.component';

class Shipping {
	title: string;
	icon: string;
}

@Component({
	selector: 'app-product-details',
	templateUrl: './product-details.component.html',
	styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
	@Input() info;
	shipping: Shipping;
	variants: Array<string>;
	sizes: Array<string>;

	constructor() { }

	ngOnInit() {
		this.shipping = {
			title: 'Free Shipping Worldwide',
			icon: 'assets/img/icons/globe.svg'
		};

		this.variants = [
			'Black',
			'White',
			'Blue',
			'Red'
		];

		this.sizes = [
			'Select Size',
			'Small',
			'Medium',
			'Large'
		];
	}

}
