import React, { useState } from 'react';
import Products from '../../Products';
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa';

const Next = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const ordersPerPage = 9;

    const totalPages = Math.ceil(Products.length / ordersPerPage);
    const indexOfLast = currentPage * ordersPerPage;
    const indexOfFirst = indexOfLast - ordersPerPage;
    const currentOrders = Products.slice(indexOfFirst, indexOfLast); // Use to render paginated items

    return (
        <div className="py-[20px] flex flex-wrap items-center justify-center">
            {/* Previous Button */}
            <button
                onClick={() => setCurrentPage(prev => prev - 1)}
                disabled={currentPage === 1}
                className={`border px-[15px] py-[5px] m-[5px] rounded-md flex items-center gap-1 transition ${currentPage === 1 ? 'bg-gray-200 text-gray-500 cursor-not-allowed' : 'hover:bg-black hover:text-white text-black'}`}
            >
                <FaAngleLeft /> Previous
            </button>

            {/* Page Numbers */}
            {[1, 2, 3, 4].map((page) => (
                <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`border px-[12px] py-[5px] m-[5px] rounded-md ${currentPage === page ? 'bg-[#000] text-white' : 'hover:bg-[#000] hover:text-white text-black'}`}>
                    {page}
                </button>
            ))}

            <span className="mx-2 font-semibold">...</span>

            {/* Last Page Button */}
            <button
                onClick={() => setCurrentPage(totalPages)}
                className={`border px-[12px] py-[5px] m-[5px] rounded-md ${currentPage === totalPages ? 'bg-[#000] text-white' : 'hover:bg-[#000] hover:text-white text-black'}`} >
                {totalPages}
            </button>

            {/* Next  */}
            <button
                onClick={() => setCurrentPage(prev => prev + 1)}
                disabled={currentPage === totalPages}
                className={`border px-[15px] py-[5px] m-[5px] rounded-md flex items-center gap-1 transition ${currentPage === totalPages ? 'bg-gray-200 text-gray-500 cursor-not-allowed' : 'hover:bg-[#000] hover:text-white text-black'}`} >
                Next <FaAngleRight />
            </button>
        </div>
    );
};

export default Next;
