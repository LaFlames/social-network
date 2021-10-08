import React, {ComponentType} from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {RouteComponentProps, withRouter} from "react-router";
import {getUserProfile, ProfileType, updateUserProfileStatus} from "../../redux/ProfileReducer";
import {AppStateType} from "../../redux/redux-store";
import {compose} from "redux";


type PathParamsType = {
    userId: string
}
type ProfileMapStateToPropsType = {
    profile: ProfileType
    status: string
}
type ProfileApiContainerPropsType = {
    profile: ProfileType
    getUserProfile: (userId: string) => void
    updateUserProfileStatus: (status: string) => void
    status: string
} & RouteComponentProps<PathParamsType>

export class ProfileContainer extends React.Component<ProfileApiContainerPropsType, any> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) userId = "17996"
        this.props.getUserProfile(userId)
    }



    render() {
        return (
            <Profile
                profile={this.props.profile}
                status={this.props.status}
                updateUserProfileStatus={this.props.updateUserProfileStatus}
            />
        )
    }

}

let mapStateToProps = (state: AppStateType): ProfileMapStateToPropsType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
})

export default compose<ComponentType>(
    connect(mapStateToProps, {getUserProfile, updateUserProfileStatus}),
    withRouter,
    /*withAuthRedirect*/
)(ProfileContainer)


