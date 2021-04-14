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
}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}

export type ActionsType = ReturnType<typeof addPostActionCreator> | ReturnType<typeof updateNewPostTextActionCreator>

export type StoreType = {
    _state: RootStateType
    getProfileState: () => ProfilePageType
    getDialogsState: () => DialogsPageType
    _callSubscriber: () => void
    subscribe: (observer: () => void) => void
    dispatch: (action: ActionsType) => void
}

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
            ]
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

    /*addPost(postMessage: string) {
        let newPost: PostType = {
            id: 5,
            message: postMessage,
            like: 0
        }
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostValue = ""
        this._callSubscriber()
    },
    updateNewPostText(newText: string) {
        this._state.profilePage.newPostValue = newText
        this._callSubscriber()
    },*/

    dispatch(action) {
        switch (action.type) {
            case "ADD-POST":
                let newPost: PostType = {
                    id: 5,
                    message: action.postMessage,
                    like: 0
                }
                this._state.profilePage.posts.push(newPost)
                this._state.profilePage.newPostValue = ""
                this._callSubscriber()
                break
            case "UPDATE-NEW-POST-TEXT":
                this._state.profilePage.newPostValue = action.newText
                this._callSubscriber()
                break
        }
    }
}

/*let rerenderEntireTree = () => {
    console.log('State changed!')
}


let state: RootStateType = {
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
        ]
    }
}*/

/*export let addPost = (postMessage: string) => {
    let newPost: PostType = {
        id: 5,
        message: postMessage,
        like: 0
    }
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostValue = ""
    rerenderEntireTree()
}*/

/*export let updateNewPostText = (newText: string) => {
    state.profilePage.newPostValue = newText
    rerenderEntireTree()
}*/

/*export const subscribe = (observer: () => void) => {
    rerenderEntireTree = observer //callback give
}*/

export default store