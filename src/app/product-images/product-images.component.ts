import { Component, OnInit, Input } from '@angular/core';

import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
	selector: 'app-product-images',
	templateUrl: './product-images.component.html',
	styleUrls: ['./product-images.component.scss']
})
export class ProductImagesComponent implements OnInit {
	@Input() images: object;

	constructor() { }

	ngOnInit() {
		console.log(this.images);
	}

}
