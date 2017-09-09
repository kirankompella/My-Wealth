import { TestBed, inject } from '@angular/core/testing';

import { FdService } from './fd.service';

describe('FdService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FdService]
    });
  });

  it('should be created', inject([FdService], (service: FdService) => {
    expect(service).toBeTruthy();
  }));
});
