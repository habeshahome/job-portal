import { createReducer, on } from '@ngrx/store'
import { 
    getRole, 
    setAdmin, 
    setUser, 
    setPublic, 
    // login status
    isLoggedIn, 
    setIsLoggedIn 
} from './app.actions'


// login reducer
export const initialRoleState = localStorage.getItem('role') || "JOB PORTAL"
export const roleReducer =
    createReducer(
        initialRoleState,
        on(getRole, (state) => state),
        on(setAdmin, (state) => "ADMIN"),
        on(setUser, (state) => "USER"),
        on(setPublic, (state) => "JOB PORTAL"),
    )


// is logged in reducer 
export const initialLoginState = false;
export const loginStatusReducer = createReducer(
    initialLoginState, 
    on(isLoggedIn, (state) => state), 
    on(setIsLoggedIn, (state) => true )
    )
