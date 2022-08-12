import { createAction } from '@ngrx/store';

export const getRole = createAction("[GET ROLE] GET ROLE")
export const setAdmin = createAction("[ADMIN ROLE] SET ADMIN")
export const setUser = createAction("[USER ROLE] SET USER")
export const setPublic = createAction("[PUBLIC ROLE]] SET PUBLIC")


export const isLoggedIn = createAction("[CHECK LOGIN STATUS] Get Login Status")
export const setIsLoggedIn = createAction("[SET LOGIN STATUS] Set Login Status")
