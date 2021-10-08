import React, {ChangeEvent} from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {PostType} from "../../../redux/ProfileReducer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";



type MyPostsPropsType = {
    posts: Array<PostType>
    addPost: (text: string) => void
}


const MyPosts: React.FC<MyPostsPropsType> = (props) => {

    let postsElements = props.posts.map( p => <Post id={p.id} message={p.message} like={p.like}/> )

    const onAddPost = (formData: {postText: string}) => {
        props.addPost(formData.postText)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <ReduxAddPostForm onSubmit={onAddPost}/>
            </div>
            <div style={{marginTop: "10px"}}>
                {postsElements}
            </div>
        </div>
    )
}

let AddPostForm: React.FC<InjectedFormProps<{postText: string}>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={"postText"} component={"textarea"} placeholder={"Type something"}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}
const ReduxAddPostForm = reduxForm<{postText: string}>({form: "addPostForm"})(AddPostForm)



export default MyPosts;