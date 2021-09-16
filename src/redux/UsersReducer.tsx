import React, {Dispatch} from 'react';
import {usersApi} from "../api/users-api";


type ActionsType =
    | ReturnType<typeof follow>
    | ReturnType<typeof unFollow>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof setIsFetching>
    | ReturnType<typeof toggleFollowingProgress>

export type UserPhotoType = {
    small: string | null,
    large: string | null
}
export type UserType = {
    name: string,
    id: string,
    uniqueUrlName: string | null,
    photos: UserPhotoType,
    status: string,
    followed: boolean
}
export type UsersInitialStateType = {
    users: UserType[],
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean,
    followingInProgress: string[]
}

let initialState: UsersInitialStateType = {
    users: [ ],
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}

export const UsersReducer = (state = initialState, action: ActionsType): UsersInitialStateType => {
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
                users: action.users
            }
        case "SET-CURRENT-PAGE":
            return {
                ...state,
                currentPage: action.pageNumber
            }
        case "SET-TOTAL-USERS-COUNT":
            return {
                ...state,
                totalUsersCount: action.count
            }
        case "SET-IS-FETCHING":
            return {
                ...state,
                isFetching: action.isFetching
            }
        case "TOGGLE-FOLLOWING-PROGRESS": {
            return {
                ...state,
                followingInProgress:
                    action.isFetching
                        ? [...state.followingInProgress, action.userId]
                        : state.followingInProgress.filter(id => id !== action.userId)
            }
        }
        default:
            return state
    }
}

export let follow = (userId: string) => {
    return {
        type: "FOLLOW",
        userId
    } as const
}
export let unFollow = (userId: string) => {
    return {
        type: "UNFOLLOW",
        userId
    } as const
}
export let setUsers = (users: UserType[]) => {
    return {
        type: "SET-USERS",
        users
    } as const
}
export let setCurrentPage = (pageNumber: number) => {
    return {
        type: "SET-CURRENT-PAGE",
        pageNumber
    } as const
}
export let setTotalUsersCount = (count: number) => {
    return {
        type: "SET-TOTAL-USERS-COUNT",
        count
    } as const
}
export let setIsFetching = (isFetching: boolean) => {
    return {
        type: "SET-IS-FETCHING",
        isFetching
    } as const
}
export let toggleFollowingProgress = (isFetching: boolean, userId: string) => ({
    type: "TOGGLE-FOLLOWING-PROGRESS",
    isFetching, userId
} as const)


















