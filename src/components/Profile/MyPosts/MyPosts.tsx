import React, {ChangeEvent} from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {PostType} from "../../../redux/ProfileReducer";



type MyPostsPropsType = {
    posts: Array<PostType>
    newPostValue: string
    addPost: (text: string) => void
    updateNewPostText: (text: string) => void
}


const MyPosts: React.FC<MyPostsPropsType> = (props) => {

    let postsElements = props.posts.map( p => <Post id={p.id} message={p.message} like={p.like}/> )

    const onChangeNewTextCallback = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewPostText(e.currentTarget.value)
    }
    const onAddPost = () => {
         if (props.newPostValue !== "") {
             props.addPost(props.newPostValue)
         }
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea
                        value={props.newPostValue}
                        onChange={onChangeNewTextCallback}
                    ></textarea>
                </div>
                <div>
                    <button onClick={onAddPost}>Add posts</button>
                </div>
            </div>
            <div>

                {postsElements}

            </div>
        </div>
    )
}

export default MyPosts;