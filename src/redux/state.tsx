import {
    addPostAC, ProfileActionsType,
    ProfileReducer,
    updateNewPostTextAC
} from "./ProfileReducer"
import {
    DialogsActionsType,
    DialogsReducer,
    sendMessageActionCreator,
    updateNewMessageTextActionCreator
} from "./DialogsReducer";
import {UsersActionsType} from "./UsersReducer";
import {ActionsType} from "./redux-store";

export type PostType = {
    id: number
    message: string
    like: number
}
export type MessageType = {
    id: number
    message: string
}
export type DialogItemType = {
    id: number
    name: string
}
export type ProfilePageType = {
    posts: Array<PostType>
    newPostValue: string
}
export type DialogsPageType = {
    dialogs: Array<DialogItemType>
    messages: Array<MessageType>
    newMessageValue: string
}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}




/*export type StoreType = {
    state: RootStateType
    getProfileState: () => ProfilePageType
    getDialogsState: () => DialogsPageType
    callSubscriber: () => void
    subscribe: (observer: () => void) => void
    dispatch: (action: ActionsType) => void
}*/
/*

let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Hello", like: 12},
                {id: 2, message: "How arr you?", like: 122},
                {id: 3, message: "Goodbye", like: 81}
            ],
            newPostValue: ""
        },
        dialogsPage: {
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
    },
    getProfileState() {
        return this._state.profilePage
    },
    getDialogsState() {
        return this._state.dialogsPage
    },
    _callSubscriber() {
        console.log('State changed!')
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },


    dispatch(action) {
        this._state.profilePage = ProfileReducer(this._state.profilePage, action)
        this._state.dialogsPage = DialogsReducer(this._state.dialogsPage, action)
        this._callSubscriber()

    }
}



export default store*/
