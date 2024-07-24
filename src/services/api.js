import axios from "axios"


const apiClient = axios.create({
    baseURL: 'https://668ed90ebf9912d4c92fecab.mockapi.io/',
    headers: {
        'Content-Type': 'aplication/json'
    }
})


export default{
    getTasks(){
        return apiClient.get('/task')
    },
}