import React from "react";
import s from './ProfileInfo.module.css'


function ProfileInfo() {
    return (
        <div>
            <div>
                <img src="https://images.pexels.com/photos/4173624/pexels-photo-4173624.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/>
            </div>
            <div className={s.descriptionBlock}>
                ava + descr
            </div>
        </div>
    );
}



export default ProfileInfo;