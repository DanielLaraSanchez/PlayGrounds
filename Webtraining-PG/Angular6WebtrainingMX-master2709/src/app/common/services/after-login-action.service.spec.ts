import { TestBed, inject } from '@angular/core/testing';

import { AfterLoginActionService } from './after-login-action.service';

describe('AfterLoginActionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AfterLoginActionService]
    });
  });

  it('should be created', inject([AfterLoginActionService], (service: AfterLoginActionService) => {
    expect(service).toBeTruthy();
  }));
});
