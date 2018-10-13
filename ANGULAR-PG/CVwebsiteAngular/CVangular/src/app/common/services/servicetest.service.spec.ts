import { TestBed, inject } from '@angular/core/testing';

import { ServicetestService } from './servicetest.service';

describe('ServicetestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServicetestService]
    });
  });

  it('should be created', inject([ServicetestService], (service: ServicetestService) => {
    expect(service).toBeTruthy();
  }));
});
