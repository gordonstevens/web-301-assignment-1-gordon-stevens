import React from 'react';
import styles from './Select.module.css';
import PropTypes from 'prop-types';

const Select = (props) => {
    const { children } = props;
    return (
        <div>
            { children }
            <br />
            <br />
            <select 
                name="petSelect" 
                className = { `${styles.selectPetName}` } 
                onChange = { () => alert("You have made a pet selection.") }
            >
            <option value=""></option>
            <option value="asianLeopardCat">Asian Leopard Cat (cat breeders only)</option>
            <option value="bengalTigerCat">Bengal Tiger Cat (best)</option>
            <option value="dog">Dog (fine I guess)</option>
            <option value="cricket">Cricket (neat but odd)</option>
            <option value="charizard">Charizard (spicy)</option>
            <option value="horse">Horse (nay)</option>
            <option value="snake">Snake (crazy)</option>
        </select>
        </div>
    );
};

// Props
/*
    children - string, html element, React Component
*/
// propTypes REFERENCE URL: https://www.npmjs.com/package/prop-types
Select.propTypes = {
    children: PropTypes.oneOfType( [
        PropTypes.string,
        PropTypes.number,
        PropTypes.element,
        PropTypes.node
    ] ),
}

export default Select;
