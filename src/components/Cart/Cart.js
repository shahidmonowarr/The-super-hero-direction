import React from 'react';
import './Cart.css'
const Cart = (props) => {

    // calculation
    const { cart } = props || {}

    const totalReducer = (previousValue, currentValue) => previousValue + currentValue.price

    const total = cart.reduce(totalReducer, 0).toFixed(2);
    return (
        // cart items
        <div className="bg-secondary ">
            <h3 className="fs-3 fw-bold">Cart</h3>
            <h4><i className=""></i>
                Total Added: {cart.length}
            </h4>
            <h4>total Price: {total}</h4>
            <dl>
                {
                    cart.map(writer => <li>{writer.name}</li>)
                }
            </dl>
        </div>
    );
};

export default Cart;