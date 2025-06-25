import React, { useState } from 'react';
import { FaAngleRight } from "react-icons/fa6";
import Itemprop from './itemprop';
import { useProduct } from './Productcontext';

const Items = () => {
    const { products } = useProduct();

    const [currentPage, setCurrentPage] = useState(1);
    const ProductsPerPage = 12;

    const totalPages = Math.ceil(products.length / ProductsPerPage);
    const indexOfLast = currentPage * ProductsPerPage;
    const indexOfFirst = indexOfLast - ProductsPerPage;
    const currentProducts = products.slice(indexOfFirst, indexOfLast);

    return (
        <>
            <div className="main">
                <div className="p-[15px] sm:p-6 max-w-screen-xl mx-auto">
                    <div className="inner-main">
                        <div className="flex flex-wrap grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {currentProducts.map(product => (
                                <Itemprop
                                    key={product.id}
                                    id={product.id}
                                    img={product.img}
                                    info={product.info}
                                    name={product.name}
                                    price={product.price}
                                    details={product.details}
                                    sales={product.sales}
                                    remaining={product.remaining}
                                />
                            ))}
                        </div>

                        <div className="py-[20px] flex flex-wrap items-center">
                            {/* pages num */}
                            {[1, 2, 3, 4].map((page) => (
                                <button
                                    key={page}
                                    onClick={() => setCurrentPage(page)}
                                    className={`border px-[12px] py-[5px] m-[5px] rounded-md ${currentPage === page
                                        ? 'bg-[#00538A] text-white'
                                        : 'hover:bg-[#00538A] hover:text-white'
                                        }`}
                                >
                                    {page}
                                </button>
                            ))}

                            <span className="mx-2 font-semibold">...</span>
                            <button
                                onClick={() => setCurrentPage(totalPages)}
                                className={`border px-[12px] py-[5px] m-[5px] rounded-md ${currentPage === totalPages
                                    ? 'bg-[#00538A] text-white'
                                    : 'hover:bg-[#00538A] hover:text-white'
                                    }`}
                            >
                                {totalPages}
                            </button>

                            {/* next */}
                            {currentPage < totalPages && (
                                <button
                                    onClick={() => setCurrentPage(currentPage + 1)}
                                    className="border px-[15px] py-[5px] m-[5px] rounded-md hover:bg-[#00538A] hover:text-white flex items-center gap-1"
                                >
                                    Next <FaAngleRight />
                                </button>
                            )}

                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Items;
