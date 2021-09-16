import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {RouteComponentProps, withRouter} from "react-router";
import {ProfileType, setUserProfile} from "../../redux/ProfileReducer";
import {AppStateType} from "../../redux/redux-store";
import {profileApi} from "../../api/profile-api";


type PathParamsType = {
    userId: string
}
type ProfileMapStateToPropsType = {
    profile: ProfileType
}
type ProfileApiContainerPropsType = {
    profile: ProfileType
    setUserProfile: (profile: ProfileType) => void
} & RouteComponentProps<PathParamsType>

export class ProfileContainer extends React.Component<ProfileApiContainerPropsType, any> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) userId = "17996"
        profileApi.getUserProfileData(userId)
            .then(res => {
                this.props.setUserProfile(res.data)
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

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUserProfile}) (WithUrlDataContainerComponent);