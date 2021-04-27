import React from "react";
import {ActionsType, PostType} from "../../../redux/state";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/ProfileReducer";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import MyPosts from "./MyPosts";

type MapStatePropsType = {
    posts: PostType[],
    newPostValue: string
}
type MapDispatchPropsType = {
    changeNewTextCallback: (text: string) => void,
    addPost: (text: string) => void
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {...state,
        posts: state.profilePage.posts,
        newPostValue: state.profilePage.newPostValue
    }
}
const mapDispatchToProps = (dispatch: (action: ActionsType) => void): MapDispatchPropsType => {
    return {
        changeNewTextCallback: (text: string) => {
            dispatch(updateNewPostTextActionCreator(text))
        },
        addPost: (text: string) => {
            let action = addPostActionCreator(text)
            dispatch(action)
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;