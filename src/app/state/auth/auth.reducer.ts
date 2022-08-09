import { createReducer, on } from '@ngrx/store';

import { isLoggedIn, login, logout } from './auth.actions'

export const initialState = false;

export const loginReducer =
    createReducer(
        initialState,
        on(login, (state) => state = true),
        on(logout, (state) => state = false),
        on(isLoggedIn, (state) => state)
    )