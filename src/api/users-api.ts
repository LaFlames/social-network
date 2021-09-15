import axios from "axios";
import {UserType} from "../redux/UsersReducer";

type GetUsersResponseType = {
    items: UserType[],
    totalCount: number,
    error: string | null
}

type FollowUnfollowResponseType = {
    resultCode: number
    messages: string[]
    data: {}
}

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        "API-KEY": "27fcbdba-1f27-4a26-aef3-5bdefc4c041f"
    }
})

export const usersApi = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get<GetUsersResponseType>(`users?page=${currentPage}&count=${pageSize}`)
    },
    followUser(userId: string) {
        return instance.post<FollowUnfollowResponseType>(`follow/${userId}` ,{})
    },
    unFollowUser(userId: string) {
        return instance.delete<FollowUnfollowResponseType>(`follow/${userId}`)
    }
}



