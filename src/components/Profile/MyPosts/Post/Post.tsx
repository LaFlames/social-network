import React from "react";
import styles from './Post.module.css';
import {PostType} from "../../../../redux/ProfileReducer";


const Post: React.FC<PostType> = (props) => {
    return (
        <div className={styles.item}>
            <img
                src="https://i1.wp.com/sova.ponominalu.ru/wp-content/uploads/2019/08/ava-max.jpg?fit=2000%2C1333&ssl=1"
                alt=""/>
            <span>{ props.message }</span>
            <span>{ props.like }</span>
        </div>
    )
}

export default Post;