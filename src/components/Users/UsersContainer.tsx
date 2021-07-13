import React from "react";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {
    follow,
    setUsers,
    unFollow,
    UsersInitialStateType,
    UserType,
    setCurrentPage, setTotalUsersCount, setIsFetching
} from "../../redux/UsersReducer";
import Users from "./Users";
import axios from "axios";
import {Preloader} from "../Preloader/Preloader";
import {usersApi} from "../../api/api";


type MapDispatchPropsType = {
    follow: (userId: string) => void,
    unFollow: (userId: string) => void,
    setUsers: (users: UserType[]) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (count: number) => void
    setIsFetching: (isFetching: boolean) => void
}
type UsersApiContainerPropsType = UsersInitialStateType & MapDispatchPropsType
export type GetUsersResponseType = {
    items: UserType[]
    totalCount: number
    error: string | null
}


class UsersApiContainer extends React.Component<UsersApiContainerPropsType, any> {

    componentDidMount() {
        this.props.setIsFetching(true)
        usersApi.getUsers(this.props.currentPage, this.props.pageSize)
            .then(res => {
                this.props.setIsFetching(false)
                this.props.setUsers(res.items)
                this.props.setTotalUsersCount(res.totalCount)
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setIsFetching(true)
        this.props.setCurrentPage(pageNumber)
        usersApi.getUsers(this.props.currentPage, this.props.pageSize)
            .then(res => {
                this.props.setIsFetching(false)
                this.props.setUsers(res.items)
            })
    }

    render() {
        return <>
            { this.props.isFetching ? <Preloader /> : null }
            <Users
                users={this.props.users}
                pageSize={this.props.pageSize}
                totalUsersCount={this.props.totalUsersCount}
                currentPage={this.props.currentPage}
                follow={this.props.follow}
                unFollow={this.props.unFollow}
                onPageChanged={this.onPageChanged}
            />
        </>
    }


}

let mapStateToProps = (state: AppStateType): UsersInitialStateType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

let mapDispatchToProps: MapDispatchPropsType = {
    follow, unFollow, setUsers, setCurrentPage, setTotalUsersCount, setIsFetching
}

export default connect(mapStateToProps, mapDispatchToProps) (UsersApiContainer)







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