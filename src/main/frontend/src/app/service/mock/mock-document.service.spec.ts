import { TestBed, inject } from '@angular/core/testing';

import { MockDocumentService } from './mock-document.service';

describe('MockDocumentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MockDocumentService]
    });
  });

  it('should be created', inject([MockDocumentService], (service: MockDocumentService) => {
    expect(service).toBeTruthy();
  }));
});
