import React from 'react';
import SectionProp from './SectionProp';
import { Link } from 'react-router-dom';

const Section1 = () => {
    return (
        <div className="relative px-4 sm:px-6 lg:px-14 bg-[#F2F0F1]">

            <div className="hidden sm:block absolute inset-0  bg-[url('/assets/img/Rectangle2.png')] bg-cover bg-center bg-no-repeat z-0" />

            <div className="relative max-w-[1440px] mx-auto flex flex-col sm:flex-row items-center h-auto sm:h-[663px] py-10 sm:py-0 z-10">

                {/* Content Text */}
                <div className="w-full sm:w-[577px] text-black font-['Integral_CF'] z-10">
                    <p className="font-bold text-[36px] sm:text-[64px] leading-[40px] sm:leading-[64px]">FIND CLOTHES THAT MATCH YOUR STYLE </p>

                    <p className="font-normal text-[14px] sm:text-[16px] leading-[20px] font-['Satoshi'] mt-4 mb-6">  Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of styl </p>

                    <Link to="/shop" className="inline-flex justify-center items-center h-[52px] w-[210px] bg-black text-white text-[16px] font-medium rounded-full px-[54px] py-[16px] no-underline transition hover:bg-gray-900">
                        Shop Now
                    </Link>

                    <div className="mt-8 flex flex-wrap gap-4 sm:gap-0 sm:justify-between w-full sm:w-[596px]">
                        <SectionProp number="200+" information="International Brands" />
                        <SectionProp number="2000+" information="High-Quality Products" />
                        <SectionProp number="3000+" information="Happy Customers" />
                    </div>
                </div>

                {/* change img */}
                <div className="block sm:hidden mt-10 w-full">
                    <img src="/assets/img/main.jpg" alt="" className="w-full h-auto object-cover rounded-xl"
                    />
                </div>
            </div>
        </div>
    );
};

export default Section1;
