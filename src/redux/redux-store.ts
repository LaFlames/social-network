import {applyMiddleware, createStore, combineReducers} from "redux";
import {ProfileReducer} from "./ProfileReducer";
import { DialogsReducer } from "./DialogsReducer";
import { UsersReducer} from "./UsersReducer";
import { AuthReducer} from "./AuthReducer";
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'




type ReducersType = typeof rootReducer
export type AppStateType = ReturnType<ReducersType>

let rootReducer = combineReducers({
    profilePage: ProfileReducer,
    dialogsPage: DialogsReducer,
    usersPage: UsersReducer,
    auth: AuthReducer,
    form: formReducer
})

let store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

export default store

// @ts-ignore
window.store = store;