import '../styles/Form.css'

const Form = (props) => {
    const { attributes, errors, formErrors, inInput, setInInput } = props

    return (
        <>
            {attributes.map((attr) => (
                <div key={attr.id} className="form-field">
                    <div className='input-group'>
                        <label htmlFor={attr.id}>{attr.label}</label>
                        {attr.type === 'checkbox' ? (
                            <input
                                type="checkbox"
                                id={attr.id}
                                name={attr.name}
                                checked={attr.checked}
                                onChange={attr.onChange}
                                className={formErrors[attr.name] && inInput === attr.id ? 'error' : ''}
                            />
                        ) : (
                            <input
                                type="text"
                                id={attr.id}
                                name={attr.name}
                                value={attr.value}
                                onChange={attr.onChange}
                                onFocus={() => setInInput(attr.id)}
                                onBlur={() => setInInput('')}
                                className={formErrors[attr.name] && inInput === attr.id ? 'error' : ''}
                            />
                        )}
                    </div>
                    <div className='error-group'>
                        {formErrors[attr.name] && inInput === attr.id && (<span className='error'>{formErrors[attr.name]}</span>)}
                        {errors[attr.name] && (<span className='error'>{errors[attr.name].message}</span>)}
                    </div>
                </div>
            ))}
        </>
    );
};
export default Form