import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-promotion-circle',
	templateUrl: './promotion-circle.component.html',
	styleUrls: ['./promotion-circle.component.scss']
})
export class PromotionCircleComponent implements OnInit {
	beforeText: string;
	afterText: string;
	image: string;
	value: number;

	constructor() { }

	ngOnInit() {
		this.beforeText = 'All summer';
		this.afterText = 'Collection';
		this.image = 'assets/img/general/promotion-circle.jpg';
		this.value = 25;
	}

}
