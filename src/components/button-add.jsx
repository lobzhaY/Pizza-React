import React from "react";
import PropTypes from 'prop-types';
import classNames from 'classnames';

const ButtonAdd = ({ onClick, className, outline, children }) => {
    return (
        <button
        onClick={onClick}
        className={classNames('button', className, {
            'button--outline': outline,
        })}>
            {children}
        </button>
    );
};

ButtonAdd.propTypes = {
    onClick: PropTypes.func,
};

export default ButtonAdd;
