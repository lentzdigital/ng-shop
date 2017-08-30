import { Component, OnInit } from '@angular/core';
import { HeaderMenuComponent } from '../header-menu/header-menu.component';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
	logoPaths: object;

	constructor() { }

	ngOnInit() {
		this.logoPaths = {
			x1 : '/assets/img/general/logo.png',
			x2 : '/assets/img/general/logo@2x.png',
			x3 : '/assets/img/general/logo@3x.png'
		}; 
	}

}
