import { Component, OnInit } from '@angular/core';
import { InputComponent } from '../input/input.component';
import { ButtonComponent } from '../button/button.component';

@Component({
	selector: 'app-newsletter-box',
	templateUrl: './newsletter-box.component.html',
	styleUrls: ['./newsletter-box.component.scss']
})
export class NewsletterBoxComponent implements OnInit {
	icon: string;
	title: string;
	tagline: string;
	placeholder: string;
	button: object;

	constructor() { }

	ngOnInit() {
		this.icon = 'assets/img/icons/mail.svg';
		this.title = 'Get our newsletter';
		this.tagline = 'join our maillist to receive special discounts';
		this.placeholder = 'Enter your email';
		this.button = {
			label: 'Subscribe',
			link: '#'
		};
	}

}
