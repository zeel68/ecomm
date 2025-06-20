import React from 'react'
import Gprop from './Gprop'
import { CiMenuKebab } from "react-icons/ci"

const Graph = () => {
    return (
        <>
            <div className="block py-[15px]">
                <div className="block px-[15px] mx-auto box-border max-w-screen-xl">
                    <div className="flex">
                        {/* right */}
                        <div className="block w-[65%] bg-[#ffffff] rounded-md shadow-md p-[10px]">
                            <div className="flex justify-between">
                                <p className='pt-[23px] pr-0 pb-0 text-lg font-semibold'>Sale Graph</p>
                                <div className="flex mh-[15px]">
                                    <a className='inline-block border border-black rounded-md text-black p-[5px] m-[10px] decoration-0 text-[14px] font-medium' href="#">Weekly</a>
                                    <a className='inline-block border border-[#00538A] rounded-md text-white p-[5px] bg-[#00538A] m-[10px] decoration-0 text-[14px] font-medium' href="#">Monthly</a>
                                    <a className='inline-block border border-black rounded-md text-black p-[5px] m-[10px] decoration-0 text-[14px] font-medium' href="#">Yearly</a>
                                </div>
                            </div>
                            <hr />
                            <div className="items-center py-[30px]">
                                <img className='block w-[100%] p-[20px] ' src="../src/assets/chart.png" alt="chart" />
                            </div>
                        </div>
                        {/* left */}
                        <div className="w-[45%] bg-[#ffffff] p-[20px] rounded-md shadow-md mx-[15px] max-w-sm">
                            <div className="flex justify-between">
                                <p className='pt-[15px] pr-0 text-lg font-semibold'>Best Sellers</p>
                                <CiMenuKebab className="text-black text-2xl" />
                            </div>
                            <hr />
                            <div className="mt-[15px]">
                                <Gprop Productimg="../src/assets/product.png" pname="lorem" price="₹126.50" sales="999 sales" />
                                <Gprop Productimg="../src/assets/product.png" pname="lorem" price="₹126.50" sales="999 sales" />
                                <Gprop Productimg="../src/assets/product.png" pname="lorem" price="₹126.50" sales="999 sales" />
                            </div>
                            <a className='inline-block border border-[#00538A] rounded-md text-white py-[5px] px-[15px] bg-[#00538A] m-[10px] decoration-0 text-[14px] font-medium' href="#">REPORT</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Graph