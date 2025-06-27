import React, { useContext, useState } from "react";
import star from '/assets/img/Star.png';
import { Context } from "../../context/Context";
import { FaMinus, FaPlus } from "react-icons/fa";

const Productdisplay = ({ product }) => {
    const { addTocart } = useContext(Context);
    const [selectedColor, setSelectedColor] = useState(null);
    const [selectedSize, setSelectedSize] = useState(null);
    const [counter, setCounter] = useState(1); // Start with 1

    const handleColorClick = (color) => setSelectedColor(color);
    const Inc = () => setCounter(prev => prev + 1);
    const Dec = () => setCounter(prev => (prev > 1 ? prev - 1 : 1));

    const colors = ['#4F4631', '#314F4A', '#31344F'];
    const sizes = ["XX-small", "X-small", "Small", "Medium"];

    return (
        <div className="max-w-[1440px] mx-auto px-4 sm:px-10 py-8 box-border">

            <div className="flex flex-col gap-12 sm:flex-row md:flex-col  lg:flex-row">
                {/* Left */}
                <div className="flex flex-col-reverse sm:flex-row md:flex-row lg:flex-row align-middle items-center justify-center md:w-full gap-6 w-full sm:w-full">
                    {/* imge */}
                    <div className="flex flex-row sm:flex-col gap-4">
                        <img src={product.img2} alt="sub1" className="w-full max-w-[152px] sm:w-[152px] h-auto sm:h-[167px] object-cover rounded-[12px] cursor-pointer" />
                        <img src={product.img2} alt="sub2" className="w-full max-w-[152px] sm:w-[152px] h-auto sm:h-[167px] object-cover rounded-[12px] cursor-pointer" />
                        <img src={product.img3} alt="sub3" className="w-full max-w-[152px] sm:w-[152px] h-auto sm:h-[167px] object-cover rounded-[12px] cursor-pointer" />
                    </div>

                    {/* Main Image */}
                    <div className="flex justify-center sm:justify-start">
                        <img src={product.img4} alt="main" className="w-full max-w-[444px] h-auto sm:h-[530px] object-cover rounded-[20px]" />
                    </div>
                </div>

                {/* right */}
                <div className="w-full sm:w-1/2 flex flex-col gap-3  md:w-full">
                    <h1 className="text-black text-[32px] sm:text-[40px] font-bold font-['Anton']">{product.title}</h1>

                    {/* Stars */}
                    <div className="flex gap-1 mt-1">
                        {[...Array(5)].map((_, index) => (
                            <img key={index} src={star} alt="star" className="w-[20px] h-5" />
                        ))}
                    </div>

                    {/* Price */}
                    <div className="text-black text-[28px] sm:text-[32px] font-bold">{product.price} <span className="line-through text-black ml-3 opacity-40 font-semibold">{product.oldprice}</span> </div>

                    {/* Info */}
                    <div className="text-[1rem] text-[#555] font-['Satoshi'] border-b border-[#0000001A] pb-4">
                        This graphic t-shirt is perfect for any occasion. Crafted from soft and breathable fabric, it offers superior comfort and style.
                    </div>

                    {/* Colors */}
                    <div className="border-b border-[#0000001A] pb-4">
                        <h2 className="text-base font-semibold text-black opacity-60">Select Colors</h2>
                        <div className="flex gap-3 mt-3">
                            {colors.map((color) => (
                                <div key={color} onClick={() => handleColorClick(color)} className={`w-8 h-8 rounded-full border-2 cursor-pointer ${selectedColor === color ? 'ring-2 ring-black' : ''}`} style={{ backgroundColor: color }} title={color}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Sizes */}
                    <div className="border-b border-[#0000001A] pb-4">
                        <h2 className="text-base font-semibold text-black opacity-60 mt-4">Choose Size</h2>
                        <div className="flex flex-wrap gap-3 mt-3">
                            {sizes.map((size) => (
                                <div
                                    key={size}
                                    onClick={() => setSelectedSize(size)}
                                    className={`cursor-pointer text-sm rounded-[62px] py-2 px-4 
                                        ${selectedSize === size ? 'bg-black text-white' : 'bg-[#F0F0F0] text-black opacity-60 hover:opacity-100'}`} >
                                    {size}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* add */}
                    <div className="flex flex-col sm:flex-row gap-4 mt-4 items-center">
                        {/* Counter */}
                        <div className="flex w-[160px] h-[52px] items-center justify-between rounded-[62px] px-5 bg-[#F0F0F0]">
                            <button onClick={Dec}><FaMinus /></button>
                            <p>{counter}</p>
                            <button onClick={Inc}><FaPlus /></button>
                        </div>

                        {/* Add to Cart */}
                        <button onClick={() => {
                            for (let i = 0; i < counter; i++) {
                                addTocart(product.id);
                            }
                        }}
                            className="w-full sm:w-[300px] bg-black text-white py-4 rounded-[62px] hover:bg-gray-800 transition"
                        >
                            ADD TO CART
                        </button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Productdisplay;
