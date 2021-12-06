import { Action, createReducer, on } from '@ngrx/store';
import * as CartDetailActions from '../actions/cart-detail.actions';

export const cartDetailFeatureKey = 'cartDetail';

export interface State {

}

export const initialState: State = {

};

export const reducer = createReducer(
  initialState,

  on(CartDetailActions.loadCartDetails, state => state),
  on(CartDetailActions.loadCartDetailsSuccess, (state, action) => state),
  on(CartDetailActions.loadCartDetailsFailure, (state, action) => state),

);
