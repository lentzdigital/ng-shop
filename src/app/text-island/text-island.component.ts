import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-text-island',
	templateUrl: './text-island.component.html',
	styleUrls: ['./text-island.component.scss']
})
export class TextIslandComponent implements OnInit {
	title: string;
	text: string;

	constructor() { }

	ngOnInit() {
		this.title = 'Sharpen Your Look';
		this.text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.';
	}
}
