import React from 'react';


let initialState: DialogsInitialStateType = {
    dialogs: [
        {id: 1, name: "Vitalik"},
        {id: 2, name: "Kate"},
        {id: 3, name: "Inna"},
        {id: 4, name: "Sonya"}
    ],
    messages: [
        {id: 1, message: "Yo"},
        {id: 2, message: "What's gooddie"},
        {id: 3, message: "Hello"}
    ],
}

export const DialogsReducer = (state= initialState, action: ActionsType): DialogsInitialStateType => {
    switch (action.type) {
        case "SEND-NEW-MESSAGE": {
            return {
                ...state,
                messages: [...state.messages, {id: 5, message: action.message}]
            }
        }
        default:
            return state
    }
}


export let sendMessage = (message: string) => {
    return {
        type: "SEND-NEW-MESSAGE", message
    } as const
}

//types
type ActionsType =
    | ReturnType<typeof sendMessage>


export type DialogItemType = {
    id: number
    name: string
}
export type MessageType = {
    id: number
    message: string
}
export type DialogsInitialStateType = {
    dialogs: Array<DialogItemType>
    messages: Array<MessageType>
}
