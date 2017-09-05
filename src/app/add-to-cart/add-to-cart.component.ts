import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-add-to-cart',
	templateUrl: './add-to-cart.component.html',
	styleUrls: ['./add-to-cart.component.scss']
})
export class AddToCartComponent implements OnInit {
	icon: string;
	label: string;

	constructor() { }

	ngOnInit() {
		this.icon = 'assets/img/icons/cart.svg';
		this.label = 'Add to cart';
	}

}
