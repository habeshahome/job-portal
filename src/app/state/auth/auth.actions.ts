import { createAction, props } from '@ngrx/store';

export const isLoggedIn = createAction('[AUTH LOGIN] IS LOGGED IN');
export const login = createAction("[AUTH LOGIN] LOGIN");
export const logout = createAction("[AUTH LOGOUT] LOGOUT");