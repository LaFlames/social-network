import React from "react";
import Profile from "./Profile";
import axios from "axios";
import { connect } from "react-redux";
import {
    ProfilePageInitialStateType,
    ProfileType,
    setUserProfileAC
} from "../../redux/ProfileReducer";
import {AppStateType} from "../../redux/redux-store";


type ProfileMapStateToPropsType = {
    profile: ProfileType
}
type ProfileApiContainerPropsType = {
    profile: ProfileType
    setUserProfileAC: (profile: ProfileType) => void
}
type GetProfileResponseType = ProfileType

class ProfileContainer extends React.Component<ProfileApiContainerPropsType, any> {
    componentDidMount() {
        axios.get<GetProfileResponseType>(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(res => {
            this.props.setUserProfileAC(res.data)
        })
    }

    render() {
        return (
            <Profile profile={this.props.profile}/>
        )
    }

}

let mapStateToProps = (state: AppStateType): ProfileMapStateToPropsType => ({
    profile: state.profilePage.profile
})

export default connect(mapStateToProps, {setUserProfileAC}) (ProfileContainer);