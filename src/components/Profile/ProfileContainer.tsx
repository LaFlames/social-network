import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {RouteComponentProps, withRouter} from "react-router";
import {getUserProfile, ProfileType} from "../../redux/ProfileReducer";
import {AppStateType} from "../../redux/redux-store";


type PathParamsType = {
    userId: string
}
type ProfileMapStateToPropsType = {
    profile: ProfileType
}
type ProfileApiContainerPropsType = {
    profile: ProfileType
    getUserProfile: (userId: string) => void
} & RouteComponentProps<PathParamsType>

export class ProfileContainer extends React.Component<ProfileApiContainerPropsType, any> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) userId = "17996"
        this.props.getUserProfile(userId)
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

export default connect(mapStateToProps, {getUserProfile}) (WithUrlDataContainerComponent);