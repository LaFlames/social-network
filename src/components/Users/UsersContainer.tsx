import React from "react";
import {connect, ConnectedProps} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {
    follow,
    setCurrentPage,
    setIsFetching,
    setTotalUsersCount,
    setUsers, toggleFollowingProgress,
    unFollow,
    UsersInitialStateType
} from "../../redux/UsersReducer";
import Users from "./Users";
import {Preloader} from "../Preloader/Preloader";
import {usersApi} from "../../api/users-api";



class UsersApiContainer extends React.Component<UsersApiContainerType, any> {

    componentDidMount() {
        this.props.setIsFetching(true)
        usersApi.getUsers(this.props.currentPage, this.props.pageSize)
            .then(res => {
                this.props.setIsFetching(false)
                this.props.setUsers(res.data.items)
                this.props.setTotalUsersCount(res.data.totalCount)
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setIsFetching(true)
        this.props.setCurrentPage(pageNumber)
        usersApi.getUsers(pageNumber, this.props.pageSize)
            .then(res => {
                this.props.setIsFetching(false)
                this.props.setUsers(res.data.items)
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
                followingInProgress={this.props.followingInProgress}
                toggleFollowingProgress={this.props.toggleFollowingProgress}
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
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

let connector = connect(mapStateToProps,{follow, unFollow, setUsers, setCurrentPage,
    setTotalUsersCount, setIsFetching, toggleFollowingProgress})

type UsersApiContainerType = ConnectedProps<typeof connector>

export default connector(UsersApiContainer)



