import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../redux/ProfileReducer";


type ProfilePropsType = {
    profile: ProfileType
    status: string
    updateUserProfileStatus: (status: string) => void
}


const Profile: React.FC<ProfilePropsType> = ({...props}) => {

    return (
        <div>
            <ProfileInfo {...props}/>
            <MyPostsContainer/>
        </div>
    )
}

export default Profile;