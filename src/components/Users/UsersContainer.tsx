import React from "react";
import {connect, ConnectedProps} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {followUser, getUsers, getUsersOnPage, unFollowUser, UsersInitialStateType} from "../../redux/UsersReducer";
import Users from "./Users";
import {Preloader} from "../Preloader/Preloader";


class UsersApiContainer extends React.Component<UsersApiContainerType, any> {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsersOnPage(pageNumber, this.props.pageSize)
    }

    render() {
        return <>
            { this.props.isFetching ? <Preloader /> : null }
            <Users
                users={this.props.users}
                pageSize={this.props.pageSize}
                totalUsersCount={this.props.totalUsersCount}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                followingInProgress={this.props.followingInProgress}
                followUser={this.props.followUser}
                unFollowUser={this.props.unFollowUser}
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

let connector = connect(mapStateToProps,{followUser, unFollowUser, getUsers, getUsersOnPage})

type UsersApiContainerType = ConnectedProps<typeof connector>

export default connector(UsersApiContainer)



