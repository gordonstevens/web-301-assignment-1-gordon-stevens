import React, { useState } from 'react';
import styles from './Input.module.css';
import PropTypes from 'prop-types';

const Input = (props) => {
    const [ favColor, setFavColor ] = useState("");
    const { children } = props;

    return (
        <div>
            { children }
            <br />
            <br />
            <input 
                type = "text"
                maxLength = "50"
                className = { styles.inputFavColor }
                placeholder = { children }
                value = { favColor }
                onChange = { (event) => setFavColor(event.target.value) }
            />
            <div>{ favColor }</div>
        </div>
    );
};

// Props
/*
    children - string, html element, React Component
*/
// propTypes REFERENCE URL: https://www.npmjs.com/package/prop-types
Input.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.element,
        PropTypes.node
    ]),
}

export default Input;
