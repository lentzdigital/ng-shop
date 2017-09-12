import { TestBed, inject } from '@angular/core/testing';

import { TestimonialServiceService } from './testimonial-service.service';

describe('TestimonialServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TestimonialServiceService]
    });
  });

  it('should be created', inject([TestimonialServiceService], (service: TestimonialServiceService) => {
    expect(service).toBeTruthy();
  }));
});
