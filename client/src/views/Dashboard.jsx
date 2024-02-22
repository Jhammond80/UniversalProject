
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams, Link} from 'react-router-dom'
import Header from '../components/Header'
import { getAll, deleteOne} from '../services/ProjectService'
import Table from '../components/Table'
import Footer from '../components/Footer'


const Dashboard = () => {
  const {id} = useParams()
  const navigate = useNavigate()
  const [projectList, setProjectList] =useState([])


  useEffect(() => {
    getAll()
    .then((res) =>{
        console.log(res)
        setProjectList(res)
    })
    .catch((err)=>{
        console.log(err)
    })
},[])

const deleteProject = (id) => {
    deleteOne(id)
    .then((res) => {
        console.log(res);
        setProjectList(projectList.filter(project => project._id !== id));
        navigate('/');
    })
    .catch((err) => {
        console.log(err);
    });
};

  return (
    <div>
      <Header title={`Welcome`} title2={`New User`}/>
      <Table projects={projectList} onDelete={deleteProject}/>
      <Footer/>
    </div>
  )
}

export default Dashboard