import {createStore, combineReducers} from "redux";
import {
    ProfileActionsType,
    ProfileReducer
} from "./ProfileReducer";
import {
    DialogsActionsType,
    DialogsReducer
} from "./DialogsReducer";
import {UsersReducer} from "./UsersReducer";


export type ActionsType = ProfileActionsType | DialogsActionsType


type ReducersType = typeof reducers
export type AppStateType = ReturnType<ReducersType>

let reducers = combineReducers({
    profilePage: ProfileReducer,
    dialogsPage: DialogsReducer,
    usersPage: UsersReducer
})

let store = createStore(reducers)

export default store