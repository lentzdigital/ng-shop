import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-lookbook',
	templateUrl: './lookbook.component.html',
	styleUrls: ['./lookbook.component.scss']
})
export class LookbookComponent implements OnInit {
	@Input() gender: string;
	image: string;
	firstLine: string;
	secondLine: string;
	men: object;
	women: object;
	constructor() { }

	ngOnInit() {
		this.men = {
			firstLine: 'Men\'s',
			secondLine: 'lookbook',
			image: 'assets/img/lookbook/men.jpg'
		};

		this.women = {
			firstLine: 'Women\'s',
			secondLine: 'lookbook',
			image: 'assets/img/lookbook/women.jpg'
		};

		this.setImage(this.gender);
	}

	setImage(gender): void {
		this.image = 'assets/img/general/banner1.jpg';

		if(gender === 'men') {
			this.image = this.men['image'];
			this.firstLine = this.men['firstLine'];
			this.secondLine = this.men['secondLine'];
		} else if(gender === 'women') {
			this.image = this.women['image'];
			this.firstLine = this.women['firstLine'];
			this.secondLine = this.women['secondLine'];
		}
	}
}
