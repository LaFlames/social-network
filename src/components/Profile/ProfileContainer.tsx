import React from "react";
import Profile from "./Profile";
import axios from "axios";
import { connect } from "react-redux";
import { withRouter, RouteComponentProps } from "react-router";
import {
    ProfileType,
    setUserProfileAC
} from "../../redux/ProfileReducer";
import {AppStateType} from "../../redux/redux-store";


type PathParamsType = {
    userId: string
}
type ProfileMapStateToPropsType = {
    profile: ProfileType
}
type ProfileApiContainerPropsType = {
    profile: ProfileType
    setUserProfileAC: (profile: ProfileType) => void
} & RouteComponentProps<PathParamsType>
type GetProfileResponseType = ProfileType

export class ProfileContainer extends React.Component<ProfileApiContainerPropsType, any> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) userId = "17996"
        axios.get<GetProfileResponseType>(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then(res => {
            this.props.setUserProfileAC(res.data)
        })
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }

}

let mapStateToProps = (state: AppStateType): ProfileMapStateToPropsType => ({
    profile: state.profilePage.profile
})

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUserProfileAC}) (WithUrlDataContainerComponent);