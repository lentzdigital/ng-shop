import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../product';
import { AddToCartComponent } from '../add-to-cart/add-to-cart.component';

@Component({
	selector: 'app-product',
	templateUrl: './product.component.html',
	styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
	@Input() product: Product;

	icons: object;

	constructor() { }

	ngOnInit() {
		this.icons = [
			{
				title: 'Quick View',
				icon: 'assets/img/icons/view.svg'
			},
			{
				title: 'Save',
				icon: 'assets/img/icons/favorite.svg'
			}
		];
	}

}
