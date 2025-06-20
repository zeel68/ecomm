import React, { useState } from 'react';
import { LuListFilter } from 'react-icons/lu';
import { FaChevronRight } from 'react-icons/fa';

const Categoryitem = () => {
    const [price, setPrice] = useState(500); // Default price

    const handlePriceChange = (e) => {
        setPrice(e.target.value);
    };

    return (
        <>
            <div className="block">
                <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap mx-[-15px]">

                        <div className="w-[295px] py-[20px] px-[24px] border border-[rgba(0,0,0,0.1)] rounded-[20px] mt-[24px]">
                            <div className="block">

                                <div className="flex justify-between items-center">
                                    <h2 className="text-[20px] font-semibold font-['Satoshi']">Filters</h2>
                                    <LuListFilter />
                                </div>

                                <div className="mt-[24px] border-b-2 p-4 border-[#0000001A]">
                                    {["TShirt", "Shirt", "Hoodie", "Jeans", "Shorts"].map((item) => (
                                        <div key={item} className="flex justify-between items-center mb-3 text-[14px] font-normal text-[#00000099]">
                                            <p>{item}</p>
                                            <FaChevronRight />
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-[24px] border-b-2 p-4 border-[#0000001A]">
                                    <div className="inner">
                                        <div className="flex justify-between items-center mb-4">
                                            <h2 className="text-[20px] font-semibold font-['Satoshi']">Price</h2>
                                            <LuListFilter />
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-600 mb-2">Selected: ₹{price}</p>
                                            <input type="range" min="0" max="1000" value={price} onChange={handlePriceChange} className="w-full accent-black"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-[24px] border-b-2 p-4 border-[#0000001A]">
                                    <div className="inner">
                                        <div className="flex justify-between items-center mb-4">
                                            <h2 className="text-[20px] font-semibold font-['Satoshi']">Colors</h2>
                                            <LuListFilter />
                                        </div>
                                       
                                    </div>
                                </div>


                            </div>
                        </div>

                        <div className="right">
                            {/* Right section content */}
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Categoryitem;
