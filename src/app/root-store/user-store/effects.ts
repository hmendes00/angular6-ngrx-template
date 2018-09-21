import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of as observableOf } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';
import * as userActions from './actions';
import { MyModel } from '../../models/MyModel';
import { StandupService } from '../../services/standup-service';

@Injectable()
export class UserStoreEffects {
  constructor(private actions$: Actions, private standupService: StandupService) {}

  @Effect()
  latestReceived$: Observable<Action> = this.actions$.pipe(
    ofType<userActions.RequestLatestAction>(
      userActions.ActionTypes.RequestedLatest
    ),
    switchMap(() => this.standupService.getUsers()),
    map((items) => new userActions.LatestReceivedAction({ recents: items }))
  );
}
