import React from 'react';

const SectionProp = ({ number, information }) => {
    return (
        <div className="w-[141px] h-[74px]">
            <h2 className="text-[40px] font-bold text-black">{number}</h2>
            <p className="text-[15px] leading-[22px] font-normal">{information}</p>
        </div>
    );
};

export default SectionProp;
