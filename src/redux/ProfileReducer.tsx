import React, {Dispatch} from "react";
import {UserPhotoType} from "./UsersReducer";
import {profileApi} from "../api/profile-api";



let initialState: ProfilePageInitialStateType = {
    posts: [
        {id: 1, message: "Hello", like: 12},
        {id: 2, message: "How arr you?", like: 122},
        {id: 3, message: "Goodbye", like: 81}
    ],
    profile: null,
    status: ""
}

export const ProfileReducer = (state = initialState, action: ActionsType): ProfilePageInitialStateType => {
    switch (action.type) {
        case "ADD-POST": {
            let newPost: PostType = {
                id: 5,
                message: action.postMessage,
                like: 0
            }
            return {
                ...state,
                posts: [newPost, ...state.posts]
            }
        }
        case "SET-USER-PROFILE": {
            return {...state, profile: action.profile}
        }
        case "CHANGE-PROFILE-STATUS": {
            return {...state, status: action.status}
        }
        default:
            return state
    }
}

export let addPost = (postMessage: string) => {
    return {
        type: 'ADD-POST',
        postMessage
    } as const
}
export let setUserProfile = (profile: ProfileType) => {
    return {
        type: 'SET-USER-PROFILE',
        profile
    } as const
}
export let setProfileStatus = (status: string) => {
    return {
        type: 'CHANGE-PROFILE-STATUS',
        status
    } as const
}


//types
type ActionsType =
    | ReturnType<typeof addPost>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setProfileStatus>
export type ProfileType = {
    aboutMe: string,
    contacts: {
        facebook: string,
        website: null | string,
        vk: string,
        twitter: string,
        instagram: string,
        youtube: null | string,
        github: string,
        mainLink: null | string
    },
    lookingForAJob: true,
    lookingForAJobDescription: string,
    fullName: string,
    userId: number,
    photos: UserPhotoType
} | null
export type PostType = {
    id: number
    message: string
    like: number
}
export type ProfilePageInitialStateType = {
    posts: Array<PostType>
    profile: ProfileType
    status: string
}


export let getUserProfile = (userId: string) => (dispatch: Dispatch<ActionsType>) => {
    profileApi.getUserProfileData(userId)
        .then(res => {
            dispatch(setUserProfile(res.data))
        })
    profileApi.getUserProfileStatus(userId)
        .then(res => {
            dispatch(setProfileStatus(res.data))
        })
}
export let updateUserProfileStatus = (status: string) => (dispatch: Dispatch<ActionsType>) => {
    profileApi.updateUserProfileStatus(status)
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(setProfileStatus(status))
            }
        })
}