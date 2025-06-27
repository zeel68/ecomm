import React from 'react'

import Section1 from '../Comonent/Hero/Section1'
import Navbar from '../Comonent/navbar/Navbar'
import Brand from '../Comonent/ClotheBrand/Brand'
import Top from '../Comonent/Topselling/Top'
import Style from '../Comonent/style/Style'
import Footer from '../Comonent/Footer/Footer'
import Cart from '../Comonent/Cart/Cart'
import Customer from '../Comonent/HappyCustomer/Customer'

const Landing = () => {
    return (
        <>
            <Section1 />
            <Brand />
            <Cart category="Arrival" />
            <Top category="Arrival" />
            <Style />
            <Customer />
        </>
    )
}

export default Landing