import { Component, OnInit, Input } from '@angular/core';
import { NgClass } from '@angular/common';
import { ButtonComponent } from '../button/button.component';

@Component({
	selector: 'app-text-image',
	templateUrl: './text-image.component.html',
	styleUrls: ['./text-image.component.scss']
})
export class TextImageComponent implements OnInit {
	@Input() direction: boolean;
	@Input() style: string;

	title: string;
	text: string;
	features: object;
	images: object;

	constructor() { }

	ngOnInit() {
		this.title = 'Extraordinary Design';
		this.text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';
		this.features = [
			{
				title: 'Elegant style',
				icon: 'assets/img/icons/glasses.svg'
			},
			{
				title: 'Elegant style',
				icon: 'assets/img/icons/hanger.svg'
			},
			{
				title: 'Elegant style',
				icon: 'assets/img/icons/bowtie.svg'
			}
		],
		this.images = [
			'assets/img/general/textimage1.jpg',
			'assets/img/general/textimage2.jpg'
		];
	}

	getStyle(style: string) {
		if(style === 'blue') {
			return 'text-image__content--blue';
		}

		return
	}

	getDirection(direction: boolean) {
		if(direction === true) {
			return 'text-image--reverse';
		}

		return;
	}

	getImage() {
		if(this.direction === true) {
			return this.images[0];
		} else {
			return this.images[1];
		}
	}
}
