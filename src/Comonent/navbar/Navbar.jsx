import React, { useState } from 'react';
import { FaShoppingCart, FaRegUserCircle, FaBars, FaTimes } from "react-icons/fa";
import { Link } from 'react-router';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="bg-white py-3">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">


                    <Link to="/"> <img src="/assets/img/SHOP.CO.png" alt="Logo" className="sm:h-7" /></Link>

                    <ul className="hidden lg:flex gap-6">
                        <li><Link to="/shop" className="text-black font-semibold hover:text-amber-950">Shop</Link></li>
                        <li><Link className="text-black font-semibold hover:text-amber-950">On Sale</Link></li>
                        <li><Link className="text-black font-semibold hover:text-amber-950">New Arrivals</Link></li>
                        <li><Link className="text-black font-semibold hover:text-amber-950">Best Deals</Link></li>
                    </ul>

                    <input type="text" placeholder="Search for products" className="hidden sm:block w-full max-w-[300px] mb-0 px-4 py-2 border border-gray-300 rounded-full text-sm bg-gray-100 outline-none" />


                    <div className="flex items-center gap-9 text-[22px] text-black">
                        <FaShoppingCart className="hover:text-amber-950 cursor-pointer" />
                        <FaRegUserCircle className="hover:text-amber-950 cursor-pointer" />

                        <div className="lg:hidden cursor-pointer" onClick={toggleMenu}>
                            {menuOpen ? <FaTimes /> : <FaBars />}
                        </div>
                    </div>
                </div>


                {menuOpen && (
                    <div className="lg:hidden mt-4">
                        <ul className="flex flex-col gap-3 text-center">
                            <li><Link className="block text-black font-semibold hover:text-amber-950">Shop</Link></li>
                            <li><Link className="block text-black font-semibold hover:text-amber-950">On Sale</Link></li>
                            <li><Link className="block text-black font-semibold hover:text-amber-950">New Arrivals</Link></li>
                            <li><Link className="block text-black font-semibold hover:text-amber-950">Best Deals</Link></li>
                            <input type="text" placeholder="Search for products" className="mx-auto w-full mt-2 px-4 py-2 border border-gray-300 rounded-full text-sm bg-gray-100 outline-none"
                            />
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;