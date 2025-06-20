import React from 'react';
import star from '../../../public/assets/img/Star.png';

const PCart = ({ img1, title, price, oldprice }) => {
    return (
        <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-3">
            <div className="bg-white rounded-lg p-4">
                <img src={img1} alt={title} className="w-full h-auto rounded-md" />
                <p className="text-[20px] font-semibold mt-4 font-['Satoshi']">{title}</p>

                <div className="flex gap-1 my-2">
                    {[...Array(5)].map((_, i) => (
                        <img key={i} src={star} alt="star" className="w-4 h-4" />
                    ))}
                </div>

                <div className="flex items-center mt-2">
                    <span className="text-xl font-semibold">{price}</span>
                    <span className="line-through text-black ml-3 opacity-40 text-xl font-semibold">{oldprice}</span>
                </div>
            </div>
        </div>
    );
};

export default PCart;
