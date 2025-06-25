import React from 'react';
import { BsThreeDots } from "react-icons/bs";
import { FaArrowUp } from "react-icons/fa";
import { Navigate, useNavigate } from 'react-router-dom';

const Itemprop = ({ id, img, info, name, price, details, sales, remaining }) => {
    const navigate = useNavigate();

    const handleRowClick = () => {
        console.log("Navigating to:", `/home/product/${id}`);
        navigate(`/home/product/${id}`);
        window.scrollTo(0, 0);
    };
    return (
        <>
            <div className="main" onClick={handleRowClick}>
                <div className="p-[15px] box-border rounded-md shadow-md bg-white w-[100%]" >
                    <div className="flex items-start justify-between gap-4 mb-4">
                        <div className="flex items-center gap-4">
                            <img className='w-[60px] h-[60px] p-[10px] object-contain bg-[#E0EAF1]' src={img} alt={name} />
                            <div>
                                <h2 className="font-semibold text-gray-800">{info}</h2>
                                <p className="text-sm text-gray-600">{name}</p>
                                <h3 className="text-black font-semibold">{price}</h3>
                            </div>
                        </div>
                        <div className="bg-[#E0EAF1] p-[5px] h-[30px] rounded-md cursor-pointer">
                            <BsThreeDots />
                        </div>
                    </div>

                    <div className="mb-3 py-[10px]">
                        <h2 className='text-[16px] font-semibold'>Summary</h2>
                        <p className="text-sm text-gray-600">{details}</p>
                    </div>

                    <div className="text-sm text-gray-700 border rounded-sm p-[10px] border-[#23232133]">
                        <div className="flex justify-between mb-1 border-b-1 border-[#23232133] p-[5px]">
                            <span>Sales</span>
                            <span className="flex items-center gap-1">
                                <FaArrowUp className='text-[#FFA52F]' /> {sales}
                            </span>
                        </div>
                        <div className="flex justify-between p-[5px]">
                            <span>Remaining Products</span>
                            <span >{remaining}</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Itemprop;
