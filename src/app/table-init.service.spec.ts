import { TestBed, inject } from '@angular/core/testing';

import { TableInitService } from './table-init.service';

describe('TableInitService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TableInitService]
    });
  });

  it('should be created', inject([TableInitService], (service: TableInitService) => {
    expect(service).toBeTruthy();
  }));
});
