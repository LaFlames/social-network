import React from "react";
import {PostType} from "../../../redux/state";
import {addPostAC, updateNewPostTextAC} from "../../../redux/ProfileReducer";
import {connect} from "react-redux";
import {ActionsType, AppStateType} from "../../../redux/redux-store";
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
            dispatch(updateNewPostTextAC(text))
        },
        addPost: (text: string) => {
            let action = addPostAC(text)
            dispatch(action)
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;