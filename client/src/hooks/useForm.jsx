import { useState } from 'react';

const useForm = (validateInput) => {
    const [errors, setErrors] = useState([]);
    const [formErrors, setFormErrors] = useState({
        valueOne: 'Input is required',
        valueTwo: 'Input is required',
        valueThree: 'Input is required',
    });

    const handleChange = (e, setProject, project) => {
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
        setErrors([]);
    };

    return { errors, formErrors, setErrors, setFormErrors, handleChange };
};

export default useForm;
