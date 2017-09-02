import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
	logoPaths: object;
	menuItems: object;

	constructor() { }

	ngOnInit() {
		this.logoPaths = {
			x1 : '/assets/img/general/logo.png',
			x2 : '/assets/img/general/logo@2x.png',
			x3 : '/assets/img/general/logo@3x.png'
		}; 

		this.menuItems = [
			{
				text  : 'Login',
				icons : [
					'/assets/img/icons/login.png',
					'/assets/img/icons/login@2x.png',
					'/assets/img/icons/login@3x.png'
				]
			},
			{
				text  : 'Items',
				icons : [
					'/assets/img/icons/bag.png',
					'/assets/img/icons/bag@2x.png',
					'/assets/img/icons/bag@3x.png'
				]
			},
			{
				text  : null,
				icons : [
					'/assets/img/icons/search.png',
					'/assets/img/icons/search@2x.png',
					'/assets/img/icons/search@3x.png'
				]
			},
			{
				text  : null,
				icons : [
					'/assets/img/icons/menu.png',
					'/assets/img/icons/menu@2x.png',
					'/assets/img/icons/menu@3x.png'
				]
			},
		];
	}

}
