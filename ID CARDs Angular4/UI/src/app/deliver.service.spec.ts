import { TestBed, inject } from '@angular/core/testing';

import { DeliverService } from './deliver.service';

describe('DeliverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DeliverService]
    });
  });

  it('should be created', inject([DeliverService], (service: DeliverService) => {
    expect(service).toBeTruthy();
  }));
});
