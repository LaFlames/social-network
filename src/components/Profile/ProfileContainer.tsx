import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {RouteComponentProps, withRouter} from "react-router";
import {getUserProfile, ProfileType} from "../../redux/ProfileReducer";
import {AppStateType} from "../../redux/redux-store";
import {Redirect} from "react-router-dom";
import {withAuthRedirect} from "../hoc/withAuthRedirect";


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

let AuthRedirectComponent = withAuthRedirect(ProfileContainer)

let mapStateToProps = (state: AppStateType): ProfileMapStateToPropsType => ({
    profile: state.profilePage.profile,
})

let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent)

export default connect(mapStateToProps, {getUserProfile}) (WithUrlDataContainerComponent);