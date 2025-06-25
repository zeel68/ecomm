import React from 'react'
import Breadcrum from '../Breadcrum/Breadcrum'
import { IoAddCircleOutline } from "react-icons/io5";

const ProductTop = () => {
    return (
        <>
            <div className="py-[15px]">
                <div className="max-w-screen-xl mx-auto px-[15px]">
                    <div className="flex md:flex-row justify-between md:items-center sm:none">

                        <div className="md:mb-0">
                            <h2 className="text-2xl font-semibold text-gray-800">Dashboard</h2>
                            <Breadcrum current="All Product" />
                        </div>

                        <div className="text-sm font-medium flex items-center">
                            <a className='flex items-center border border-[#00538A] rounded-md text-white p-[10px] bg-[#00538A] m-[8px] decoration-0 text-[14px] font-medium' href="#">
                                <IoAddCircleOutline className='m-[5px]' />ADD NEW PRODUCT
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductTop