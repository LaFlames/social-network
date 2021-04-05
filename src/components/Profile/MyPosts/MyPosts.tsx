import React, {ChangeEvent} from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {PostType} from "../../../redux/state";

type postPropsType = {
    posts: Array<PostType>
    addPost: (text: string) => void
    newPostValue: string
    updateNewPostText: (text: string) => void
}


const MyPosts: React.FC<postPropsType> = (props) => {

    let postsElements = props.posts.map( p => <Post id={p.id} message={p.message} like={p.like}/> )



    let addPost = () => {
        if (props.newPostValue !== "") {
            props.addPost(props.newPostValue)
        }
    }

    let changeNewTextCallback = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewPostText(e.currentTarget.value)
    }


    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea
                        value={props.newPostValue}
                        onChange={changeNewTextCallback}
                    ></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add posts</button>
                </div>
            </div>
            <div>

                {postsElements}

            </div>
        </div>
    )
}

export default MyPosts;