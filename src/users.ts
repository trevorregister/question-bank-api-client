import { AxiosInstance } from 'axios'

interface GetUserRequest {
    id: string
}

interface GetUserResponse {
    id: string
    firstName: string
    lastName: string
    role: 'teacher' | 'admin' | 'student',
    email: string
}

interface CreateUserRequest {
    firstName: string
    lastName: string
    role: 'teacher' | 'student',
    email: string
    password: string
}

interface LoginEmailPasswordRequest {
    email: string
    password: string
}

interface LoginResponse {
    token :string
}
export default class Users {
    private client: AxiosInstance
    constructor(client: AxiosInstance){
        this.client = client
    }

    async getUser(id: GetUserRequest): Promise<GetUserResponse> {
       const { data } = await this.client.get(`/users/${id}`)
       return await data
    }

    async loginEmailPassword(credentials: LoginEmailPasswordRequest): Promise<LoginResponse> {
        const { data } = await this.client.post('/users/login/email-password', credentials)
        return await data
    }
}