import { Component, OnInit } from '@angular/core';

import { Product } from '../product';
import { ProductService } from '../product.service';

import { ProductComponent } from '../product/product.component';

@Component({
	selector: 'app-product-list',
	templateUrl: './product-list.component.html',
	styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
	products: Product[];

	constructor(private productService: ProductService) { }

	ngOnInit() {
		this.getProducts();
	}

	getProducts(): void {
		this.products = this.productService.getProducts();
	}
}
