import React, { useContext } from 'react'
import Footer from '../componet/Footer/Footer'
import OrderDetails from '../componet/OrderDetails/OrderDetails'

const Orderdetails = () => {
    return (
        <>
            <div className="bg-[#E0F0FB]">
                <OrderDetails />
                <Footer />
            </div>
        </>
    )
}

export default Orderdetails
