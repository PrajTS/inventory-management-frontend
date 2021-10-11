import { User } from '../auth.model';
import { createAction, props } from '@ngrx/store';

export const LOGIN_START = '[auth page] login start';
export const LOGIN_SUCCESS = '[auth page] login Success';
export const LOGIN_FAIL = '[auth page] login Fail';

export const AUTO_LOGIN_START = '[auth page] auto login start';
export const AUTO_LOGIN_SUCCESS = '[auth page] auto login success';
export const AUTO_LOGIN_FAIL = '[auth page] auto login fail';

export const LOGOUT_START = '[auth page] logout start';
export const LOGOUT_SUCCESS = '[auth page] logout success';
export const LOGOUT_FAIL = '[auth page] logout fail';

export const loginStart = createAction(
  LOGIN_START,
  props<{ username: string; password: string }>()
);
export const loginSuccess = createAction(
  LOGIN_SUCCESS,
  props<{ user: User }>()
);
export const loginFailure = createAction(
  LOGIN_FAIL,
  props<{ err: any }>()
);

export const autoLoginStart = createAction(AUTO_LOGIN_START);
export const autoLoginSuccess = createAction(
  AUTO_LOGIN_SUCCESS,
  props<{ user: User }>()
);
export const autoLoginFailure = createAction(
  AUTO_LOGIN_SUCCESS,
  props<{ err: any }>()
);

export const logoutStart = createAction(LOGOUT_START);
export const logoutSuccess = createAction(LOGOUT_SUCCESS);
export const logoutFail = createAction(
  LOGOUT_FAIL,
  props<{ err: any }>()
);
