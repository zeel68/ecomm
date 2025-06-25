import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const Breadcrum = ({ path, current }) => {
    const steps = path && Array.isArray(path) ? path : ["Home"];

    return (
        <div className="max-w-[1440px] mx-auto px-4 mt-5 sm:px-6 lg:px-8">
            <div className="text-[16px] font-medium text-black flex flex-wrap align-middle items-center gap-[8px]">
                {steps.map((item, index) => (
                    <React.Fragment key={index}>
                        <span className="flex items-center gap-[8px]">{item}</span>
                        <IoIosArrowForward className="w-[16px] h-[16px]" />
                    </React.Fragment>
                ))}
                <span className="text-black">{current}</span>
            </div>
        </div>
    );
};

export default Breadcrum;
