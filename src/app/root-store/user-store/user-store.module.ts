import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { UserStoreEffects } from './effects';
import { userStoreReducer } from './reducer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('userStore', userStoreReducer),
    EffectsModule.forFeature([UserStoreEffects])
  ],
  declarations: [],
  providers: [UserStoreEffects]
})
export class UserStoreModule { }
