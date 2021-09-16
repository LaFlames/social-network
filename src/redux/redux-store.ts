import {applyMiddleware, createStore, combineReducers} from "redux";
import {ProfileReducer} from "./ProfileReducer";
import { DialogsReducer } from "./DialogsReducer";
import { UsersReducer} from "./UsersReducer";
import { AuthReducer} from "./AuthReducer";
import thunkMiddleware from 'redux-thunk'




type ReducersType = typeof reducers
export type AppStateType = ReturnType<ReducersType>

let reducers = combineReducers({
    profilePage: ProfileReducer,
    dialogsPage: DialogsReducer,
    usersPage: UsersReducer,
    auth: AuthReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

export default store

// @ts-ignore
window.store = store;