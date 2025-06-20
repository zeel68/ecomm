import React from 'react';
import { BsThreeDots } from "react-icons/bs";
import { FaArrowUp } from "react-icons/fa";

const Itemprop = ({ img, info, name, price, details, sales, remaining }) => {
    return (
        <>
            <div className="p-[15px] box-border rounded-md shadow-md bg-white w-[32%]">
                <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-4">
                        <img className='w-[40px] h-[40px] object-contain' src={img} alt={name} />
                        <div>
                            <h2 className="font-semibold text-gray-800">{info}</h2>
                            <p className="text-sm text-gray-600">{name}</p>
                            <h3 className="text-green-600 font-semibold">{price}</h3>
                        </div>
                    </div>
                    <div className="bg-[#E0EAF1] p-[5px] h-[30px] rounded-md cursor-pointer">
                        <BsThreeDots />
                    </div>
                </div>

                <div className="mb-3">
                    <h2 className='text-[16px] font-semibold'>Summary</h2>
                    <p className="text-sm text-gray-600">{details}</p>
                </div>

                <div className="text-sm text-gray-700">
                    <div className="flex justify-between mb-1">
                        <span>Sales</span>
                        <span className="flex items-center gap-1 text-green-600">
                            <FaArrowUp /> {sales}
                        </span>
                    </div>
                    <div className="flex justify-between">
                        <span>Remaining Products</span>
                        <span>{remaining}</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Itemprop;
