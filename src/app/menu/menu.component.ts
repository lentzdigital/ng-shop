import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-menu',
	templateUrl: './menu.component.html',
	styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
	menuItems: Array<any>;

	constructor() { }

	ngOnInit() {
		this.menuItems = [
			{
				label: 'Home',
				route: '/'
			},
			{
				label: 'Collection',
				route: '/products'
			},
			{
				label: 'Contact',
				route: '/contact'
			},
		];
	}

}
