import PropTypes from 'prop-types';

function Button({ value, onClick, disabled }) {
    return (
        <button
            className='app-button'
            onClick={(event) => onClick(event)} disabled={disabled}>
            {value}
        </button>
    )
};

Button.propTypes = {
    value: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    disabled: PropTypes.bool.isRequired
};

export default Button;
