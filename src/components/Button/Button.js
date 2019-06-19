import React, { useState } from 'react';
import styles from './Button.module.css';
import PropTypes from 'prop-types';

const Button = (props) => {
    const [ shadow, setShadow ] = useState(false);
    const { children, colorTheme, handleClick } = props;

    return (
        <button 
            type="button" 
            className = { `${styles.button} ${styles[colorTheme]} ${shadow ? styles.shadow : ''}` } 
            onClick = { handleClick }
            onMouseOver = { () => setShadow(true) }
            onMouseOut = { () => setShadow(false) }
        >
            {children}
        </button>
    );
};

// Props
/*
    children - string, html element, React Component
    colorTheme - string
    handleClick - function
*/
// propTypes REFERENCE URL: https://www.npmjs.com/package/prop-types
Button.propTypes = {
    children: PropTypes.oneOfType( [
        PropTypes.string,
        PropTypes.number,
        PropTypes.element,
        PropTypes.node
    ] ),
    colorTheme: PropTypes.string,
    handleClick: PropTypes.func,
}

export default Button;
