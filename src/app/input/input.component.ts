import { Component, OnInit, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
	selector: 'app-input',
	templateUrl: './input.component.html',
	styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
	@Input() placeholder: string;
	@Input() style: string;

	constructor() { }

	ngOnInit() {

	}
}
