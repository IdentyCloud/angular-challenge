import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { ROOT_REDUCERS } from './store/app.state';
import { EffectsModule } from '@ngrx/effects';
import { UsersEffects } from './store/effects/users.effects';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ComponentsModule,
    HttpClientModule,
    StoreModule.forRoot(ROOT_REDUCERS),
    StoreDevtoolsModule.instrument({ name: 'AngularChallenge' }),
    EffectsModule.forRoot([UsersEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
