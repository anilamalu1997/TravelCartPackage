import * as fromCartDetail from '../reducers/cart-detail.reducer';
import { selectCartDetailState } from './cart-detail.selectors';

describe('CartDetail Selectors', () => {
  it('should select the feature state', () => {
    const result = selectCartDetailState({
      [fromCartDetail.cartDetailFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
