import axios from 'axios'


const config = axios.create({
    baseURL: 'http://localhost:3000/api'
})

class Client {
    readonly client: any
    constructor(config){
        this.client = config
    }
}

const client = new Client(config)
export default client