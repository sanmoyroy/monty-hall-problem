import PropTypes from 'prop-types';

function Dropdown({ value, label, data, placeholder, onChange }) {
    const handleChange = (event) => {
        const { value } = event.target;
        onChange(value);
    }

    return (
        <div className='form-group'>
            {label && <label htmlFor="app-dropdown">{label}</label>}
            <select
                value={value}
                className="form-control"
                onChange={handleChange}>
                <option
                    value="">
                    {placeholder}
                </option>
                {data.map((item, key) => (
                    <option
                        key={key}
                        value={item.value}>
                        {item.label}
                    </option>
                ))}
            </select>
        </div>
    )
};

Dropdown.propTypes = {
    value: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    data: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired
};

Dropdown.defaultProps = {
    value: '',
    label: '',
    placeholder: ''
};

export default Dropdown;