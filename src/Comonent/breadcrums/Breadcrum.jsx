import React from "react";
import './breadcrum.css';
import arrow from './arrow.jpg';

const Breadcrum = ({ product }) => {
    return (
        <div className="breadcrum">
            Home <img src={arrow} alt="arrow" /> Shop

            {product && (
                <>
                    <img src={arrow} alt="arrow" />
                    {product.category} <img src={arrow} alt="arrow" /> {product.name}
                </>
            )}
        </div>
    );
};

export default Breadcrum;
