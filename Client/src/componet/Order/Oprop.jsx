import React from 'react'
import { CiMenuKebab } from "react-icons/ci"
import { IoBagHandleOutline } from "react-icons/io5"
import { FaArrowUp } from "react-icons/fa";

const Oprop = ({ text, totle, pr, comp }) => {
    return (
        <div className="p-[10px] box-border bg-white rounded-md shadow-md w-full">
            <div className="flex flex-wrap items-center justify-between mb-5">
                <p className="text-black font-bold">{text}</p>
                <CiMenuKebab className="text-black text-2xl" />
            </div>
            <div className="py-[15px] text-center flex justify-between">
                <div className='flex items-center'>
                    <div className="flex items-center justify-center bg-[#00538A] rounded-md">
                        <IoBagHandleOutline className="icon text-3xl m-[3px] p-[5px] text-white" />
                    </div>
                    <span className="block text-xl font-bold text-gray-800 px-[5px]">{totle}</span>
                </div>
                <span className="font-semibold mt-1 flex items-center">
                    <FaArrowUp className='p-[2px]' />{pr}</span>
            </div>
            <p className="text-sm text-gray-500 mt-1 text-end">{comp}</p>
        </div>
    )
}

export default Oprop

