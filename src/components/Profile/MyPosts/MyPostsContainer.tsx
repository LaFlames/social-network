import React from "react";
import {addPost, PostType, updateNewPostText} from "../../../redux/ProfileReducer";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import MyPosts from "./MyPosts";

type MapStatePropsType = {
    posts: PostType[],
    newPostValue: string
}


const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {...state,
        posts: state.profilePage.posts,
        newPostValue: state.profilePage.newPostValue
    }
}


const MyPostsContainer = connect(mapStateToProps, {addPost, updateNewPostText})(MyPosts)

export default MyPostsContainer;