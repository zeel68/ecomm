import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const Breadcrum = ({ current }) => {

    return (
        <div className="breadcrum text-[16px] font-medium text-black flex flex-wrap items-center gap-[8px]">
            Home
            <IoIosArrowForward className="w-[12px] h-[12px] object-contain" />
            {current}
        </div>
    );
};

export default Breadcrum;