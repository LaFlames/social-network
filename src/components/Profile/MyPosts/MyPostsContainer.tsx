import React from "react";
import {addPost, PostType} from "../../../redux/ProfileReducer";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import MyPosts from "./MyPosts";

type MapStatePropsType = {
    posts: PostType[],
}


const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {...state,
        posts: state.profilePage.posts
    }
}


const MyPostsContainer = connect(mapStateToProps, {addPost})(MyPosts)

export default MyPostsContainer;