import React from 'react';

import './Tshirt.css'
const Tshirt = ({ shirt, handleAdCart }) => {
    const { picture, name, price } = shirt;
    return (
        <div className='shirt-area'>
            <h2>{name}</h2>
            <img src={picture} alt="" />
            <h3>price : {price}</h3>
            <button onClick={() => handleAdCart(shirt)}>buy now</button>


        </div>
    );
};

export default Tshirt;