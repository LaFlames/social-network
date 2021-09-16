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
    newMessageValue: ""
}

export const DialogsReducer = (state= initialState, action: ActionsType): DialogsInitialStateType => {
    switch (action.type) {
        case "UPDATE-NEW-MESSAGE-BODY":
            let stateCopy = {...state}
            stateCopy.newMessageValue = action.messageText
            return stateCopy
        case "SEND-NEW-MESSAGE":
            let stateCopyy = {...state}
            let body = stateCopyy.newMessageValue
            stateCopyy.newMessageValue = ''
            stateCopyy.messages.push({id: 4, message: body})
            return stateCopyy
        default:
            return state
    }
}



export let updateNewMessageText = (messageText: string) => {
    return {
        type: "UPDATE-NEW-MESSAGE-BODY",
        messageText: messageText
    } as const
}
export let sendMessage = () => {
    return {
        type: "SEND-NEW-MESSAGE"
    } as const
}

//types
type ActionsType =
    | ReturnType<typeof sendMessage>
    | ReturnType<typeof updateNewMessageText>

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
    newMessageValue: string
}
