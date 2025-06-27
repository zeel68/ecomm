import React from 'react';
import { CiInstagram } from 'react-icons/ci';
import { FaFacebook, FaGithub, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    const Item = [
        {
            title: "Company",
            links: ["About", "Features", "Works", "Career"]
        },
        {
            title: "Help",
            links: ["Customer Support", "Delivery Details", "Terms & Conditions", "Privacy Policy"]
        },
        {
            title: "FAQ",
            links: ["Account", "Manage Deliveries", "Orders", "Payments"]
        },
        {
            title: "Resources",
            links: ["Free eBooks", "Development Tutorial", "How to - Blog", "Works", "YouTube Playlist"]
        }
    ];

    return (
        <footer className="relative bg-[#F0F0F0] mt-[150px] pt-[180px] pb-[60px]">
            {/* top box */}
            <div className="absolute -top-[100px] left-1/2 transform -translate-x-1/2 w-[90%] max-w-[1000px] bg-black text-white py-8 px-6 sm:px-10 rounded-[16px] shadow-lg">
                <div className="flex flex-col gap-6 sm:flex-row justify-between items-start sm:items-center">
                    <div className="w-full sm:w-1/2">
                        <h2 className="text-[28px] sm:text-[36px] font-bold leading-snug">
                            STAY UPTO DATE ABOUT OUR LATEST OFFERS
                        </h2>
                    </div>
                    <div className="w-full sm:w-1/2">
                        <div className="relative mb-3">
                            <img src="/assets/img/mail.png" alt="" className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5" />
                            <input type="email" placeholder="Enter your Email Address" className="w-full h-[48px] rounded-full pl-12 pr-4 bg-white text-black outline-none" />
                        </div>
                        <button className="w-full h-[48px] rounded-full bg-white text-black hover:bg-gray-200 font-semibold transition">
                            Subscribe to Newsletter
                        </button>
                    </div>

                </div>
            </div>

            {/* Footer*/}
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-wrap justify-between gap-y-10 gap-x-6 mt-14 text-center sm:text-left">

                    <div className="w-full sm:w-[100%] md:w-[20%] lg:w-[20%]">
                        <img src="/assets/img/SHOP.CO.png" alt="Logo" className="mx-auto sm:mx-0 mb-4"
                        />
                        <p className="text-sm text-gray-700">
                            We have clothes that suit your style and which you’re proud to wear. From women to men.
                        </p>
                        <div className="flex mt-[34px] w-[140px] justify-between mx-auto sm:mx-0">

                            <FaTwitter className='cursor-pointer size-5' />
                            <FaFacebook className='cursor-pointer size-5' />
                            <CiInstagram className='cursor-pointer size-5' />
                            <FaGithub className='cursor-pointer size-5' />
                        </div>
                    </div>

                    {/* items */}
                    {Item.map((section, idx) => (
                        <div key={idx} className="w-full p-5 sm:w-[45%] md:w-[20%] lg:w-[15%] text-start uppercase">
                            <h4 className="font-semibold text-[16px] mb-3">{section.title}</h4>
                            <ul className="space-y-2 text-sm text-gray-700">
                                {section.links.map((link, i) => (
                                    <li key={i}>
                                        <a href="#" className="hover:text-black transition">{link}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}




                </div>

            </div>
        </footer>
    );
};

export default Footer;
