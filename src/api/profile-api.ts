import axios from "axios";
import {ProfileType} from "../redux/ProfileReducer";

type GetProfileResponseType = ProfileType

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
}

