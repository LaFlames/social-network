import React from "react";
import {connect, ConnectedProps} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import Header from "./Header";
import {AuthInitialStateType, setAuthUserData} from "../../redux/AuthReducer";
import {authApi} from "../../api/auth-api";


class HeaderContainer extends React.Component<AuthApiPropsType, any> {
    componentDidMount() {
        authApi.getAuthData()
            .then(res => {
                if (res.data.resultCode === 0) {
                    this.props.setAuthUserData(res.data.data)
                }
        })
    }
    render() {
        return <>
            <Header {...this.props}/>
        </>
    }
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        data: state.auth
    }
}

let connector = connect(mapStateToProps, {setAuthUserData});

export default connector(HeaderContainer)

type MapStatePropsType = {
    data: AuthInitialStateType
}
type AuthApiPropsType = ConnectedProps<typeof connector>

