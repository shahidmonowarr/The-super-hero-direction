import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Writers.css'
const Writers = (props) => {

    // destructuring 
    const { picture, name, title, age, gender, category, email, price } = props.writer;

    // Font awesome 
    const icon = <FontAwesomeIcon icon={faShoppingCart} />
    return (

        // cards 
        <div className="col-md-4">
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="cards-item rounded-3">
                        <div className="mt-3">
                            <img src={picture} className="img-fluid  rounded-circle" alt="..." />
                        </div>
                        <div className="card-body">
                            <h3 className="card-title fs-4 fw-bold">{name}</h3>
                            <p className="card-text">
                                <small>Gender: {gender}</small>
                            </p>
                            <p className="card-text">
                                <small>Age: {age}</small>
                            </p>
                            <h5 className="fs-6 ">Best Book: {title}</h5>
                            <p className="card-text">
                                <small>Category: {category}</small>
                            </p>
                            <p className="card-text">
                                <small>Price: $ {price}</small>
                            </p>
                            <p className="card-text">
                                <small>Email: {email}</small>
                            </p>
                            <button
                                onClick={() => props.handleAddWriter(props.writer)}
                                className="btn button">
                                {icon} Load To Cart
                            </button>
                            {/* <h4>{faBook} </h4> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Writers;