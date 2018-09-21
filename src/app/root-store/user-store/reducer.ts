import { Actions, ActionTypes } from './actions';
import { UserModel } from '../../models/standup-us/user-model';

export interface State {
  recents: UserModel[];
  userLoggedIn: UserModel;
}

export const initialState: State = {
  recents: [],
  userLoggedIn: null
};

export function userStoreReducer(state = initialState, action: Actions): State {
  switch (action.type) {
    case ActionTypes.ReceivedLatest: {
      return {
        ...state,
        recents: action.payload.recents
      };
    }
    case ActionTypes.ReceivedLoggedIn: {
      return {
        ...state,
        userLoggedIn: action.payload.userLoggedIn
      };
    }
    default: {
      return state;
    }
  }
}
