import React, { useContext } from "react";

import star from './star.jpg'
import { Context } from "../../context/Context";
import Products from "../../Products";

const Productdisplay = (props) => {
    const { product } = props;
    const { addTocart } = useContext(Context)
    return (
        <>
            <div className="flex flex-wrap p-10 gap-10">
                <div className="flex-1 min-w-[300px] flex gap-5">
                    <div className="flex flex-col justify-between">

                        <img src={product.img2} alt="" className="w-[152px] h-[167px] object-cover rounded-[20px] cursor-pointer" />
                        <img src={product.img2} alt="" className="w-[152px] h-[167px] object-cover rounded-[20px] cursor-pointer" />
                        <img src={product.img3} alt="" className="w-[152px] h-[167px] object-cover rounded-[20px] cursor-pointer" />



                    </div>
                    <div className="main-image">
                        <img src={product.img4} alt="" className="flex w-[444px]h-[530px] relative" />
                    </div>


                </div>
                <div className="flex-1 min-w-[350px] flex flex-col gap-5">
                    <h1 className="text-[#000] text-[40px] font-bold font-['Integral CF']">{product.title}</h1>
                    <div className="start flex gap-1">
                        <img src={star} alt="" className="w-[20px] h-5" />
                        <img src={star} alt="" className="w-[20px] h-5" />
                        <img src={star} alt="" className="w-[20px] h-5" />
                        <img src={star} alt="" className="w-[20px] h-5" />
                        <img src={star} alt="" className="w-[20px] h-5" />

                    </div>
                    <div className="right-price text-black text-[40px] font-bold">
                        <div className="new-price text-[32px] font-bold">{product.price}</div>

                    </div>

                    <div className="text-[1rem] text-[#555] font-['Satoshi'] border-b-2 pb-[24px] border-[#0000001A]">
                        This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.                    </div>

                    <button onClick={() => addTocart(product.id)} className="">ADD TO CART</button>
                    <p className="category">
                        <span>Category:</span>Women , T-Shirt, Croptops
                    </p>
                    <p className="category">
                        <span>Tag:</span>Modern , Latest
                    </p>
                </div>
            </div>
            <hr />
        </>
    )
}
export default Productdisplay