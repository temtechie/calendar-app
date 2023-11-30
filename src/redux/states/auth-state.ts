import { IAuthState } from "../../interfaces/auth.interface";


export const authState: IAuthState = {
    token: '',
    user: null,
    loading: false,
    message: '',
    error: null
}
