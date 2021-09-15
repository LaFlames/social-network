import axios from "axios";

type GetAuthDataResponseType = {
    resultCode: number
    messages: [],
    data: {
        id: number,
        email: string,
        login: string,
    }
}

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        "API-KEY": "27fcbdba-1f27-4a26-aef3-5bdefc4c041f"
    }
})

export const authApi = {
    getAuthData() {
        return instance.get<GetAuthDataResponseType>(`auth/me`)
    },
}

