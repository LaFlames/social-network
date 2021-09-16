import React from 'react';


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


