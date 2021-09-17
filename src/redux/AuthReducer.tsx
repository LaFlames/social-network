import React, {Dispatch} from 'react';
import {authApi} from "../api/auth-api";


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


export let getAuthUserData = () => (dispatch: Dispatch<ActionsType>) => {
    authApi.getAuthData()
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(setAuthUserData(res.data.data))
            }
        })

}


//types
export type SetAuthUserDataACType = {
    id: number | null,
    email: string | null,
    login: string | null
}
type ActionsType = ReturnType<typeof setAuthUserData>
export type AuthInitialStateType = {
    id: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean
}


