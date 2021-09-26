import React, { useEffect, useState } from 'react';

const Header = () => {
    const [cards, setCards] = useState(0);
    useEffect(() => {
        fetch("/writers.JSON")
            .then((res) => res.json())
            .then((data) => setCards(data.length));
    }, []);
    return (

        <div className="text-center bg-secondary py-3 mb-5 text-white">
            <h2 className="fs-1 fw-bolder">FAVOURITE BOOKS WRITER</h2>
            <h3 className="fs-2 fw-bold">Total Cards: {cards} </h3>
        </div>
    );
};

export default Header;