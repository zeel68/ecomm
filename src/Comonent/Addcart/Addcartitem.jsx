import React, { useContext, useState } from 'react';
import { Context } from '../../context/Context';
import { RiDeleteBin5Fill } from 'react-icons/ri';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { FaArrowRightLong } from 'react-icons/fa6';

const getPrice = (priceStr) => {
    if (typeof priceStr === 'string') {
        return parseFloat(priceStr.replace(/[^0-9.]/g, '')) || 0;
    }
    return priceStr;
};

const Addcartitem = () => {
    const { Products, cartItem, addTocart, removeTocart } = useContext(Context);

    const increaseCart = (id) => {
        addTocart(id);
    };



    const subtotal = Products.reduce((acc, product) => {
        const quantity = cartItem[product.id] || 0;
        const price = getPrice(product.price);
        return acc + price * quantity;
    }, 0);

    // discount
    const discount = 0.2;
    const discountAmount = subtotal * discount;
    const finalTotal = subtotal - discountAmount;

    const fee = parseFloat("15.00");
    const atotal = finalTotal + fee;


    return (
        <>
            <div className="block">
                <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-[40px] font-bold font-['satosh'] uppercase mb-6">Your Cart</h1>

                    <div className="flex flex-wrap gap-10">
                        {/* left */}
                        <div className="w-full sm:w-full lg:max-w-[715px]">
                            <div className="space-y-6 py-5 px-4 sm:px-6 border border-[#000]/10 rounded-[20px]">
                                {Products.map((product) => {
                                    if (cartItem[product.id] > 0) {
                                        const price = getPrice(product.price);
                                        const quantity = cartItem[product.id];
                                        const totalPrice = price * quantity;

                                        return (
                                            <div key={product.id} className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-5 mb-0 w-full relative border-b border-[#000]/10" >

                                                <div className="flex items-start gap-3 w-full sm:h-full h-12">
                                                    <img src={product.img1} alt={product.title} className="w-[99px] h-[99px] sm:h-[100px] sm:w-[100px] object-cover rounded-md" />

                                                    <div className="relative w-full">
                                                        <RiDeleteBin5Fill onClick={() => removeTocart(product.id)} className="w-5 h-5 text-red-700 cursor-pointer hover:opacity-80 absolute right-0 top-0" />

                                                        <p className="font-semibold text-lg pr-6">{product.title}</p>
                                                        <p className="text-sm text-gray-600">Price: ${price.toFixed(2)}</p>
                                                        <p className="text-sm text-gray-600">Quantity: {quantity}</p>
                                                        <p className="text-sm font-medium text-green-600">
                                                            Total: ${totalPrice.toFixed(2)}
                                                        </p>
                                                    </div>
                                                </div>

                                                {/* Quantity Controls */}
                                                <div className="flex justify-end mt-4 sm:mt-0 sm:absolute sm:bottom-2 right-0 sm:right-2">
                                                    <div className="flex sm:w-[126px] w-[90px] h-[35px] sm:h-[44px] items-center justify-between rounded-[62px] py-3 px-5 bg-[#F0F0F0]">
                                                        <button onClick={() => removeTocart(product.id)}>
                                                            <FaMinus size={15} />
                                                        </button>
                                                        <p>{quantity}</p>
                                                        <button onClick={() => increaseCart(product.id)}>
                                                            <FaPlus size={15} />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    }
                                    return null;
                                })}
                            </div>
                        </div>


                        {/* right */}
                        <div className="w-full max-w-[505px]">
                            <div className="p-6 border border-[#000]/10 rounded-[20px]">
                                {/* Header */}
                                <h1 className="font-['Satoshi'] text-[24px] font-bold">Order Summary</h1>

                                {/* Subtotal */}
                                <div className="mt-6 flex justify-between gap-4 w-full max-w-[457px]">
                                    <p className="text-[20px] font-['Satoshi'] text-black opacity-[60%]">Subtotal</p>
                                    <p className="text-[20px] font-bold font-['Satoshi']">${subtotal.toFixed(2)}</p>
                                </div>

                                {/* Discount */}
                                <div className="mt-6 flex justify-between gap-4 w-full max-w-[457px]">
                                    <p className="text-[20px] font-['Satoshi'] text-black opacity-[60%]">Discount (-20%)</p>
                                    <p className="text-[20px] text-red-600 font-bold font-['Satoshi']">-${discountAmount.toFixed(2)}</p>
                                </div>

                                {/* Delivery Fee */}
                                <div className="mt-6 pb-6 flex justify-between gap-4 w-full max-w-[457px] border-b border-[#000]/10">
                                    <p className="text-[20px] font-['Satoshi'] text-black opacity-[60%]">Delivery Fee</p>
                                    <p className="text-[20px] font-bold font-['Satoshi']">${fee.toFixed(2)}</p>
                                </div>

                                {/* total */}
                                <div className="mt-6 flex justify-between gap-4 w-full max-w-[457px]">
                                    <p className="text-[20px] font-['Satoshi'] text-black opacity-[60%]">Total</p>
                                    <p className="text-[20px] font-bold font-['Satoshi']">${atotal.toFixed(2)}</p>
                                </div>

                                {/* promo */}
                                <div className="flex flex-col sm:flex-row items-start sm:items-center mt-6 gap-4">
                                    <div className="relative w-full sm:w-[326px]">
                                        <img src="assets/img/promo.png" className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5" alt="" />
                                        <input type="text" placeholder="Add promo code" className="pl-12 pr-4 py-3 rounded-[62px] text-[16px] bg-[#F0F0F0] w-full outline-none text-[#000]/60" />
                                    </div>
                                    <button className="bg-black text-white py-3 px-6 rounded-[62px] text-[16px] hover:bg-gray-900 transition-all w-full sm:w-auto">
                                        Apply
                                    </button>
                                </div>

                                {/* checkout */}
                                <div className="flex mt-6">
                                    <button className="bg-black text-white py-4 w-full rounded-[62px] text-[16px] hover:bg-gray-900 transition-all relative">
                                        Go to Checkout
                                        <FaArrowRightLong className="absolute right-6 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white" />
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div >
        </>
    );
}

export default Addcartitem;
