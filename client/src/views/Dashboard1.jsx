
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams, Link} from 'react-router-dom'
import Header from '../components/Header'
import { getAll, deleteOne} from '../services/ProjectService'
import Footer from '../components/Footer'
import Card from '../components/Card'


const Dashboard1 = () => {
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
        <Header title={`Welcome`} />
            <div className='project-list'>
                {projectList.map((project) =>(
                    <div key={project._id} className='project-card'>
                        <Card project={project} onDelete={deleteProject}/>
                    </div>
                ))}
            </div>
        <Footer/>
        </div>
    )
}

export default Dashboard1