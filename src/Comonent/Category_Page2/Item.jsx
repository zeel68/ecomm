import React, { useContext, useEffect } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Context } from '../../context/Context';
import Next from './Next';
import CategoryProp from './CategoryProp';

const Item = ({ category }) => {
    const { Products } = useContext(Context);
    if (!Products) return null;

    const filtered = Products.filter(item => item.category === category);

    useEffect(() => {
        AOS.init({ duration: 500, once: false, offset: 100, easing: 'ease-in', delay: 100 });
        AOS.refresh();
    }, []);

    return (
        <div className="w-full lg:w-[75%] mt-6">
            <div className="flex flex-wrap justify-between items-center mb-4">
                <h1 className="font-['Satoshi'] text-[32px] font-bold capitalize">
                    Casual
                </h1>
                <div className="flex items-center gap-2 text-sm text-[#00000099]">
                    Showing 1-{filtered.length} of {Products.length} Products
                    <span className="ml-2 text-black">Sort by: Most Popular</span>
                    <FaChevronDown className="text-black text-xs mt-[2px]" />
                </div>
            </div>


            <div className="flex justify-around flex-wrap">
                {filtered.map((item) => (
                    <CategoryProp
                        key={item.id}
                        id={item.id}
                        img1={item.img1}
                        title={item.title}
                        price={item.price}
                        oldprice={item.oldprice}
                    />
                ))}
            </div>


            <div className="mt-8">
                <Next />
            </div>
        </div>
    );
};

export default Item;
