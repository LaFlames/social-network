import {createStore, combineReducers} from "redux";
import {
    ProfileActionsType,
    ProfileReducer
} from "./ProfileReducer";
import {
    DialogsActionsType,
    DialogsReducer
} from "./DialogsReducer";
import {UsersActionsType, UsersReducer} from "./UsersReducer";
import {AuthActionsType, AuthReducer} from "./AuthReducer";


export type ActionsType = ProfileActionsType | DialogsActionsType | UsersActionsType | AuthActionsType


type ReducersType = typeof reducers
export type AppStateType = ReturnType<ReducersType>

let reducers = combineReducers({
    profilePage: ProfileReducer,
    dialogsPage: DialogsReducer,
    usersPage: UsersReducer,
    auth: AuthReducer
})

let store = createStore(reducers)

export default store