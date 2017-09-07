import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-pagination',
	templateUrl: './pagination.component.html',
	styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
	numbers: object;

	constructor() { }

	ngOnInit() {
		this.numbers = [1, 2, 3, 4, 5];
	}

}
