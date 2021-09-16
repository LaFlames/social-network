import React, {Dispatch} from "react";
import {UserPhotoType} from "./UsersReducer";
import {profileApi} from "../api/profile-api";



let initialState: ProfilePageInitialStateType = {
    posts: [
        {id: 1, message: "Hello", like: 12},
        {id: 2, message: "How arr you?", like: 122},
        {id: 3, message: "Goodbye", like: 81}
    ],
    newPostValue: "",
    profile: null
}

export const ProfileReducer = (state = initialState, action: ActionsType): ProfilePageInitialStateType => {
    switch (action.type) {
        case "ADD-POST": {
            let newPost: PostType = {
                id: 5,
                message: action.postMessage,
                like: 0
            }
            let stateCopy = {...state}
            stateCopy.posts = [...state.posts]
            stateCopy.posts.push(newPost)
            stateCopy.newPostValue = ""
            return stateCopy
        }
        case "UPDATE-NEW-POST-TEXT": {
            let stateCopy = {...state}
            stateCopy.newPostValue = action.newText
            return stateCopy
        }
        case "SET-USER-PROFILE": {
            return {...state, profile: action.profile}
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
export let updateNewPostText = (newText: string) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        newText
    } as const
}
export let setUserProfile = (profile: ProfileType) => {
    return {
        type: 'SET-USER-PROFILE',
        profile
    } as const
}

//types
type ActionsType = ReturnType<typeof addPost>
    | ReturnType<typeof updateNewPostText>
    | ReturnType<typeof setUserProfile>
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
    newPostValue: string
    profile: ProfileType
}


export let getUserProfile = (userId: string) => (dispatch: Dispatch<ActionsType>) => {
    profileApi.getUserProfileData(userId)
        .then(res => {
            dispatch(setUserProfile(res.data))
        })
}