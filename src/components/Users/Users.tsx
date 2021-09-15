import styles from "./users.module.css"
import {UserType} from "../../redux/UsersReducer";
import React from "react";
import {NavLink} from "react-router-dom";
import userPhoto from "../../assets/images/unnamed.png";
import {usersApi} from "../../api/users-api";


type UsersPropsType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    follow: (userId: string) => void
    unFollow: (userId: string) => void
    onPageChanged: (pageNumber: number) => void
    followingInProgress: string[]
    toggleFollowingProgress: (isFetching: boolean, userId: string) => void
}


const Users: React.FC<UsersPropsType> = (props) => {


    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            <div>
                {pages.map(p => {
                    return <span
                        className={ props.currentPage === p ? styles.selected : "" }
                        onClick={ () => props.onPageChanged(p)}
                    >{p}</span>
                })}
            </div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <NavLink to={"/profile/" + u.id} >
                                <img  src={ u.photos.small ? u.photos.small : userPhoto } className={styles.userPhoto}/>
                            </NavLink>
                        </div>
                        <div>
                            { u.followed
                                ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                    props.toggleFollowingProgress(true, u.id)
                                    usersApi.unFollowUser(u.id)
                                        .then(res => {
                                            if (res.data.resultCode == 0) {
                                                props.unFollow(u.id)
                                                props.toggleFollowingProgress(false, u.id)
                                            }
                                        })
                                }
                                }>Unfollow</button>
                                : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                    props.toggleFollowingProgress(true, u.id)
                                    usersApi.followUser(u.id)
                                        .then(res => {
                                            if (res.data.resultCode == 0) {
                                                props.follow(u.id)
                                                props.toggleFollowingProgress(false, u.id)
                                            }
                                        })
                                }
                                }>Follow</button>
                            }
                        </div>
                    </span>
                        <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.id}</div>
                            <div>u.location.country</div>
                        </span>
                    </span>
                    </div>
                )
            }
        </div>
    )
}

export default Users