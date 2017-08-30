import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-header-menu',
	templateUrl: './header-menu.component.html',
	styleUrls: ['./header-menu.component.scss']
})
export class HeaderMenuComponent implements OnInit {
	menuItems: object;

	constructor() { }

	ngOnInit() {
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
				text  : false,
				icons : [
					'/assets/img/icons/search.png',
					'/assets/img/icons/search@2x.png',
					'/assets/img/icons/search@3x.png'
				]
			},
			{
				text  : false,
				icons : [
					'/assets/img/icons/menu.png',
					'/assets/img/icons/menu@2x.png',
					'/assets/img/icons/menu@3x.png'
				]
			},
		];
	}

	showLabel(menuItem) {
		if(menuItem.text === null) {
			return false;
		}
	}
}
