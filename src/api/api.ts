import axios from "axios";
import {GetUsersResponseType} from "../components/Users/UsersContainer";


const axiosInstance = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY": "27fcbdba-1f27-4a26-aef3-5bdefc4c041f"
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0'
})

export const usersApi = {
    getUsers (currentPage: number, pageSize: number) {
        return axiosInstance.get<GetUsersResponseType>(`users?page=${currentPage}&count=${pageSize}`)
            .then(res => res.data)
    },
    followUser (userId: string) {
        return axiosInstance.post(`follow/${userId}`, {})
    },
    unfollowUser (userId: string) {
        return axiosInstance.delete(`follow/${userId}`)
    }
}

