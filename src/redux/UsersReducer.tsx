import {
    ActionsType
} from "./state";
import React from 'react';



export type UsersActionsType = ReturnType<typeof followUserAC> | ReturnType<typeof unFollowUserAC> | ReturnType<typeof setUsersAC>

type UserLocationType = {
    city: string,
    country: string
}
export type UserType = {
    id: string,
    imageUrl: string,
    followed: boolean,
    status: string
    name: string,
    location: UserLocationType
}
export type InitialStateType = {
    users: UserType[]
}

let initialState: InitialStateType = {
    users: [ ]
}

export const UsersReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "FOLLOW": {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    } else {
                        return u
                    }
                })
            }
        }
        case "UNFOLLOW":
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    } else {
                        return u
                    }
                })
            }
        case "SET-USERS":
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        default:
            return state
    }
}

export let followUserAC = (userId: string) => {
    return {
        type: "FOLLOW",
        userId
    } as const
}
export let unFollowUserAC = (userId: string) => {
    return {
        type: "UNFOLLOW",
        userId
    } as const
}
export let setUsersAC = (users: UserType[]) => {
    return {
        type: "SET-USERS",
        users
    } as const
}