import axios from 'axios'

const http = axios.create({
    baseURL: 'http://localhost:8000/api'
})

function createOne (project){
    return http.post('/project', project)
    .then(res => res.data)
    .catch(err => {
        throw err
    })
}

function getOne (id){
    return http.get(`/project/${id}`)
    .then(res => res.data)
    .catch(err => {
        throw err
    })
}


function getAll (){
    return http.get('/project')
    .then(res => res.data)
    .catch(err => {
        throw err
    })
}

function deleteOne (id){
    return http.delete(`/project/${id}`)
    .then(res => res.data)
    .catch(err =>{
        throw err
    })
}

function updateOne (project){
    return http.put(`/project/${project._id}`, project)
    .then(res => res.data)
    .catch(err => {
        throw err
    })
}



export {
    createOne,
    getAll,
    deleteOne,
    getOne,
    updateOne
}