import {
    ActionsType,
    DialogsPageType
} from "./state";
import React from 'react';


export type DialogsActionsType = ReturnType<typeof sendMessageActionCreator> | ReturnType<typeof updateNewMessageTextActionCreator>
export let updateNewMessageTextActionCreator = (messageText: string) => {
    return {
        type: "UPDATE-NEW-MESSAGE-BODY",
        messageText: messageText
    } as const
}
export let sendMessageActionCreator = () => {
    return {
        type: "SEND-NEW-MESSAGE"
    } as const
}

let initialState = {
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

export const DialogsReducer = (state: DialogsPageType = initialState, action: ActionsType): DialogsPageType => {
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