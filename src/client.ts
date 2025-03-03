import axios, { AxiosInstance } from 'axios'


const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000/api'
})

class Client {
    readonly client: AxiosInstance
    readonly test: string
    constructor(config: AxiosInstance){
        this.client = config
        this.test = 'test'
    }
}

const client = new Client(axiosInstance)
export default client