import { TestBed, inject } from '@angular/core/testing';

import { FoundInitService } from './found-init.service';

describe('FoundInitService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FoundInitService]
    });
  });

  it('should be created', inject([FoundInitService], (service: FoundInitService) => {
    expect(service).toBeTruthy();
  }));
});
