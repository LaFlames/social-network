import styles from "./users.module.css"
import {InitialStateType, UserType} from "../../redux/UsersReducer";
import React from "react";
import {v1} from "uuid";


type UsersPropsType = {
    usersPage: InitialStateType,
    follow: (userId: string) => void,
    unFollow: (userId: string) => void,
    setUsers: (users: UserType[]) => void
}

const Users: React.FC<UsersPropsType> = (props) => {

    if (props.usersPage.users.length === 0) {
        props.setUsers([
            {id: v1(),
                imageUrl: "https://img1.wsimg.com/cdn/Image/All/All/1/All/ef0cf786-ed38-4f39-89b3-7fcaba926b8c/akamai-img-HP-feat-pro_email.jpg?impolicy=cms-feature-module",
                followed: true, name: "Vitalik", status: "I am a boss", location: {city: "London", country: "England"}},
            {id: v1(),
                imageUrl: "https://img1.wsimg.com/cdn/Image/All/All/1/All/ef0cf786-ed38-4f39-89b3-7fcaba926b8c/akamai-img-HP-feat-pro_email.jpg?impolicy=cms-feature-module",
                followed: true, name: "Kate", status: "I am a bitch", location: {city: "Roma", country: "Italy"}},
            {id: v1(),
                imageUrl: "https://img1.wsimg.com/cdn/Image/All/All/1/All/ef0cf786-ed38-4f39-89b3-7fcaba926b8c/akamai-img-HP-feat-pro_email.jpg?impolicy=cms-feature-module",
                followed: true, name: "Inna", status: "I am a boss as bitch", location: {city: "Minsk", country: "Belarus"}}
        ])
    }

    return (
        <div>
            {
                props.usersPage.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.imageUrl} className={styles.userPhoto}/>
                        </div>
                        <div>
                            { u.followed
                                ? <button onClick={() => props.unFollow(u.id)}>Unfollow</button>
                                : <button onClick={() => props.follow(u.id)}>Follow</button>
                            }
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.city}</div>
                            <div>{u.location.country}</div>
                        </span>
                    </span>
                </div>
                )
            }
        </div>
    )
}

export default Users