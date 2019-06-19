import React, { useState } from 'react';
import styles from './Textarea.module.css';
import PropTypes from 'prop-types';

const Textarea = (props) => {
    // The shadow state will be internally managed by button
    const [ favPokemon, setFavPokemon ] = useState("");
    const { children } = props;

    return (
        <div>
            { children }
            
            <br />
            <br />
            
            <textarea 
                type = "text"
                maxLength = "550"
                className = { styles.textAreaBox }
                value = { favPokemon }
                onChange = { (event) => setFavPokemon(event.target.value) }
            />
            <div className={ styles.textAreaBoxReponse }>{ favPokemon }</div>
        </div>
    );
};

// Props
/*
    children - string, html element, React Component
*/
// propTypes REFERENCE URL: https://www.npmjs.com/package/prop-types
Textarea.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.element,
        PropTypes.node
    ]),
}

export default Textarea;
