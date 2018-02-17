import { TestBed, inject } from '@angular/core/testing';

import { ModelCodeService } from './model-code.service';

describe('ModelCodeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ModelCodeService]
    });
  });

  it('should be created', inject([ModelCodeService], (service: ModelCodeService) => {
    expect(service).toBeTruthy();
  }));
});
