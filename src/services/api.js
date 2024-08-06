import axios from "axios"


const apiClient = axios.create({
    baseURL: 'https://668ed90ebf9912d4c92fecab.mockapi.io',
    headers: {
        'Content-Type': 'application/json'
    }
})


export default{
    getTasks(){
        return apiClient.get('/task')
    },
    postTask(task){
      return apiClient.post('/task', task)
    },
    deleteTask(id){
        return apiClient.delete(`/task/${id}`)
    }
}