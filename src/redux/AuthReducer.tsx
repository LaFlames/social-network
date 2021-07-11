import React from 'react';
import {ActionsType} from "./redux-store";


export type SetAuthUserDataACType = {
    id: number | null,
    email: string | null,
    login: string | null
}
export type AuthActionsType = ReturnType<typeof setAuthUserData>
export type AuthInitialStateType = {
    id: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean
}
let initialState: AuthInitialStateType = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

export const AuthReducer = (state = initialState, action: ActionsType): AuthInitialStateType => {
    switch (action.type) {
        case "SET-AUTH-USER-DATA": {
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        }
        default:
            return state
    }
}

export let setAuthUserData = (data: SetAuthUserDataACType) => {
    return {
        type: "SET-AUTH-USER-DATA",
        data
    } as const
}


