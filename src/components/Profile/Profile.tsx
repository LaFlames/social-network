import React from "react";
import {ActionsType, ProfilePageType} from "../../redux/state";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


type ProfilePropsType = {
    profilePage: ProfilePageType
    dispatch: (action: ActionsType) => void
}


const Profile = () => {
    return (
        <div>
            <ProfileInfo />
            <MyPostsContainer/>
        </div>
    )
}

export default Profile;