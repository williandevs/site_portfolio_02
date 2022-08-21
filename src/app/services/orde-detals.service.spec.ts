import { TestBed } from '@angular/core/testing';

import { OrdeDetalsService } from './orde-detals.service';

describe('OrdeDetalsService', () => {
  let service: OrdeDetalsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrdeDetalsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
