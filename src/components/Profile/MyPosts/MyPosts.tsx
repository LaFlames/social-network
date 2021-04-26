import React, {ChangeEvent} from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {ActionsType, PostType} from "../../../redux/state";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/ProfileReducer";

type postPropsType = {
    posts: Array<PostType>
    newPostValue: string
    dispatch: (action: ActionsType) => void
}


const MyPosts: React.FC<postPropsType> = (props) => {

    let postsElements = props.posts.map( p => <Post id={p.id} message={p.message} like={p.like}/> )



    let addPost = () => {
        if (props.newPostValue !== "") {
            props.dispatch(addPostActionCreator(props.newPostValue))
        }
    }

    let changeNewTextCallback = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let newText = e.currentTarget.value
        /*props.updateNewPostText(e.currentTarget.value)*/
        props.dispatch(updateNewPostTextActionCreator(newText))
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