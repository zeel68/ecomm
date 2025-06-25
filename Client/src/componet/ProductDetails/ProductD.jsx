import React from 'react'
import Breadcrum from '../Breadcrum/Breadcrum'

const ProductD = () => {
    return (
        <>
            <div className="max-w-screen-xl mx-auto px-[15px]">

                {/* hader */}
                <div className="py-[15px]">
                    <div className="md:mb-0">
                        <h2 className="text-2xl font-semibold text-gray-800">Dashboard</h2>
                        <Breadcrum
                            path={["Home", "All Product"]}
                            current="Product Details"
                        />
                    </div>
                </div>

                {/* product details */}

                <div className="p-[15px] bg-white rounded-md shadow-m">
                    <div className="flex grid-cols-1 lg:grid-cols-2 gap-6 max-w-7xl mx-auto">

                        {/* Left Section */}
                        <div className="w-full lg:w-1/2">
                            <div className='mb-[10px]'>
                                <label className="block font-medium text-lg">Product Name</label>
                                <input type="text" className="w-full border rounded text-sm " />
                            </div>

                            <div className='mb-[10px]'>
                                <label className="block font-medium mb-[5px] text-lg">Product Description</label>
                                <textarea rows="3" className="w-full border rounded text-sm"></textarea>
                            </div>

                            <div className='mb-[10px]'>
                                <label className="block font-medium mb-[5px] text-lg">Category</label>
                                <input type="text" className="w-full border rounded text-sm" />
                            </div>

                            <div className='mb-[10px]'>
                                <label className="block font-medium text-lg">Brand Name</label>
                                <input type="text" className="w-full border rounded text-sm" />
                            </div>

                            <div className="grid grid-cols-2 gap-4 mb-[10px]">
                                <div>
                                    <label className="block font-medium  text-lg">SKU</label>
                                    <input type="text" className="w-full border rounded text-sm" />
                                </div>
                                <div>
                                    <label className="block font-medium text-lg">Stock Quantity</label>
                                    <input type="number" className="w-full border rounded text-sm" />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4 mb-[10px]">
                                <div>
                                    <label className="block font-medium text-lg">Regular Price</label>
                                    <input type="text" className="w-full border rounded text-sm" />
                                </div>
                                <div>
                                    <label className="block font-medium  text-lg">Sale Price</label>
                                    <input type="text" className="w-full border rounded text-sm" />
                                </div>
                            </div>

                            <div className='mb-[10px]'>
                                <label className="block font-medium ">Tags</label>
                                <div className="border rounded-md h-[154px]">
                                    <div className="flex gap-2 flex-wrap p-[10px] ">
                                        <span className="bg-[#00538A] text-white px-[15px] py-[5px] rounded-full text-sm">Lorem</span>
                                        <span className="bg-[#00538A] text-white px-[15px] py-[5px] rounded-full text-sm">Lorem</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Section */}
                        <div className="w-full">
                            <div className="w-full aspect-square bg-[#E0F0FB] rounded shadow-md flex items-center justify-center mb-[10px]">
                                <span className="text-gray-400">Image Preview</span>
                            </div>

                            {/* Product Gallery */}
                            <div>
                                <label className="block font-medium mb-[10px]">Product Gallery</label>
                                <div className="border border-dashed border-gray-300 rounded p-4 text-center text-sm text-gray-500">
                                    <p>Drop your images here, or browse</p>
                                    <p className="text-xs">(jpg, png are allowed)</p>
                                </div>

                                <div className="mt-4 space-y-3">
                                    {[...Array(4)].map((_, i) => (
                                        <div key={i} className="flex items-center gap-2">
                                            <div className="w-10 h-10 bg-gray-200 rounded"></div>
                                            <span className="text-sm flex-1">Product thumbnail.png</span>
                                            <button className="text-blue-600 hover:underline text-sm">Edit</button>
                                            <button className="text-red-500 hover:underline text-sm">Delete</button>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex justify-end gap-4 mt-8">
                                <button className="bg-black text-white px-[10px] py-[5px] rounded">Update</button>
                                <button className="bg-[#00538A] text-white px-6 py-2 rounded">Delete</button>
                                <button className="bg-gray-200 text-black px-6 py-2 rounded">Cancel</button>
                            </div>
                        </div>

                    </div>


                </div>
            </div>
        </>
    )
}

export default ProductD