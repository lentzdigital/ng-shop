import { Component, OnInit } from '@angular/core';
import { FilterFeaturedProductsComponent } from '../filter-featured-products/filter-featured-products.component';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
	selector: 'app-featured-products',
	templateUrl: './featured-products.component.html',
	styleUrls: ['./featured-products.component.scss'],
	providers: [ProductService]
})
export class FeaturedProductsComponent implements OnInit {
	products: Product[];

	constructor(private productService: ProductService) { }

	ngOnInit() {
		this.getProducts();
	}

	getProducts(): void {
		this.products = this.productService.getProducts();
	}

}
