import { TestBed, inject } from '@angular/core/testing';

import { MockModelCodeService } from './mock-model-code.service';

describe('MockModelCodeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MockModelCodeService]
    });
  });

  it('should be created', inject([MockModelCodeService], (service: MockModelCodeService) => {
    expect(service).toBeTruthy();
  }));
});
