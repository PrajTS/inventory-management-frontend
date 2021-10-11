import { loginSuccess, autoLoginSuccess, logoutSuccess } from './auth.actions';
import { Action, createReducer, on } from '@ngrx/store';
import { AuthState, initialState } from './auth.state';

const _authReducer = createReducer(
  initialState,
  on(loginSuccess, (state, action) => {
    return {
      ...state,
      user: action.user,
    };
  }),
  on(autoLoginSuccess, (state, action) => {
    return {
      ...state,
      user: action.user,
    };
  }),
  on(logoutSuccess, (state) => {
    return {
      ...state,
      user: null,
    };
  })
);

export function AuthReducer(state: AuthState | undefined, action: Action) {
  return _authReducer(state, action);
}
