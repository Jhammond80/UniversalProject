import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getOne, deleteOne } from '../services/ProjectService'
import Header from '../components/Header'
import Card from '../components/Card'
import Footer from '../components/Footer'



const Details = () => {
  const navigate = useNavigate()
  const {id} = useParams()
  const [project, setProject] = useState({})

  
  useEffect(() => {
    getOne(id)
    .then((res) => {
        console.log(res)
        setProject(res)
    })
    .catch((err) => {
        console.log(err)
    })
},[])

const deleteProject = (id) => {
  deleteOne(id)
  .then((res) => {
      console.log(res);
      navigate('/');
  })
  .catch((err) => {
      console.log(err);
  });
};



  return (
    <div>
      <Header title={`Welcome`} title2={project.valueOne}/>
      <div className='project-list'>
        <div className='project-card'>
          <Card project={project} onDelete={deleteProject}/>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Details