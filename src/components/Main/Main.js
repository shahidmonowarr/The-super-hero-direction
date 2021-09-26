import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Writers from '../Writers/Writers';
import './Main.css';

const Main = () => {
    // state for storing Writers
    const [writers, setWriters] = useState([]);

    // state for storing cart
    const [cart, setCart] = useState([]);

    // eventHandler for cart     
    const handleAddWriter = (writer) => {

        const newCart = [...cart, writer]
        setCart(newCart)
    }

    useEffect(() => {
        fetch("/writers.JSON")
            .then((res) => res.json())
            .then((data) => setWriters(data));
    }, []);
    return (
        <div className="container ">
            <div className="row main-container">
                <div className="col-md-9 col-md-9 col-lg-9 col-sm-7">

                    {/* Writer component for loading data*/}
                    <div className="row">
                        {
                            writers.map(writer => <Writers key={writer._id} writer={writer} handleAddWriter={handleAddWriter}></Writers>)
                        }

                    </div>
                </div>

                {/* Cart component for calculation*/}
                <div className="col-md-3 col-lg-3 col-sm-5">
                    Cart calculation
                    {
                        <Cart cart={cart}></Cart>}
                </div>
            </div>
        </div>
    );
};

export default Main;