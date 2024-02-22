import React from 'react'
import { useNavigate, useLocation} from 'react-router-dom'
import '../styles/Card.css'



const Card = (props) => {
  const {project, onDelete} = props
  const navigate = useNavigate()



  return (

<>
    <div className='card-wrapper'>
      <div className='card-box'>
          <h2 className='card-title'>Placeholder: {project.valueOne}</h2>
          <p className='value-holder'>Placeholder: {project.valueTwo}</p>
          <p className='value-holder'>Placeholder: {project.valueThree}</p>
          <p className='value-holder'>Placeholder: {project.valueFour? 'Yes' : 'No'}</p>
      </div>
      <div className='card-btn-box'>
      {!location.pathname.includes(`/project/${project._id}/details`) && (!location.pathname.includes(`/create`)) && (
          <button className='table-button' onClick={() => navigate(`/project/${project._id}/details`)}>Details</button>)}
      {!location.pathname.includes(`/project/${project._id}/update`) && (location.pathname.includes(`/create`)) && (
          <button className='table-button' onClick={() => navigate(`/project/${project._id}/update`)}>Update</button>)}
      {!location.pathname.includes(`/create`) && (
          <button className='table-button' onClick={() => onDelete(project._id)}>Delete</button>)}
      </div>
    </div>
</>


  )
}

export default Card


