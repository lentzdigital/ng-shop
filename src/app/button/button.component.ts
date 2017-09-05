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
		} else {
			classes = 'button--grey';
		}

		return classes;
	}

}
