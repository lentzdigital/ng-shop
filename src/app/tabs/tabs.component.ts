import { Component, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';

class Tabs {
	label: string;
	content: string;
}

@Component({
	selector: 'app-tabs',
	templateUrl: './tabs.component.html',
	styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
	tabs;
	currContent;
	selectedTab;

	constructor() { 
		this.tabs = [
			{
				label: 'Description',
				content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
			},
			{
				label: 'Brand',
				content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
			},
			{
				label: 'Info',
				content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
			}
		];
	}

	ngOnInit() {
		this.currContent = this.tabs[0];
		this.selectedTab = this.currContent;
	}

	selectTab(e, tab) {
		e.preventDefault();

		this.currContent = tab;
		this.selectedTab = this.currContent;
	}

}
