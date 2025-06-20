import React from 'react';

const Style = () => {
    return (
        <div className="block mt-[50px] mb-[80px]">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="block h-auto rounded-[40px] bg-[#F0F0F0] py-[70px] px-4">
                    <h2 className="text-center text-[32px] sm:text-[48px] font-bold mb-10">
                        BROWSE BY DRESS STYLE
                    </h2>

                    <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
                        <div className="w-[100%] sm:w-[200px] md:w-[240px] h-full sm:h-[240px] lg:w-auto lg:h-auto">
                            <img src="/assets/img/f1.png" alt="img" className="w-full h-full object-cover rounded-lg"
                            />
                        </div>

                        <div className="w-[100%] sm:w-[200px] md:w-[240px] h-[200px] sm:h-[240px] lg:w-auto lg:h-auto">
                            <img src="/assets/img/f2.png" alt="img" className="w-full h-full object-cover rounded-lg"
                            />
                        </div>

                        <div className="w-[100%] sm:w-[200px] md:w-[240px] h-[200px] sm:h-[240px] lg:w-auto lg:h-auto">
                            <img src="/assets/img/f3.png" alt="img" className="w-full h-full object-cover rounded-lg"
                            />
                        </div>

                        <div className="w-[100%] sm:w-[200px] md:w-[240px] h-full sm:h-[240px] lg:w-auto lg:h-auto">
                            <img src="/assets/img/f4.png" alt="img" className="w-full h-full object-cover rounded-lg"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Style;
