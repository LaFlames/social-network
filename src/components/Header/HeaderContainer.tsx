import React from "react";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import axios from "axios";
import {Preloader} from "../Preloader/Preloader";
import Header from "./Header";
import {AuthInitialStateType, setAuthUserData, SetAuthUserDataACType} from "../../redux/AuthReducer";


type MapDispatchPropsType = {
    setAuthUserData: (data: SetAuthUserDataACType) => void
}
type MapStatePropsType = {
    data: AuthInitialStateType
}
type HeaderApiContainerPropsType = MapStatePropsType & MapDispatchPropsType
type GetUsersResponseType = {
    resultCode: number
    messages: [],
    data: {
        id: number,
        email: string,
        login: string,
    }
}



class HeaderContainer extends React.Component<HeaderApiContainerPropsType, any> {
    componentDidMount() {
        axios.get<GetUsersResponseType>(`https://social-network.samuraijs.com/api/1.0//auth/me`, {
            withCredentials: true
        }).then(res => {
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

let mapDispatchToProps: MapDispatchPropsType = {
    setAuthUserData
}

export default connect(mapStateToProps, mapDispatchToProps) (HeaderContainer)







/*let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        follow: (userId: string) => {
            dispatch(followUserAC(userId))
        },
        unFollow: (userId: string) => {
            dispatch(unFollowUserAC(userId))
        },
        setUsers: (users: UserType[]) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (pageNumber: number) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (totalUsersCount: number) => {
            dispatch(setTotalUsersCountAC(totalUsersCount))
        },
        setIsFetching: (isFetching: boolean) => {
            dispatch(setIsFetchingAC(isFetching))
        }
    }
}*/