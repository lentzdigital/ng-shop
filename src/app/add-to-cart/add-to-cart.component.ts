import { Component, OnInit, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
	selector: 'app-add-to-cart',
	templateUrl: './add-to-cart.component.html',
	styleUrls: ['./add-to-cart.component.scss']
})

export class AddToCartComponent implements OnInit {
	@Input() white: boolean;
	@Input() style: string;
	icon: string;
	label: string;

	constructor() { }

	ngOnInit() {
		if(this.white === true) {
			this.icon = 'assets/img/icons/cart-white.svg'
		} else {
			this.icon = 'assets/img/icons/cart.svg';
		}
		this.label = 'Add to cart';
	}

	getStyle(style) {
		if(style === 'blue') {
			return 'add-to-cart--blue';
		}

		return;
	}
}
