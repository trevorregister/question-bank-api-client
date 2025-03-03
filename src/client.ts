import axios, { AxiosInstance } from 'axios'
import Users from './users'

interface ClientConfig {
    baseURL: string,
    headers: any,
    withCredentials: boolean
}
class Client {
    readonly users: Users

    private instance: AxiosInstance
    constructor(config: ClientConfig){
        this.instance = axios.create(config)
        this.users = new Users(this.instance)
    }
}

const client = new Client({
    headers: {
        "Content-Type": "application/json"
    },
    baseURL: "http://localhost:3000/api" ,
    withCredentials: true
})

export {
    Client,
    client
}