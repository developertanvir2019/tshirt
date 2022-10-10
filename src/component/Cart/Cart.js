import React from 'react';
import './Cart.css'

const Cart = ({ cart, removeCart }) => {
    let message;
    if (cart.length === 0) {
        message = <p> please buy our product</p>
    }
    return (
        <div className='stickyCart'>
            <h1>Order summary</h1>
            <h3>total order : {cart.length}</h3>
            {
                cart.map(shirt => <p key={shirt._id}>  {shirt.name} <button onClick={() => removeCart(shirt)}>X</button>  </p>)

            }
            {message}
            {
                cart.length === 4 ? <p>4 ta product</p> : <h4>kom beshi</h4>
            }

            {/* and or operator */}
            {
                cart.length == 2 && <h1>and operator</h1>
            }
            {
                cart.length == 2 || <h1>or operator</h1>
            }
        </div >
    );
};

export default Cart;