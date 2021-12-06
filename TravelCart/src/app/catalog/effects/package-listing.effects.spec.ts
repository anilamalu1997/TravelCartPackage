import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { PackageListingEffects } from './package-listing.effects';

describe('PackageListingEffects', () => {
  let actions$: Observable<any>;
  let effects: PackageListingEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        PackageListingEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(PackageListingEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
