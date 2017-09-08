import { Component, OnInit } from '@angular/core';

import { ButtonComponent } from '../button/button.component';

class Button {
	label: string;
	link: string;
}

@Component({
	selector: 'app-cover-overview',
	templateUrl: './cover-overview.component.html',
	styleUrls: ['./cover-overview.component.scss']
})
export class CoverOverviewComponent implements OnInit {
	title: string;
	subTitle: string;
	button: Button;
	image: string;

	constructor() { }

	ngOnInit() {
		this.title = 'New collection';
		this.subTitle = 'Most wanted';
		this.button = {
			label: 'Browse collection',
			link: '#'
		};
		this.image = 'assets/img/general/overview-cover.jpg';
	}

}
