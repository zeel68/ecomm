import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

const Breadcrum = ({ path, current }) => {

    const steps = path && Array.isArray(path) ? path : [{ name: "Home", link: "/" }];

    return (
        <div className="max-w-[1440px] mx-auto px-4 mt-5 sm:px-6 lg:px-8">
            <div className="text-[16px] font-medium text-black flex flex-wrap items-center gap-[8px]">
                {steps.map((item, index) => (
                    <React.Fragment key={index}>
                        <Link to={item.link} className="flex items-center gap-[8px] hover:text-gray-600 transition">
                            {item.name}
                        </Link>
                        <IoIosArrowForward className="w-[16px] h-[16px]" />
                    </React.Fragment>
                ))}
                <span className="text-black">{current}</span>
            </div>
        </div>
    );
};

export default Breadcrum;
