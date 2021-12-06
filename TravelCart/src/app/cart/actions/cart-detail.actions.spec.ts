import * as fromCartDetail from './cart-detail.actions';

describe('loadCartDetails', () => {
  it('should return an action', () => {
    expect(fromCartDetail.loadCartDetails().type).toBe('[CartDetail] Load CartDetails');
  });
});
