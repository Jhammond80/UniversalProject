import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createOne } from '../services/ProjectService';
import Form from '../components/Form';
import Header from '../components/Header';
import Footer from '../components/Footer'



const Create = () => {
  const navigate = useNavigate()
  const [inInput, setInInput] = useState(false)
  const [errors, setErrors] = useState([])
  const [formErrors, setFormErrors] = useState({
      valueOne:'Input is required',
      valueTwo:'Input is required',
      valueThree:'Input is required',
  })
  const [project, setProject] = useState({
      valueOne: '',
      valueTwo: '',
      valueThree: '',
      valueFour: false
  });

  //  Designed to just handle string inputs 
//================================================

    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setProject((prevProject) => ({ ...prevProject, [name]: value }));
    //     setFormErrors((prevErrors) => ({
    //         ...prevErrors,
    //         [name]: validateInput(name, value),
    //     }));
    //     setErrors([])
    // };
//==================================================

// Designed to handle checkbox input type
//==================================================
const handleChange = (e) => {
  const { name, value, type, checked } = e.target;
  if (type === 'checkbox') {
    setProject((prevProject) => ({ ...prevProject, [name]: checked }));
  } else {
    setProject((prevProject) => ({ ...prevProject, [name]: value }));
    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [name]: validateInput(name, value),
    }));
  }
  setErrors([])
};
//==================================================

// designed to handle string type validations for the front end
const validateInput = (name, value) => {
  if (value.trim().length < 2 || value.trim().length > 25) {
    return `Input must be between 1 and 25 characters!`;
  }
  return '';
};
//==================================================

const handleSubmit = (e) => {
  e.preventDefault();
  createOne({
    valueOne: project.valueOne,
    valueTwo: project.valueTwo,
    valueThree: project.valueThree,
    valueFour: project.valueFour
  })
  .then((res) => {
    console.log(res);
    console.log(res.data);
    navigate('/')
  })
  .catch((err) => {
    console.log(err.response.data);
    setErrors(err.response.data.errors)
  });
};

//==================================================
// Setting attributes for display card or table to be able to handle logic first one is set up for 
// string only second one is set up for checkBox
//==================================================

// const attributes = [
  //     { label: '', id: 'valueOne', name: 'valueOne', value: project.valueOne, onChange: handleChange },
  //     { label: '', id: 'valueTwo', name: 'valueTwo', value: project.valueTwo, onChange: handleChange },
  //     { label: '', id: 'valueThree', name: 'valueThree', value: project.valueThree, onChange: handleChange },
  //     { label: '', id: 'valueFour', name: 'valueFour', value: project.valueFour, onChange: handleChange },
  // ];
  
  const attributes = [
    { label: 'Placeholder', id: 'valueOne', name: 'valueOne', value: project.valueOne, onChange: handleChange },
    { label: 'Placeholder', id: 'valueTwo', name: 'valueTwo', value: project.valueTwo, onChange: handleChange },
    { label: 'Placeholder', id: 'valueThree', name: 'valueThree', value: project.valueThree, onChange: handleChange },
    { label: 'Placeholder', id: 'valueFour', name: 'valueFour', checked: project.valueFour, onChange: handleChange, type: 'checkbox' },
  ];
  //* This will change as the model changes  */
  
//==================================================





  return (
    <div>
      <Header/>
        <div className='form-wrapper'>
          <form onSubmit={handleSubmit} className='form-box'>
          <Form attributes={attributes} errors={errors} formErrors={formErrors} inInput={inInput} setInInput={setInInput}/>
          <button>Submit</button>
        </form>
      </div>
      <Footer/>
    </div>
  )
}

export default Create