import { TestBed } from '@angular/core/testing';

import { ToastPopoverService } from './toast-popover.service';

describe('ToastPopoverService', () => {
  let service: ToastPopoverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToastPopoverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
