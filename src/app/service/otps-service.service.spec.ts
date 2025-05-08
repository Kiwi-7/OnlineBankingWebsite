import { TestBed } from '@angular/core/testing';

import { OTPSServiceService } from './otps-service.service';

describe('OTPSServiceService', () => {
  let service: OTPSServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OTPSServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
