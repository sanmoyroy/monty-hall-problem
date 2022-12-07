import { useState } from 'react';
import PropTypes from 'prop-types';

import { validateInput } from "../../util/Validator";

function InputField({ value, label, placeholder, validators, onChange }) {
    const [error, setError] = useState(false);

    const handleChange = (event) => {
        const { value } = event.target;
        setError(validateInput(validators, value));
        onChange(value);
    };

    return (
        <div className="form-group">
            {label && <label htmlFor="app-input-field">{label}</label>}

            <input
                type='text'
                value={value}
                className='form-control'
                placeholder={placeholder}
                onChange={handleChange}
            />

            {error && <span className='text-warning'>{error.message}</span>}
        </div>
    )
};

InputField.propTypes = {
    value: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    validators: PropTypes.array,
    onChange: PropTypes.func.isRequired
};

InputField.defaultProps = {
    value: '',
    label: '',
    placeholder: '',
    validators: []
};

export default InputField;