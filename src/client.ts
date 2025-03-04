import axios, { AxiosInstance, AxiosResponse } from 'axios'
import Users from './users'
import Classes from './classes'

interface ClientConfig {
    baseURL: string,
    headers: any,
    withCredentials: boolean
}
class Client {
    readonly users: Users
    readonly classes: Classes

    private instance: AxiosInstance
    constructor(config: ClientConfig){
        this.instance = axios.create(config)
        this.users = new Users(this.instance)
        this.classes = new Classes(this.instance)
    }
/* 
    async get<T>(url: string): Promise<T>{
        const response: AxiosResponse = await this.instance.get(url)
        return response.data
    } */
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