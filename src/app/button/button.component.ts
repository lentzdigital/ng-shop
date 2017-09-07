import { Component, OnInit, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
	selector: 'app-button',
	templateUrl: './button.component.html',
	styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
	@Input() label: string;
	@Input() link: string;
	@Input() style: string;

	constructor() { }

	ngOnInit() {
	}

	getStyle(style: string) {
		let classes;

		if(style === 'blue') {
			classes = 'button--blue';
		} else if(style === 'white-outline') {
			classes = 'button--white-outline';
		} else if(style === 'light-grey') {
			classes = 'button--light-grey';
		} else if(style === 'size-guide') {
			classes = 'button--light-grey button--size-guide';
		} else if(style === 'white') {
			classes = 'button--white';
		} else {
			classes = 'button--grey';
		}

		return classes;
	}

}
