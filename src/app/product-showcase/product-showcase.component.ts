import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { ProductImagesComponent } from '../product-images/product-images.component';
import { ProductDetailsComponent } from '../product-details/product-details.component';

import { Product } from '../product';
import { ProductService } from '../product.service';

class Info {
	name: string;
	price: string;
}

@Component({
	selector: 'app-product-showcase',
	templateUrl: './product-showcase.component.html',
	styleUrls: ['./product-showcase.component.scss'],
	providers: [ProductService]
})
export class ProductShowcaseComponent implements OnInit {
	productId: number;
	product;
	info: Info;

	constructor(private activatedRoute: ActivatedRoute, private productService: ProductService) {
	}

	ngOnInit() {
		this.productId = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
		this.product = this.productService.getProduct(this.productId);
		this.info = {
			name: this.product['name'],
			price: this.product['price']
		};

		console.log(this.info);
	}

}
