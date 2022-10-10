import React, { useState } from 'react';
import './Home.css'
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import Tshirt from '../Tshirt/Tshirt';

const Home = () => {
    const tshirts = useLoaderData();
    const [cart, setCart] = useState([])
    const handleAdCart = shirt => {
        const exists = cart.find(ts => ts._id === shirt._id);
        if (exists) {
            alert('already added')
        }
        else {

            const newCart = [...cart, shirt];
            setCart(newCart)
        }
    }

    const removeCart = tshirt => {
        const remaining = cart.filter(ts => ts._id !== tshirt._id);
        setCart(remaining)
    }
    return (
        <div className='home-container'>
            <div className="shirt-container">
                {
                    tshirts.map(shirt => <Tshirt
                        key={shirt._id}
                        shirt={shirt}
                        handleAdCart={handleAdCart}
                    ></Tshirt>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart} removeCart={removeCart}></Cart>
            </div>
        </div>
    );
};

export default Home;