import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart.component';
import { CartDetailsComponent } from './comp/cart-details/cart-details.component';
import { StoreModule } from '@ngrx/store';
import * as fromCartDetail from './reducers/cart-detail.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CartDetailEffects } from './effects/cart-detail.effects';
import { CoreModule } from '../core/core.module';


@NgModule({
  declarations: [
    CartComponent,
    CartDetailsComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule,
    CoreModule,
    StoreModule.forFeature(fromCartDetail.cartDetailFeatureKey, fromCartDetail.reducer),
    EffectsModule.forFeature([CartDetailEffects])
  ]
})
export class CartModule { }
