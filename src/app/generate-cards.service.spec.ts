import { TestBed, inject } from '@angular/core/testing';

import { GenerateCardsService } from './generate-cards.service';

describe('GenerateCardsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GenerateCardsService]
    });
  });

  it('should be created', inject([GenerateCardsService], (service: GenerateCardsService) => {
    expect(service).toBeTruthy();
  }));
});
