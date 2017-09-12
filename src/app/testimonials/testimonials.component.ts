import { Component, OnInit, ElementRef, ViewChild, AfterViewInit, HostListener } from '@angular/core';
import { NgClass } from '@angular/common';

/**
 * Import of Testimonial class
 */


import { Testimonial } from '../testimonial';


/**
 * Import of TestimonialService
 */


import { TestimonialService } from '../testimonial.service';

@Component({
	selector: 'app-testimonials',
	templateUrl: './testimonials.component.html',
	styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit {
	/**
	 * ViewChild:
	 *
	 * Used to target element with local variable #measureThis.
	 */


	@ViewChild('measureThis') el: ElementRef;
	slideWidth: number;
	sliderWidth: number;
	tesArr: Testimonial[];
	currId: number;
	offset: number;


	/**
	 * constructor:
	 * 
	 * @param {TestimonialService} private ts Injecting TestimonialService into component
	 */
	

	constructor(private ts: TestimonialService) {}


	/**
	 * ngOnInit: Angular lifecycle hook.
	 *
	 * Call's method that calls testimonial.service
	 */
	

	ngOnInit() {
		this.getSlides();
		this.currId = 1;
	}


	/**
	 * ngAfterViewInit: Angular lifecycle hook
	 *
	 * Calls method's to calculate slide & slider width.
	 * Uses setTimeout as a workaround issues caused by life cycle.
	 */
	

	ngAfterViewInit() {
		setTimeout(() => {
			this.calcSlideWidth();
			this.calcSliderWidth();
		});
	}


	/**
	 * getSlides:
	 *
	 * Populate property tesArr with testimonial data, 
	 * by calling method of TestimonialService.
	 */


	getSlides() {
		this.tesArr = this.ts.getTestiomonials();
	}


	/**
	 * calcSliderWidth:
	 *
	 * Calculates the sliding part's width.
	 * The length of the tesArr multiplied width slide width.
	 */


	calcSliderWidth() {
		const itemCount = this.tesArr.length;

		this.sliderWidth = this.slideWidth * itemCount;
	}


	/**
	 * calcSlideWidth:
	 * 
	 * Calculates slide width.
	 * Based on view of #measureThis.
	 * Utilizes ElementRef nativeElement.
	 * El refers to ViewChild.
	 */


	calcSlideWidth() {
		this.slideWidth = this.el.nativeElement.offsetWidth;
	}


	/**
	 * setCurrSlide:
	 *
	 * Sets propery currId to current id.
	 * Calculates property offset, to make the slider slide.
	 * 
	 * @param {number} id: id of selected slide
	 */
	

	setCurrSlide(id) {
		this.currId = id;
		this.offset = (this.currId - 1) * this.slideWidth;
	}


	/**
	 * HostListener:
	 *
	 * Acts on window resize.
	 * Uses method onResize, which calls methods to calc widths.
	 * Makes it work responsive.
	 */


	@HostListener('window:resize', ['$event'])
	onResize(event) {
		this.calcSlideWidth();
		this.calcSliderWidth();
		this.setCurrSlide(this.currId);
	}
}
