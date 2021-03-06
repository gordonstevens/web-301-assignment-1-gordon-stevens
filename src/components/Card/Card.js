import React from 'react';
import styles from './Card.module.css';
import PropTypes from 'prop-types';

const Card = (props) => {
    const { children } = props;

    return (
        <div className = { `${styles.card}` }>
            <div className = { `${styles.cardContainer}` }>
                {children}
            </div>
        </div>
    );
};

// Props
/*
    children - string, html element, React Component
    colorTheme - string
*/
// propTypes REFERENCE URL: https://www.npmjs.com/package/prop-types
Card.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.element,
        PropTypes.node
    ]),
    colorTheme: PropTypes.string,
}

export default Card;
