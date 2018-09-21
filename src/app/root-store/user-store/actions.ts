import { Action } from '@ngrx/store';
import { UserModel } from '../../models/standup-us/user-model';

export enum ActionTypes {
  RequestedLatest = '[Users] Requested Latest',
  ReceivedLatest = '[Users] Latest Received',
  ReceivedLoggedIn = '[Users] LoggedIn Received'
}

export class RequestLatestAction implements Action {
  readonly type = ActionTypes.RequestedLatest;
  constructor() {}
}

export class LatestReceivedAction implements Action {
  readonly type = ActionTypes.ReceivedLatest;
  constructor(public payload: { recents: UserModel[] }) {}
}

export class LoggedInReceivedAction implements Action {
  readonly type = ActionTypes.ReceivedLoggedIn;
  constructor(public payload: { userLoggedIn: UserModel }) {}
}

export type Actions = LatestReceivedAction | LoggedInReceivedAction;
