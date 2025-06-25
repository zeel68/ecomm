import React, { useState } from 'react'
import { AiFillFilter } from 'react-icons/ai';
import { FaChevronDown } from 'react-icons/fa';
import { Link } from 'react-router-dom'
import star from './star.jpg';

const Reviews = () => {
    const [active, setActive] = useState("details");
    const [menuOpen, setMenuOpen] = useState(false);

    const reviews = [
        {
            name: "Samantha D.",
            message: `"I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.”`,
            date: "Posted on August 14, 2023"
        },
        {
            name: "John D.",
            message: `"The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me."`,
            date: "Posted on August 14, 2023"


        },
        {
            name: "Alex M.",
            message: `"As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out."`,
            date: "Posted on August 14, 2023"

        },
        {
            name: "David P.",
            message: `"This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion."`,
            date: "Posted on August 14, 2023"

        },
        {
            name: "Anna B.",
            message: `""I'm not just wearing a t-shirt; I'm wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter."`,
            date: "Posted on August 14, 2023"

        },
        {
            name: "David P.",
            message: `"This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion."`,
            date: "Posted on August 14, 2023"

        },
        {
            name: "David P.",
            message: `"This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion."`,
            date: "Posted on August 14, 2023"

        },
        {
            name: "Anna B.",
            message: `""I'm not just wearing a t-shirt; I'm wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter."`,
            date: "Posted on August 14, 2023"

        },
        {
            name: "Anna B.",
            message: `""I'm not just wearing a t-shirt; I'm wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter."`,
            date: "Posted on August 14, 2023"

        },
        {
            name: "David P.",
            message: `"This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion."`,
            date: "Posted on August 14, 2023"

        }
    ];
    const show = menuOpen ? reviews : reviews.slice(0, 4);

    return (
        <>

            <div className="block">
                <div className="max-w-[1440px] mx-auto px-4 sm:px-10 py-8 box-border">
                    {/* option top */}
                    <div className="flex flex-wrap justify-around border-b border-[#000000] mb-[24px]">

                        <div onClick={() => setActive("details")} className={`font-['Satoshi'] text-[20px] mb-[24px] cursor-pointer ${active === "details" ? "text-black font-semibold" : "text-[#00000099]"}`}>
                            <Link>Product Details</Link>
                        </div>

                        <div onClick={() => setActive("reviews")} className={`font-['Satoshi'] text-[20px] mb-[24px] cursor-pointer ${active === "reviews" ? "text-black font-semibold" : "text-[#00000099]"}`} >
                            <Link to=''>Rating & Reviews</Link>
                        </div>

                        <div onClick={() => setActive("faqs")} className={`font-['Satoshi'] text-[20px] mb-[24px] cursor-pointer ${active === "faqs" ? "text-black font-semibold" : "text-[#00000099]"}`} >
                            <Link>FAQs</Link>
                        </div>
                    </div>

                    <div className="flex flex-wrap justify-between align-middle items-center px-10 m-[-15px]">
                        <div className="block">
                            <h1 className="font-['Satoshi'] text-[20px] sm:text-[24px] font-bold">
                                All Reviews ({reviews.length})
                            </h1>

                        </div>
                        <div className="flex flex-wrap justify-between align-middle items-center w-[354px]">
                            <div className="flex justify-between align-middle  w-[50px] items-center py-4 px-5 rounded-[62px] bg-[#F0F0F0]">
                                <AiFillFilter />
                            </div>
                            <div className="flex justify-between align-middle w-[120px] items-center py-4 px-5 rounded-[62px] bg-[#F0F0F0]">
                                <p>Latest</p>
                                <FaChevronDown />
                            </div>
                            <div className="block bg-[#000000] text-center text-white w-[166px] py-4 px-5 rounded-[62px]">
                                <button>Write a Review</button>
                            </div>
                        </div>
                    </div>

                    {/* reviews */}
                    <div className="w-full mt-5">
                        <div className="flex flex-wrap justify-center gap-6">
                            {show.map((r, i) => (
                                <div key={i} className="w-[610px] py-[10px] px-[15px] rounded-[20px]">
                                    <div className="bg-white py-[28px] px-[32px] rounded-[20px] border border-[#00000019] flex flex-col gap-2">
                                        <div className="flex gap-1 mt-1">
                                            {[...Array(5)].map((_, index) => (
                                                <img key={index} src={star} alt="star" className="w-[20px] h-5" />
                                            ))}
                                        </div>
                                        <h4 className="font-bold mb-2">{r.name}</h4>
                                        <p className="text-gray-600 mb-1">{r.message}</p>
                                        <p className="text-xs text-gray-400">{r.date}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="flex justify-center">
                            <button
                                onClick={() => setMenuOpen(!menuOpen)}
                                className="mt-12 py-[12px] px-[54px] text-black text-[16px] border border-black/20 rounded-[62px] cursor-pointer hover:bg-black hover:text-white font-semibold transition duration-300"
                            >
                                {menuOpen ? "Show Less" : "Load More Reviews"}
                            </button>
                        </div>
                    </div>


                </div>
            </div>

        </>
    )
}

export default Reviews