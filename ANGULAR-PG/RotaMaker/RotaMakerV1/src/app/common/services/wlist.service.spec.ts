import { TestBed, inject } from '@angular/core/testing';

import { WlistService } from './wlist.service';

describe('WlistService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WlistService]
    });
  });

  it('should be created', inject([WlistService], (service: WlistService) => {
    expect(service).toBeTruthy();
  }));
});
