import React from "react";
import s from './ProfileInfo.module.css'
import {Preloader} from "../../Preloader/Preloader";


function ProfileInfo(props: any) {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div>
                <img src="https://images.pexels.com/photos/4173624/pexels-photo-4173624.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large} alt=""/>
                <p>Occupation: {props.profile.lookingForAJobDescription}</p>

            </div>
        </div>
    );
}



export default ProfileInfo;