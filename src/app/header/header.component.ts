import { Component, OnInit } from '@angular/core';
import { Location, NgClass } from '@angular/common';
import { Router } from '@angular/router';
import { trigger, state, style, transition, animate } from '@angular/animations';

import { MenuComponent } from '../menu/menu.component';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
	animations: [
	    trigger('slideInOut', [
	      state('in', style({
	        transform: 'translate3d(0, 0, 0)'
	      })),
	      state('out', style({
	        transform: 'translate3d(-270px, 0, 0)'
	      })),
	      transition('in => out', animate('400ms ease-in-out')),
	      transition('out => in', animate('400ms ease-in-out'))
	    ]),
	  ]
})
export class HeaderComponent implements OnInit {
	menuState: string = 'in';
	logoPaths: object;
	menuItems: object;
	currRoute: string;

	constructor(private router: Router, private location: Location) {
	}

	ngOnInit() {
		this.currRoute = this.location.path().substring(0, 9);
		console.log(this.currRoute)

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
			}
		];
	}

	detectRoute() {
		if(this.currRoute === '/product/') {
			return 'header--dark';
		}
		
		return;
	}

	toggleMenu(e) {
		e.preventDefault();
		this.menuState = this.menuState === 'out' ? 'in' : 'out';
	}
}
