import { TestBed } from '@angular/core/testing';

import { CoreCartService } from './core-cart.service';

describe('CoreCartService', () => {
  let service: CoreCartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoreCartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
