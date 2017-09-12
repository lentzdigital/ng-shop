import { Injectable } from '@angular/core';

import { Testimonial } from './testimonial';
import { TESTIMONIALS } from './mock-testimonials';

@Injectable()
export class TestimonialService {
	constructor() { }

	getTestiomonials(): Testimonial[] {
		return TESTIMONIALS;
	}
}