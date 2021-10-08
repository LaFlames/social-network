import React from "react";
import s from './ProfileInfo.module.css'
import {Preloader} from "../../Preloader/Preloader";
import {ProfileStatus} from "./ProfileStatus";
import {ProfileType} from "../../../redux/ProfileReducer";


type ProfileInfoPropsType = {
    profile: ProfileType
    status: string
    updateUserProfileStatus: (status: string) => void
}

function ProfileInfo({profile, status, updateUserProfileStatus}: ProfileInfoPropsType) {
    if (!profile) {
        return <Preloader/>
    }
    return (
        <div>
            {/*<div>
                <img src="https://images.pexels.com/photos/4173624/pexels-photo-4173624.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/>
            </div>*/}
            <div className={s.descriptionBlock}>
                <img src={profile.photos.large} alt=""/>
                <ProfileStatus
                    status={status}
                    updateUserProfileStatus={updateUserProfileStatus}
                />
                <p>Occupation: {profile.lookingForAJobDescription}</p>
            </div>
        </div>
    );
}



export default ProfileInfo;