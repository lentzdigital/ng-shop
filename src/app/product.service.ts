import { Injectable } from '@angular/core';

import { Product } from './product';
import { PRODUCTS } from './mock-products';

@Injectable()
export class ProductService {

	constructor() { }

	getProducts(): Product[] {
		return PRODUCTS;
	}

	getProduct(id: number): Product {
		return PRODUCTS.filter(product => product.id === id)[0];
	}
}
