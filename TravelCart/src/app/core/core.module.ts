import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './comp/header/header.component';
import { RatingComponent } from './comp/rating/rating.component';
import { CartWidgetComponent } from './comp/cart-widget/cart-widget.component';
import { HttpClientModule } from '@angular/common/http';
import { ImageRlPipe } from './pipes/image-rl.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastPopoverComponent } from './comp/toast-popover/toast-popover.component';

@NgModule({
  declarations: [
    HeaderComponent,
    RatingComponent,
    CartWidgetComponent,
    ImageRlPipe,
    ToastPopoverComponent,
    
    
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
    
   
  ],
  exports:[
    RatingComponent,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    HeaderComponent,
    ImageRlPipe,
    ToastPopoverComponent
    
  ]
})
export class CoreModule { }
