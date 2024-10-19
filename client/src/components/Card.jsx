// import React from 'react'
// import { useNavigate, useLocation} from 'react-router-dom'
// import '../styles/Card.css'



// const Card = (props) => {
//   const location = useLocation()
//   const {project, onDelete} = props
//   const navigate = useNavigate()



//   return (

// <>
//     <div className='card-wrapper'>
//       <div className='card-box'>
//           <h2 className='card-title'>Placeholder: {project.valueOne}</h2>
//           <p className='value-holder'>Placeholder: {project.valueTwo}</p>
//           <p className='value-holder'>Placeholder: {project.valueThree}</p>
//           <p className='value-holder'>Placeholder: {project.valueFour? 'Yes' : 'No'}</p>
//       </div>
//         <div className='card-btn-box'>
//         {location.pathname === '/' && (
//           <>
//             <button className='table-button' onClick={() => navigate(`/project/${project._id}/details`)}>Details</button>
//             <button className='table-button' onClick={() => navigate(`/project/${project._id}/update`)}>Update</button>
//             <button className='table-button' onClick={() => onDelete(project._id)}>Delete</button>
//           </>
//         )}
//         {location.pathname === `/project/${project._id}/details` && (
//           <>
//             <button className='table-button' onClick={() => navigate(`/project/${project._id}/update`)}>Update</button>
//             <button className='table-button' onClick={() => onDelete(project._id)}>Delete</button>
//           </>
//         )}
//       </div>
//     </div>
// </>
//   )
// }

// export default Card

import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Button from './Button'; 
import '../styles/Card.css';

const Card = ({ project, onDelete }) => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className='card-wrapper'>
      <div className='card-box'>
        <h2 className='card-title'>Placeholder: {project.valueOne}</h2>
        <p className='value-holder'>Placeholder: {project.valueTwo}</p>
        <p className='value-holder'>Placeholder: {project.valueThree}</p>
        <p className='value-holder'>Placeholder: {project.valueFour ? 'Yes' : 'No'}</p>
      </div>
      <div className='card-btn-box'>
        {location.pathname === '/' && (
          <>
            <Button onClick={() => navigate(`/project/${project._id}/details`)} text="Details" />
            <Button onClick={() => navigate(`/project/${project._id}/update`)} text="Update" />
            <Button onClick={() => onDelete(project._id)} text="Delete" />
          </>
        )}
        {location.pathname === `/project/${project._id}/details` && (
          <>
            <Button onClick={() => navigate(`/project/${project._id}/update`)} text="Update" />
            <Button onClick={() => onDelete(project._id)} text="Delete" />
          </>
        )}
      </div>
    </div>
  );
};

export default Card;


