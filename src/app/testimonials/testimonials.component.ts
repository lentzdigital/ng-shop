import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
	selector: 'app-testimonials',
	templateUrl: './testimonials.component.html',
	styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit {
	@ViewChild('slide')
	private slide: ElementRef;
	testimonials: any;
	sliderWidth: number;

	constructor() { }

	ngOnInit() {
		this.testimonials = [
			{
				id: 1,
				name: 'Jane Smith',
				content: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
				image: 'assets/img/testimonials/woman1.jpg'
			},
			{
				id: 2,
				name: 'Jeanett Thompson',
				content: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
				image: 'assets/img/testimonials/woman1.jpg'
			},
			{
				id: 3,
				name: 'Chloe Doe',
				content: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
				image: 'assets/img/testimonials/woman1.jpg'
			}
		];
	}

	ngAfterViewInit() {
		// this.setSliderWidth();
	}

	setSliderWidth(): void {
		let slideCount  = this.testimonials.length,
			slideWidth  = this.slide[0].nativeElement.offsetWidth,
			sliderWidth = slideCount * slideWidth;

		this.sliderWidth = sliderWidth;
		console.log(this.sliderWidth);
	}

}
