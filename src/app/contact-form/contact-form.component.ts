import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-contact-form',
	templateUrl: './contact-form.component.html',
	styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
	person: Person = new Person();
	submitted: boolean = false;

	constructor() { }

	ngOnInit() {
	}

	submitForm() {
		this.submitted = true;
	}
}

class Person {
	firstName: string;
	lastName: string;
	email: string;
	phone: string;
	message: string;
}
