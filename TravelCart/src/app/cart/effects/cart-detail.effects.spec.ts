import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { CartDetailEffects } from './cart-detail.effects';

describe('CartDetailEffects', () => {
  let actions$: Observable<any>;
  let effects: CartDetailEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CartDetailEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(CartDetailEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
