import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromCartDetail from '../reducers/cart-detail.reducer';

export const selectCartDetailState = createFeatureSelector<fromCartDetail.State>(
  fromCartDetail.cartDetailFeatureKey
);
