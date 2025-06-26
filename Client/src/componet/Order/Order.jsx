import React from 'react'
import Oprop from './Oprop'


const Order = () => {
    return (
        <div className="block w-full">
            <div className="grid max-w-screen-xl mx-auto px-[15px]">
                <div className="flex grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-[10px]">

                    <Oprop text="Total Orders" totle="₹126.500" pr="34.7%" comp="Compared to Oct 2023" />
                    <Oprop text="Total Orders" totle="₹126.500" pr="34.7%" comp="Compared to Oct 2023" />
                    <Oprop text="Total Orders" totle="₹126.500" pr="34.7%" comp="Compared to Oct 2023" />
                    <Oprop text="Total Orders" totle="₹126.500" pr="34.7%" comp="Compared to Oct 2023" />

                </div>
            </div>
        </div>
    )
}

export default Order
