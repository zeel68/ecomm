import React, { useContext } from 'react'
import { Context } from '../../context/Context';
import PCart from '../Cart/PCart';
import { Link } from 'react-router-dom';

const Related = (props) => {
    const { Products } = useContext(Context);

    if (!Products) return null;
    return (
        <section className="w-full bg-white py-10">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-[36px] sm:text-[48px] uppercase text-center font-['Integral_CF'] font-extrabold mb-12">
                    You might also like
                </h1>
                <div className="flex flex-wrap -mx-3">
                    {
                        Products.map((item) => {
                            if (props.category === item.category) {
                                return (
                                    <PCart
                                        key={item.id}
                                        id={item.id}
                                        img1={item.img1}
                                        title={item.title}
                                        price={item.price}
                                        oldprice={item.oldprice}
                                    />
                                );
                            } else {
                                return null;
                            }
                        })
                    }
                </div>
                <div className="flex justify-center">
                    <Link to="/shop">
                        <button className="mt-12 py-[12px] px-[54px] text-black text-[16px] border border-black rounded-[62px] cursor-pointer hover:bg-black hover:text-white font-semibold transition duration-300">
                            <Link to="/Arrival"> View all</Link>

                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Related

