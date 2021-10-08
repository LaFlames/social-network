import axios from "axios";
import {ProfileType} from "../redux/ProfileReducer";

type GetProfileResponseType = ProfileType

export type ResponseType<D> = {
    resultCode: number
    messages: Array<string>
    data: D
}

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        "API-KEY": "27fcbdba-1f27-4a26-aef3-5bdefc4c041f"
    }
})

export const profileApi = {
    getUserProfileData(userId: string) {
        return instance.get<GetProfileResponseType>(`profile/${userId}`)
    },
    getUserProfileStatus(userId: string) {
        return instance.get<string>(`profile/status/${userId}`)
    },
    updateUserProfileStatus(status: string) {
        return instance.put<ResponseType<{}>>(`profile/status`, {status})
    },
}

