import React from 'react';
import Bprops from './Bprops';

const Brand = () => {
    return (
        <div className="bg-black w-full py-5">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-wrap justify-between sm:gap-8">
                    <Bprops img="/assets/img/v.png" />
                    <Bprops img="/assets/img/zara.png" />
                    <Bprops img="/assets/img/gucci.png" />
                    <Bprops img="/assets/img/prada.png" />

                    <Bprops img="/assets/img/calvin.png" />
                </div>
            </div>
        </div>
    );
};

export default Brand;
