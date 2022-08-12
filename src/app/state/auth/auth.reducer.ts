import { createReducer, on } from '@ngrx/store';

import { login, logout } from './auth.actions'


export let initialState: boolean

const local = localStorage.getItem('isLoggedIn')

if (local === 'true') {
    initialState = true;
} else {
    initialState = false;
}


export const loginReducer =
    createReducer(
        initialState,
        on(login, (state) => state = true),
        on(logout, (state) => state = false)
    )