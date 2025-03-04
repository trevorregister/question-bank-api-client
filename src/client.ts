import axios, { AxiosInstance, AxiosResponse } from 'axios'
import Users from './users'
import Classes from './classes'
import Assignments from './assignments'

interface ClientConfig {
    baseURL: string,
    headers: any,
    withCredentials: boolean
}
export default class Client {
    readonly users: Users
    readonly classes: Classes
    readonly assignments: Assignments

    private instance: AxiosInstance
    constructor(config: ClientConfig){
        this.instance = axios.create(config)
        this.users = new Users(this.instance)
        this.classes = new Classes(this.instance)
        this.assignments = new Assignments(this.instance)
    }
/* 
    async get<T>(url: string): Promise<T>{
        const response: AxiosResponse = await this.instance.get(url)
        return response.data
    } */
}