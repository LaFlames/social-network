import React from "react";
import {connect, ConnectedProps} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import Header from "./Header";
import {AuthInitialStateType, getAuthUserData} from "../../redux/AuthReducer";


class HeaderContainer extends React.Component<AuthApiPropsType, any> {
    componentDidMount() {
        this.props.getAuthUserData()
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

let connector = connect(mapStateToProps, {getAuthUserData});

export default connector(HeaderContainer)

type MapStatePropsType = {
    data: AuthInitialStateType
}
type AuthApiPropsType = ConnectedProps<typeof connector>

