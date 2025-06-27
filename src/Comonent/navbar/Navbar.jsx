import React, { useContext, useState } from 'react';
import { FaShoppingCart, FaRegUserCircle, FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const { cartItem } = useContext(Context);

    const totalCartItems = Object.values(cartItem).reduce((sum, qty) => sum + qty, 0);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleNavClick = () => {
        setMenuOpen(false);
    };

    return (
        <div className="bg-white py-3 shadow-sm">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link to="/">
                        <img src="/assets/img/SHOP.CO.png" alt="SHOP.CO Logo" className="sm:h-7" />
                    </Link>

                    {/* Desktop Navigation */}
                    <ul className="hidden lg:flex gap-6">
                        <li onClick={handleNavClick}><Link to="/shop" className="text-black font-semibold hover:text-amber-950">Shop</Link></li>
                        <li onClick={handleNavClick}><Link to="/Onsale" className="text-black font-semibold hover:text-amber-950">On Sale</Link></li>
                        <li onClick={handleNavClick}><Link to="/Arrival" className="text-black font-semibold hover:text-amber-950">New Arrivals</Link></li>
                        <li onClick={handleNavClick}><Link to="/BestDeals" className="text-black font-semibold hover:text-amber-950">Best Deals</Link></li>
                    </ul>

                    {/* Search */}
                    <input type="text" placeholder="Search for products" className="hidden sm:block w-full max-w-[300px] px-4 py-2 border border-gray-300 rounded-full text-sm bg-gray-100 outline-none" />

                    {/* Icons */}
                    <div className="flex items-center gap-6 text-[22px] text-black">
                        <Link to="/cart" aria-label="Cart" className="relative">
                            <FaShoppingCart className="text-2xl hover:text-amber-950 cursor-pointer" />
                            {totalCartItems > 0 && (
                                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                                    {totalCartItems}
                                </span>
                            )}
                        </Link>
                        <FaRegUserCircle className="hover:text-amber-950 cursor-pointer" aria-label="User" />
                        <button onClick={toggleMenu} className="lg:hidden text-xl" aria-label="Toggle menu">
                            {menuOpen ? <FaTimes /> : <FaBars />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {menuOpen && (
                    <div className="lg:hidden mt-4">
                        <ul className="flex flex-col gap-4 text-center">
                            <li onClick={handleNavClick}><Link to="/shop" className="block text-black font-semibold hover:text-amber-950">Shop</Link></li>
                            <li onClick={handleNavClick}><Link to="/Onsale" className="block text-black font-semibold hover:text-amber-950">On Sale</Link></li>
                            <li onClick={handleNavClick}><Link to="/Arrival" className="block text-black font-semibold hover:text-amber-950">New Arrivals</Link></li>
                            <li onClick={handleNavClick}><Link to="/BestDeals" className="block text-black font-semibold hover:text-amber-950">Best Deals</Link></li>
                            <input type="text" placeholder="Search for products" className="w-full px-4 py-2 border border-gray-300 rounded-full text-sm bg-gray-100 outline-none" />
                        </ul>
                    </div>
                )}
            </div>
        </div >
    );
};

export default Navbar;
