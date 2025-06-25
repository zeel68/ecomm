import React from 'react';
import { GrFormNextLink, GrFormPreviousLink } from 'react-icons/gr';

const Next = () => {
    const pages = [1, 2, 3, '...', 6, 7, 8];

    return (
        <div className="w-full overflow-x-auto mt-6">
            <div className="flex items-center gap-2 justify-between min-w-[360px]">

                {/* Previous */}
                <button className="px-4 sm:px-6 py-2 sm:py-3 border border-black flex items-center gap-2 text-sm sm:text-base hover:bg-black hover:text-white transition-all">
                    <GrFormPreviousLink className="text-lg" />
                    Previous
                </button>

                {/* Numbers */}
                <div className="flex items-center gap-1 sm:gap-2 text-sm font-medium text-gray-800">
                    {pages.map((page, index) => (
                        <button key={index} className={`w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center  transition-all ${page === 1 ? 'bg-black text-white' : 'hover:bg-black hover:text-white'}`}>
                            {page}
                        </button>
                    ))}
                </div>

                {/* Next */}
                <button className="px-4 sm:px-6 py-2 sm:py-3 border border-black flex items-center gap-2 text-sm sm:text-base hover:bg-black hover:text-white transition-all">
                    Next
                    <GrFormNextLink className="text-lg" />
                </button>
            </div>
        </div>
    );
};

export default Next;
