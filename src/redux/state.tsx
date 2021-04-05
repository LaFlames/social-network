
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

let rerenderEntireTree = () => {
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
}

export let addPost = (postMessage: string) => {
    let newPost: PostType = {
        id: 5,
        message: postMessage,
        like: 0
    }
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostValue = ""
    rerenderEntireTree()
}

export let updateNewPostText = (newText: string) => {
    state.profilePage.newPostValue = newText
    rerenderEntireTree()
}

export const subscribe = (observer: () => void) => {
    rerenderEntireTree = observer //callback give
}

export default state