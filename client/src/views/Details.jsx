import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getOne } from '../services/ProjectService'
import Header from '../components/Header'
import Card from '../components/Card'
import Footer from '../components/Footer'



const Details = () => {
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

  return (
    <div>
      <Header title={`Welcome`} title2={project.valueOne}/>
      <div className='project-list'>
        <div className='project-card'>
          <Card project={project}/>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Details