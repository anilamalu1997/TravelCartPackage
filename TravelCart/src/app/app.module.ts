import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from './core/core.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';


 
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
      
    StoreModule.forRoot({}, {}),
      
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
      
    EffectsModule.forRoot([]),
      
    StoreRouterConnectingModule.forRoot()
  ],
  
 
  
  providers: [],
  bootstrap: [AppComponent]

  
})
export class AppModule { }
