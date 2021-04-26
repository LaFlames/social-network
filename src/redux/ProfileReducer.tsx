import React from "react";
import {ActionsType, PostType, ProfilePageType} from "./state";


export type ProfileActionsType = ReturnType<typeof addPostActionCreator> | ReturnType<typeof updateNewPostTextActionCreator>
export let addPostActionCreator = (postText: string) => {
    return {
        type: 'ADD-POST',
        postMessage: postText
    } as const
}
export let updateNewPostTextActionCreator = (text: string) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        newText: text
    } as const
}

let initialState = {
    posts: [
        {id: 1, message: "Hello", like: 12},
        {id: 2, message: "How arr you?", like: 122},
        {id: 3, message: "Goodbye", like: 81}
    ],
    newPostValue: ""
}

export const ProfileReducer = (state: ProfilePageType = initialState, action: ActionsType): ProfilePageType => {
    switch (action.type) {
        case "ADD-POST":
            let newPost: PostType = {
                id: 5,
                message: action.postMessage,
                like: 0
            }
            state.posts.push(newPost)
            state.newPostValue = ""
            return state
        case "UPDATE-NEW-POST-TEXT":
            state.newPostValue = action.newText
            return state
        default:
            return state
    }
}