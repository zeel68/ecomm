import React, { useState } from 'react';
import { LuListFilter } from 'react-icons/lu';
import { FaChevronDown, FaChevronRight, FaTimes } from 'react-icons/fa';

const Filter = ({ isMobileOpen, onClose }) => {
    const [price, setPrice] = useState(500);
    const [menuOpen, setMenuOpen] = useState(false);
    const [menucolor, setColor] = useState(false);
    const [menusize, setSize] = useState(false);
    const [menuStyle, setStyle] = useState(false);
    const [selectedColor, setSelectedColor] = useState(null);
    const [selectedSize, setSelectedSize] = useState(null);

    const colors = ['#00C12B', '#F50606', '#F5DD06', '#F57906', '#063AF5', '#7D06F5', '#F506A4', '#FFFFFF', '#000000', 'gray'];
    const sizes = ["XX-small", "X-small", "Small", "Medium", "Large", "X-Large", "XX-Large", "3X-Large", "4X-Large"];

    const toggle = (setter) => () => setter(prev => !prev);
    const handleColorClick = (color) => setSelectedColor(color);
    const handlePriceChange = (e) => setPrice(e.target.value);

    return (
        <div className={`bg-white z-50 transition-all duration-300 rounded-[20px] border border-black/10 sm:h-auto px-5 py-6  fixed top-0 h-full w-full ${isMobileOpen ? 'left-0' : '-left-full'}  lg:static lg:left-0 lg:w-[25%] lg:h-auto lg:block lg:overflow-visible lg:rounded-[20px] `}>

            {/***************************************************** Filters *****************************************************/}

            <div className="flex justify-between items-center mb-6 lg:hidden">
                <h2 className="text-xl font-bold">Filters</h2>
                <button onClick={onClose} className="text-2xl">
                    <FaTimes />
                </button>
            </div>

            {/***************************************************** Filters *****************************************************/}

            <div className="hidden lg:flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">Filters</h2>
                <LuListFilter className="text-xl" />
            </div>

            {/***************************************************** Category *****************************************************/}

            <div className="border-b-2 p-4 border-[#0000001A]">
                {["TShirt", "Shirt", "Hoodie", "Jeans", "Shorts"].map((item) => (
                    <div key={item} className="flex justify-between items-center mb-3 text-sm text-[#00000099]">
                        <p className="capitalize">{item}</p>
                        <FaChevronRight />
                    </div>
                ))}
            </div>

            {/***************************************************** Price *****************************************************/}

            <div className="border-b-2 p-4 border-[#0000001A]">
                <div className="flex justify-between items-center cursor-pointer" onClick={toggle(setMenuOpen)}>
                    <h2 className="text-base font-semibold">Price</h2>
                    {menuOpen ? <FaChevronDown /> : <FaChevronRight />}
                </div>
                {menuOpen && (
                    <div className="mt-4">
                        <p className="text-sm text-gray-600">Selected: ₹{price}</p>
                        <input type="range" min="0" max="1000" value={price} onChange={handlePriceChange} className="w-full accent-black mt-2" />
                    </div>
                )}
            </div>

            {/***************************************************** Colors *****************************************************/}

            <div className="border-b-2 p-4 border-[#0000001A]">
                <div className="flex justify-between items-center cursor-pointer" onClick={toggle(setColor)}>
                    <h2 className="text-base font-semibold">Colors</h2>
                    {menucolor ? <FaChevronDown /> : <FaChevronRight />}
                </div>
                {menucolor && (
                    <div className="grid grid-cols-5 gap-4 mt-4">
                        {colors.map((color) => (
                            <div
                                key={color}
                                onClick={() => handleColorClick(color)}
                                className={`w-8 h-8 rounded-full border-2 cursor-pointer ${selectedColor === color ? 'ring-2 ring-black' : ''}`}
                                style={{ backgroundColor: color }}
                                title={color}
                            />
                        ))}
                    </div>
                )}
            </div>

            {/***************************************************** Sizes *****************************************************/}

            <div className="border-b-2 p-4 border-[#0000001A]">
                <div className="flex justify-between items-center cursor-pointer" onClick={toggle(setSize)}>
                    <h2 className="text-base font-semibold">Size</h2>
                    {menusize ? <FaChevronDown /> : <FaChevronRight />}
                </div>
                {menusize && (
                    <div className="mt-4 flex flex-wrap gap-3">
                        {sizes.map((size) => (
                            <div
                                key={size}
                                onClick={() => setSelectedSize(size)} className={`cursor-pointer text-sm rounded-[62px] py-2 px-3  ${selectedSize === size ? 'bg-black text-white' : 'bg-[#F0F0F0] text-black opacity-60 hover:opacity-100'}`}>
                                {size}
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/***************************************************** Dress Style *****************************************************/}

            <div className="p-4 border-[#0000001A]">
                <div className="flex justify-between items-center cursor-pointer" onClick={toggle(setStyle)}>
                    <h2 className="text-base font-semibold">Dress Style</h2>
                    {menuStyle ? <FaChevronDown /> : <FaChevronRight />}
                </div>
                {menuStyle && (
                    <div className="mt-4">
                        {["Casual", "Formal", "Party", "Gym"].map((item) => (
                            <div key={item} className="flex justify-between items-center mb-3 text-sm text-[#00000099]">
                                <p>{item}</p>
                                <FaChevronRight />
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/***************************************************** Apply Button *****************************************************/}

            <div className="mt-6">
                <button className="w-full py-3 px-4 bg-black text-white rounded-[62px] hover:bg-gray-900 transition-all">
                    Apply Filter
                </button>
            </div>
        </div>
    );
};

export default Filter;
