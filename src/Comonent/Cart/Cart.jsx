import React, { useContext } from 'react';
import { Context } from '../../context/Context';
import PCart from './PCart';

import { Link } from 'react-router';
const Cart = () => {
    const { Products } = useContext(Context);

    return (
        <section className="w-full bg-white py-10">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">

                <h1 className="text-[36px] sm:text-[48px] text-center font-['Integral_CF'] font-extrabold mb-12"> NEW ARRIVAL </h1>




                <div className="flex flex-wrap -mx-3">
                    {Products.map((item) => (
                        <PCart
                            key={item.id}
                            id={item.id}
                            img1={item.img1}
                            title={item.title}
                            price={item.price}
                            oldprice={item.oldprice}
                        />
                    ))}
                </div>

                <button className="block mx-auto mt-12 py-[12px] px-[54px] text-black text-[16px] border border-black rounded-[62px] cursor-pointer hover:bg-black hover:text-white font-semibold transition duration-300">
                    <Link to="/shop">View all</Link>
                </button>
            </div>
        </section>
    );
};

export default Cart;
