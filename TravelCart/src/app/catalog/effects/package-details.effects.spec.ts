import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { PackageDetailsEffects } from './package-details.effects';

describe('PackageDetailsEffects', () => {
  let actions$: Observable<any>;
  let effects: PackageDetailsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        PackageDetailsEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(PackageDetailsEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
