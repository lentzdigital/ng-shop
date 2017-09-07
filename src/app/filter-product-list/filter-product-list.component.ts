import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-filter-product-list',
	templateUrl: './filter-product-list.component.html',
	styleUrls: ['./filter-product-list.component.scss']
})
export class FilterProductListComponent implements OnInit {
	filters: object;
	breadcrumb: string;

	constructor() { }

	ngOnInit() {
		this.filters = ['Sort by', 'features', 'size', 'colour', 'price'];
		this.breadcrumb = 'New collection (1-32 of 58)';
	}

}
